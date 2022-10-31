const data = require('./data.json');
const { saveToData } = require('./utils');

const getAll = () => {
    return data.user;
};

const getOne = (userId) => {
    const users = data.user.find((user) => user.id === userId);
    if (!user) {
        return;
    }
    return users;
}

const createNew = (newUser) => {
    const add = data.user.findIndex((user) => user.nombre === newUser.nombre) > -1;

    if (add) {
        return;
    }

    data.user.push(newUser);
    saveToData(data);
    return newUser;

}

const updateOne = (userId, changes) => {
    const updated = data.user.findIndex((user) => (user.id = userId));
    if (updated === -1) {
        return;
    }
    const updatedUser = {
        ...data.user[updated],  // Sera que debo borrar esta linea ?? asi me lo cambia y no me guarda el anterior
        ...changes,
        updateUser: new Date().toLocaleString('Arg', {timeZone: "UTC"})
    };

    data.user[updated] = updatedUser;
    saveToData(data);
    return updatedUser;
}

const deleteOne = (userId) => {  
    const indexForDeleted = data.user.findIndex((user) => user.id === userId);  // Revisar por las dudas
    
    if (indexForDeleted === -1) {
        return;
    }
    data.user.splice(indexForDeleted, 1);
    saveToData(data);
}

module.exports = {getAll, getOne, createNew, updateOne, deleteOne};