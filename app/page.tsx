import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
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
        {listings.map((listing: any) => {
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
  );
}
