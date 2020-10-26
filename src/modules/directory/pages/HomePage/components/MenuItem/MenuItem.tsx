import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

interface IProps {
  key: number;
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

function MenuItem(props: IProps): React.ReactElement {
  const { title, imageUrl, size, linkUrl } = props;
  const history = useHistory();

  return (
    <div
      className={`menu-item ${size || ''}`}
      onClick={() => {
        // history.push(`${match.url}${linkUrl}`)
      }}
    >
      <div
        className="menu-item__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="menu-item__content">
        <h1 className="menu-item__content__title">{title.toUpperCase()}</h1>
        <p className="menu-item__content__sub-title">SHOP NOW</p>
      </div>
    </div>
  );
}

export default MenuItem;
