"use client"

import { useAppSelector } from "@/hooks";
import Main from "@components/Main/Main";
import { useRouter } from "next/navigation";

export default function MyPlaylistMain() {

    // redirect to the main page if the user is not logged in
    const router = useRouter();
    const authState = useAppSelector((state) => state.auth.authState);
    if (!authState) {
        router.push('/signin');
        return null;
    }

    return (
        <Main playlistID="liked" isFilter={false} isSideBar={false} />
    );
}
