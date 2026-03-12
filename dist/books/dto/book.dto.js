"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookDto = void 0;
const class_validator_1 = require("class-validator");
class CreateBookDto {
    title;
    author;
    year;
    isbn;
}
exports.CreateBookDto = CreateBookDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El títol és obligatori' }),
    (0, class_validator_1.IsString)({ message: 'El títol ha de ser una cadena de text' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "L'autor és obligatori" }),
    (0, class_validator_1.IsString)({ message: "L'autor ha de ser una cadena de text" }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "author", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "L'any ha de ser un número" }),
    (0, class_validator_1.Min)(1000, { message: "L'any ha de ser superior a 1000" }),
    (0, class_validator_1.Max)(new Date().getFullYear(), { message: "L'any no pot ser futur" }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISBN)('13', { message: "L'ISBN no és vàlid (ha de ser ISBN-10 o ISBN-13)" }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "isbn", void 0);
//# sourceMappingURL=book.dto.js.map