
var booklist = require('../model/booklist');


exports.addBook = function(req, res)	{
	console.log('Inside addBook');
	console.log(req.body.bookName + req.body.authorName);
	booklist.newBook(req.body.bookName, req.body.authorName, req.body.category,
						function(err)	{
							res.redirect('/');
						});
	};