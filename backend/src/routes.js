const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Param types //

// Query params: req.query (to filter, order, pagination, etc.)
// routes.get('/users', (req,res) => {
//     return res.json({message: `This is a query param request! By: ${ req.query.name }`});
// });

// Route params: req.params (to identify a resource on PUT, DELETE, etc.)
// routes.put('/users/:user', (req,res) => {
//     return res.json({message: `This is a query param request! By: ${ req.params.user }`});
// });

// Body: req.body.name (to create/change registry and more)
// routes.post('/users/', (req,res) => {
//     return res.json({message: `This is a request (with body)! By: ${ req.body.name }`});
// });


routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.put('/devs/update/:user', DevController.update);
routes.delete('/devs/delete/:user', DevController.delete);

routes.get('/search', SearchController.index);

module.exports = routes;