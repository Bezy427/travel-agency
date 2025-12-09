import React from 'react';
import {Header, TripCard} from "../../../components"
import {allTrips} from "~/constants";

const Trips = () => {

    return (
        <main className="all-trips wrapper">
            <Header
                title="Trips"
                description="View, and edit AI-generated travel plans"
                ctaText="Create a trip"
                ctaUrl="/trips/create"
            />

            <section>
                <h1 className="p-24-semibold text-dark-100">
                    Manage Created Trips
                </h1>

                <div className="trip-grid">
                    {allTrips.slice(0,4).map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
                        <TripCard
                            key={id}
                            id={id.toString()}
                            name={name}
                            imageUrl={imageUrls[0]}
                            location={itinerary?.[0]?.location ?? ''}
                            tags={tags}
                            price={estimatedPrice}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}
export default Trips
