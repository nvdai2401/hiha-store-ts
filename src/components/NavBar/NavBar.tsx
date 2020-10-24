import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from 'modules/user/state/user.slice';
import { selectedCurrentUser } from 'modules/user/state/user.selectors';
import { ReactComponent as Logo } from 'assets/svg/crown.svg';

type Props = {
  currentUser: any;
  hidden: boolean;
  signOutStart: () => void;
};

function NavBar(props: Props): React.ReactElement {
  const { currentUser, hidden, signOutStart } = props;
  const count = useSelector(selectedCurrentUser);
  const dispatch = useDispatch();

  return (
    <header className="nav-bar">
      <Link to="/" className="nav-bar__logo">
        <Logo className="nav-bar__logo" />
      </Link>
      <ul className="nav-bar__nav-list">
        <li className="nav-bar__nav-list__item">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-bar__nav-list__item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-bar__nav-list__item">
          <Link to="/sing-in">Sign in</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
