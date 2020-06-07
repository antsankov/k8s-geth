## Docker Notes
* To build `docker build . -t antsankov/multi-geth:1.9.16`
* To run shell `docker run -it <IMAGE_ID> /bin/bash` 
* To start `docker run <IMAGE_ID>`

Docker run creates a new container for that task. 
Docker start launches a persistant container.

* `docker login` to login to dockerhub
and 
* `docker push antsankov/multi-geth:1.9.16` to actually push up the image.

* `watch du -h ~/.ethereum` to monitor disk usage. 

## K8S Notes
Install [MicroK8S on Server](https://thenewstack.io/deploy-a-single-node-kubernetes-instance-in-seconds-with-microk8s/)

* Make sure you don't intall Kubectl before hand >_> * 

* `sudo snap install microk8s --edge --classic`
* `microk8s.status` 
* `sudo microk8s.enable dns dashboard storage` # takes time 


* Lists Secrets: `sudo microk8s.kubectl -n kube-system get secret`
* Start dashboard externally: `microk8s.kubectl proxy --accept-hosts=.* --address=0.0.0.0 &` 

* Nuke everything `microk8s.kubectl delete deployments,jobs,services,pods --all -n default`

## Get it started
* microk8s.kubectl apply -f pv-volume.yaml
* microk8s.kubectl apply -f pv-claim.yaml
* microk8s.kubectl apply -f k8s-multi-geth.yaml
- This will write to the host file system under /mnt/data/geth
- 
## Useful 
* `microk8s.kubectl port-forward multi-geth-deployment-57dcf8c8b7-rhxmr 8545:8545`
* `microk8s.kubectl exec -it  multi-geth-deployment-57dcf8c8b7-rhxmr  -- /bin/bash`

## Test
* `curl -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":67}' http://localhost:8545`


## Install Kail 
* wget https://github.com/boz/kail/releases/download/v0.15.0/kail_0.15.0_linux_amd64.tar.gz
* microk8s.kubectl config view --raw > /root/.kube/config
* ./kail --pod multi-geth-deployment-9575b9878-k6fwm
