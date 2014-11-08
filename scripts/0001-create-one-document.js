{
    var db = connect('localhost/test');

    db.vipData.save({name: 'hank', tel: 12345});

    print('0001-create-one-document finished.')
}