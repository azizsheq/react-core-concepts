import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Anwar', 'Kamal', 'Robin', 'Chandu']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'PDF Reader', price: '$60.99'},
    {name: 'Editor', price: '$80.99'}
  ]
  const productName = products.map(product => product.name);
  // console.log("HERE : ",productName);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {/* dynamic li */}
          {
            names.map(name => <li>{name}</li>)
          }
          {/* general li  */}
          <li>{names[0]}</li>
          <li>{names[1]}</li>
          <li>{names[2]}</li>
          <li>{names[3]}</li>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <h1 className="" style={{color: "blue"}}>My Heading</h1>
        <Person name="Rubel" age="22"></Person>
        <Person name="Jamal" age="44"></Person>
        <Person name={names[0]} age="66"></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  // destructuring the object 
  const {name, price} = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      {/* <h2>{props.name} </h2>
      <h1>{props.price}</h1> */}
      {/* <h2>{props.product.name} </h2>
      <h1>{props.product.price}</h1>  */}
      <h2>{name} </h2>
      <h1>{price}</h1> 
      <button>Buy now</button>
    </div>
  );
}
function Person(props) {
  const nameStyle ={
    color: 'green',
  }
  // console.log(props);
  return (
    <div style={{border:'2px solid red', margin:'10px'}}>
      <h2>Name: <span style={nameStyle}>{props.name}</span></h2>
      <p>Age is {props.age}</p>
    </div>
  ); 
}

// declaring a state
function Counter(){
  // setting the hook 
  const [count, setCount] = useState(10);
  // multi line arrow function
  // const handleIncrease = () => {
  //   // console.log('clicked')
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  // one line arrow function
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count : {count}</h1>
      {/* calling the function */}
      {/* <button onClick={handleIncrease}>Increase</button> */}

      {/* without calling the function  */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

// dynamic data loading 
function Users() {
  const [users, setUsers] = useState([]);
  // useEffect is being used to load data automatically
  // useEffect is a default 
  useEffect(() => {
    // console.log("Calling Effect");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  // [] is used to stop reloading again and again
  return (
    <div>
      <h1>Dynamic Users : {users.length}</h1>
      {/* {
        console.log(users)
      } */}
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

export default App;