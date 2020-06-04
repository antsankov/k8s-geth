FROM ubuntu:20.04

RUN apt update
RUN apt install -y unzip wget

WORKDIR /home/

RUN wget https://github.com/multi-geth/multi-geth/releases/download/v1.9.16/multi-geth-linux.zip
RUN unzip multi-geth-linux.zip

EXPOSE 8545/tcp
EXPOSE 8546/tcp

CMD ./geth --classic --cache 2048 --rpc --rpcaddr "127.0.0.1" --rpccorsdomain "*" --rpcport "8545" --rpcapi "db, eth, net, web3, personal" --ws --wsport 8546 --wsaddr "127.0.0.1" --wsorigins "*" --wsapi "web3, eth" --maxpeers=100


