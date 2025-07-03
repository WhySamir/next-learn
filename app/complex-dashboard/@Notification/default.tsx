import { Card } from "@/app/components/Card";
import Link from "next/link";

const Notification = () => {
  return (
    <Card>
      <>
        <div className="flex flex-col justify-center">
          <p>Default Notifications</p>
          <Link href="complex-dashboard/older">See older notification</Link>
        </div>
      </>
    </Card>
  );
};

export default Notification;
