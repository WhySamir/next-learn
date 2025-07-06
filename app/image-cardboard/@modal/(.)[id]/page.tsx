//parallel route
import Image from "next/image";
import { imgObj, objImg } from "../../image";
import Modal from "@/app/components/Modal";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const selectedImg = Object.values(imgObj).find((img: objImg, idx: number) => {
    return img.id === Number(id);
  });
  if (!selectedImg) {
    return <div>Image not found</div>;
  }

  return (
    <Modal>
      <div className="relative w-[500px] h-[300px] mb-4">
        <Image
          className="object-cover rounded-md"
          src={selectedImg.img}
          alt={`${selectedImg.id}`}
          fill
        />
      </div>
      <p className="text-3xl capitalize">{selectedImg.country}</p>
      <p className="text-3xl capitalize">{selectedImg.name}</p>
      <p className="text-3xl capitalize">{selectedImg.description}</p>
    </Modal>
  );
};

export default page;
