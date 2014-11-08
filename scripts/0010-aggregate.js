// added field lastLoggedin to post collection
// run in mongo shell
// $ mongo load script.js

// main program

{
    var db = connect('localhost/test');

    db.vipData.aggregate([
    	{$match: {Age: {$gt: 30}}},
    	{$match: {Age: {$lt: 40}}}
    ]).forEach(function(user) {
    	print("User: " + user.Nmae + ". Age: " + user.Age);
    });

    print("Info: 0010-aggregate finished.");
}
