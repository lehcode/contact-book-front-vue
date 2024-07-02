export interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  phones: Phone[];
}

export interface Phone {
  id: number;
  number: string;
}

export interface ContactInput {
  first_name: string;
  last_name: string;
  phones: Omit<Phone, 'id'>[];
}
