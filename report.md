# Report

The main idea of this project is using express js and mongoDB to implement a sharing economy application called ChronoShare.

## Why express and mongoDB?
"Express is a compact and flexible Node.js web application framework, it has a robust features can be used to develop a single-page, multi-page and hybrid Web applications."(1) Compared with using node.js, express can significantly reduce the cost of development, especially for lightweight applications.

MongoDB is is a highly representative NOSQL, it is agile and scalable. It can effectively reduced the time which was spent on setting up/designing database (schema) in the past when we decided to start a new development.

## Security Vulnerability


## Performance

We Use ApacheBench to do the stress testing
```
############################################################################
Test1: Single User Visting 1000 times
############################################################################

C:\Users\orangpass\Desktop>ab -n 1000 http://localhost:3000/
This is ApacheBench, Version 2.3 <$Revision: 655654 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests   
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        4871 bytes

Concurrency Level:      1
Time taken for tests:   8.558 seconds
Complete requests:      1000
Failed requests:        0
Write errors:           0
Total transferred:      5235664 bytes
HTML transferred:       4871000 bytes
Requests per second:    116.85 [#/sec] (mean)
Time per request:       8.558 [ms] (mean)
Time per request:       8.558 [ms] (mean, across all concurrent requests)
Transfer rate:          597.44 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.4      0       1
Processing:     4    8   2.2      8      28
Waiting:        3    5   1.6      5      21
Total:          5    8   2.2      8      28

Percentage of the requests served within a certain time (ms)
  50%      8
  66%      9   
  75%      9
  80%      9
  90%     10
  95%     12
  98%     15
  99%     18
 100%     28 (longest request)

##############################################################################
Test2: 100 Users Visting 100 times in Same Time
##############################################################################

C:\Users\orangpass\Desktop>ab -c 100 -t 100 http://localhost:3000/
This is ApacheBench, Version 2.3 <$Revision: 655654 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 5000 requests
Completed 10000 requests
Completed 15000 requests
Finished 15607 requests


Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        4871 bytes

Concurrency Level:      100
Time taken for tests:   100.044 seconds
Complete requests:      15607
Failed requests:        0
Write errors:           0
Total transferred:      81879813 bytes
HTML transferred:       76177545 bytes
Requests per second:    156.00 [#/sec] (mean)
Time per request:       641.022 [ms] (mean)
Time per request:       6.410 [ms] (mean, across all concurrent requests)
Transfer rate:          799.25 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.4      0       2
Processing:   219  638  47.9    629     961
Waiting:      195  503  65.2    493     870
Total:        219  638  47.9    629     962

Percentage of the requests served within a certain time (ms)
  50%    629
  66%    646
  75%    658
  80%    666
  90%    688
  95%    716
  98%    758
  99%    838
 100%    962 (longest request)

 ###############################################################################
```

Because of the good peculiarity of express's productivity, plus the compact and
reasonable design of the process of this app, during the pressure test session,
ChornoShare gets a remarkable performance.

We also did some other tests which including locust.io plugin on Heroku, since
the limited space of the report, it will not be displayed here. The specific 
reason of this issue will be explained in the corresponding section.


## Video Demo
The following link contains a Video Demo on Youtube of ChronoShare, you are
welcome to check it out.

(1)http://mean.io/#!/
