import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDirectorySectionsStart } from 'modules/directory/state/directory.slice';
import { selectDirectorySections } from 'modules/directory/state/directory.selectors';

import MenuItem from '../MenuItem';

function Directory(): React.ReactElement {
  const dispatch = useDispatch();
  const sections = useSelector(selectDirectorySections);

  useEffect(() => {
    dispatch(fetchDirectorySectionsStart());
  }, []);

  return (
    <div className="directory">
      {sections.map(({ id, ...otherSectionsItems }) => (
        <MenuItem key={id} {...otherSectionsItems} />
      ))}
    </div>
  );
}

export default Directory;
