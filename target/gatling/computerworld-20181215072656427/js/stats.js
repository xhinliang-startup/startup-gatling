var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "1200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2004",
        "ok": "2004",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles1": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "percentiles2": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles3": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1355",
        "ok": "1355",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1176,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "20",
        "ko": "-"
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
        "total": "1200",
        "ok": "1200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2004",
        "ok": "2004",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles1": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "percentiles2": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles3": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1355",
        "ok": "1355",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1176,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "20",
        "ko": "-"
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
