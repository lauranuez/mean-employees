const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const {mongoose} = require('./database');


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares --> ayuda a procesar los datos -> para quue el servidor pueda entender los datos
app.use(morgan('dev'));   //moragn-> nos ayuda a ver lo que el usuario quiere por consola
app.use(express.json()); //Para que el servidor pueda entender los datos json que le envia el navegador
app.use(cors({origin: 'http://localhost:4200'}));


//Routes
app.use('/api/employees', require('./routes/employee.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});