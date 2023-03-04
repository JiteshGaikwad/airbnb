import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="transform cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} fill className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-lg">{title}</h3>
    </div>
  );
}

export default MediumCard;
