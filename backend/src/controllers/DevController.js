const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const PointSchema = require('../models/utils/PointSchema');

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
            const techList = parseStringAsArray(techs);

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
    },

    async update (req, res) {
        const github_username = req.params.user;
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            return res.status(400).json( { message: `Username '${github_username}' does not exist.` } );
        }

        const techList = parseStringAsArray(req.body.techs);

        await dev.updateOne ({
            techs: techList,
            location: {
                type: 'Point',
                coordinates: req.body.coordinates
            },
        });

        dev = await Dev.findOne({ github_username });
    
        return res.json({ dev });
    },

    async delete (req, res) {

    }
};