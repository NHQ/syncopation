**SYNCOPATION**

    var Sync = require('syncopation');
    
    var sync = Sync(1, 1/4)
    var sync2 = Sync(1, 1/8, 1/2)


Given a value for loop duration, note duration*, and optional offbeat values
Syncopation retruns a function which takes the argument of time, which returns true or false.

* note duration is more accurately described as "on time duration". That is how long 
it will return true. In the next version, you will be able to provide an 
array of durations as you can for offbeats.

Examples:

    // returns true every second for 1/4 second
    if(sync(t)) return Math.sin(440 * Math.PI * t)

    // returns true every second, for 1/8 seconds, 1/2 second off beat
    var bool = sync2(t)

You can pass an array of offbeat values. The values relative not absolute,
so  make sure your loop duration is long enough. If you pass [1/2, 1, 2] 
for the offbeat argument,  you are saying play on the 1/2 second, 
the 1/2 + 1s, and the 1/2 + 1 + 2s ... so you need a loop at least 3.5s + sample length

    // calling sync(t) will return true for 1/32 seconds 
    // on the down beat, at 1 second, at 1 + 1/2 second
    // at 1 + 1/2 + 1/4 second, and so on
    // and then return false for the remaind of the 10 second loop
    var sync = Sync(10, 1/32, [0, 1, 1/2, 1/8, 1/16])

    