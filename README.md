blockchan
=========

blockchain+4chan
sorry and/or yw

example
-------

```
    $ npm install --save blockchan

    var BC = require('blockchan');

    var reddit = BC.seed('reddit.com');
    reddit.data(BC.memoryAdapter);


    var subreddit = reddit.branch('/r/turtles')
    var message = subreddit.bud('I like turtles');
    var message2 = message.bud('turtles suck');

    var chan = BC.seed('4chan.org');
    chan.setter(BC.diskAdapter);        // Use ./data
    chan.getter(BC.diskAdapter);

```
