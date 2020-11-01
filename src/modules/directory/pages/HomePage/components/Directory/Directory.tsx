import React, { useEffect } from 'react';

import {
  useSelectDirectorySections,
  useSelectDirectorySectionsFetching,
  useFetchDirectorySectionsStart,
} from 'hooks/state/directoryState';

import { Spinner } from 'components';
import MenuItem from '../MenuItem';

function Directory(): React.ReactElement {
  const sections = useSelectDirectorySections();
  const loading = useSelectDirectorySectionsFetching();
  const fetchDirectorySectionsStart = useFetchDirectorySectionsStart();

  useEffect(() => {
    fetchDirectorySectionsStart();
  }, []);

  if (loading) return <Spinner width="50px" height="50px" />;

  return (
    <div className="directory">
      {sections.map(({ id, ...otherSectionsItems }) => (
        <MenuItem key={id} {...otherSectionsItems} />
      ))}
    </div>
  );
}

export default Directory;
