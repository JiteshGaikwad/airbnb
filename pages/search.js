import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import { format } from "date-fns";
import { useRouter } from "next/router";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, noOfGuests, startDate, endDate } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex flex-grow px-6  pt-14">
        <section>
          <p className="text-xs">
            300+ stays - {range} for {noOfGuests} number of guest
          </p>
          <h1 className="mt-2 mb-6 text-xl font-semibold ">
            Stays in {location}
          </h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap  text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, star, price, total, location, title, description }) => (
                <InfoCard
                  img={img}
                  location={location}
                  key={img}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
