import Person from "./Person"

const App =():JSX.Element =>{
    const name="Person's name";

    return <div>
        <Person personName={name} age={4}/>
    </div>
};

export default App;