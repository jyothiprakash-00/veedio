import React,{useEffect, useState} from 'react'
import { Modal,Form,Button, FormLabel, Col ,Row} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from './service/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [allCategories,setAllCategories]= useState([])
  const [categoryName,setCategoryName]= useState("")
  const [show, setShow] = useState(false);
  const handleAddCategory = async ()=>{
    if(categoryName){
      
      let body={
        categoryName,allVideos:[]
      }
      // make api call
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()
        // reset state
        setCategoryName("")
        // get  category
        getCategories()
      }else{
        toast.error("operation failed!! please try after sometimes....")
      }

    }else{
      toast.warning("please provide category name!!!")
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getCategories = async()=>{
    // make api call
    const {data}= await getAllCategory()
    setAllCategories(data);
  }
  console.log(allCategories);
  useEffect(()=>{
    getCategories()
  },[])

  const handlDelete = async (id)=>{
    await deleteCategory(id)
    getCategories()
  }
  const dragOver = (e)=>{
    console.log("video drag over category");
    e.preventDefault()
  }
  const videoDrop = async (e,categoryID)=>{
    // console.log("video Dropped inside category id:"+categoryID);
    const videoID = e.dataTransfer.getData("videoID")
    // console.log("video card ID",videoID);
    // get video details
    const {data}= await getAVideo(videoID)
    // console.log(data);
    // get category details
    const selectedCategory = allCategories?.find(item=>item.id===categoryID)
     selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    // make api call to update category
    await updateCategory(categoryID,selectedCategory)
    getCategories()


  }
  return (
    <>
    <div className="d-grid ms-3">
      <button onClick={handleShow} className='btn btn-info'>Add New Category</button>
    </div>
    {
      allCategories.length>0?allCategories?.map(item=>(
        <div className="mt-3 ms-3 border rounded p-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className="d-flex justify-content-between align-items-center">
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>handlDelete(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
          <Row>
            {
              item?.allVideos &&
              item?.allVideos.map(card=>(
                <Col sm={12}>
                  <VideoCard displayData={card} insideCategory={true}/>
                </Col>
              ))
            }
          </Row>
        </div>
      )): <p className='fw-bolder fs-5 text-danger'>No categories are added!!!</p>

    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Form className='border border-secondary rounded p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FormLabel>Enter category Name</FormLabel>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
      </Form.Group>
    
       </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer 
      position='top-center'
      theme='colored'
      autoClose={2000}/>
    </>
  )
}

export default Category