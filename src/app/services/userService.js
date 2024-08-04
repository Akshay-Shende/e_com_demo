import { userRepository } from '../repositories/userRepository';

export const userService = {
  async getAllUsers() {
    return await userRepository.getAllUsers();
  },

  async getUserById(id) {
    return await userRepository.getUserById(id);
  },

  async createUser(data) {
    return await userRepository.createUser(data);
  },

  async updateUser(id, data) {
    return await userRepository.updateUser(id, data);
  },

  async deleteUser(id) {
    return await userRepository.deleteUser(id);
  },
};
