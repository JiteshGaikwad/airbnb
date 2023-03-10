/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="https://links.papareact.com/0fm" fill priority sizes="100vw" alt="" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not Sure where to go? Perfect.</p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
