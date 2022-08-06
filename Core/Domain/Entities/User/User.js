"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt ? createdAt : new Date("YYYY-MM-DD HH:mm:ss").toISOString();
        this.updatedAt = updatedAt ? updatedAt : "";
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
}
exports.User = User;
