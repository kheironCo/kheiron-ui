import { faker } from '@faker-js/faker';

// Función para generar una fila de datos ficticios
export function generateFakeRow() {
  return {
    id: faker.string.numeric({ length: 4 }),
    user: {
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
    },
    age: faker.number.int({ min: 18, max: 90 }),
    city: faker.location.city(),
    phone: faker.phone.imei(),
  };
}

// Generate 10 fake data row
export const fakeData = (length: number) => Array.from({ length }, generateFakeRow);
