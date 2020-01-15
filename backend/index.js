const express = require('express');
const app = express();
app.use(express.json());


// Param types //

// Query params: req.query (to filter, order, pagination, etc.)
// app.get('/users', (req,res) => {
//     return res.json({message: `This is a query param request! By: ${ req.query.name }`});
// });

// Route params: req.params (to identify a resource on PUT, DELETE, etc.)
// app.put('/users/:user', (req,res) => {
//     return res.json({message: `This is a query param request! By: ${ req.params.user }`});
// });

// Body: req.body.name (to create/change registry and more)
app.post('/users/', (req,res) => {
    return res.json({message: `This is a request (with body)! By: ${ req.body.name }`});
});
app.listen(3333);