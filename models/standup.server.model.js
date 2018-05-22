var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
  function(val) {
      return (val.length > 0 && val.toLocaleLowerCase() != 'none')
  },
  'Select a valid member name.'
];

var requiredStringValidator = [
  function(val) {
      var testVal = val.trim();
      return (testVal.length > 0);
  },
  '{PATH} cannot be empty'
];

var standupSchema = new Schema({
    memberName: {type: String, required: true, validate: memberNameValidator },
    project: {type: String, required: true, validate: requiredStringValidator },
    workYesterday: {type: String, required: true, validate: requiredStringValidator },
    workToday: {type: String, required: true, validate: requiredStringValidator },
    impediment: {type: String, required: true, default: 'none', validate: requiredStringValidator },
    createdOn: { type: Date, default: Date.now }
});

// Export the model to make it available from other files
module.exports = mongoose.model('Standup', standupSchema);

//var noIdSchema = new Schema({ name:String}, {_id: false});

// Example of using Schema.add
/*
var includeMiddleName = true;

var exampleSchema = new Schema;

if (includeMiddleName) {
    exampleSchema.add({
        first: String,
        middle: String,
        last: String
    });   
} else {
    exampleSchema.add({
        first: String,
        last: String
    });
}

exampleSchema.add({
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: { type: Date, default: Date.now }
});
*/