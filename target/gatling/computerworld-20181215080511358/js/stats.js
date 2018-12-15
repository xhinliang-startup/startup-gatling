var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "374",
        "ko": "26"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "30",
        "ko": "10008"
    },
    "maxResponseTime": {
        "total": "29014",
        "ok": "29014",
        "ko": "10012"
    },
    "meanResponseTime": {
        "total": "4964",
        "ok": "4613",
        "ko": "10009"
    },
    "standardDeviation": {
        "total": "7344",
        "ok": "7470",
        "ko": "1"
    },
    "percentiles1": {
        "total": "1704",
        "ok": "1375",
        "ko": "10009"
    },
    "percentiles2": {
        "total": "6514",
        "ok": "5223",
        "ko": "10009"
    },
    "percentiles3": {
        "total": "26744",
        "ok": "26936",
        "ko": "10012"
    },
    "percentiles4": {
        "total": "27839",
        "ok": "27864",
        "ko": "10012"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 132,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 42,
        "percentage": 11
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 200,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 26,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11.429",
        "ok": "10.686",
        "ko": "0.743"
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
        "total": "400",
        "ok": "374",
        "ko": "26"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "30",
        "ko": "10008"
    },
    "maxResponseTime": {
        "total": "29014",
        "ok": "29014",
        "ko": "10012"
    },
    "meanResponseTime": {
        "total": "4964",
        "ok": "4613",
        "ko": "10009"
    },
    "standardDeviation": {
        "total": "7344",
        "ok": "7470",
        "ko": "1"
    },
    "percentiles1": {
        "total": "1704",
        "ok": "1375",
        "ko": "10009"
    },
    "percentiles2": {
        "total": "6514",
        "ok": "5223",
        "ko": "10009"
    },
    "percentiles3": {
        "total": "26744",
        "ok": "26936",
        "ko": "10012"
    },
    "percentiles4": {
        "total": "27839",
        "ok": "27864",
        "ko": "10012"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 132,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 42,
        "percentage": 11
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 200,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 26,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11.429",
        "ok": "10.686",
        "ko": "0.743"
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
