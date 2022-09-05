import axios from 'axios'
import {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Gallery/Gallery.css'



function Gallery() 
{
  const [news, setNews] = useState([])

  const [image_path, setImagepath] = useState([]) 

  const [gallery_pics ,setGallerypics] = useState([])

  // useEffect(()=>{
    
  //     axios.get("http://localhost:3501/getimages")
  //     .then((response)=>{
  //       console.log(response.data)
  //       setGallerypics(response.data)
  //     })
    
  // },[])


  const gallery = ()=>
  {
    axios.get("http://localhost:3501/getimages")
    .then((response)=>{
      response.data.map(image=>{
        console.log(image.image.data.data)
        return <div className="rt">
          <img src={image.image.data} />
          </div>

      })
      
      // setGallerypics(response.data.image)
    })
  }


  




  // const dispatch = useDispatch();

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=889a2b39120c4636ae66833b27dcac39")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }

  const d = ()=>
  {
    axios.get("http://localhost:3501/data")
    .then((response) =>{
      console.log(response)
    })
  }

const fetch_image = ()=>
{
  axios.get("http://localhost:3501/images_sharing")
  .then((response)=>{
    console.log(response.data.image_path)
    setImagepath(response.data.image_path)
  })
}





  return (
    <>
      <Navbar/>
      <div className="title">
        <h3>Welcome to my Gallery section !!!</h3>
      </div>
      <div className="main">

        <div className="card_section">
          <Card style={{ width: '30rem' ,height:'20rem', }}>
          <Card.Img variant="top" src={"images/portfolio.jpg"} />
          <Card.Body>
            <Card.Title>Savannah, Georgia</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="card_section">
          <Card style={{ width: '35rem' ,height:'20rem'}}>
          <Card.Img variant="top" src={"images/FullSizeRender.png"} />
          <Card.Body>
            <Card.Title>Brooklyn Bridge, New York</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="card_section">
          <Card style={{ width: '35rem' }}>
          <Card.Img variant="top" src={"images/IMG_2001.png"} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="card_section">
          <Card style={{ width: '35rem' }}>
          <Card.Img variant="top" src={"images/IMG_2121.png"} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="card_section">
          <Card style={{ width: '35rem' }}>
          <Card.Img variant="top" src={"images/IMG_2198.png"} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="card_section">
          <Card style={{ width: '35rem' }}>
          <Card.Img variant="top" src={"images/IMG_2500.jpg"} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="card_section">
          <Card style={{ width: '35rem' }}>
          <Card.Img variant="top" src={"images/IMG_2619.jpg"} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </div>
    </div>
     
    </>
  )
}

export default Gallery;