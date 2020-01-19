module.exports = {
    async store (req,res) {
        const { github_username, techs, latitude, longitude } = req.body;

        const techList = techs.split(',').map(tech => tech.trim());
        
        const apiResponse = await axios.get(`https://api.github.com/users/${ github_username }`);
        const { name = login, avatar_url, bio } = apiResponse.data;

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };

        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techList,
            location
        });

        return res.json({dev});
    }
};