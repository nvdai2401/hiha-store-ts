import React, { useEffect } from 'react';

import {
  useSelectDirectorySections,
  useSelectDirectorySectionsFetching,
  useFetchDirectorySectionsStart,
} from 'hooks/state/directoryState';

import { Spinner } from 'components';
import DirectoryItem from '../DirectoryItem';

function Directory(): React.ReactElement {
  const sections = useSelectDirectorySections();
  const loading = useSelectDirectorySectionsFetching();
  const fetchDirectorySectionsStart = useFetchDirectorySectionsStart();

  useEffect(() => {
    fetchDirectorySectionsStart();
  }, [fetchDirectorySectionsStart]);

  if (loading) return <Spinner classes="m-t-210" />;

  return (
    <div className="c-directory">
      {sections.map((section) => (
        <DirectoryItem key={section.id} {...section} />
      ))}
    </div>
  );
}

export default Directory;
