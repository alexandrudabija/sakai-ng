import { CurrentUserInterface } from "./user.type";



export interface SignUpRequestInterface {

    email: string,
    password?: string
    firstName: string,
    lastName: string,
    confirmPassword?: string,
    terms: boolean,
    language: string,
    provider: string,
    photoUrl: string;

    username: string;

}


export interface SignInRequestInterface {
    email: string,
    password?: string,
    provider: string,
    username: string,


}

export interface loginToken{
    token: string;
    expiresInseconds: number;
    user: CurrentUserInterface;


}
