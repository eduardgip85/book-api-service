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
exports.LoginUserDto = exports.RegisterUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class RegisterUserDto {
    username;
    password;
}
exports.RegisterUserDto = RegisterUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Nom d'usuari", example: 'janedoe' }),
    (0, class_validator_1.IsNotEmpty)({ message: "El nom d'usuari és obligatori" }),
    (0, class_validator_1.IsString)({ message: "El nom d'usuari ha de ser una cadena de text" }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contrasenya', example: 'passwordSegura123' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La contrasenya és obligatòria' }),
    (0, class_validator_1.IsString)({ message: 'La contrasenya ha de ser una cadena de text' }),
    (0, class_validator_1.MinLength)(6, { message: 'La contrasenya ha de tenir almenys 6 caràcters' }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "password", void 0);
class LoginUserDto {
    username;
    password;
}
exports.LoginUserDto = LoginUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Nom d'usuari", example: 'janedoe' }),
    (0, class_validator_1.IsNotEmpty)({ message: "El nom d'usuari és obligatori" }),
    __metadata("design:type", String)
], LoginUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contrasenya', example: 'passwordSegura123' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La contrasenya és obligatòria' }),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
//# sourceMappingURL=auth.dto.js.map