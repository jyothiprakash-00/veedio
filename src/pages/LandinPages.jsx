import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandinPages() {
  const navigateByUrl= useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
      <Col></Col>
     <Col lg={5}>
     <h3>Welcome to<span className='text-warning'> Media player</span></h3>
     <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores tempora aliquam velit unde eveniet, officiis incidunt hic ullam non amet, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus accusantium explicabo error quas provident esse quis, quidem voluptatem cumque itaque atque debitis rem voluptas ipsum illo id. Voluptas, qui repellat. minus quas mollitia suscipit rem quos soluta repudiandae molestiae?</p>
     <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get Started<i className="fa-solid fa-arrow-right fa-beat ms-2"></i></button>
     </Col>
     <Col lg={5}>
      <img className='img-fluid' src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
     </Col>

    </Row>
    <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
      <h3>Features</h3>
      <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100" >
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="  http://media.giphy.com/media/tqfS3mgQU28ko/giphy.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media1.tenor.com/images/c0f2dda00ba36eb6aa67e2c0aabfe112/tenor.gif?itemid=15283013" />
      <Card.Body>
        <Card.Title>Categorical videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card> 
    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/e8/f2/81/e8f28121eba19ac9b346358e4d7d66e4.gif" />
      <Card.Body>
        <Card.Title>Watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>  </div>

    </div>
    <div className="container border rounded p-5 border-secondary  mt-5 d-flex align-items-center justify-content-between w-100 mb-5">
      <div className="col-lg-5">
        <h3 className='mb-5 text-warning'>Simple, Fast and Powerful</h3>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laudantium quia nihil provident, animi minus nam maxime deserunt accusantium, nostrum, rerum eligendi sapiente ipsum! Cum earum quaerat iste minus quisquam!</h6>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Categories video</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laudantium quia nihil provident, animi minus nam maxime deserunt accusantium, nostrum, rerum eligendi sapiente ipsum! Cum earum quaerat iste minus quisquam!</h6>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laudantium quia nihil provident, animi minus nam maxime deserunt accusantium, nostrum, rerum eligendi sapiente ipsum! Cum earum quaerat iste minus quisquam!</h6>
      </div>
      <div className="video col-lg-6">
      <iframe width="100%" height="378" src="https://www.youtube.com/embed/ZmISyAE71Cc" title="Beautiful Wake Up Morning Music - Happy &amp; Positive Energy - Morning Meditation Music For Relaxation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
    </>
  )
}

export default LandinPages