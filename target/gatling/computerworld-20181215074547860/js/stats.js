var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "7434",
        "ko": "2566"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "2169"
    },
    "maxResponseTime": {
        "total": "6266",
        "ok": "5592",
        "ko": "6266"
    },
    "meanResponseTime": {
        "total": "3451",
        "ok": "3306",
        "ko": "3870"
    },
    "standardDeviation": {
        "total": "1180",
        "ok": "1254",
        "ko": "799"
    },
    "percentiles1": {
        "total": "3640",
        "ok": "3563",
        "ko": "3820"
    },
    "percentiles2": {
        "total": "4223",
        "ok": "4173",
        "ko": "4453"
    },
    "percentiles3": {
        "total": "5100",
        "ok": "5008",
        "ko": "5139"
    },
    "percentiles4": {
        "total": "5473",
        "ok": "5380",
        "ko": "5629"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 395,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 322,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6717,
        "percentage": 67
    },
    "group4": {
        "name": "failed",
        "count": 2566,
        "percentage": 26
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "769.231",
        "ok": "571.846",
        "ko": "197.385"
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
        "ok": "7434",
        "ko": "2566"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "2169"
    },
    "maxResponseTime": {
        "total": "6266",
        "ok": "5592",
        "ko": "6266"
    },
    "meanResponseTime": {
        "total": "3451",
        "ok": "3306",
        "ko": "3870"
    },
    "standardDeviation": {
        "total": "1180",
        "ok": "1254",
        "ko": "799"
    },
    "percentiles1": {
        "total": "3641",
        "ok": "3565",
        "ko": "3820"
    },
    "percentiles2": {
        "total": "4223",
        "ok": "4173",
        "ko": "4453"
    },
    "percentiles3": {
        "total": "5100",
        "ok": "5009",
        "ko": "5139"
    },
    "percentiles4": {
        "total": "5473",
        "ok": "5381",
        "ko": "5629"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 395,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 322,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6717,
        "percentage": 67
    },
    "group4": {
        "name": "failed",
        "count": 2566,
        "percentage": 26
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "769.231",
        "ok": "571.846",
        "ko": "197.385"
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
