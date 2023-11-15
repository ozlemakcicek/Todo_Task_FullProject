// import React, { useEffect, useState } from 'react'
import AddTask from '../componennts/AddTask'
import ShowGroups from '../componennts/ShowGroups'
import axios from "axios"



const Home = ( ) => {

// const [data,setData]=useState();

const getData=async()=>{
  const response = await axios.get("http://127.0.0.1:8000/api/todo/");
  console.log(response.data);
  // setData(response.data);
}
getData();


// useEffect(() => {
// getData()

// }, []);




  return (
<>
    <h1>TASK TRACKER</h1>
    <div className='container'>

<AddTask/>
<ShowGroups/>




    </div>
    
  </>
  )
}

export default Home;