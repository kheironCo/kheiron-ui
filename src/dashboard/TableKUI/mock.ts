import { faker } from '@faker-js/faker';

// Función para generar una fila de datos ficticios
function generateFakeRow() {
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

// Generar 10 filas de datos ficticios
export const fakeData = Array.from({ length: 3 }, generateFakeRow);
