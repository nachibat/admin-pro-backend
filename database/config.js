const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('BD Online')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicial la BD, ver logs');
    }
}

module.exports = {
    dbConnection
}