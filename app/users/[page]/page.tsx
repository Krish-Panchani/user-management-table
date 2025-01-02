"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

import { UserTable } from "./user-table";
import { UserColumns } from "./user-columns";
import { Button } from "@/components/ui/button";
import { UserProps } from "@/types/users";
import { Loader2 } from "lucide-react";

export default function UsersPage() {
  const router = useRouter();
  const params = useParams();
  const page = params.page; // Get the page number from the URL params

  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch users based on the current page number
  useEffect(() => {
    if (!page) return; // Ensure the page param is available

    const fetchUsers = async (page: number) => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const allUsers = response.data;

        // Paginate the users based on the current page
        const pageSize = 5;
        const startIndex = (page - 1) * pageSize;
        const paginatedUsers = allUsers.slice(
          startIndex,
          startIndex + pageSize
        );
        setUsers(paginatedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(Number(page));
  }, [page]);

  // Navigate to the next page
  const handleNextPage = () => {
    router.push(`/users/${Number(page) + 1}`);
  };

  // Navigate to the previous page
  const handlePrevPage = () => {
    router.push(`/users/${Number(page) - 1}`);
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex justify-between items-center my-4 ">
        <h1 className="text-xl font-bold text-indigo-500">
          Users Management Table
        </h1>
        <p>Page {page}</p>
      </div>

      {loading ? (
        <p className="flex gap-2 items-center mt-4 text-lg text-indigo-500 ">
          {" "}
          <Loader2 className="animate-spin" /> Loading...
        </p>
      ) : (
        <UserTable columns={UserColumns} data={users} />
      )}

      <div className="mt-4 flex justify-between">
        <Button
          className="bg-indigo-500"
          onClick={handlePrevPage}
          disabled={Number(page) <= 1}
        >
          Previous
        </Button>
        <Button
          className="bg-indigo-500"
          onClick={handleNextPage}
          disabled={users.length < 5}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
