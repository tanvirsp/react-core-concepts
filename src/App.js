import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const products = [
    {name: 'Photoshop', price: '$99'},
    {name: 'Illustrator', price: '$150'},
    {name: 'PDF Reader', price: '$10'}
  ];

 
  return (
    <div className="App ">
      <header className="App-header">
        <Counter></Counter>
        {
          // products.map(pd => <Product product={pd}></Product>)
          
        }
      <Users></Users>
      </header>
    </div>
  );
}


function Users(){
  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))

  }, [])


  return (
    <div>
      {
        users.map( user => <li>{user.name}</li>)
      }

    </div>
  )

}


function Counter(){
  const btnStyle = {
    backgroundColor: 'yellow',
    color: 'black',
    fontSize: '25px',
    padding: '20px 45px',
    margin: '5px',
    border: 'none',
  }

  const [count, setCount] = useState(10);
  const handleIncrease = ()=>setCount(count + 1);
  const handleDecrease = ()=>{
    count >0 ? setCount(count-1): alert("Nagetive Value is not allowed")
  };

  return(
    <div>
      <h1>Count: {count}</h1>
      <button style={btnStyle} onClick ={handleDecrease}>Decrease</button>
      <button style={btnStyle} onClick ={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const container ={
    backgroundColor: '#f7f7f7',
    width: '300px',
    height: '300px',
    borderRadius: '10px',
    color: 'black',
    marginBottom: '5px',
  }

  const {name, price} = props.product
  return(
    <div style={container}>
      <h2>{name}</h2>
      <h1>{price}</h1>
    </div>
  )
}





export default App;


