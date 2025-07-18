import { Guest } from './guest';
export interface Family  {
    id: number;
    token: string;
    guests: Guest[];
}