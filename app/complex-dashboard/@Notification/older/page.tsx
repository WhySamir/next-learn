import { Card } from "@/app/components/Card";
import Link from "next/link";

const page = () => {
  return (
    <Card>
      <div className="flex flex-col justify-center">
        <p> Older Notification</p>
        <Link href="/complex-dashboard">New Notifications</Link>
      </div>
    </Card>
  );
};

export default page;
