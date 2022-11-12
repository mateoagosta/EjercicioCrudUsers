const { v4 : uuid} = require('uuid');
const users = require('../data/users');

const getAll = () => {
    const all = users.getAll();
    return all;
};

const getOne = (userId) => {
    const user = users.getOne(userId);
    return user;
};

const createNew = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: uuid(),
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
    users.deleteOne(userId);

}

module.exports = { getAll, getOne, createNew, updateOne, deleteOne};