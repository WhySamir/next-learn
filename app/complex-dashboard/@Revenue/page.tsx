import { Card } from "@/app/components/Card";

const Revenue = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <Card>Revenue</Card>;
};

export default Revenue;
