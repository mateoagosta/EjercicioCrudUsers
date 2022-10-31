const { v4 : uuid} = require('uuid');
const Crud = require('../data/users');

const getAll = () => {
    const all = users.getAll();
    return all;
};

const getOne = (userId) => {
    const user = users.getOneCrud(userId);
    return user;
};

const createNew = (newUser) => {
    const userToInsert = {
        ...newUser,
        ID: uuid(),
        created: new Date().toLocaleString('Arg', { timeZone: 'UTC' }),
        updated: new Date().toLocaleString('Arg', { timeZone: 'UTC' }),
    };
    
    const created = users.createNew(userToInsert);
    return created;
};

const updateOne = (userId, changes) => {
    const updated = users.updateOne(userId, changes);
    return updated;
};

const deleteOne = (userId) => {
    users.deleteOneCrud(userId);

}

module.exports = { getAll, getOne, createNew, updateOne, deleteOne};