// added field lastLoggedin to post collection
// run in mongo shell
// $ mongo load script.js

// main program

{
    var db = connect('localhost/test');
	var start,
    	end;
    start = new Date().getTime();

    db.vipData.aggregate([
    	{$match: {Age: {$gt: 30}}},
    	{$match: {Age: {$lt: 40}}},
    	{$sort: {Age: 1}}
    ]).forEach(function(user) {
    	print("User: " + user.Nmae + ". Age: " + user.Age);
    });

    end = new Date().getTime();
    
    print("Info: 0010-aggregate finished.");
 	print("Escape Time: " + (end - start) + "(ms).");
       
}
