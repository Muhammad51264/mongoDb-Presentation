const mongoose = require ("mongoose");

const studentSchema = new mongoose.Schema({
name:{
    type: String,
    lowercase: true,
    default :"a"
},
password :{
    type: String,
    required: true,
    select : false
},
age:{
    type: Number,
    required: true,
    min:20



},
email:{
    type: String,
    required: true,
    unique :true,
    match:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,


}

});



studentSchema.static('findByName', function(name) {
    return this.find({ name: name });
  });


  studentSchema.pre('save' ,async function(){

    console.log("before save")

});

studentSchema.post('save', async function() {
    console.log("after save");
});

studentSchema.post('find', async function() {
    console.log("after find");
});
const Student = new mongoose.model("students", studentSchema);



module.exports = Student;


// lowercase: Converts string fields to lowercase.

// uppercase: Converts string fields to uppercase.

// match: Applies a regular expression pattern validation to string fields.

// select: Specifies whether the field should be included in query results by default.

// default: Sets a default value for the field if it is not provided during document creation.

// unique: Ensures that the field values are unique across documents within the collection.

// enum: Specifies a list of allowed values for the field.

// min: Defines the minimum value for numeric fields.

// max: Defines the maximum value for numeric fields.