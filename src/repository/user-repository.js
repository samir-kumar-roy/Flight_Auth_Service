const { User } = require('../models/user')

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (err) {
            // console.log(data);
            console.log("Something went wrong in the repository layer");
            throw err;
        }

    }

    async destroy(userId) {
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (err) {
            console.log("Something went wrong in the repository layer");
            throw err;
        }

    }
}

module.exports = UserRepository;