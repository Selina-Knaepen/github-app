import { Author } from "./author.model";

export class Commit {
    sha: string;
    message: string;
    author: Author;

    constructor(sha: string, message: string, author: Author) {
        this.sha = sha;
        this.message = message;
        this.author = author;
    }
}
