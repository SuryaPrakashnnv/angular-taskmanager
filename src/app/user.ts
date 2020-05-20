export class User {
  id: number;
  name: string;
  email: string;
  // address: { street: string, city: string, zipcode: string };
  phone: string;
  website: string;

  constructor() {
    this.id = 0;
    this.name = null;
    this.email = null;
    this.phone = null;
    this.website = null;
  }
}

