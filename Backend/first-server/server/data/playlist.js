import { faker } from "@faker-js/faker";
import { crearCancion } from "./cancion";

export const crearPlaylist = () => {
    const cantidadCanciones = faker.number.int({ min: 1, max: 15 });
    const canciones = Array.from({ length: cantidadCanciones }, crearCancion);

    return {
        idPlaylist: faker.string.uuid(),
        nombre: faker.word.words(2),
        descripcion: faker.lorem.sentence(),
        canciones,
        creador: faker.person.firstName(),
        fechaCreacion: faker.date.past().toISOString().split("T")[0],
    };
};
