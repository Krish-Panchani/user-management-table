import { UserProps } from "@/types/users";
import { ColumnDef } from "@tanstack/react-table";

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
    header: "City",
    accessorKey: "address.city",
  },
  {
    header: "Zipcode",
    accessorKey: "address.zipcode",
  },
];
