import Link from "next/link";

import Image from "next/image";
import { imgObj, objImg } from "./image";

const page = () => {
  return (
    <>
      <h1 className="w-full text-center">Photos</h1>
      <div className="flex flex-wrap cursor-pointer w-full gap-4 px-9">
        {Object.values(imgObj).map((images: objImg, idx: number) => {
          return (
            <Link
              key={idx}
              href={`/image-cardboard/${images.id}`}
              scroll={false}
            >
              <div className="relative w-80 h-60">
                <Image
                  className="object-cover"
                  src={images.img}
                  alt={`${idx}`}
                  fill
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default page;
