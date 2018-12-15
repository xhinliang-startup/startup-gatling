var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "8436",
        "ko": "1564"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "927"
    },
    "maxResponseTime": {
        "total": "4510",
        "ok": "4309",
        "ko": "4510"
    },
    "meanResponseTime": {
        "total": "2249",
        "ok": "2086",
        "ko": "3130"
    },
    "standardDeviation": {
        "total": "870",
        "ok": "814",
        "ko": "590"
    },
    "percentiles1": {
        "total": "2287",
        "ok": "2138",
        "ko": "3108"
    },
    "percentiles2": {
        "total": "2781",
        "ok": "2604",
        "ko": "3452"
    },
    "percentiles3": {
        "total": "3689",
        "ok": "3457",
        "ko": "4289"
    },
    "percentiles4": {
        "total": "4271",
        "ok": "4026",
        "ko": "4378"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 654,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 573,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7209,
        "percentage": 72
    },
    "group4": {
        "name": "failed",
        "count": 1564,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "833.333",
        "ok": "703",
        "ko": "130.333"
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
        "total": "10000",
        "ok": "8436",
        "ko": "1564"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "927"
    },
    "maxResponseTime": {
        "total": "4510",
        "ok": "4309",
        "ko": "4510"
    },
    "meanResponseTime": {
        "total": "2249",
        "ok": "2086",
        "ko": "3130"
    },
    "standardDeviation": {
        "total": "870",
        "ok": "814",
        "ko": "590"
    },
    "percentiles1": {
        "total": "2287",
        "ok": "2138",
        "ko": "3108"
    },
    "percentiles2": {
        "total": "2781",
        "ok": "2604",
        "ko": "3452"
    },
    "percentiles3": {
        "total": "3689",
        "ok": "3457",
        "ko": "4289"
    },
    "percentiles4": {
        "total": "4271",
        "ok": "4026",
        "ko": "4378"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 654,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 573,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7209,
        "percentage": 72
    },
    "group4": {
        "name": "failed",
        "count": 1564,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "833.333",
        "ok": "703",
        "ko": "130.333"
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
