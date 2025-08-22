import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Cole Quest and The City Pickers",
    "alternateName": "CQCP",
    "description": "Brooklyn's premier bluegrass band featuring dobro, banjo, and harmonica. Led by Woody Guthrie's grandson Cole Quest, bringing authentic bluegrass to NYC.",
    "url": "https://colequest.com",
    "logo": "https://colequest.com/fb-logo.jpg",
    "image": "https://colequest.com/fb-logo.jpg",
    "genre": ["Bluegrass", "Folk", "Americana", "Acoustic"],
    "foundingLocation": {
      "@type": "Place",
      "name": "Brooklyn, New York",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    },
    "member": [
      {
        "@type": "Person",
        "name": "Cole Quest",
        "description": "Lead vocals, resonator guitar - Grandson of Woody Guthrie"
      }
    ],
    "albumReleased": [
      {
        "@type": "MusicAlbum",
        "name": "Homegrown",
        "datePublished": "2025-07-18",
        "recordLabel": "Jalopy Records"
      },
      {
        "@type": "MusicAlbum", 
        "name": "Self [En]Titled EP",
        "datePublished": "2021-04-16",
        "recordLabel": "Omnivore Records"
      }
    ],
    "instrument": ["Dobro", "Banjo", "Harmonica", "Guitar", "Acoustic Guitar", "Bass"],
    "keywords": "Brooklyn bluegrass, NYC bluegrass, dobro, banjo, harmonica, Cole Quest, Woody Guthrie, Brooklyn band, NYC acoustic music",
    "sameAs": [
      "https://www.instagram.com/citypickers",
      "https://www.facebook.com/citypickers",
      "https://open.spotify.com/artist/1SIMdfmZi6TCoYaBU7AMeM?si=zaVQ80wxTtC6QOJT8SAzyQ",
      "https://twitter.com/colequestcp"
    ],
    "performerIn": {
      "@type": "Event",
      "name": "Brooklyn Bluegrass Concerts",
      "location": {
        "@type": "Place",
        "name": "New York City",
        "address": "New York, NY"
      }
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
