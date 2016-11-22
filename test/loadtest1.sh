#!/bin/bash
/lambda-load-test/test/wrk/wrk -t1 -c1 -d5m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c2 -d5m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c3 -d5m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c4 -d5m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c5 -d5m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c6 -d5m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c7 -d5m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c8 -d5m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c9 -d5m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c10 -d10m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c20 -d10m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c30 -d10m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c40 -d10m http://172.16.1.72/api?timeout=20
echo ""
/lambda-load-test/test/wrk/wrk -t1 -c50 -d10m http://172.16.1.72/api?timeout=20