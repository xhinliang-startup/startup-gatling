var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "400",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "251",
        "ok": "251",
        "ko": "10007"
    },
    "maxResponseTime": {
        "total": "28769",
        "ok": "28769",
        "ko": "11042"
    },
    "meanResponseTime": {
        "total": "6223",
        "ok": "5269",
        "ko": "10041"
    },
    "standardDeviation": {
        "total": "4136",
        "ok": "4101",
        "ko": "173"
    },
    "percentiles1": {
        "total": "6606",
        "ok": "4617",
        "ko": "10008"
    },
    "percentiles2": {
        "total": "10008",
        "ok": "7039",
        "ko": "10009"
    },
    "percentiles3": {
        "total": "14191",
        "ok": "14470",
        "ko": "10044"
    },
    "percentiles4": {
        "total": "14945",
        "ok": "15182",
        "ko": "11022"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 28,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 336,
        "percentage": 67
    },
    "group4": {
        "name": "failed",
        "count": 100,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "17.241",
        "ok": "13.793",
        "ko": "3.448"
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
        "total": "500",
        "ok": "400",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "251",
        "ok": "251",
        "ko": "10007"
    },
    "maxResponseTime": {
        "total": "28769",
        "ok": "28769",
        "ko": "11042"
    },
    "meanResponseTime": {
        "total": "6223",
        "ok": "5269",
        "ko": "10041"
    },
    "standardDeviation": {
        "total": "4136",
        "ok": "4101",
        "ko": "173"
    },
    "percentiles1": {
        "total": "6606",
        "ok": "4617",
        "ko": "10008"
    },
    "percentiles2": {
        "total": "10008",
        "ok": "7039",
        "ko": "10009"
    },
    "percentiles3": {
        "total": "14191",
        "ok": "14470",
        "ko": "10044"
    },
    "percentiles4": {
        "total": "14945",
        "ok": "15182",
        "ko": "11022"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 28,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 336,
        "percentage": 67
    },
    "group4": {
        "name": "failed",
        "count": 100,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "17.241",
        "ok": "13.793",
        "ko": "3.448"
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
