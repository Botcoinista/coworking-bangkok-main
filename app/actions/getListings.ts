import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string[];
}

export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      roomCount,
      bathroomCount,
      startDate,
      endDate,
      locationValue,
      category,
      guestCount,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category && category.length > 0) {
      query.category = {
        in: category,
      };
    }

    if (roomCount) {
      query.roomCount = {
        gte: +roomCount,
      };
    }

    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount,
      };
    }

    if (guestCount) {
      query.guestCount = {
        gte: +guestCount,
      };
    }

    if (locationValue) {
        query.location = locationValue;
    }

    if (startDate && endDate) {
        query.NOT = {
            reservations: {
                some: {
                    OR: [
                        {

                            endDate: { gte: startDate},
                            startDate: { lte: endDate},
                        },
                        {
                            startDate: { lte: endDate },
                            endDate: { gte: startDate },
                        }
                    ]
                }
            }
        }
    }


    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
  
}
