const client = require('./db_connect');

const getGeneratedImages = async (id_input) => {
    const sqlQuery = 'SELECT id_generatedimage, id_input, identifier_image, selected FROM public."Generated_images" where id_input = $1;';
    const result = await client.query(sqlQuery, [id_input]);

    client.end;

    return result.rows;
};


const insertGeneratedImages = async (transect) => {
    const { id_input, identifier_image, selected} = transect;

    const sqlQuery = 'INSERT INTO public."Generated_images"(id_input, identifier_image, selected) VALUES ($1, $2, $3) RETURNING id_transect;';

    const sql_result = await client.query(sqlQuery, [id_input, identifier_image, selected, expression, result]);

    client.end; 

    return sql_result.rows; 
};


module.exports = { 
    getGeneratedImages,
    insertGeneratedImages
};