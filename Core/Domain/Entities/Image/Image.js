"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
class Image {
    constructor(id, name, type, path, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.path = path;
        this.createdAt = createdAt ? createdAt : new Date("YYYY-MM-DD HH:mm:ss").toISOString();
        this.updatedAt = updatedAt ? updatedAt : "";
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getPath() {
        return this.path;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
}
exports.Image = Image;
