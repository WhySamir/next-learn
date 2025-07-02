"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserClient = ({ users }: { users: any[] }) => {
  const [userList, setUserList] = useState(users);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const router = useRouter();
  const handleDelete = async (id: number) => {
    if (!id) {
      throw new Error("Id not found");
    }
    try {
      const res = await fetch("api/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name: username, email }),
      });
      if (!res.ok) throw new Error("Failed to update");
      setUserList((prev) => prev.filter((u) => u.id !== id));

      setEditingId(null);
      router.refresh();
    } catch (error) {
      console.error("Edit error:", error);
    }
  };
  const handleEdit = async (id: number) => {
    if (!username || !email) {
      return;
    }
    await fetch("/api/users", {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id, name: username, email }),
    });
    setUserList((prev) =>
      prev.map((u) => (u.id === id ? { ...u, name: username, email } : u))
    );
    setEditingId(null);
    router.refresh();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (username) {
        console.log(username);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [email]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (email) {
        console.log(email);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [email]);

  return (
    <>
      {" "}
      {userList.map((user: any, id: number) => (
        <div key={id} className="flex   mb-2  space-between w-80">
          <div className="flex flex-col mr-5  w-60 ">
            <p> Id: {user.id}</p>
            {editingId !== user.id ? (
              <>
                <p> User: {user.name}</p>
                <p className="overflow-hidden   truncate whitespace-nowrap ">
                  {" "}
                  Email: {user.email}
                </p>
              </>
            ) : (
              <>
                <div className="flex space-x-2">
                  <p className="pr-2"> User:</p>
                  <input
                    onChange={(e: any) => setUsername(e.target.value)}
                    type="text"
                    className="border"
                    value={username}
                  />
                </div>{" "}
                <div className="flex">
                  <p className="pr-2.5"> Email:</p>
                  <input
                    type="text"
                    onChange={(e: any) => setEmail(e.target.value)}
                    className="overflow-hidden   border truncate whitespace-nowrap "
                    value={email}
                  />
                </div>{" "}
              </>
            )}
          </div>
          <div className="trash space-between justify-center gap-y-2 flex flex-col">
            <div className="flex space-x-2">
              <button
                onClick={() => handleDelete(user.id)}
                className="border px-2 py-1 rounded-lg"
              >
                Trash
              </button>
              <button
                onClick={() => router.push("/createusersql")}
                className="border px-2 py-1 rounded-lg"
              >
                Add
              </button>
            </div>
            {editingId !== user.id ? (
              <button
                className="border px-2 py-1 rounded-lg"
                onClick={() => {
                  setUsername(user.name);
                  setEmail(user.email);
                  setEditingId(user.id);
                }}
              >
                Edit
              </button>
            ) : (
              <button
                className="border px-2 py-1 rounded-lg"
                onClick={() => handleEdit(user.id)}
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default UserClient;
