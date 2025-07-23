export interface Guest  {
    id: number;
    name: string;
    surname: string;
    type: Type;
    presence: boolean | null;
    confirmed: boolean;
    hotel: HotelType;
    status: Status | null;
    restrictions: string;
    days: number;
    family_id: number;
}

export enum Type {
    Adult,
    Kid
}

export enum HotelType {
    NOT_AVAILABLE,
    NOT_CONFIRMED,
    YES,
    NO
}

enum Status {
    Paid,
    NotPaid
}