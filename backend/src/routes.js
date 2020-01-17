const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

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


routes.post('/devs', async (req,res) => {
    const { github_username, techs } = req.body;

    const techList = techs.split(',').map(tech => tech.trim());
    
    const apiResponse = await axios.get(`https://api.github.com/users/${ github_username }`);
    const { name = login, avatar_url, bio } = apiResponse.data;

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techList,
    });

    return res.json({dev});
});

module.exports = routes;