const client = require('./db_connect');

const getOutputsTransects = async (id_output) => {
    const sqlQuery = 'SELECT id_transect, id_output, slope, r_square, sce, nsm, epr, lrr, class, poligon, kml FROM public."Outputs_transects" where id_output = $1;';
    const result = await client.query(sqlQuery, [id_output]);

    client.end;

    return result.rows;
};


const insertOutputsTransects = async (transect) => {
    const { id_output, slope, r_square, sce, nsm, epr, lrr, classific, poligon, kml} = transect;

    const sqlQuery = 'INSERT INTO public."Outputs_transects"(id_output, slope, r_square, sce, nsm, epr, lrr, class, poligon, kml) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10) RETURNING id_transect;';

    const sql_result = await client.query(sqlQuery, [id_output, slope, r_square, sce, nsm, epr, lrr, classific, poligon, kml, expression, result]);

    client.end; 

    return sql_result.rows; 
};


module.exports = { 
    getOutputsTransects,
    insertOutputsTransects
};