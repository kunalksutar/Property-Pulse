'use client';
import React from 'react';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  const {id} = useParams();

  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const pathname = usePathname();

  console.log("hello")
  
  return (
    <div>
        <button onClick = {() => router.push('/')}> Go Home {pathname} {name}</button>
    </div>
  )
}

export default PropertyPage
