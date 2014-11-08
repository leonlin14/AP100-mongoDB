{
    var db = connect('localhost/test');

    db.vipData.remove({name: 'hank'});

    print('0006-remove-document finished.');
}