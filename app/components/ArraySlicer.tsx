'use client';
import ListingCard from "./listings/ListingCard";
interface ArraySlicerProps {
  listings: any[];
  currentUser: any;
}
const ArraySlicer = ({ listings, currentUser }: ArraySlicerProps) => {
    const sliceListings = listings.slice(0, 3);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">        {sliceListings.map((listing) => (
            <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
            />
        ))}
    </div>
  )
}
export default ArraySlicer