/**
 * @TODO : controller elkészítése, mely kapcsolódik a megfelelő service osztályhoz
 *
 * Kezelje a http-error üzeneteket:
 * - hiányos értékek @update műveletkor: BadREquest => 'Missing field'
 * - ha valamiért nem tudta a server frissíteni a building entitást:
 *  InternalServerError => 'Could not updated building'
 *
 * A szerver a megfelelő válaszokat küldje el a kliens felé
 */

const express = require('express');
const httpError = require('http-errors');

const buildingService = require('./building.service');

exports.updateBuilding = (req, res, next) => {
    const id = req.params.id;
    const { name, floors, classrooms } = req.body;
    if (!name || !floors) {
        return next(
            new createError.BadRequest("Missing field!")
        );
    }

    const update = {
        name,
        floors,
        classrooms
    };

    return buildingService.update(req.params.id, update)
        .then(building => {
            res.json(building);
        })
        .catch( err => {
            next(new createError.InternalServerError('Could not updated building!'));
        });
}


exports.getAllBuildingWithClassrooms = (req, res, next) => {
    return buildingService.findAll()
    .then( building => {
        res.json(building);
    });
};
