#!/bin/bash
aws cloudwatch put-metric-data --metric-name "ephemeral-port-count" --namespace "lambda-load-test" --value "$(netstat -anp |grep tcp |grep -v tcp6 | grep - | wc -l)" --region us-east-1
