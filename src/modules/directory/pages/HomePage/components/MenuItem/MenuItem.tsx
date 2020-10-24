import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

interface IProps extends RouteComponentProps {
  key: number;
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

function MenuItem(props: IProps): React.ReactElement {
  const { title, imageUrl, size, linkUrl, match, history } = props;

  return (
    <div
      className={`menu-item ${size || ''}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="sub-title">SHOP NOW</p>
      </div>
    </div>
  );
}

export default MenuItem;
