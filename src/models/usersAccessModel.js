const client = require('./db_connect');

const getUserAccess= async (identifier) => {
    const sqlQuery = 'SELECT id_user, identifier, access_date, access_time FROM public."Users_access" WHERE identifier = $1;';
    const users = await client.query(sqlQuery, [identifier])
    client.end;
    return users.rows;
};

const getUserLastAccess = async (identifier) => {
    console.log("entrou")
    const sqlQuery = 'SELECT id_user, identifier, access_date, access_time FROM public."Users_access" WHERE identifier = $1 ORDER BY access_date DESC, access_time DESC LIMIT 1';
    const users = await client.query(sqlQuery, [identifier])
    client.end;
    return users.rows;
};


const insertUserAccess = async (userAccess) => {
    const { identifier } = userAccess;

    const sqlQuery = `INSERT INTO public."Users_access"(identifier, access_date, access_time) VALUES (${identifier}, CURRENT_DATE, CURRENT_TIME) RETURNING id_user;`;
    const result = await client.query(sqlQuery);

    client.end; 

    return result.rows; 
};


module.exports = { 
    getUserAccess,
    insertUserAccess,
    getUserLastAccess
};