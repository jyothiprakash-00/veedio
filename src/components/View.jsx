import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { Row,Col } from 'react-bootstrap'
import { getAllVideos } from './service/allAPI';

function View({uploadVideoServerResponse}) {
  const [deleteVideoCard, setDeleteVideoCard]=useState(false)
  const [allVideos,setAllVideos]=useState([])
  const getAllUploadedVideos = async ()=>{
    // make api call getallvideos
    const {data} = await getAllVideos()
    setAllVideos(data);
  }
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoCard(false)
    getAllUploadedVideos()}
,[uploadVideoServerResponse,deleteVideoCard] )
// console.log(allVideos );
  return (
    <>
    <Row>
     {
      allVideos.length>0?allVideos.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard setDeleteVideoCard={setDeleteVideoCard} displayData={video}/>
      </Col>
      ))
      :
      <p className='fw-bolder fs-5 text-danger'>Nothing to Display</p>
     }
      </Row>
     
      </>
  )
}

export default View