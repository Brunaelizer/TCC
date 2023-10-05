const client = require('./db_connect');

const getUserInputs = async (id) => {
    const sqlQuery = 'SELECT id_input, id_useraccess, id_interest, id_period, id_baseline, id_parameter, id_intermediary FROM public."Users_inputs" where id_useraccess = $1;';
    const inputs = await client.query(sqlQuery, [id]);

    client.end;

    return inputs.rows;
};


const insertUserInputs = async (userInputs) => {
    const { id_useraccess, id_interest, id_period, id_baseline, id_parameter, id_intermediary } = userInputs;

    const sqlQuery = 'INSERT INTO public."Users_inputs"(id_useraccess, id_interest, id_period, id_baseline, id_parameter, id_intermediary) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_input;'
    const result = await client.query(sqlQuery, [id_useraccess, id_interest, id_period, id_baseline, id_parameter, id_intermediary]);

    client.end; 

    return result.rows; 
};


module.exports = { 
    getUserInputs,
    insertUserInputs
};