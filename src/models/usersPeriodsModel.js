const client = require('./db_connect');

const getUserPeriods = async (id) => {
    const sqlQuery = 'SELECT id_period, start_date, end_date, cloud_cover FROM public."Users_periods" Where id_period = $1;';
    const periods = await client.query(sqlQuery, [id]);

    client.end;

    return periods.rows;
};


const insertUserPeriods = async (userPeriods) => {
    const { start_date, end_date, cloud_cover} = userPeriods;

    const sqlQuery = 'INSERT INTO public."Users_periods"(start_date, end_date, cloud_cover) VALUES  ($1, $2, $3) RETURNING id_period;';

    const result = await client.query(sqlQuery, [start_date, end_date, cloud_cover]);

    client.end; 

    return result.rows; 
};


module.exports = { 
    getUserPeriods,
    insertUserPeriods
};