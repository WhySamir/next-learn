import { db } from "@/lib/sqlConnect"
import type { ResultSetHeader } from "mysql2";

//create
export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    const [result] = await db.query<ResultSetHeader>(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );

    return new Response(JSON.stringify({ id: result.insertId, name, email }), {
      status: 201,
    });
  }catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return new Response("Email already exists", { status: 409 }); // 409 Conflict
    }
    console.error("Error creating user:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
//read
export async function GET(){
 try {
    const [rows] = await db.query("SELECT * FROM users");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
//update
export async function PUT(req: Request) {
  try {
    const { id, name, email } = await req.json();
    await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [
      name,
      email,
      id,
    ]);

    return new Response(JSON.stringify({ id, name, email }), { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
//delete
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    return new Response("User deleted", { status: 200 });
  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
