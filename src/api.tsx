const API_URL = "https://skypro-music-api.skyeng.tech/catalog/";
const TRACK = "track/";
const ALL = "all/";
const FAVORITE = "favorite/";
const SELECTION = "selection/";
const API_URL_USER = "https://skypro-music-api.skyeng.tech/user/";
const LOGIN = "login/";
const SIGNUP = "signup/";
const TOKEN = "token/";
const TOKEN_REFRESH = "token/refresh/";

export async function getTracks(playlistID: number | null) {
    try {
        const response = await fetch(API_URL + (playlistID ? (SELECTION + playlistID) : (TRACK + ALL)));
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("No authorization");
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            };
        };
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn(error);
        throw error;
    };
};

export async function getLikedTracks(userToken: string) {
    return fetch(API_URL + TRACK + FAVORITE + ALL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Incorrect email or password.");
        };
        if (response.status === 401) {
            throw new Error("Username not found.");
        };
        if (response.status === 500) {
            throw new Error("Internal server error.");
        };
        return response.json();
    });
};

type loginProps = {
    email: string;
    password: string;
};
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
        };
        if (response.status === 401) {
            throw new Error("Username not found.");
        };
        if (response.status === 500) {
            throw new Error("Internal server error.");
        };
        return response.json();
    });
};

type registerProps = {
    username: string
    email: string;
    password: string;
};
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
        };
        return response.json();
    });
};

type getTokenProps = {
    email: string;
    password: string;
};
export async function getToken({ email, password }: getTokenProps) {
    return fetch(API_URL_USER + TOKEN, {
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
        };
        if (response.status === 401) {
            throw new Error("Username not found.");
        };
        if (response.status === 500) {
            throw new Error("Internal server error.");
        };
        return response.json();
    });
};

export async function refreshToken(refresh: string) {
    return fetch(API_URL_USER + TOKEN_REFRESH, {
        method: "POST",
        body: JSON.stringify({
            refresh: refresh,
        }),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("???");
        };
        if (response.status === 401) {
            throw new Error("Invalid or overdue token .");
        };
        if (response.status === 500) {
            throw new Error("Internal server error.");
        };
        return response.json();
    });
};

export async function addTrackToPlaylist(trackId: number) {
    return fetch(API_URL + TRACK + `${trackId}/` + FAVORITE, {
        method: "POST",
        body: JSON.stringify({
            trackId,
        }),
        headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Error while adding the track.");
        };
        if (response.status === 401) {
            throw new Error("Invalid or overdue token.");
        };
        return response.json();
    });
};

export async function removeTrackFromPlaylist(trackId: number) {
    return fetch(API_URL + TRACK + `${trackId}/` + FAVORITE, {
        method: "DELETE",
        body: JSON.stringify({
            id: trackId,
        }),
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Error while removing the track.");
        };
        if (response.status === 401) {
            throw new Error("Invalid or overdue token.");
        };
        return response.json();
    });
};
