export interface IUser {
  _id?: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  address: {
    country: string;
    state: string;
    city: string;
  };
  password?: string;
}
