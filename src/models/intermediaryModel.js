const client = require('./db_connect');

const getIntermediary = async (id) => {
    const sqlQuery = 'SELECT id_intermediary, name FROM public."Intermediary" Where id_intermediary = $1;';
    const result = await client.query(sqlQuery, [id]);

    client.end;

    return result.rows;
};


const insertIntermediary = async (intermediary) => {
    const { name } = intermediary;

    const sqlQuery = 'INSERT INTO public."Intermediary"(name) VALUES  ($1) RETURNING id_intermediary;';

    const result = await client.query(sqlQuery, [name]);

    client.end; 

    return result.rows; 
};


module.exports = { 
    getIntermediary,
    insertIntermediary
};