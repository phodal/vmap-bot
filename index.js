var fs = require('fs');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

fs.readdir(process.cwd() + '/test_data', function (err, files) {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(function (filename) {
        fs.readFile('test_data/' + filename, function (err, origin_data) {
            var data = JSON.parse(origin_data);
            var convertLatLang = function(data) {
                data.location = {};
                data.location["lat"] = data.latLang[0];
                data.location["long"] = data.latLang[1];
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