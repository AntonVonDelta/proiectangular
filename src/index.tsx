import ReactDOM from 'react-dom';

// Comonents
import Person from "./Person"
import Login from "./pages/Login"


const App =():JSX.Element =>{
    const name="Person's name";

    return <div>
        <Login></Login>
        <Person personName={name} age={4}/>
    </div>
};

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);