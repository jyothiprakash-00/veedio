import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../components/service/allAPI'
function WatchHistory() {
  const [history,setHistory] = useState([])
  const handleHistory = async()=>{
    //make a api call
    const {data} = await getAllHistory()
    setHistory(data);
  }
  console.log(history);
  useEffect(()=>{
    handleHistory()
  },[])

  
  const handleDeleteHistory= async (id)=>{
    // make api call
    await deleteHistory(id)
    // get remaining history
    handleHistory()
  }
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between ">
      <h3>Watch History</h3>
      <Link to={"/home"} className='d-flex align-items-center' style={{textDecoration:'none',fontSize:'20px',color:'white'}}><i className="fa-solid fa-arrow-left-long fa-beat me-2"></i>Back to Home</Link>

    </div>
    
      <table   className='table mt-5 mb-5 container '>
        <thead>
         <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
         </tr>
        </thead>
        <tbody>
      {   history?history?.map((item,index)=>(
        <tr key={item?.id}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
            <td>{item?.timeStamp}</td>
            <td><button onClick={(e)=>handleDeleteHistory()} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>)):<p className='fw-bolder fs-5 text-danger'>Nothing to display!!!</p>
          

      }
       
        </tbody>
      </table>
    
    </>
  )
}

export default WatchHistory