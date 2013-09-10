

var mongoose = require('mongoose');

exports.booklistAll = function booklistAll(callback)
					{
						var Books = mongoose.model('Books');
						Books.find(	{},
									function(err, books)	{
										if(err) 	{
											console.log(err);
										} else {
											console.log(books);
											callback("", books);
										}
									})
					}

exports.booklistOne = function booklistOne(id, callback)
                {
                    var Book = mongoose.model('Books');
                    Book.findOne({ _id : id },
                        function(err, doc)  {
                            console.log(Book);
                            if(err) {
                                console.log(err);
                            } else {
                                console.log(doc);
                                callback("", doc);
                            }
                        })
                }
                    
                    
exports.newBook = function newBook(req, callback)
					{
						var Books = mongoose.model('Books');
						if (!req.body.inputDate) {
                            req.body.inputDate = Date.now();
                        };
                        new Books(
							{ 	bookName : req.body.inputTitle,
								authorName : req.body.inputAuthor,
								category : req.body.inputCategory,
								added : req.body.inputDate,
                                tags : req.body.inputTags,
                                comments : req.body.inputComments
							}).save(function(err, book, count)	{
									if(err)	{
										console.log(err);
										console.log(req.body.inputTitle + req.body.inputAuthor);
									} else {
										console.log('Added a new book' + book);
										callback("");
									}});
						/*
						var Book = new mongoose.model('Books');
						Book.bookName = bookName;
						Book.authorName = authorName;
						Book.category = category;
						Book.added = Date.now();
						Book.save( function(err, book, count)	{
							if(err)	{
								console.log(err);
							} else {
								console.log('Added ' + count + ' new book(s).');
								callback("", res);
							}});*/
					};
                    
exports.editData = function editData(req, callback)
                {
                    var Books = mongoose.model('Books');
                    Books.findOne({ _id : req.body.inputId }, function(err, doc)  {
                        doc.bookName = req.body.inputTitle;
                        doc.authorName = req.body.inputAuthor;
                        doc.tags = req.body.inputTags;
                        doc.added = req.body.inputDate;
                        doc.comments = req.body.inputComments;
                        doc.save(function(err, doc, count)	{
									if(err)	{
										console.log(err);
										console.log(req.body.inputTitle + req.body.inputAuthor);
									} else {
										console.log('Saved the book as' + doc);
										callback("");
									}});
                    });
                };
					
exports.deleteBook = function deleteBook(id, callback)
	{
		var Books = mongoose.model('Books');
		// If we use find instead of findOne, it returns an array of Books, instead of a single book. To then call remove, we will need to iterate over the array.
		Books.findOne(	{	_id : id }, function (err, book)
													{
														if (err)	{
															console.log(err);
														} else {
															book.remove( function(err, book)	{
																if (err)	{
																	console.log(err);
																} else {
																	callback("");
																}
															});
														}
													});
	}