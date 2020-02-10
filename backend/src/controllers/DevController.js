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

        if (dev) {
            return res.status(400).json( { error: `User '${github_username}' already exists.`} )
        }

        try {
            var apiResponse = await axios.get(`https://api.github.com/users/${ github_username }`);
        } catch {
            return res.json(`Something is wrong! Check if '${github_username}' really.`);
        }

        var { name, avatar_url, bio } = apiResponse.data;

        if (!name) {
            name = github_username;
        }

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

        return res.json(dev);
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
        const github_username = req.params.user;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            return res.status(400).json( { message: `User '${github_username}' not found.` } );
        }

        await Dev.deleteOne( { github_username } );
        return res.json({ message: `User '${github_username}' was deleted.`});
    }
};