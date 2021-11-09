const mongoose = require('mongoose'); //Conectar y modelar los datos de la BBDD

const CONNECTION_URL = 'mongodb+srv://lauranuez:1234@cluster0.cg7jd.mongodb.net/tutAngular?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`DB connected`))
  .catch((error) => console.log(`${error} did not connect`));

module.exports = mongoose;