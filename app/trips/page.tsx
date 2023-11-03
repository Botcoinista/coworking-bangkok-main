import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <EmptyState 
                title="You are not logged in"
                subtitle="You must be logged in to view this page"
            />
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    });

    if (reservations.length === 0) {
        return (
            <EmptyState 
                title="You have no reservations"
                subtitle="You have not made any reservations yet"
            />
        )
    }

    return (
        <div className="pb-20 pt-28">

            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </div>
    )
}

export default TripPage;