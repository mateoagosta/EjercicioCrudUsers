const crudService = require('../services/Service'); // importamos los servicios del crud


// Armamos las funciones del CRUD

const getAll = (req, res) => {
    const all = crudService.getAll();
    res.send({ status: "Ok", data: all });
};

const getOne = (req ,res) => {
    const {
        params: { crudId },
    } = req;
    if (!crudId){
        return;
    }
    const one = crud.Service.getOne(crudId);
    res.send({ status: "Ok", data: one })
};

const createNew = (req, res) => {
    const { body } = req;

    if ( !body.id || !body.nombre|| !body.apellido || !body.dni) {
        return;
    }

    const newUser = {
        id: body.id,
        nombre: body.nombre,
        apellido: body.apellido,
        dni: body.dni,

    }

    const created = Service.createNewCrud(newUser);
    res.status(201).send({ status: "Ok", data: created });
    
}

const updateOne = (req, res) => {
    const { body,  params : { crudId }, } = req;

    if (!crudId){
        return;
    }

    const updated = Service.updateOne(crudId, body);
    res.send({ status: "Ok", data: updated });
}

const deleteOne = (req, res) => {
    const { params : { crudId }, } = req;

    if (!crudId){
        return;
    }

    Service.deleteOne(crudId);
    res.status(204).send({ status: "Ok" });
}

module.exports = { getAll, getOne, createNew, updateOne, deleteOne};