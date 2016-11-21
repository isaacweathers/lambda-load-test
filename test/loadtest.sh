#!/bin/bash
echo "test"
/lambda-load-test/test/wrk/wrk -t200 -c800 -d30s http://54.91.87.209/api