import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Posts></Posts>
      <h1>hello recap jsX</h1>
      <District name="Dhaka" specialty="maramari"></District>
      <District name="Jhenaidah" specialty="vodrota" ></District>
      <District name="khulna" specialty="quality" ></District>
    </div>
  );
}
function Posts(){
  const [posts, setPosts] = useState([]);

  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])

  return(
    <div>
      <h1>Posts {posts.length}</h1>
      {
        posts.map(post => <Post name={post.title}></Post>)
      }
    </div>
  )
}

function Post(props){
  return(
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}

const districtStyle ={
  backgroundColor : 'crimson',
  padding : '20px',
  margin : '20px'

}



function District(props){
  const  [power, setPower] = useState(1);
  const boostPower = () =>{
    const powerBoost = power * 2;
    setPower(powerBoost);
  }
  return(
    <div style={districtStyle}>
      <h2>Name : {props.name} </h2>
      <h3>Specialty : {props.specialty}</h3>
      <p>Power : {power}</p>
      <button onClick={boostPower}>boost the power</button>
    </div>
  )
}

export default App;
