import React from 'react';

import { CollectionList } from './components';

const collections = [
  {
    id: '05Qcerg5kJqFaWAFqTPR',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/0s3pdnc/adidas-nmd.png',
        name: 'Adidas NMD',
        price: 220,
      },
      {
        id: 11,
        imageUrl: 'https://ik.imagekit.io/fireman35/images/dJbG1cT/yeezy.png',
        name: 'Adidas Yeezy',
        price: 280,
      },
      {
        id: 12,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/bPmVXyP/black-converse.png',
        name: 'Black Converse',
        price: 110,
      },
      {
        id: 13,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/1RcFPk0/white-nike-high-tops.png',
        name: 'Nike White AirForce',
        price: 160,
      },
      {
        id: 14,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/QcvzydB/nikes-red.png',
        name: 'Nike Red High Tops',
        price: 160,
      },
      {
        id: 15,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/fMTV342/nike-brown.png',
        name: 'Nike Brown High Tops',
        price: 160,
      },
      {
        id: 16,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/w4k6Ws9/nike-funky.png',
        name: 'Air Jordan Limited',
        price: 190,
      },
      {
        id: 17,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/Mhh6wBg/timberlands.png',
        name: 'Timberlands',
        price: 200,
      },
    ],
    title: 'Sneakers',
  },
  {
    id: '8ppoGlelu2XiQ11rSeBF',
    routeName: 'hats',
    items: [
      {
        id: 1,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/ZYW3VTp/brown-brim.png',
        name: 'Brown Brim',
        price: 25,
      },
      {
        id: 2,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/ypkgK0X/blue-beanie.png',
        name: 'Blue Beanie',
        price: 18,
      },
      {
        id: 3,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/QdJwgmp/brown-cowboy.png',
        name: 'Brown Cowboy',
        price: 35,
      },
      {
        id: 4,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/RjBLWxB/grey-brim.png',
        name: 'Grey Brim',
        price: 25,
      },
      {
        id: 5,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/YTjW3vF/green-beanie.png',
        name: 'Green Beanie',
        price: 18,
      },
      {
        id: 6,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/rKBDvJX/palm-tree-cap.png',
        name: 'Palm Tree Cap',
        price: 14,
      },
      {
        id: 7,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/bLB646Z/red-beanie.png',
        name: 'Red Beanie',
        price: 18,
      },
      {
        id: 8,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/1f2nWMM/wolf-cap.png',
        name: 'Wolf Cap',
        price: 14,
      },
      {
        id: 9,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/X2VJP2W/blue-snapback.png',
        name: 'Blue Snapback',
        price: 16,
      },
    ],
    title: 'Hats',
  },
  {
    id: 'TNZZXu89TtgpyBYiuhtF',
    routeName: 'mens',
    items: [
      {
        id: 30,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/xJS0T3Y/camo-vest.png',
        name: 'Camo Down Vest',
        price: 325,
      },
      {
        id: 31,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/qMQ75QZ/floral-shirt.png',
        name: 'Floral T-shirt',
        price: 20,
      },
      {
        id: 32,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/55z32tw/long-sleeve.png',
        name: 'Black & White Longsleeve',
        price: 25,
      },
      {
        id: 33,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/RvwnBL8/pink-shirt.png',
        name: 'Pink T-shirt',
        price: 25,
      },
      {
        id: 34,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/VpW4x5t/roll-up-jean-shirt.png',
        name: 'Jean Long Sleeve',
        price: 40,
      },
      {
        id: 35,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/mh3VM1f/polka-dot-shirt.png',
        name: 'Burgundy T-shirt',
        price: 25,
      },
    ],
    title: 'Mens',
  },
  {
    id: 'TxMcycq8aXfb17bvMMHA',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/XzcwL5s/black-shearling.png',
        name: 'Black Jean Shearling',
        price: 125,
      },
      {
        id: 19,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/mJS6vz0/blue-jean-jacket.png',
        name: 'Blue Jean Jacket',
        price: 90,
      },
      {
        id: 20,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/N71k1ML/grey-jean-jacket.png',
        name: 'Grey Jean Jacket',
        price: 90,
      },
      {
        id: 21,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/s96FpdP/brown-shearling.png',
        name: 'Brown Shearling',
        price: 165,
      },
      {
        id: 22,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/M6hHc3F/brown-trench.png',
        name: 'Tan Trench',
        price: 185,
      },
    ],
    title: 'Jackets',
  },
  {
    id: 'bIp3byxbM52MXgLCGOzT',
    routeName: 'womens',
    items: [
      {
        id: 23,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/7CQVJNm/blue-tank.png',
        name: 'Blue Tanktop',
        price: 25,
      },
      {
        id: 24,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/4W2DGKm/floral-blouse.png',
        name: 'Floral Blouse',
        price: 20,
      },
      {
        id: 25,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/KV18Ysr/floral-skirt.png',
        name: 'Floral Dress',
        price: 80,
      },
      {
        id: 26,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/N3BN1bh/red-polka-dot-dress.png',
        name: 'Red Dots Dress',
        price: 80,
      },
      {
        id: 27,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/KmSkMbH/striped-sweater.png',
        name: 'Striped Sweater',
        price: 45,
      },
      {
        id: 28,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/v1cvwNf/yellow-track-suit.png',
        name: 'Yellow Track Suit',
        price: 135,
      },
      {
        id: 29,
        imageUrl:
          'https://ik.imagekit.io/fireman35/images/qBcrsJg/white-vest.png',
        name: 'White Blouse',
        price: 20,
      },
    ],
    title: 'Womens',
  },
];

function CollectionPreview(): React.ReactElement {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionList key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default CollectionPreview;
