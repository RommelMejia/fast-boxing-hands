import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld 
      firstName={"Jane"} 
      lastName={"Doe"} age={21}
      hairColor={"black"}/>


      <HelloWorld 
      firstName={"john"}
      lastName={"Smith"}
      age={"88"}
      hairColor={"Brown"}/>

      <HelloWorld 
      firstName={"Millard"}
      lastName={"Fillmore"}
      age={"50"}
      hairColor={"brown"}
      />
      <HelloWorld 
      firstName={"Maria"}
      lastName={"Smith"}
      age={"62"}
      hairColor={"Brown"}   />
    </div>
  );
}


export default App;
