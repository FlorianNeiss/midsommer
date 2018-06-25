import { Document } from '../models/document';

export class Star implements Document {
    id: number;
    universeId: number;
    name: string;
    color: string;
}