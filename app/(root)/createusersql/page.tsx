"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    //bad  practice fetching from here use server side
    async function fetchFunc() {
      try {
        const res = await fetch("/api/users"); //default method get

        if (!res.ok) {
          const errText = await res.text(); // Show the error text if not JSON
          throw new Error(`Error ${res.status}: ${errText}`);
        }

        const users = await res.json();
        console.log("Users:", users);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    fetchFunc();
  }, []);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (username) {
        console.log(username);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [username]);
  //debouncing
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ name: username, email }),
      });
      if (res.status === 409) {
        console.log("Email already exists!");
        return;
      }
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to submit: ${res.status} - ${text}`);
      }
      const resp = await res.json();
      console.log(resp);
      router.push("/fetchuserofsqlserverside");
    } catch (error) {
      console.error("submision error", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Enter ur name:</h1>
        <input
          className="border m-2"
          required
          onChange={(e: any) => {
            setUsername(e.target.value);
          }}
          type="text"
          value={username}
        />
        <h1 className="mt-4">Enter ur email</h1>
        <input
          className="border m-2"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
          type="email"
          required
          value={email}
        />
        <br />

        <button className="m-3 border p-2 rounded-4xl" type="submit">
          Submit to sql
        </button>
      </form>
    </div>
  );
};

export default Page;
