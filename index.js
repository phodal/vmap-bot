var fs = require('fs');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

var mappings = {
    "userinfo": {
        "properties": {
            "avatar_url": {"type": "string"},
            "blog": {"type": "string"},
            "company": {"type": "string"},
            "created_at": {"type": "date", "format": "strict_date_optional_time||epoch_millis"},
            "email": {"type": "string"},
            "events_url": {"type": "string"},
            "followers": {"type": "long"},
            "followers_url": {"type": "string"},
            "following": {"type": "long"},
            "following_url": {"type": "string"},
            "geo": {
                "type": "geo_point"
            },
            "gists_url": {"type": "string"},
            "gravatar_id": {"type": "string"},
            "hireable": {"type": "boolean"},
            "html_url": {"type": "string"},
            "id": {"type": "long"},
            "location": {"type": "string"},
            "login": {"type": "string"},
            "name": {"type": "string"},
            "organizations_url": {"type": "string"},
            "public_gists": {"type": "long"},
            "public_repos": {"type": "long"},
            "received_events_url": {"type": "string"},
            "repos_url": {"type": "string"},
            "site_admin": {"type": "boolean"},
            "starred_url": {"type": "string"},
            "subscriptions_url": {"type": "string"},
            "type": {"type": "string"},
            "updated_at": {"type": "date", "format": "strict_date_optional_time||epoch_millis"},
            "url": {"type": "string"}
        }
    }
};
client.indices.create({
    'index': 'vmap',
    'body': {
        'mappings': mappings
    }
});


fs.readdir(process.cwd() + '/test_data', function (err, files) {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(function (filename) {
        fs.readFile('test_data/' + filename, function (err, origin_data) {
            var data = JSON.parse(origin_data);
            var convertLatLang = function (data) {
                data.geo = {};
                data.geo["lat"] = data.latLang[0];
                data.geo["lon"] = data.latLang[1];
                delete data.latLang;
                return data
            };
            data = convertLatLang(data);

            client.index({
                index: 'vmap',
                type: 'userinfo',
                body: data
            }, function (error, response) {
                console.log(error)
            });
        });
    });
});