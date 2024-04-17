const API_URL = "https://skypro-music-api.skyeng.tech/catalog/";
const TRACK_ALL = "track/all/";
const SELECTION = "selection/";
const API_URL_USER = "https://skypro-music-api.skyeng.tech/user/";
const LOGIN = "login/";
const SIGNUP = "signup/";
const TOKEN = "token/";
const TOKEN_REFRESH = "token/refresh/";

export async function getTracks(playlistNumber: number | null) {
    try {
        const response = await fetch(API_URL + (playlistNumber ? SELECTION + playlistNumber : TRACK_ALL));
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("No authorization");
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn(error);
        throw error;
    }
}

type loginProps = {
    email: string;
    password: string;
}
export async function login({ email, password }: loginProps) {
    return fetch(API_URL_USER + LOGIN, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Incorrect email or password.");
        }
        if (response.status === 401) {
            throw new Error("Username not found.");
        }
        if (response.status === 500) {
            throw new Error("Internal server error.");
        }
        return response.json();
    });
}

type registerProps = {
    username: string
    email: string;
    password: string;
}
export async function register({ username, email, password }: registerProps) {
    return fetch(API_URL_USER + SIGNUP, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            username,
        }),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Error during the registration process.");
        }
        return response.json();
    });
}
