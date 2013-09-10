var booklist = require('../model/booklist');

exports.editBook = function(req, res)   {
    booklist.editData( req.params.id, function(err) {
        res.redirect('/browseBooks');
        });
};