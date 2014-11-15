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
    	{$group: {
    		_id: null,
    		count: {$sum: 1}
    	}},
    ]).forEach(function(user) {
    	print("Users: " + user.count);
    });

    end = new Date().getTime();
    
    print("Info: 0011-aggregate-group finished.");
 	print("Escape Time: " + (end - start) + "(ms).");
       
}
