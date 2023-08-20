'use client';

import store from '@/store/store';
import { Provider } from 'react-redux';

interface Prop {
  children: React.ReactNode;
}

function StoreProvider({ children }: Prop): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
