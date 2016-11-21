# lambda-load-test
AWS Lambda Load Test

### User Data
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
sudo npm install
sudo npm start

# Configure nginx
sudo cp /lambda-load-test/http-proxy/node_backend.conf /etc/nginx/conf.d/.
sudo cp /lambda-load-test/http-proxy/api.conf /etc/nginx/default.d/.
service nginx restart

# Setup Custom CloudWatch Metrics

```