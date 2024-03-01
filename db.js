const mysql = require('mysql');
const connection = mysql.createConnection({
	host : 'localhost',
    user : 'root',
	password: '',
    database : 'college'
});
connection.connect((error)=>{
	if(error)
	{
		throw error;
        return;
	}
		console.log('MySQL Database is connected Successfully');
});
module.exports = connection;
