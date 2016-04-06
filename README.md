#VMap Bot: Index Data to ElasticSearch

**Requirements**

 - ElasticSearch
 - Node.js

**Setup**

    npm install
    
**Run**
    
    node index.js

ElasticSearch Plugin for Debug

![elasticsearch-head](https://mobz.github.io/elasticsearch-head/_

ex.

    /usr/local/Cellar/elasticsearch/2.0.0_1/bin/plugin install mobz/elasticsearch-head

Example Query for Geo Search: Xi'An YanTa

    {
      "query": {
        "filtered": {
          "query": {
            "match_all": {}
          },
          "filter": {
            "geo_polygon": {
              "geo": {
                "points": [[109.047345,34.2538430000001],[109.047345,34.183843],[109.022386503906,34.1777126289063],[109.012345,34.1799636054687],[108.992345,34.1754799628906],[108.962345,34.1822060371094],[108.937345,34.1766017890625],[108.921898222656,34.180063703125],[108.902791777344,34.167622296875],[108.892345,34.1699636054688],[108.881673613281,34.1675722480469],[108.873260527344,34.1797585273438],[108.820008574219,34.1934242988282],[108.823565703125,34.2092897773438],[108.811429472656,34.2279274726563],[108.807345,34.2538430000001],[108.822105742188,34.2476430488281],[108.847345,34.2538430000001],[108.883260527344,34.2497585273438],[108.907345,34.243843],[108.917069121094,34.2297585273437],[108.973260527344,34.2379274726563],[108.997345,34.243843],[109.023153105469,34.2375038886719],[109.027345,34.2538430000001],[109.047345,34.2538430000001]]
              }
            }
          }
        }
      }
    }


License
---

© 2016 A [Phodal Huang](https://www.phodal.com)'s [Idea](http://github.com/phodal/ideas). This code is distributed under the MIT license. See `LICENSE` in this directory.

[待我代码编成，娶你为妻可好](http://www.xuntayizhan.com/person/ji-ke-ai-qing-zhi-er-shi-dai-wo-dai-ma-bian-cheng-qu-ni-wei-qi-ke-hao-wan/) @ [花仲马](https://github.com/hug8217)
    
