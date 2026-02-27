const User = require("../models/user");

class UserService {
  static async createUser(data) {
    return await User.create(data.name, data.email);
  }

  static async getUsers() {
    return await User.findAll();
  }

  static async getUserById(id) {
    return await User.findById(id);
  }

  static async updateUser(id, data) {
    return await User.update(id, data.name, data.email);
  }

  static async deleteUser(id) {
    return await User.delete(id);
  }
}

module.exports = UserService;