const Student =require("../models/student-model");


// { field: { $ne: value } } - Retrieves documents where the specified field is not equal to the given value.
// { field: { $lt: value } } - Retrieves documents where the specified field is less than the given value.
// { field: { $lte: value } } - Retrieves documents where the specified field is less than or equal to the given value.
// { field: { $gt: value } } - Retrieves documents where the specified field is greater than the given value.
// { field: { $gte: value } } - Retrieves documents where the specified field is greater than or equal to the given value.


// { $and: [ { condition1 }, { condition2 }, ... ] } - Retrieves documents that satisfy all specified conditions.
// { $or: [ { condition1 }, { condition2 }, ... ] } - Retrieves documents that satisfy at least one of the specified conditions.
// { $not: { condition } } - Retrieves documents that do not satisfy the specified 

exports.getAllStudent = async(req,res)=>{
    try{
        const student = await Student.find({age:{$gt: 18}});
        res.json({ allStudent: student });
    }catch(err){
        console.log(err);
        return res.json({status: "error", msg: err.message});
    }
};


exports.addStudent = async(req,res)=>{
    const student = req.body;
    try{


        await Student.create(student);


        
        return res.json({status: "success"});


    }catch(err){
        console.log(err);
        return res.json({status: "error", msg: err.message});    }
}



exports.deleteStudent = async(req,res)=>{
    const deletedStudentId = req.params.id;
    try{
    // await Student.deleteMany() /deleteOne findByIdAndDelete


    }catch(err){
        console.log(err);
        return res.json({status: "error", msg: err.message});
    }

}


exports.updateStudent = async(req,res)=>{
    const updatedStudentId = req.params.id;
    const updatedValues = req.body;
    await Student.updateOne({_id:updatedStudentId});
    return res.json({status: "success"});

    try{

    }catch(err){
        console.log(err);
        return res.json({status: "error", msg: err.message});
    }

}