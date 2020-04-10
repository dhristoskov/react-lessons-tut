import React from 'react';

import Layout from './component/Layout/Layout'
import DestinationMain from './container/DestinationMain/DestinationMain';
import DestinationContextProvider from './context/destinationContext/destinationContext';

import './styles/App.css';

function App() {
  return (
    <DestinationContextProvider>
      <Layout>
        <DestinationMain />
      </Layout>
    </DestinationContextProvider>
  );
}

export default App;
