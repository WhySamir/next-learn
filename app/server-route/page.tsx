import { serverSideFunction } from "@/utils/server-utlis";
import ImageSlider from "../components/ImageSlider";

const page = () => {
  const result = serverSideFunction();
  return (
    <>
      {" "}
      <div>Server Route{result}</div>
      {/* cannot directly use third party services like react-slick carousel but can be acces using another file */}
      <ImageSlider />
    </>
  );
};

export default page;
