var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://magicboy159:Pluisje20088@ds055925.mlab.com:55925/todoapp');

module.exports = {mongoose};