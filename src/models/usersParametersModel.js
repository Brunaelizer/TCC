const client = require('./db_connect');

const getUserParameters = async (id) => {
    const sqlQuery = 'SELECT id_parameter, spacing, extension, limiar FROM public."Users_parameters" WHERE id_parameter = $1;';
    const result = await client.query(sqlQuery, [id]);

    client.end;

    return result.rows;
};


const insertUserParameters = async (userParameters) => {
    const { spacing, extension, limiar} = userParameters;

    const sqlQuery = 'INSERT INTO public."Users_parameters"(spacing, extension, limiar) VALUES ($1, $2, $3) RETURNING id_parameter;';

    const result = await client.query(sqlQuery, [spacing, extension, limiar]);

    client.end; 

    return result.rows; 
};


module.exports = { 
    getUserParameters,
    insertUserParameters
};