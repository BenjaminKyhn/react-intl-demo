import logo from './logo.svg';
import './App.css';
import {FormattedMessage, FormattedNumber} from 'react-intl';

function App() {
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
        <p>
            <FormattedMessage
                id="app.text"
                defaultMessage="Hello, welcome {user}"
                description="Welcome message"
                values={{ user: "John Doe" }}/>
        </p>
      <a href="https://www.positronx.io" target="_blank" rel="noopener noreferrer">
        <FormattedMessage
            id="app.link"
            defaultMessage="Go to link"
            description="Check website"/>
      </a>
        <p>
            <FormattedNumber value={19} style="currency" currency="DKK" />
        </p>

        <p>
            <FormattedMessage
                id="reminder.item.product"
                values={{ count: 1 }}
                defaultMessage="denne er blot en placeholder hvis den ikke kan finde en oversættelse"
            />
        </p>
    </div>
  );
}

export default App;
