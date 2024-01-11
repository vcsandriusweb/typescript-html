"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataResource = void 0;
class DataResource {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    loadAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(this.endpoint);
            return res.json();
        });
    }
    loadOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${this.endpoint}/${id}`);
            return res.json();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${this.endpoint}/${id}`, {
                method: 'DELETE'
            });
            return res;
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${this.endpoint}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            return res;
        });
    }
}
exports.DataResource = DataResource;
