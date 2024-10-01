
export interface CurrentUserInterface {

    userId: string,
    email: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    token: string;

}



export interface UserAddressInterface {
    street: string;
    houseNumber: string;
    city: string;
    zipCode: string;
}





// export abstract class AuthData {
//     abstract signInSignUpGoogle(authCredentials: SocialUser): Observable<firstName>;
//     abstract signInSignUpFacebook(authCredentials: SocialUser): Observable<firstName>;

//     abstract signInLocal(authCredentials: SignInModel): Observable<firstName>;
//     abstract signUpLocal(authCredentials: SignUpModel): Observable<firstName>;
//     abstract logout():void
//     abstract setAuthToken(token: string):void
//     abstract getAuthToken(): string
//     abstract getTokenObservable(): Observable<string | null>
//     abstract getUserId(): number | null
// } 