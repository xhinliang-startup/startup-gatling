var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "1331",
        "ko": "10669"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "30",
        "ko": "9974"
    },
    "maxResponseTime": {
        "total": "41759",
        "ok": "41759",
        "ko": "18427"
    },
    "meanResponseTime": {
        "total": "10456",
        "ok": "13625",
        "ko": "10060"
    },
    "standardDeviation": {
        "total": "4546",
        "ok": "13137",
        "ko": "552"
    },
    "percentiles1": {
        "total": "10001",
        "ok": "7085",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "28419",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "11009",
        "ok": "34742",
        "ko": "10007"
    },
    "percentiles4": {
        "total": "33557",
        "ok": "38661",
        "ko": "12605"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 124,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 71,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1136,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 10669,
        "percentage": 89
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "153.846",
        "ok": "17.064",
        "ko": "136.782"
    }
},
contents: {
"req_random-7ddf3": {
        type: "REQUEST",
        name: "random",
path: "random",
pathFormatted: "req_random-7ddf3",
stats: {
    "name": "random",
    "numberOfRequests": {
        "total": "12000",
        "ok": "1331",
        "ko": "10669"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "30",
        "ko": "9842"
    },
    "maxResponseTime": {
        "total": "41759",
        "ok": "41759",
        "ko": "18427"
    },
    "meanResponseTime": {
        "total": "10456",
        "ok": "13625",
        "ko": "10060"
    },
    "standardDeviation": {
        "total": "4546",
        "ok": "13137",
        "ko": "552"
    },
    "percentiles1": {
        "total": "10001",
        "ok": "7085",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "28419",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "11009",
        "ok": "34742",
        "ko": "10007"
    },
    "percentiles4": {
        "total": "33557",
        "ok": "38661",
        "ko": "12605"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 124,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 71,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1136,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 10669,
        "percentage": 89
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "153.846",
        "ok": "17.064",
        "ko": "136.782"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
