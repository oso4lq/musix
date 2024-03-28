const API_URL = "https://skypro-music-api.skyeng.tech/catalog/";

export async function getTracks() {
    try {
        const response = await fetch(API_URL + "track/all/");
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

//  DRAFT. add authorisation
// export async function addTrack({ X }) {
//     try {
//         const response = await fetch(API_URL`${id}/favorite/`, {
//             method: "POST",
//             body: JSON.stringify({
//                 X,
//             }),
//         });
//         if (!response.ok) {
//             if (response.status === 400) {
//                 throw new Error("Something went wrong");
//             } else {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//         }
//         return response.json();
//     } catch (error) {
//         alert("No internet connection. Try again later.");
//         console.warn(error);
//         throw error;
//     }
// }
