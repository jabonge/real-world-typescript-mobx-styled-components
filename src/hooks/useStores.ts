import React from 'react';

import { storeContext } from '../Context';

function useStores() {
  return React.useContext(storeContext)!;
}

export default useStores;
