import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import Hero from "./components/Hero";
import HomeBackground from "./components/HomeBackground";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <EmptyState showReset />
      )
    }
    
    
    return (
      <div>

        <HomeBackground />
        <Hero />
      <Container>
      <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      gap-8
      ">
        {listings.map((listing) => {
          return (
            <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
            />
          )
        })}
      </div>
    </Container>
      </div>
  )
}

export default Home;