export interface LoginResponse {
    data:{
        accessToken: string;
        refreshToken: string;
    }
}

export interface NewAccessTokenResponse extends Response{
    data: {
        accessToken:string
    }
}