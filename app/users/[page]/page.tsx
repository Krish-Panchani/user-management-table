"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

import { UserTable } from "./user-table";
import { UserColumns } from "./user-columns";
import { Button } from "@/components/ui/button";
import { UserProps } from "@/types/users";

export default function UsersPage() {
  const router = useRouter();
  const params = useParams();
  const page = params.page;

  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(false);

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

  const handleNextPage = () => {
    router.push(`/users/${Number(page) + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/users/${Number(page) - 1}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Users - Page {page}</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserTable columns={UserColumns} data={users} />
      )}

      <div className="mt-4 flex justify-between">
        <Button onClick={handlePrevPage} disabled={Number(page) <= 1}>
          Previous
        </Button>
        <Button onClick={handleNextPage} disabled={users.length < 5}>
          Next
        </Button>
      </div>
    </div>
  );
}
