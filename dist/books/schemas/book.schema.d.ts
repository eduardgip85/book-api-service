import { Document } from 'mongoose';
export type BookDocument = Book & Document;
export declare class Book {
    title: string;
    author: string;
    year?: number;
    isbn?: string;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, (Document<unknown, any, Book, any, import("mongoose").DefaultSchemaOptions> & Book & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Book, any, import("mongoose").DefaultSchemaOptions> & Book & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Book>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, Document<unknown, {}, Book, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Book, Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    author?: import("mongoose").SchemaDefinitionProperty<string, Book, Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    year?: import("mongoose").SchemaDefinitionProperty<number | undefined, Book, Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isbn?: import("mongoose").SchemaDefinitionProperty<string | undefined, Book, Document<unknown, {}, Book, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Book & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Book>;
