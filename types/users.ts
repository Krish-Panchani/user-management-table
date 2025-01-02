export type UserProps = {
    id: string;
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  };