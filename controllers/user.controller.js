const UserService = require("../services/user.services");
class UserController {
  constructor() {
    this.userService = new UserService();
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  async registerUser(req, res) {
    const { name, email, password } = req.body;
    try {
      const user = await this.userService.userRegister({name, email, password,});
      res.status(201).json({
        message: "user registered successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error occurred while registering user ii",
      });
    }
  }

  async loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const user = await this.userService.userLogin({email, password});
        res.status(200).json({
            message: "user login successful",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            message: "Error occurred while login user"
        })
    }
  }
}
module.exports = UserController;