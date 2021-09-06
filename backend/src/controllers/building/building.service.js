/**
 * @TODO : Mongoose modellek segítségével frissitsen egy 'building' entitást az adatbázisban.
 * - el kell menteni egy új "classroom" entitást.
 * - ki kell nyeri az új "classroom" id-ját.
 * - az id-t helyezze el a megfelelő 'Building' entitás 'classrooms' listájába
 *
 * A @getAll metódus adja vissza a populált teljes "building" listát
 */

const Building = require('../../models/building.model');

exports.create = requestData => {
    const entity = new Model(requestData);
    return entity.save();
};

exports.findAll = () => Building.find().populate('classrooms');

exports.findOne = id => Building.findById(id).populate('classrooms');

exports.update = (buildingId, className) => Building.findByIdAndUpdate(buildingId, className, { new: true });

exports.delete = id => Building.findByIdAndRemove(id);

exports.getAll = () => {}