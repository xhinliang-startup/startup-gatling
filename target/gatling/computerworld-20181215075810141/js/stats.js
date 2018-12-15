var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "292",
        "ko": "1708"
    },
    "minResponseTime": {
        "total": "584",
        "ok": "584",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "15858",
        "ok": "15858",
        "ko": "11006"
    },
    "meanResponseTime": {
        "total": "9739",
        "ok": "8192",
        "ko": "10003"
    },
    "standardDeviation": {
        "total": "1077",
        "ok": "2266",
        "ko": "34"
    },
    "percentiles1": {
        "total": "10001",
        "ok": "8635",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "9598",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10009",
        "ok": "10657",
        "ko": "10009"
    },
    "percentiles4": {
        "total": "10633",
        "ok": "15576",
        "ko": "10013"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 291,
        "percentage": 15
    },
    "group4": {
        "name": "failed",
        "count": 1708,
        "percentage": 85
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "95.238",
        "ok": "13.905",
        "ko": "81.333"
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
        "total": "2000",
        "ok": "292",
        "ko": "1708"
    },
    "minResponseTime": {
        "total": "584",
        "ok": "584",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "15858",
        "ok": "15858",
        "ko": "11006"
    },
    "meanResponseTime": {
        "total": "9739",
        "ok": "8192",
        "ko": "10003"
    },
    "standardDeviation": {
        "total": "1077",
        "ok": "2266",
        "ko": "34"
    },
    "percentiles1": {
        "total": "10001",
        "ok": "8635",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "9598",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10009",
        "ok": "10657",
        "ko": "10009"
    },
    "percentiles4": {
        "total": "10633",
        "ok": "15576",
        "ko": "10013"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 291,
        "percentage": 15
    },
    "group4": {
        "name": "failed",
        "count": 1708,
        "percentage": 85
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "95.238",
        "ok": "13.905",
        "ko": "81.333"
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
