
import '../Css/Posts.css';
import UseState from './UseState';
import Card from './Card';
import react,{useState, useEffect } from 'react';

function Posts() {

  const [state,setState] = useState([]);

  useEffect(() =>{
     async function getData(){
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      var res = await data.json();
      setState(res);
      
     }

     getData();
    //  console.log(res);
  },[])

  return (
    <div className="section">
      
      {
       state.map((element,index) =>{
        return (
        <Card title={element.title} body={element.body} index={element.index}/>
        )
       }) 
      }
     
    </div>
    
  );
}

export default Posts;
