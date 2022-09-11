import axios from 'axios'
import {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Gallery/Gallery.css'
import Swal from 'sweetalert2'

function Gallery() 
{
  const [news, setNews] = useState([])

  const [image_path, setImagepath] = useState([]) 

  const [gallery_pics ,setGallerypics] = useState([])

  const [timesetting,setTimesetting] = useState([]);


  // useEffect(()=>{
    
  //     axios.get("http://localhost:3501/count")
  //     .then((response)=>{
  //       console.log(response.data)
  //       setCounter(response.data)
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

// const [data, setData] = useState([]);
// const getData = async () => {
// const { data } = await axios.get(`https://localhost:3001/count`);
//     setData(data);
//   };
//   useEffect(() => {
//     getData();
//   }, []);

const [counter_download, setCounterdownload] = useState([21, 52, 73, 4, 35, 8, 4, 9, 12, 56]);
const [counter_like, setCounterlike] = useState([10, 103, 3, 49, 35, 18, 4, 87, 90, 5]);
const [counter_share, setCountershare] = useState([1, 29, 37, 44, 50, 82, 40, 7, 6, 59]);


function onIncrement(index,type,event) 
{
  if (type == 'download')
  {   
    event.target.style.backgroundColor = "green"
    // event.currentTarget.disabled = true;
    const countersCopy = [...counter_download];
    countersCopy[index] += 1;
    setCounterdownload(countersCopy);
  }
  if (type == 'like')
  {
    event.target.style.backgroundColor = "green"
    event.currentTarget.disabled = true;
    const countersCopy = [...counter_like];
    countersCopy[index] += 1;
    setCounterlike(countersCopy);
     
    Swal.fire(
      'Thanks for liking the picture !!!',
      'I really appreciate it !!',
      'success')
  }
  if (type == 'share')
  {
    const countersCopy = [...counter_share];
    countersCopy[index] += 1;
    setCountershare(countersCopy);
  }

}


  return (
    <>
      <Navbar/>
      <div className="title">

      {/* <button className='btn btn-primary' onClick={gallery}>FetchNews</button> */}

        <h3>Welcome to my Gallery section !!!</h3>
        <h4>Here you will find some of my collections of photographs. </h4>
        
      </div> 

      <div className="main">
        <div className="first_section">
          <div className="card_section1">
            <Card style={{ width: '30rem' ,height:'20rem',textAlign:'left' }}>
              <Card.Img variant="top" src={"images/portfolio.jpg  "} />
              <Card.Body>
                <Card.Title>Old Fort Jackson, Savannah, Georgia</Card.Title>
                <Card.Text>A day well spent to understand the history of the fort and how it participated in the World War II.</Card.Text>
                <div className="buttons_section">
                  <Button className='download'href="images/portfolio.jpg"download="Savannah_trip"onClick={(event) => onIncrement(0,'download',event)}>Download | {counter_download[0]}</Button>
                  <Button className='like'onClick={(event) => onIncrement(0,'like',event)}>Like | {counter_like[0]}</Button>
                  <Button className='share'onClick={() => onIncrement(0,'share')}>Share | {counter_share[0]}</Button>
                  <a href="https://en.wikipedia.org/wiki/Savannah,_Georgia">
                    <Button className='read' >Read more </Button>
                  </a>
                </div>
              </Card.Body>
          </Card>
        </div>

          <div className="card_section2">
            <Card style={{ width: '35rem' ,height:'20rem',textAlign:'left'}}>
            <Card.Img variant="top" src={"images/FullSizeRender.png"} />
            <Card.Body>
              <Card.Title>Brooklyn Bridge, New York</Card.Title>
              <Card.Text>Probably one of the best evenings spent on this bridge. Really lucky to have my foot set on this bridge. I wish everyone could have a walk on this bridge with their loved ones...            </Card.Text>
              <div className="buttons_section">
              <Button className='download'href="images/FullSizeRender.png"download="Brooklyn_Bridge"onClick={(event) => onIncrement(1,'download',event)}>Download | {counter_download[1]}</Button>
                  <Button className='like'onClick={(event) => onIncrement(1,'like',event)}>Like | {counter_like[1]}</Button>
                  <Button className='share'onClick={(event) => onIncrement(1,'share',event)}>Share | {counter_share[1]}</Button>
                  <a href="https://en.wikipedia.org/wiki/Brooklyn_Bridge">
                    <Button className='read' >Read more </Button>
                  </a>
                </div>
            </Card.Body>
          </Card>
          </div>
        </div>
       
        <div className="second_section">
          <div className="card_section3">
            <Card style={{ width: '35rem',textAlign:'left' }}>
            <Card.Img variant="top" src={"images/IMG_2001.png"} />
            <Card.Body>
              <Card.Title>Kananaskis, Calgary, Canada</Card.Title>
              <Card.Text>
              Kananaskis Country is a park system situated to the west of Calgary, Alberta, Canada in the foothills and front ranges of the Canadian Rockies. The park is home to a myriad of activities and adventures indicative of a mountain park as well as ski hills, camping, numerous day use areas and trails.
              </Card.Text>
              <div className="buttons_section">
              <Button className='download'href="images/IMG_2001.png"download="Kananaskis"onClick={(event) => onIncrement(2,'download',event)}>Download | {counter_download[2]}</Button>
                  <Button className='like'onClick={(event) => onIncrement(2,'like',event)}>Like | {counter_like[2]}</Button>
                  <Button className='share'onClick={(event) => onIncrement(2,'share',event)}>Share | {counter_share[2]}</Button>
                  <a href="https://en.wikipedia.org/wiki/Kananaskis_Country">
                    <Button className='read' >Read more </Button>
                  </a>
                </div>
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
              <div className="buttons_section">
              <Button className='download'href="images/portfolio.jpg"download="Savannah_trip"onClick={(event) => onIncrement(3,'download',event)}>Download | {counter_download[3]}</Button>
                  <Button className='like'onClick={() => onIncrement(3,'like')}>Like | {counter_like[3]}</Button>
                  <Button className='share'onClick={() => onIncrement(3,'share')}>Share | {counter_share[3]}</Button>
                  <a href="https://en.wikipedia.org/wiki/World_of_Coca-Cola">
                    <Button className='read' >Read more </Button>
                  </a>
                </div>
            </Card.Body>
          </Card>
          </div>
        </div>
        
        <div className="third_section">
          <div className="card_section5">
            <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src={"images/IMG_2198.png"} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div className="buttons_section">
              <Button className='download'href="images/portfolio.jpg"download="Savannah_trip"onClick={(event) => onIncrement(4,'download',event)}>Download | {counter_download[4]}</Button>
                  <Button className='like'onClick={() => onIncrement(4,'like')}>Like | {counter_like[4]}</Button>
                  <Button className='share'onClick={() => onIncrement(4,'share')}>Share | {counter_share[4]}</Button>
                  <a href="https://google.com">
                    <Button className='read' >Read more </Button>
                  </a>
                </div>
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
              <div className="buttons_section">
              <Button className='download'href="images/portfolio.jpg"download="Savannah_trip"onClick={() => onIncrement(5,'download')}>Download | {counter_download[5]}</Button>
                  <Button className='like'onClick={() => onIncrement(5,'like')}>Like | {counter_like[5]}</Button>
                  <Button className='share'onClick={() => onIncrement(5,'share')}>Share | {counter_share[5]}</Button>
                  <a href="https://google.com">
                    <Button className='read' >Read more </Button>
                  </a>
                </div>
            </Card.Body>
          </Card>
          </div>
        </div>
       
        <div className="fourth_section">
          <div className="card_section7">
            <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src={"images/IMG_2619.jpg"} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="buttons_section">
                <Button className='download'href="images/portfolio.jpg"download="Savannah_trip"onClick={() => onIncrement(6,'download')}>Download | {counter_download[6]}</Button>
                  <Button className='like'onClick={() => onIncrement(6,'like')}>Like | {counter_like[6]}</Button>
                  <Button className='share'onClick={() => onIncrement(6,'share')}>Share | {counter_share[6]}</Button>
                  <a href="https://google.com">
                    <Button className='read' >Read more </Button>
                  </a>
                </div>
              </Card.Body>
          </Card>
          </div>

          <div className="card_section8">
            <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src={"images/123.jpg"} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="buttons_section">
                <Button className='download'href="images/portfolio.jpg"download="Savannah_trip"onClick={() => onIncrement(7,'download')}>Download | {counter_download[7]}</Button>
                  <Button className='like'onClick={() => onIncrement(7,'like')}>Like | {counter_like[7]}</Button>
                  <Button className='share'onClick={() => onIncrement(7,'share')}>Share | {counter_share[7]}</Button>
                  <a href="https://google.com">
                    <Button className='read' >Read more </Button>
                  </a>
                </div>
              </Card.Body>
          </Card>
          </div>

        </div>

        <div className="fifth_section">
          <div className="card_section9">
              <Card style={{ width: '35rem' }}>
              <Card.Img variant="top" src={"images/321.jpg"} />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <div className="buttons_section">
                  <Button className='download'href="images/portfolio.jpg"download="Savannah_trip"onClick={() => onIncrement(8,'download')}>Download | {counter_download[8]}</Button>
                  <Button className='like'onClick={() => onIncrement(8,'like')}>Like | {counter_like[8]}</Button>
                  <Button className='share'onClick={() => onIncrement(8,'share')}>Share | {counter_share[8]}</Button>
                    <a href="https://google.com">
                      <Button className='read'>Read more </Button>
                    </a>
                  </div>
                </Card.Body>
            </Card>
          </div>
          <div className="card_section10">
            <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src={"images/456.jpg"} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="buttons_section">
                <Button className='download'href="images/portfolio.jpg"download="Savannah_trip"onClick={() => onIncrement(9,'download')}>Download | {counter_download[9]}</Button>
                  <Button className='like'onClick={() => onIncrement(9,'like')}>Like | {counter_like[9]}</Button>
                  <Button className='share'onClick={() => onIncrement(9,'share')}>Share | {counter_share[9]}</Button>
                  <a href="https://google.com">
                    <Button className='read' >Read more </Button>
                  </a>
                </div>
              </Card.Body>
          </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery;

