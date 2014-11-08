{
    var db = connect('localhost/test');

    db.users.find().forEach(function(data) {
        data.interests = [ 'movie' ];
        db.users.save(data);
    });
}