import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';

import connectDB from '@/config/database';

const HomePage = async () => {
  console.log(process.env.MONGODB_URI);

  await connectDB();
  return (
    <div>
        <Hero></Hero>
        <InfoBoxes></InfoBoxes>
        <HomeProperties></HomeProperties>
    </div>
  )
}

export default HomePage
