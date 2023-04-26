import logo from './logo.svg';
import styles from "./App.module.css"
import './App.css';
import { Publish } from './Publish';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}*/
export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Publicaciones pendientes</h1>
      </header>
      <main>
        <ul>
          <Publish />
        </ul>
      </main>
    </div>
  );
}
export default App;
