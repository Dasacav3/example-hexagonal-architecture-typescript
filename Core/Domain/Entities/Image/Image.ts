export class Image {
    private id: string;
    private name: string;
    private type: string;
    private path: string;
    private createdAt: string;
    private updatedAt: string;

    constructor(
        id: string,
        name: string,
        type: string,
        path: string,
        createdAt: string,
        updatedAt: string
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.path = path;
        this.createdAt = createdAt ? createdAt : new Date("YYYY-MM-DD HH:mm:ss").toISOString();
        this.updatedAt = updatedAt ? updatedAt : "";
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): string {
        return this.type;
    }

    public getPath(): string {
        return this.path;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }
}