export default async function page() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/mongousers`
    );
    if (!res) {
      throw new Error("Failed to fetch users");
    }
    const users = await res.json();
    const MongoUserClient = (await import("./MongoUserClient")).default;

    return (
      <>
        <MongoUserClient users={users} />
      </>
    );
  } catch (error) {
    console.error("error", error);
  }
}
