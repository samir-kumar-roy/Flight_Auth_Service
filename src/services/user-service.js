const UserRepository = require("../repository/user-repository");

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;

        } catch (err) {
            // console.log(data);
            console.log("Something went wrong in the service layer");
            throw err;
        }
    }
}
module.exports = UserService;