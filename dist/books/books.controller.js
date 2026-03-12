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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_dto_1 = require("./dto/update-book.dto");
const book_schema_1 = require("./schemas/book.schema");
const swagger_1 = require("@nestjs/swagger");
let BooksController = class BooksController {
    booksService;
    constructor(booksService) {
        this.booksService = booksService;
    }
    async findAll() {
        return this.booksService.findAll();
    }
    async findOne(id) {
        return this.booksService.findOne(id);
    }
    async create(createBookDto) {
        return this.booksService.create(createBookDto);
    }
    async update(id, updateBookDto) {
        return this.booksService.update(id, updateBookDto);
    }
    async remove(id) {
        await this.booksService.remove(id);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obté tots els llibres' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Llistat de llibres', type: [book_schema_1.Book] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obté un llibre per ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del llibre', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Dades del llibre', type: book_schema_1.Book }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Llibre no trobat' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crea un nou llibre' }),
    (0, swagger_1.ApiBody)({ type: create_book_dto_1.CreateBookDto, description: 'Dades del llibre a crear' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Llibre creat correctament', type: book_schema_1.Book }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dades invàlides' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'L\'ISBN ja existeix' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualitza un llibre existent' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del llibre', type: String }),
    (0, swagger_1.ApiBody)({ type: update_book_dto_1.UpdateBookDto, description: 'Dades del llibre a actualitzar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Llibre actualitzat', type: book_schema_1.Book }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dades invàlides' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Llibre no trobat' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina un llibre' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del llibre', type: String }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Llibre eliminat correctament' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Llibre no trobat' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "remove", null);
exports.BooksController = BooksController = __decorate([
    (0, swagger_1.ApiTags)('Llibres'),
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map