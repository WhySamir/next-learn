import { Card } from "@/app/components/Card";

const UserAnalytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <Card>
      <div>UserAnalytics</div>
    </Card>
  );
};
export default UserAnalytics;
