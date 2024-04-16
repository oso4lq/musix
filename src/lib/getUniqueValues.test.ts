import { getUniqueValues } from "./getUniqueValues";

const data = [
    {
        "id": 8,
        "name": "Chase",
        "author": "Alexander Nakarada",
        "release_date": "2005-06-11",
        "genre": "Классическая музыка",
        "duration_in_seconds": 205,
        "album": "Chase",
        "logo": null,
        "track_file": "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3",
        "stared_user": [
            {
                "id": 14,
                "username": "user",
                "first_name": "",
                "last_name": "",
                "email": "user@mail.ru"
            },
        ]
    },
    {
        "id": 10,
        "name": "Sneaky Snitch",
        "author": "Kevin Macleod",
        "release_date": "2022-04-16",
        "genre": "Электронная музыка",
        "duration_in_seconds": 305,
        "album": "Sneaky Snitch",
        "logo": null,
        "track_file": "https://skypro-music-api.skyeng.tech/media/music_files/Kevin_Macleod_-_Sneaky_Snitch.mp3",
        "stared_user": [
            {
                "id": 5,
                "username": "ilush",
                "first_name": "",
                "last_name": "",
                "email": "as@as.com"
            },
        ]
    },
    {
        "id": 11,
        "name": "Secret Garden",
        "author": "Mixkit",
        "release_date": "1972-06-06",
        "genre": "Рок музыка",
        "duration_in_seconds": 324,
        "album": "Secret Garden",
        "logo": null,
        "track_file": "https://skypro-music-api.skyeng.tech/media/music_files/Mixkit_-_Secret_Garden.mp3",
        "stared_user": [
            {
                "id": 5,
                "username": "ilush",
                "first_name": "",
                "last_name": "",
                "email": "as@as.com"
            },
        ]
    },
]

describe('функция получения уникальных ключей', () => {
    it('правильно выводит из объекта с повторяющимися ключами массив уникальных ключей; ключ author', () => {
        expect(getUniqueValues(data, 'author')).toStrictEqual(['Alexander Nakarada', 'Kevin Macleod', 'Mixkit']);
    });
    it('правильно выводит из объекта с повторяющимися ключами массив уникальных ключей; ключ genre', () => {
        expect(getUniqueValues(data, 'genre')).toStrictEqual(['Классическая музыка', 'Рок музыка', 'Электронная музыка']);
    });
    it('правильно выводит из объекта с повторяющимися ключами массив уникальных ключей; ключ album', () => {
        expect(getUniqueValues(data, 'album')).toStrictEqual(['Chase', 'Secret Garden', 'Sneaky Snitch']);
    });
});
