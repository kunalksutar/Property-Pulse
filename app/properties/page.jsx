import React from 'react';
import PropertyCard from '@/components/PropertyCard';

// will return the properperties data from the mongodb atlas db
async function fetchProperties() {
  const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`;
  console.log("Fetching:", url);

  const res = await fetch(url);
  console.log("Status:", res.status);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error Response:");

    throw new Error(
      `Failed to fetch properties. Status: ${res.status}. Response: ${errorText}`
    );
  }

  const data = await res.json();
  console.log("Properties received:", data);
  return data;
}

const PropertiesPage = async () => {
  // fetch the data from monogoDB
  const properties = await fetchProperties();

  // sort propertis by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        { properties.length === 0 ? (
          <p>No properties found</p>
        ):(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key = {property._id} property = {property}></PropertyCard>
          ))}
        </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesPage
