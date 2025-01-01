import { ColumnDef } from "@tanstack/react-table";

export type UserProps = {
  id: string;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export const UserColumns: ColumnDef<UserProps>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Street",
    accessorKey: "address.street",
  },
  {
    header: "Suite",
    accessorKey: "address.suite",
  },
  {
    header: "City",
    accessorKey: "address.city",
  },
  {
    header: "Zipcode",
    accessorKey: "address.zipcode",
  },
  {
    header: "Lat",
    accessorKey: "address.geo.lat",
  },
  {
    header: "Lng",
    accessorKey: "address.geo.lng",
  },
];
