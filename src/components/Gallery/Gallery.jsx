import axios from 'axios'
import {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'

// import {useDispatch} from 'react-redux';
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
    <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
            <button className='btn btn-primary' onClick={gallery}>FetchNews</button>

          </div>
        </div>
      </div>

      return <div>{gallery()}</div>


      {/* <div className="container">
        <div className="row">
          {
            gallery_pics.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value}</h5>
                      <p className="card-text">{value}</p>
                      <a href="#" className="btn btn-primary">Main</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div> */}

        {/* <div className='photos'>
          {/* {fetch_image()} */}
          {/* {gallery()} */}
          {/* <img src ={image_path}/>
        </div> */}

        {/* <div className='photo'>
          <div className='row'>
          {
            gallery_pics.map((value,index) =>{
              return (
                <div key = {index} className="col-4">
                  <div className='card' style={{width:"18rem"}}>
                    <img src={value} className="card-img-top"/>
                    <div className='card-body'>
                      <h5 className='card-title'>{value}</h5>
                      <p className='card-text'>{value}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div> */} */}

      {/* </div> */}
    </>
  )
}

export default Gallery;