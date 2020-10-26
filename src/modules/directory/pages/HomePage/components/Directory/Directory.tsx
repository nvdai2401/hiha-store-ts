import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MenuItem from '../MenuItem';

type IProps = {};

const mockSections = [
  {
    id: 1,
    imageUrl: 'https://ik.imagekit.io/fireman35/images/cvpntL1/hats.png',
    linkUrl: 'shop/hats',
    title: 'hats',
  },
  {
    id: 2,
    imageUrl: 'https://ik.imagekit.io/fireman35/images/px2tCc3/jackets.png',
    linkUrl: 'shop/jackets',
    title: 'jackets',
  },
  {
    id: 3,
    imageUrl: 'https://ik.imagekit.io/fireman35/images/0jqHpnp/sneakers.png',
    linkUrl: 'shop/sneakers',
    title: 'sneakers',
  },
  {
    id: 4,
    imageUrl: 'https://ik.imagekit.io/fireman35/images/GCCdy8t/womens.png',
    linkUrl: 'shop/womens',
    size: 'large',
    title: 'womens',
  },
  {
    id: 5,
    imageUrl: 'https://ik.imagekit.io/fireman35/images/R70vBrQ/men.png',
    linkUrl: 'shop/mens',
    size: 'large',
    title: 'mens',
  },
];

function Directory(props: IProps): React.ReactElement {
  // const { sections } = props;

  return (
    <div className="directory">
      {mockSections.map(({ id, ...otherSectionsItems }) => (
        <MenuItem key={id} {...otherSectionsItems} />
      ))}
    </div>
  );
}

export default Directory;
