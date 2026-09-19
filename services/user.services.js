const { User } = require("../models");
const bcrypt = require("bcrypt");
class UserService {
  constructor() {}

  async userRegister(params) {
    try {
      const hashedPassword = await bcrypt.hash(params.password, 10);
      return await User.create({
        name: params.name,
        email: params.email,
        password: hashedPassword,
      });
    } catch (error) {
      throw error;
    }
  }

  async userLogin(params) {
    try {
        const user = await User.findOne({ where: { email: params.email }});
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw error;
    }
  }
}

module.exports = UserService;
