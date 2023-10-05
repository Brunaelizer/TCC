const client = require('./db_connect');

const getOutputs = async (id_input) => {
    const sqlQuery = 'SELECT id_output, id_input FROM public."Outputs" where id_input = $1;';
    const result = await client.query(sqlQuery, [id_input]);

    client.end;

    return result.rows;
};


const insertOutputs = async (outputs) => {
    const { id_input } = outputs;

    const sqlQuery = 'INSERT INTO  public."Outputs"(id_input) VALUES ($1) RETURNING id_output;';

    const sql_result = await client.query(sqlQuery, [id_input, expression, result]);

    client.end; 

    return sql_result.rows; 
};


module.exports = { 
    getOutputs,
    insertOutputs
};