"use client";
import { useParams } from "next/navigation";

const UserIdPage = () => {
  const params = useParams();
  return <div>USER ID PAGE {params.userId}</div>;
};

export default UserIdPage;
