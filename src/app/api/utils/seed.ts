'use server'

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function executeSeed() {
  try {
    // Crear Roles
    await prisma.role.createMany({
      data: [
        { name: 'Admin', status: 'ACTIVE' },
        { name: 'Manager', status: 'ACTIVE' },
        { name: 'Employee', status: 'ACTIVE' },
      ],
    });

    // Crear Permisos
    await prisma.permission.createMany({
      data: [
        { name: 'VIEW_CLIENTS', description: 'View client information', status: 'ACTIVE' },
        { name: 'EDIT_CLIENTS', description: 'Edit client information', status: 'ACTIVE' },
        { name: 'MANAGE_USERS', description: 'Manage users', status: 'ACTIVE' },
      ],
    });

    // Crear Usuarios
    const users = [];
    for (let i = 0; i < 10; i++) {
      const roleId = faker.helpers.arrayElement([1, 2, 3]); // Asignar roles aleatorios
      const user = await prisma.user.create({
        data: {
          name: faker.name.fullName(),
          email: faker.internet.email(),
          wa_id: "5216672113883",
          role: { connect: { id: roleId } },
          status: 'ACTIVE',
        },
      });
      users.push(user);
    }

    // Crear Relaciones entre Usuarios (Managers y Empleados)
    for (let i = 0; i < 5; i++) {
      const employee = faker.helpers.arrayElement(users);
      const manager = faker.helpers.arrayElement(users.filter((u) => u.id !== employee.id));

      await prisma.userRelationship.create({
        data: {
          employee: { connect: { id: employee.id } },
          manager: { connect: { id: manager.id } },
        },
      });
    }

    // Crear Clientes
    for (let i = 0; i < 20; i++) {
      const manager = faker.helpers.arrayElement(users);

      await prisma.client.create({
        data: {
          name: faker.company.name(),
          email: faker.internet.email(),
          wa_id: "5216672113883",
          manager: { connect: { id: manager.id } },
          status: 'ACTIVE',
        },
      });
    }

    // Crear Relaciones entre Roles y Permisos
    for (let i = 1; i <= 3; i++) {
      const permissionIds = [1, 2, 3]; // Todos los permisos para cada rol
      for (const permissionId of permissionIds) {
        await prisma.rolePermission.create({
          data: {
            role: { connect: { id: i } },
            permission: { connect: { id: permissionId } },
          },
        });
      }
    }

    console.log('Seed completado con éxito 🚀');
  } catch (error) {
    if (error instanceof Error){
      console.log("Error: ", error.stack)
  }
  } finally {
    await prisma.$disconnect();
  }
}