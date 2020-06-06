## Docker Notes
* To build `docker build . -t antsankov/multi-geth:1.9.16`
* To run shell `docker run -it <IMAGE_ID> /bin/bash` 
* To start `docker run <IMAGE_ID>`

Docker run creates a new container for that task. 
Docker start launches a persistant container.

* `watch du -h ~/.ethereum` to monitor disk usage. 

## K8S Notes
Install [MicroK8S on Server](https://thenewstack.io/deploy-a-single-node-kubernetes-instance-in-seconds-with-microk8s/)

* Make sure you don't intall Kubectl before hand >_> * 

* `sudo snap install microk8s --edge --classic`
* `microk8s.status` 
* `sudo microk8s.enable dns dashboard storage` # takes time 


* Lists Secrets: `sudo microk8s.kubectl -n kube-system get secret`
* Start dashboard externally: `microk8s.kubectl proxy --accept-hosts=.* --address=0.0.0.0 &` 

## Install Kail 
* wget https://github.com/boz/kail/releases/download/v0.15.0/kail_0.15.0_linux_amd64.tar.gz
* microk8s.kubectl config view --raw > /root/.kube/config
* ./kail --pod multi-geth-deployment-9575b9878-k6fwm
