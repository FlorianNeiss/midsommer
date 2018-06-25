import { Document } from '../models/document';

export class Universe implements Document {
    id: number;
    maxSize: number;
    name: string;
}