var booklist = require('../model/booklist');

exports.editBook = function(req, res)   {
    booklist.booklistOne(req.params.id, function(err, book)    {
        console.log("inside bookListOne and received " + book);
        res.render ( 'editBook',
                        { title: "Edit Book",
                          book : book,
                          id : book._id
                        }
                    );
    });
};


exports.editBookPost = function(req, res)   {
    booklist.editData(req, function(err, book)    {
        console.log("inside editBookPost and received " + book);
        res.redirect('/browseBooks');
    });
};