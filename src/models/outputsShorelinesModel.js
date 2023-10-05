const client = require('./db_connect');

const getOutputsShorelines = async (id_output) => {
    const sqlQuery = 'SELECT id_output, poligon, kml FROM public."Outputs_shorelines" where id_output = $1;';
    const result = await client.query(sqlQuery, [id_output]);

    client.end;

    return result.rows;
};


const insertOutputsShorelines = async (shorelines) => {
    const { id_output, poligon, kml } = shorelines;

    const sqlQuery = 'INSERT INTO public."Outputs_shorelines"(id_output, poligon, kml) VALUES ($1, $2, $3) RETURNING id_shoreline;';

    const sql_result = await client.query(sqlQuery, [id_output, poligon, kml, expression, result]);

    client.end; 

    return sql_result.rows; 
};


module.exports = { 
    getOutputsShorelines,
    insertOutputsShorelines
};