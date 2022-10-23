const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the MongoDB database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));