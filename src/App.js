import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr Mahfuz",
    job: "Singer"
  }
  var style = {
    color: "green",
    backgroundColor: "yellow"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="" style={style}>My Heading</h1>
        <h2>Printing Object : {person.name}, job is {person.job}</h2>
        <h2>Doing Sum : {22+33+44+55}</h2>
        <p style={{backgroundColor: 'tomato', color: "yellow", fontSize: '50px'}}>
          My First React Paragraph
        </p>
      </header>
    </div>
  );
}

export default App;
