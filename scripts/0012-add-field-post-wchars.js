// added field lastLoggedin to post collection
// run in mongo shell
// $ mongo load script.js

// main program

{
    var db = connect('localhost/iptv-platform');

    db.posts.find().forEach(function(post) {

        post.wchars = 0;

	print("Fixing..." + post._id);

        db.posts.save(post);
    });

    print("Info: 0012-add-field-post-wchars finished.");
}
