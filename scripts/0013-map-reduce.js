// added field lastLoggedin to post collection
// run in mongo shell
// $ mongo load script.js

// main program

{
    var db = connect('localhost/test');

    db.vipData.mapReduce(
    	function() {emit(this.Age, this.Name)},
    	function (key, values) {
    		return values.toString();
    	},
    	{
    		query: {Age: {$gt: 30}},
    		out: 'map_ages'
    	}
    );

    print("Info: 0013-map-reduce finished.");
}
