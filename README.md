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

what?
-----
Goal: npm package for manipulating blockchain-like branching data structures

Blockchan: the tree you get from the source seed `blockchan`
Tree: A Leaf with no parent
      The content of the Blockchan tree is the word `blockchan`
Leaf: A piece of content, optionally including a hash referencing a parent Leaf

later this will tie in with rulescapes that define consensus rules - if people agree on which leaves are on a branch, they can hash that branch and register the hash on the Bitcoin blockchain

Why?
----
* You can timestamp a tree or any branch by hashing it and posting the hash on the bitcoin blockchain
* Hash the string "alt.photography.nikon", your block replies to this
* Anyone can deterministically generate the hash, create a reply block, and share it to their peers
* In every 2015 case, content networks own their own servers and THEY own YOUR content. This is a step towards individuals mirroring as much or as little of a content network as they want.

How:
----
1. hash content with openssl's implementation of sha256 (wrapped by Node's 'crypto')
2. prepend 64CharHash\n
3a. If new Tree (content has no parent Leaf) create a new folder ./data/64CharHash/
    and file ./data/64CharHash/64CharHash.leaf`
3b. If Leaf of existing tree, put adjacent to parent file `./data/64Grandparent/64CharHash
