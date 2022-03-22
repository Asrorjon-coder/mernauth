const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		quote: { type: String },
	},
	{ collection: 'user-data' }
)

const User = mongoose.model(
	"User",
	new mongoose.Schema({
	  username: String,
	  email: String,
	  password: String,
	  status: {
		type: String, 
		enum: ['Pending', 'Active'],
		default: 'Pending'
	  },
	  confirmationCode: { 
		type: String, 
		unique: true },
	  roles: [
		{
		  type: mongoose.Schema.Types.ObjectId,
		  ref: "Role"
		}
	  ]
	})
  );
  
  module.exports = User;

const model = mongoose.model('UserData', User)

module.exports = model
