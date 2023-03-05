import Image from "next/image";
import {
  MagnifyingGlassIcon as SearchIcon,
  UserCircleIcon,
  Bars3Icon as MenuIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="col-span-3 mx-auto mt-10 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className="mb-4 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg text-red-400 outline-none"
              type="number"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex ">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
