import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="You are not logged in"
        subtitle="You must be logged in to view this page"
      />
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="It looks like you don't have any properties yet."
      />
    );
  }

  return (
    <div className="pb-20 pt-28">
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </div>
  );
};

export default PropertiesPage;
