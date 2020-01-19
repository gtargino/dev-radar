const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    // index, show, store, update, destroy
    async index (req, res) {
        const devs = await Dev.find();
        
        return res.json(devs);
    },

    async store (req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev) {        
            const apiResponse = await axios.get(`https://api.github.com/users/${ github_username }`);
            const { name = login, avatar_url, bio } = apiResponse.data;
            const techList = techs.split(',').map(tech => tech.trim());

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techList,
                location
            });
        }

        return res.json({dev});
    }
};