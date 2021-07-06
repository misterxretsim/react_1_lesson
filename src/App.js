import './App.css';
import Message from './Message';

const myMsg = 'Hello from App.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Message msg={myMsg}/>
      </header>
    </div>
  );
}

export default App;
