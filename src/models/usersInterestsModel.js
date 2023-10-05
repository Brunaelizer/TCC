const client = require('./db_connect');

const getUserInterest = async (id) => {
    const sqlQuery = 'SELECT id_interest, id_satellite, poligon, kml FROM public."Users_interests" WHERE id_interest = $1;';
    const result = await client.query(sqlQuery, [id]);

    client.end;

    return result.rows;
};


const insertUserInterest = async (userInterest) => {
    const { id_satellite, poligon, kml} = userInterest;

    const sqlQuery = 'INSERT INTO public."Users_interests"(id_satellite, poligon, kml) VALUES ($1, $2, $3) RETURNING id_interest;';

    const result = await client.query(sqlQuery, [id_satellite, poligon, kml]);

    client.end; 

    return result.rows; 
};


module.exports = { 
    getUserInterest,
    insertUserInterest
};