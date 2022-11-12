const Service = require('../services/Service'); // importamos los servicios del crud


// Armamos las funciones del CRUD

const getAll = (req, res) => {
    const all = Service.getAll();
    res.send({ status: "Ok", data: all });
};

const getOne = (req ,res) => {
    const {
        params: { crudId },
    } = req;
    if (!crudId){
        return;
    }
    const one = user.Service.getOne(crudId);
    res.send({ status: "Ok", data: one })
};

const createNew = (req, res) => {
    const { body } = req;

    if ( !body.nombre|| !body.apellido || !body.dni) {
        return res.status(400).send("Completa los campos requeridos");
    }

    const newUser = {
        nombre: body.nombre,
        apellido: body.apellido,
        dni: body.dni,

    }

    const created = Service.createNew(newUser);
    res.status(201).send({ status: "Ok", data: created });
    
}

const updateOne = (req, res) => {
    const { body,  params : { userId }, } = req;

    if (!userId){
        return res.status(200).send(data.user);;
    }

    const updated = Service.updateOne(userId, body);
    res.send({ status: "Ok", data: updated });
}

const deleteOne = (req, res) => {
    const { params : { userId }, } = req;

    if (!userId){
        return res.status(404).send("No se pudo eliminar el usuario ya que no se encuentra en la base de datos");
    }

    Service.deleteOne(userId);
    res.status(204).send({ status: "Ok" });
}

module.exports = { getAll, getOne, createNew, updateOne, deleteOne};