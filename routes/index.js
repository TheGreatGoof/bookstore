
/*
 * GET home page.
 */

var booklist = require('../model/booklist'); 
 

exports.index = function(req, res){
  booklist.booklistAll(function(err, booklistAll) {
											  res.render(	'index', 
															{ title: "Home",
															  pagetitle: "Welcome to Amith's Book Store",
															  books: booklistAll,
                                                              index: "true"
															  }
												);
											});
};