import React from 'react';

import Description from './components/Description';
import Feature from './components/Feature';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      {/* Add feature components below */}
      <Feature imgSrc="https://imgur.com/H2L3ohY.png" title="Declarative" description="React makes it painless to create interactive UIs." />
      <Feature imgSrc="https://imgur.com/IHW1mFB.png" title="Components" description="Build encapsulated components that manage their state." />
      <Feature imgSrc="https://imgur.com/LtUDB9y.png" title="Single-Way" description="A set of immutable values are passed to the component's." />
      <Feature imgSrc="https://imgur.com/agN6R4Y.png" title="JSX" description="Statically-typed, designed to run on modern browsers." />
    </div>
  );
}

export default App;
