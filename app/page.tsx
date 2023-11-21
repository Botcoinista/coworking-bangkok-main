import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import ArraySlicer from "./components/ArraySlicer";
import CoffeeBanner from "./components/CoffeeCup";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import Hero from "./components/Hero";
import HomeBackground from "./components/HomeBackground";
import TuckTuckBanner from "./components/TuckTuckBanner";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <>
      <HomeBackground />
      <Hero />
      <Container>
        <div className="py-6 md:pt-20 md:pb-4 ">
          <ArraySlicer
            listings={listings.slice(0, 4)}
            currentUser={currentUser}
          />
        </div>
      </Container>
      <TuckTuckBanner />
      <Container>
        <div className="py-6 md:pt-20 md:pb-4">
          <ArraySlicer
            listings={listings.slice(4, 8)}
            currentUser={currentUser}
          />
        </div>
      </Container>
      <CoffeeBanner />
      <Container>
        <div className="py-6 md:pt-20 md:pb-4">
          <ArraySlicer
            listings={listings.slice(8, 12)}
            currentUser={currentUser}
          />
        </div>
      </Container>
      <Container>
        <div className="py-6 md:pt-20 md:pb-4">
          <ArraySlicer
            listings={listings.slice(12, 16)}
            currentUser={currentUser}
          />
        </div>
      </Container>
    </>
  );
};

export default Home;

{
  /* <HomeBackground />
<Hero />
<Container>
  <div
    className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    gap-8
    "
  >
    {listings.map((listing) => {
      return (
        <ListingCard
          currentUser={currentUser}
          key={listing.id}
          data={listing}
        />
      );
    })}
  </div>
</Container>
<TuckTuckBanner />
<CoffeeBanner /> */
}
