import { useEffect, useState } from "react";
import "../assets/styles.css"
const Counter = () => {


const [count,setCount] = useState(1);
const [counts,setCounts] = useState(1000);
const [data,setData] = useState({});

const increment = () => {
    //a++;
    console.log(count)
    setCount(count + 1)
}
console.log('rendered')
useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(json => setData(json))
   .catch(error => console.log(error))
},{})
if (!data.title){
    return <div>Loading...</div>
}

const decrement = () => {
    // a++;
    console.log(counts)
    setCounts(counts - 1)
}

    return (
        <>
            <h1> counter</h1>
            <button onClick={increment}> ---Incrementor---</button>
            <h2> {count }</h2>

            <button onClick={decrement}> ---Decrementor---</button>
            <h2> {counts}</h2>
        </>
    )

}

export default Counter;