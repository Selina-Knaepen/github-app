export class Repo {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;

    constructor(id: number, name: string, description: string, stargazers_count: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.stargazers_count = stargazers_count;
    }
}
