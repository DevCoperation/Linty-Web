import {NewAccessTokenResponse} from "src/types/auth/login.type";
import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const refresh = async (
    refreshToken: { refreshToken: string | null }
): Promise<NewAccessTokenResponse> => {
    try {
        const response = await axios.post<NewAccessTokenResponse>(
            `${SERVER_URL}/reissue`,
            refreshToken
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("리프레쉬 에러");
    }
};