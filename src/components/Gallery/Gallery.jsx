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
    axios.get("http://localhost:3001/getimages")
    .then((response)=>{
      response.data.map(image=>{
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(image.image.data))
        );
        return <img src={`data:image/png;base64,${base64String}`} width="300"/>
        // <img src={`data:image/png;base64,${product.img.data}`} />

        console.log(image.image.data  )
        return <div className="rt">
          <img src={'data:image/png;base64'} />
          </div>

      })
      
      // setGallerypics(response.data.image)
    })
  }


  





//   const fetchNews = () => {
//     axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=889a2b39120c4636ae66833b27dcac39")
//       .then((response) => {
//         console.log(response);
//         setNews(response.data.articles)
//       })
//   }

//   const d = ()=>
//   {
//     axios.get("http://localhost:3501/data")
//     .then((response) =>{
//       console.log(response)
//     })
//   }

// const fetch_image = ()=>
// {
//   axios.get("http://localhost:3001/getimages")
//   .then((response)=>{
//     console.log(response.data.image_path)
//     setImagepath(response.data.image_path)
//   })
// }





  return (
    <>
      <Navbar/>
      <div className="title">

      <button className='btn btn-primary' onClick={gallery}>FetchNews</button>

        <h3>Welcome to my Gallery section !!!</h3>
        <h4>Here you will find some of my collections of photographs. </h4>
        <div className="card_section1">
          <Card style={{ width: '30rem' ,height:'20rem',textAlign:'left' }}>
            <Card.Img variant="top" src={"https://personalprojectriship251297.s3.amazonaws.com/FullSizeRender.png"} />
            <Card.Body>
              <Card.Title>Old Fort Jackson, Savannah, Georgia</Card.Title>
              <Card.Text>A day well spent to understand the history of the fort and how it participated in the World War II.</Card.Text>
              <Button variant="primary">Checkout more !!! </Button>
            </Card.Body>
        </Card>
        </div>
      </div>

      
      


      {/* <div className="main">

        <div className="card_section1">
          <Card style={{ width: '30rem' ,height:'20rem',textAlign:'left' }}>
            <Card.Img variant="top" src={"images/portfolio.jpg"} />
            <Card.Body>
              <Card.Title>Old Fort Jackson, Savannah, Georgia</Card.Title>
              <Card.Text>A day well spent to understand the history of the fort and how it participated in the World War II.</Card.Text>
              <Button variant="primary">Checkout more !!! </Button>
            </Card.Body>
        </Card>
        </div>

        <div className="card_section2">
          <Card style={{ width: '35rem' ,height:'20rem',textAlign:'left'}}>
          <Card.Img variant="top" src={"images/FullSizeRender.png"} />
          <Card.Body>
            <Card.Title>Brooklyn Bridge, New York</Card.Title>
            <Card.Text>Probably one of the best evenings spent on this bridge. Really lucky to have my foot set on this bridge. I wish everyone could have a walk on this bridge with their loved ones...            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="card_section3">
          <Card style={{ width: '35rem',textAlign:'left' }}>
          <Card.Img variant="top" src={"images/IMG_2001.png"} />
          <Card.Body>
            <Card.Title>Kananaskis, Calgary, Canada</Card.Title>
            <Card.Text>
            Kananaskis Country is a park system situated to the west of Calgary, Alberta, Canada in the foothills and front ranges of the Canadian Rockies. The park is home to a myriad of activities and adventures indicative of a mountain park as well as ski hills, camping, numerous day use areas and trails.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="card_section4">
          <Card style={{ width: '35rem' }}>
          <Card.Img variant="top" src={"images/IMG_2121.png"} />
          <Card.Body>
            <Card.Title>Coca-Cola World Factory, Atlanta </Card.Title>
            <Card.Text>
            The World of Coca-Cola is a museum, located in Atlanta, Georgia, showcasing the history of the Coca-Cola Company. The 20-acre complex opened to the public on May 24, 2007, relocating from and replacing the original exhibit, which was founded in 1990 in Underground Atlanta.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="card_section5">
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

        <div className="card_section6">
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

        <div className="card_section7">
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

      </div> */}
     
    </>
  )
}

export default Gallery;


