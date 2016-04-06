var request = require('request');
var fs = require('fs');

var VIP_USERS = [
    {
        name: "Aaron",
        username: "zhourunlai",
        latLang: [30.507905, 114.4114773]
    },
    {
        name: "代码家",
        username: "daimajia",
        latLang: [39.9659583, 116.340371]
    },
    {
        name: "justjavac",
        username: "justjavac",
        latLang: [39.096165, 117.1199219]
    },
    {
        name: "阮一峰",
        username: "ruanyf",
        latLang: [31.1326943, 121.3256528]
    },
    {
        name: "Trinea",
        username: "Trinea",
        latLang: [30.1756407, 119.8266363]
    },
    {
        name: "JacksonTian",
        username: "JacksonTian",
        latLang: [30.1756407, 119.7266363]
    },
    {
        name: "lifesinger",
        username: "lifesinger",
        latLang: [30.1756407, 119.9266363]
    },
    {
        name: "云风",
        username: "cloudwu",
        latLang: [23.126275, 113.3407774]
    },
    {
        name: "廖雪峰",
        username: "michaelliao",
        latLang: [39.9590298, 116.3579938]
    },
    {
        name: "Laruence",
        username: "laruence",
        latLang: [39.9231061, 116.4392567]
    },
    {
        name: "ibireme",
        username: "ibireme",
        latLang: [39.9820396, 116.3112008]
    },
    {
        name: "Phodal",
        username: "phodal",
        latLang: [34.2173804, 108.8981328]
    },
    {
        name: "Yanhaijing",
        username: "yanhaijing",
        latLang: [40.0509597, 116.2986095]
    },
    {
        name: "民工精髓",
        username: "xufei",
        latLang: [31.197644, 121.5817308]
    },
    {
        name: "民工精髓",
        username: "xufei",
        latLang: [31.197644, 121.5817308]
    },
    {
        name: "Jason Lee",
        username: "huacnlee",
        latLang: [30.5695652, 104.0501573]
    },
    {
        name: "drakeet",
        username: "drakeet",
        latLang: [24.934879, 118.6435053]
    },
    {
        name: "Phus Lu",
        username: "phuslu",
        latLang: [32.0568391, 118.7767715]
    },
    {
        name: "lwh",
        username: "lwhhhh",
        latLang: [23.0590053, 112.3351932]
    },
    {
        name: "Shangbin Yang",
        username: "rccoder",
        latLang: [45.7439873245, 126.6309825742]
    },
    {
        name: "kevin gao",
        username: "tmpbook",
        latLang: [31.1807685, 121.5245315]
    },
    {
        name: "闫志强",
        username: "jonneyyan",
        latLang: [40.0799685, 116.3206372]
    }
];

VIP_USERS.forEach(function (user, index) {
    var username = user.username;
    var github_api_url = 'https://api.github.com/users/';
    var user_url = github_api_url + username;

    var options = {
        url: user_url,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36'
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            info.latLang = user.latLang;
            fs.writeFile('test_data/' + username + '.json', JSON.stringify(info), function (err) {
                if (err) return console.log(err);
                console.log('Successful');
            });
        }
    }

    request(options, callback);
});
