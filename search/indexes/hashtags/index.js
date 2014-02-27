function (doc) {
    var created_at, year, month, day, hour, minute, timestamp;

    /*
    {
        "_id": _id,
        "stream": id,
        "type": "hashtag",
        "data": {
            hashtag: hashtag,
            created_at: created_at
        }
    }
    */

    if (doc.data.created_at) {
        created_at = new Date(doc.data.created_at);
        year = created_at.getUTCFullYear();
        month = created_at.getUTCMonth() + 1;
        day = created_at.getUTCDate();
        hour = created_at.getUTCHours();
        minute = created_at.getUTCMinutes();
        timestamp = created_at.getTime();
    }

    index("stream", doc.stream);
    index("hashtag", doc.data.hashtag, { facet: true });
    index("year", year);
    index("month", month);
    index("day", day);
    index("hour", hour);
    index("timestamp", timestamp);
}
