//dynamic route
import Image from "next/image";
import { imgObj, objImg } from "../image";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const selectedImg = Object.values(imgObj).find((img: objImg, idx: number) => {
    return img.id === Number(id);
  });
  if (!selectedImg) {
    return <div>Image not found</div>;
  }

  return (
    <div className="flex flex-col w-full h-full  items-center justify-center">
      <div className="relative w-[70vw] h-[60vh]">
        <Image
          className="object-cover"
          src={selectedImg.img}
          alt={`${selectedImg.id}`}
          fill
        />
      </div>
      <p className="text-3xl capitalize">{selectedImg.name}</p>
      <p className="text-3xl capitalize">{selectedImg.country}</p>
      <p className="text-3xl capitalize">{selectedImg.description}</p>
    </div>
  );
};

export default page;
