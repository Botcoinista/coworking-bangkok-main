import prisma from '@/app/libs/prismadb';
interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}
export default async function getReservations(
    params: IParams
    ) {
        try {
            const { listingId, userId, authorId } = params;
            const query: any = {};
            // all reservations a specific office has
            if (listingId) {
                query.listingId = listingId;
            }
            //All the bookings a specific user has
            if (userId) {
                query.userId = userId;
            }
            //all the reservations, that other users have made for "our" office
            if (authorId) {
                query.listing = { userId: authorId };
            }
            const reservations = await prisma.reservation.findMany({
                where: query,
                include: {
                    listing: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const safeReservations = reservations.map(
                (reservation) => ({
                    ...reservation,
                    createdAt: reservation.createdAt.toISOString(),
                    startDate: reservation.startDate.toISOString(),
                    endDate: reservation.endDate.toISOString(),
                    listing: {
                        ...reservation.listing,
                        createdAt: reservation.listing.createdAt.toISOString(),
                    }
            })
        )
        return safeReservations;
    } catch (error: any){
        throw new Error(error);
    }
}












