import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'core/store';
import { fetchDirectorySectionsStart } from 'modules/directory/state/directory.slice';
import { selectDirectorySections } from 'modules/directory/state/directory.selectors';

import { Spinner } from 'components';
import MenuItem from '../MenuItem';

function Directory(): React.ReactElement {
  const dispatch = useDispatch();
  const sections = useSelector(selectDirectorySections);
  const loading = useSelector((state: RootState) => state.directory.loading);

  useEffect(() => {
    dispatch(fetchDirectorySectionsStart());
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="directory">
      {sections.map(({ id, ...otherSectionsItems }) => (
        <MenuItem key={id} {...otherSectionsItems} />
      ))}
    </div>
  );
}

export default Directory;
