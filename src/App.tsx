import React from 'react';
import { Button } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <h3>Hello World</h3>
      <hr />
      <code>const a = b</code>
      <Button size="lg" btnType="primary" className={"aaa"}>
        Hello
      </Button>

      <Button href="https://baidu.com" btnType="link" size='sm' target='_blank'>
        Baidu
      </Button>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
