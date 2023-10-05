const client = require('./db_connect');

const getUserBaselines = async (id) => {
    const sqlQuery = 'SELECT id_baseline, poligon, kml FROM public."Users_baseline" WHERE id_baseline = $1;';
    const result = await client.query(sqlQuery, [id]);

    client.end;

    return result.rows;
};


const insertUserBaselines = async (userBaselines) => {
    const { poligon, kml} = userBaselines;

    const sqlQuery = 'INSERT INTO public."Users_baseline"(poligon, kml) VALUES ($1, $2) RETURNING id_baseline;';

    const result = await client.query(sqlQuery, [poligon, kml]);

    client.end; 

    return result.rows; 
};


module.exports = { 
    getUserBaselines,
    insertUserBaselines
};