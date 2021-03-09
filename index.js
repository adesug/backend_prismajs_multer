const  express = require('express');
const app = express();

const mainRoutes = require('./src/routes');

app.listen(3001, () => {
    console.log("server running");
});

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended : false }))

app.use('/', mainRoutes);

