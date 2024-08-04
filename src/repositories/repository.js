import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class Repository {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return await this.model.findMany();
  }

  async getById(id) {
    return await this.model.findUnique({ where: { id } });
  }
  async getByEmailId({email}) {
    return await this.model.findUnique({ where: {  emailId: email } });
  }
  async create(data) {
    return await this.model.create({ data });
  }

  async update(id, data) {
    return await this.model.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return await this.model.delete({
      where: { id },
    });
  }
}