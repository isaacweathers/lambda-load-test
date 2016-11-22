# lambda-load-test
AWS Lambda Load Test

This project aims to find the limits of AWS Lambda behind a custom http proxy (nginx + node.js).

## Setup
Create two c4.8xlarge EC2 instances with the following User Data init scripts.
* Security Group with port 80 open.
* Instance Role with permission to AWS Lambda and CloudWatch.

### Server - User Data
```
#!/bin/bash
# Instal nginx, git and start
sudo yum update -y
sudo yum install -y nginx git
service nginx start

# Install node & npm
sudo yum install -y --enablerepo=epel npm
sudo npm install -g forever

# Pull down code, install deps, and run
sudo git clone https://github.com/WPMedia/lambda-load-test
cd lambda-load-test/http-proxy
sudo npm start

# Configure nginx
sudo cp /lambda-load-test/http-proxy/node_backend.conf /etc/nginx/conf.d/.
sudo cp /lambda-load-test/http-proxy/api.conf /etc/nginx/default.d/.
service nginx restart

# Setup Custom CloudWatch Metrics
cd /
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
chmod a+x /lambda-load-test/http-proxy/ephemeral-port-count.sh
(crontab -l ; echo "* * * * * /lambda-load-test/http-proxy/ephemeral-port-count.sh) | crontab
```

### Client - User Data
```
#!/bin/bash
# Install git and dev tools
sudo yum update -y
sudo yum groupinstall -y 'Development Tools'
sudo yum install -y git

# Pull down load test
sudo git clone https://github.com/WPMedia/lambda-load-test
cd /lambda-load-test/test
sudo chmod a+x loadtest.sh

# Install wrk
sudo git clone https://github.com/wg/wrk.git
cd wrk
sudo make

# Run tests
#./loadtest1.sh > results1.txt
#./loadtest2.sh > results2.txt
```

## Results
The requests per second seem to plateau at 120 rps.  I've ased AWS for a Lambda service limit increase.