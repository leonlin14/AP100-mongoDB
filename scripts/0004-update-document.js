{
    var db = connect('localhost/test');

    db.vipData.update({name: 'hank'}, { $set: {name: 'jollen'} });

    print('0004-update-document finished');
}