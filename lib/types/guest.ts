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

enum Hotel {
    NotAvailable,
    NotConfirmed,
    Yes,
    No
}

enum Status {
    Paid,
    NotPaid
}