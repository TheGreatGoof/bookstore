var booklist = require('../model/booklist');

exports.browseBooks = function(req, res)    {
    console.log('In browseBooks()');
    booklist.booklistAll(function(err, booklistAll) {
        res.render( 'browseBooks',
                    {   
                        title: "Browse Books",
                        pagetitle: "Browse Books",
                        books : booklistAll
                    }
                );
    });
};