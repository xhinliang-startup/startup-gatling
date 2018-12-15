var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "621",
        "ko": "9379"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "61",
        "ko": "411"
    },
    "maxResponseTime": {
        "total": "60291",
        "ok": "15411",
        "ko": "60291"
    },
    "meanResponseTime": {
        "total": "30928",
        "ok": "4242",
        "ko": "32694"
    },
    "standardDeviation": {
        "total": "21269",
        "ok": "4400",
        "ko": "20755"
    },
    "percentiles1": {
        "total": "28898",
        "ok": "1954",
        "ko": "33001"
    },
    "percentiles2": {
        "total": "53639",
        "ok": "8918",
        "ko": "56389"
    },
    "percentiles3": {
        "total": "60014",
        "ok": "11157",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "60093",
        "ok": "13438",
        "ko": "60094"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 262,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 38,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 321,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 9379,
        "percentage": 94
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "8.871",
        "ko": "133.986"
    }
},
contents: {
"req_login-d56b6": {
        type: "REQUEST",
        name: "login",
path: "login",
pathFormatted: "req_login-d56b6",
stats: {
    "name": "login",
    "numberOfRequests": {
        "total": "10000",
        "ok": "621",
        "ko": "9379"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "61",
        "ko": "411"
    },
    "maxResponseTime": {
        "total": "60291",
        "ok": "15411",
        "ko": "60291"
    },
    "meanResponseTime": {
        "total": "30928",
        "ok": "4242",
        "ko": "32694"
    },
    "standardDeviation": {
        "total": "21269",
        "ok": "4400",
        "ko": "20755"
    },
    "percentiles1": {
        "total": "28909",
        "ok": "1954",
        "ko": "32998"
    },
    "percentiles2": {
        "total": "53641",
        "ok": "8918",
        "ko": "56389"
    },
    "percentiles3": {
        "total": "60014",
        "ok": "11157",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "60093",
        "ok": "13438",
        "ko": "60094"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 262,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 38,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 321,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 9379,
        "percentage": 94
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "8.871",
        "ko": "133.986"
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
