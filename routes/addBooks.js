var booklist = require('../model/booklist');

exports.addBooks = function(req, res)   {
    currentDate = new Date().toJSON().slice(0,10);
    console.log('Current Date detected as ' + currentDate);
    res.render ( 'addBooks',
                    { title: "Add Books",
                      added: currentDate
                    }
                );
    };
    
exports.addBookPost = function(req, res)    {
    console.log('Inside addBookPost')
    console.log(req.body.inputTitle);
    booklist.newBook(req, function(err) {
                            if(err) {
                                console.log('Error detected in addBookPost' + err);
                                res.redirect('/');
                            } else {
                                console.log('addBookPost success.');
                                res.redirect('/browseBooks');
                            }
                    });
    };
    