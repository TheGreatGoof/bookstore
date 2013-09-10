var booklist = require('../model/booklist');

exports.deleteBook = function(req, res)	{
	booklist.deleteBook( req.params.id, function(err)	{
											res.redirect('/browseBooks');
										});
};