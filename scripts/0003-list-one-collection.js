{
    var db = connect('localhost/test');

    db.vipData.find().forEach(function(data) {
        print('name: ' + data.name + ', tel: ' + data.tel);
    });

    print('0003-list-one-collection finished');
}