export interface Guest  {
    id: number;
    name: string;
    surname: string;
    type: Type;
    presence: boolean | null;
    confirmed: boolean;
    hotel: Hotel;
    status: Status | null;
    restrictions: string;
}

enum Type {
    Adult,
    Kid
}

export enum Hotel {
    NOT_AVAILABLE,
    NOT_CONFIRMED,
    YES,
    NO
}

enum Status {
    Paid,
    NotPaid
}