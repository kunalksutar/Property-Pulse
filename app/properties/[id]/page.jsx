'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';

// endpoint => /properties/[id]
const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // execute after rendering the returning html
  // updates the property and loading states for the given property
  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const propertyData = await fetchProperty(id);
        setProperty(propertyData);
      } catch (error) {
        console.error("Error fetching property", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [id]);

  if (!property && !loading) {
    return (
      <h1 className = "text-center text-2xl font-bold mt-10">
        Property not found
      </h1>
    )
  }
  
  // returning html
  return (
    <>
      {!loading && property && (
        <PropertyHeaderImage image = {property.images[0]}></PropertyHeaderImage>
      )}
    </>
  )
}

export default PropertyPage
