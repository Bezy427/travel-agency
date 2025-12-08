import React from 'react';
import {Header} from "../../../components"

const Trips = () => {

    return (
        <main className="all-trips wrapper">
            <Header
                title="Trips"
                description="View, and edit AI-generated travel plans"
                ctaText="Create a trip"
                ctaUrl="/trips/create"
            />
        </main>
    )
}
export default Trips
