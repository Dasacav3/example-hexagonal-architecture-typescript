export class User {
	private id: number;
	private name: string;
	private email: string;
	private password: string;
	private createdAt: string;
	private updatedAt: string;

	constructor(
		id: number,
		name: string,
		email: string,
		password: string,
		createdAt: string,
		updatedAt: string
	) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.createdAt = createdAt ? createdAt : new Date("YYYY-MM-DD HH:mm:ss").toISOString();
		this.updatedAt = updatedAt ? updatedAt : "";
	}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public getEmail(): string {
		return this.email;
	}

	public getPassword(): string {
		return this.password;
	}

	public getCreatedAt(): string {
		return this.createdAt;
	}

	public getUpdatedAt(): string {
		return this.updatedAt;
	}
}
