{
    var db = connect('localhost/vcard');

    // Ingrid F. Mcknight
	var messages = [ 
		{
			uid: ObjectId('5305fa09f7dd7e43f9f1bde9'),	
			message: 'this product is really good for me'
		}
	];

    db.messages.save(messages);

    print('0011-add-message finished.')
}