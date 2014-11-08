{
    var db = connect('localhost/vcard');

    db.users.find().forEach(function(data) {
        data.interests = ['sport', 'reading'];
        db.users.save(data);
    });

    db.users.save({
      name:"Peter",
      phone:"1234567890",
      email:"noreply@mokoversity.com",
      address:"Taipei",
      age:30,
      interests: ['movie']
    });

    print('0012-add-field finished.')
}