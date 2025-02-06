import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private faceToken = "faceihjk,"

    getToken(): string{
        return this.faceToken
    }
}
