import {useState} from 'react'

interface PropsPerson{
    personName:string;
    age?:number
}

const Person=({personName,age=10}:PropsPerson)=>{
    const [clicks,setClicks] =useState(0)
    const [value,setValue]=useState('')

    const handleClick= (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setClicks(clicks+1)
    };
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    };

    return <div>
        <section>
        {`Welcome back, ${personName}!`}
        <br/>
        {`Age, ${age}!`}
        </section>

        <aside>
            <h3>{`You clicked ${clicks} times`}</h3>
            <button onClick={handleClick}>Click me</button>
        </aside>

        <aside>
            <input value={value} onChange={handleChange}></input>
        </aside>
    </div>
}

export default Person;