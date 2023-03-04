import Image from "next/image";
import {
  MagnifyingGlassIcon as SearchIcon,
  UserCircleIcon,
  Bars3Icon as MenuIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-5 shadow-md md:px-10">
      {/* left  */}
      <div className="relative flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          priority
          fill
          sizes="100vw"
          className="object-contain object-left"
        />
      </div>

      {/* middle- search*/}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 outline-none"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      {/* right  */}
      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
