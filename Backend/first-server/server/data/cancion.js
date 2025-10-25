import { faker } from "@faker-js/faker";

export const crearCancion = () => ({
    id: faker.string.uuid(),
    titulo: faker.music.songName(),
    artista: faker.person.fullName(),
    album: faker.word.words(2),
    duracion: `${faker.number.int({ min: 120, max: 360 })}s`,
    genero: faker.music.genre(),
    fechaLanzamiento: faker.date.past().toISOString().split("T")[0],
});
