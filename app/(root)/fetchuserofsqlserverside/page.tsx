export default async function page() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users`);
    if (!res) {
      throw new Error("Failed to fetch users");
    }
    const users = await res.json();
    const UserClient = (await import("./UserClient")).default;

    return (
      <>
        <UserClient users={users} />
      </>
    );
  } catch (error) {
    console.error("error", error);
  }
}
