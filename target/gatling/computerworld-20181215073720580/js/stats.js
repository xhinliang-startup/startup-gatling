var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "120000",
        "ok": "100522",
        "ko": "19478"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "16095",
        "ok": "16095",
        "ko": "5707"
    },
    "meanResponseTime": {
        "total": "804",
        "ok": "783",
        "ko": "914"
    },
    "standardDeviation": {
        "total": "1215",
        "ok": "1190",
        "ko": "1332"
    },
    "percentiles1": {
        "total": "264",
        "ok": "264",
        "ko": "248"
    },
    "percentiles2": {
        "total": "1135",
        "ok": "1115",
        "ko": "1252"
    },
    "percentiles3": {
        "total": "3483",
        "ok": "3358",
        "ko": "3931"
    },
    "percentiles4": {
        "total": "4952",
        "ok": "4765",
        "ko": "5216"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 73111,
        "percentage": 61
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4794,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 22617,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 19478,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1764.706",
        "ok": "1478.265",
        "ko": "286.441"
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
        "total": "120000",
        "ok": "100522",
        "ko": "19478"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "16095",
        "ok": "16095",
        "ko": "5707"
    },
    "meanResponseTime": {
        "total": "804",
        "ok": "783",
        "ko": "914"
    },
    "standardDeviation": {
        "total": "1215",
        "ok": "1190",
        "ko": "1332"
    },
    "percentiles1": {
        "total": "264",
        "ok": "265",
        "ko": "248"
    },
    "percentiles2": {
        "total": "1135",
        "ok": "1114",
        "ko": "1252"
    },
    "percentiles3": {
        "total": "3483",
        "ok": "3358",
        "ko": "3931"
    },
    "percentiles4": {
        "total": "4951",
        "ok": "4765",
        "ko": "5216"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 73111,
        "percentage": 61
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4794,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 22617,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 19478,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1764.706",
        "ok": "1478.265",
        "ko": "286.441"
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
