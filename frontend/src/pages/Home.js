import React from 'react'
import AddTask from '../componennts/AddTask'
import ShowGroups from '../componennts/ShowGroups'

const Home = () => {
  return (
    <div className='container'>

<header>TASK TRACKER</header>


<AddTask/>
<ShowGroups/>




    </div>
  )
}

export default Home