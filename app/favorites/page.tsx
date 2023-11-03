import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";


const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you don't have any favorites yet."
      />
    );
  }

  return (
    <div className="pb-20 pt-28">

      <FavoritesClient
          listings={listings}
          currentUser={currentUser}
      />
    </div>
  )
};

export default ListingPage;
