const client = require('./db_connect');

const getLayers = async (id_intermediary) => {
    const sqlQuery = 'SELECT id_layer, id_intermediary, name, expression, result FROM public."Layers" where id_intermediary = $1;';
    const result = await client.query(sqlQuery, [id_intermediary]);

    client.end;

    return result.rows;
};


const insertLayers = async (layers) => {
    const { id_intermediary, name, expression, result } = layers;

    const sqlQuery = 'INSERT INTO public."Layers"(id_intermediary, name, expression, result) VALUES ($1, $2, $3, $4) RETURNING id_layer;';

    const sql_result = await client.query(sqlQuery, [id_intermediary, name, expression, result]);

    client.end; 

    return sql_result.rows; 
};


module.exports = { 
    getLayers,
    insertLayers
};