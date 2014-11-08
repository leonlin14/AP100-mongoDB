{
    var db = connect('localhost/test');

    var i;
    for (i=0; i<10; i++) {
        db.vipData.save({name: 'hank', tel: i});
    }

    print('0002-create-multi-document finished.');
}