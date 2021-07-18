export class User {
    id: number;
    login: string;
    name: string;
    avatar_url: string;

    constructor(id: number, login: string, name: string, avatar_url: string) {
        this.id = id;
        this.login = login;
        this.name = name;
        this.avatar_url = avatar_url;
    }
}