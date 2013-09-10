// Require mongoose so that we can use it.
var mongoose = require('mongoose');

// Define schemas for the bookstore.
/*var authorSchema = new mongoose.Schema(
						{
							authorName : String,
							authorBio : String
						}
					);

var categorySchema = new mongoose.Schema(
						{
							categoryName : String,
						}
					);

*/
var bookSchema = new mongoose.Schema(
					{ 	bookName : String,
						//authorName : [authorSchema],
						authorName : String,
						publisherName : String,
						costPrice : Number,
						added : Date,
						inStock : Boolean,
						//category : [categorySchema]
						category : String,
                        coverImage : Buffer,
                        tags : String,
                        comments : String
					}
				);

// Build models. We will be calling model again in the specific js file.
mongoose.model( 'Books', bookSchema );
//mongoose.model( 'Authors', authorSchema );
//mongoose.model( 'Category', categorySchema );

// Connect to the database called bookstore on localhost.
mongoose.connect( 'mongodb://localhost/bookstore');