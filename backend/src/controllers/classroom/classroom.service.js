 const Classroom = require('../../models/classroom.model');

 exports.create = requestData => {
     const entity = new Model(requestData);
     return entity.save();
 };
 
 exports.findAll = () => Classroom.find();
 
 exports.findOne = id => Classroom.findById(id).populate('name');
 
 exports.update = (id, updateData) => Classroom.findByIdAndUpdate(id, updateData, { new: true });
 
 exports.delete = id => Classroom.findByIdAndRemove(id);
