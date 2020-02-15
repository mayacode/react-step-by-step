import React from 'react';

import Header from '../Header/Header';

// export clean component for test use
export function App() {
  return (
    <div style={{ width: '1400px', margin: '0 auto' }}>
      <Header />
      <h1>Hello World!!</h1>
    </div>
  );
}

App.displayName = 'App';
App.propTypes = {};

export default App;
