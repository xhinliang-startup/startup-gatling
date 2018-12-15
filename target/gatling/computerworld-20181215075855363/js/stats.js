var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "355",
        "ko": "645"
    },
    "minResponseTime": {
        "total": "317",
        "ok": "317",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "28532",
        "ok": "28532",
        "ko": "11006"
    },
    "meanResponseTime": {
        "total": "9571",
        "ok": "8781",
        "ko": "10006"
    },
    "standardDeviation": {
        "total": "2419",
        "ok": "3939",
        "ko": "40"
    },
    "percentiles1": {
        "total": "10001",
        "ok": "9416",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10009",
        "ok": "11023",
        "ko": "10008"
    },
    "percentiles3": {
        "total": "12158",
        "ok": "14049",
        "ko": "10014"
    },
    "percentiles4": {
        "total": "14336",
        "ok": "14913",
        "ko": "10027"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 336,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 645,
        "percentage": 65
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "34.483",
        "ok": "12.241",
        "ko": "22.241"
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
        "total": "1000",
        "ok": "355",
        "ko": "645"
    },
    "minResponseTime": {
        "total": "317",
        "ok": "317",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "28532",
        "ok": "28532",
        "ko": "11006"
    },
    "meanResponseTime": {
        "total": "9571",
        "ok": "8781",
        "ko": "10006"
    },
    "standardDeviation": {
        "total": "2419",
        "ok": "3939",
        "ko": "40"
    },
    "percentiles1": {
        "total": "10001",
        "ok": "9416",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10009",
        "ok": "11023",
        "ko": "10008"
    },
    "percentiles3": {
        "total": "12158",
        "ok": "14049",
        "ko": "10014"
    },
    "percentiles4": {
        "total": "14336",
        "ok": "14913",
        "ko": "10027"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 336,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 645,
        "percentage": 65
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "34.483",
        "ok": "12.241",
        "ko": "22.241"
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
