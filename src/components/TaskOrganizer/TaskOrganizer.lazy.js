import React, { lazy, Suspense } from 'react';

const LazyTaskOrganizer = lazy(() => import('./TaskOrganizer'));

const TaskOrganizer = props => (
  <Suspense fallback={null}>
    <LazyTaskOrganizer {...props} />
  </Suspense>
);

export default TaskOrganizer;
