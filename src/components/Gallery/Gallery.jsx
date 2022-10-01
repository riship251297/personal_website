import axios from 'axios'
import {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Gallery/Gallery.css'
import Swal from 'sweetalert2'
import {Container} from 'react-bootstrap';
import Topbar from '../Topbar/Topbar';


function Gallery() 
{
  const [counter_download, setCounterdownload] = useState([21, 52, 73, 4, 35, 8, 4, 9, 12, 56,77]);
  const [counter_like, setCounterlike] = useState([10, 103, 3, 49, 35, 18, 4, 87, 90, 5,51]);
  const [counter_share, setCountershare] = useState([1, 29, 37, 44, 50, 82, 40, 7, 6, 59,65]);


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
    <Container>
      {/* <Navbar/> */}
      <Topbar/>

      <Container>
        <div className="title">

        {/* <button className='btn btn-primary' onClick={gallery}>FetchNews</button> */}
          <div className='title_sec'>
          <h3>WELCOME TO MY GALLERY SECTION !!!</h3>
          </div>
          <h5 className='checks'>Preserving memories through photography is one of the best ways to share the past with the future. It allows you to look back on life's biggest achievements and the smallest moments all at once while stirring up stories of years gone by
            or recent weeks. </h5>
          
        </div> 

        <div className="main">
          <div className="first_section">
            <div className="card_section1">
              <Card style={{ width: '30rem' ,height:'10rem',textAlign:'left' }}>
                <Card.Img variant="top" src={"images/portfolio.jpg  "} />
                <Card.Body>
                  <Card.Title>Old Fort Jackson, Savannah, Georgia</Card.Title>
                  <Card.Text style={{textAlign:'justify'}}>A day well spent to understand the history of the fort and how it participated in the World War II.
                  History comes alive through live demonstrations & storytelling and displays. </Card.Text>
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
                <Card.Text style={{textAlign:'justify'}}>Probably one of the best evenings spent on this bridge. This bridge is great to walk over and take the views of Brooklyn and Manhattan. Cute stores and places to eat. It is perhaps one of New York City's most popular attractions because it is so photogenic. The Brooklyn Bridge has arguably inspired more art than any other manmade structure in the United States.
                  The bridge has always attracted daredevils and showmen. If you have the time I highly recommend stroll across the bridge. Walk across whilst taking pics, then drop into DUMBO for lunch or ice cream at the Brooklyn Ice Cream Factory.  </Card.Text>
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
                <Card.Text style={{textAlign:'justify'}}>
                Experience the best of the Canadian Rockies by treating yourself to an unforgettable getaway at Kananaskis Mountain.Kananaskis is every bit as beautiful, whether you’re after difficult or easy hikes, stunning lakes, skiing & snowshoeing in winter, paddling or camping in summer, or a pampered sauna experience. 
                Kananaskis generally means "meeting of the waters.".My favourite mountain town and area before Banff. Great place to meet the locals, grab some java and do a few stops in the area.
                
                </Card.Text>
                <div className="buttons_section">
                <Button className='download'href="images/IMG_2001.png"download="Kananaskis"onClick={(event) => onIncrement(2,'download',event)}>Download | {counter_download[2]}</Button>
                    <Button className='like'onClick={(event) => onIncrement(2,'like',event)}>Like | {counter_like[2]}</Button>
                    <Button className='share'onClick={(event) => onIncrement(2,'share',event)}>Share | {counter_share[2]}</Button>
                    {/* <div id="link-box"> */}
                    {/* <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                      <li><a href="#">Link 4</a></li>
                    </ul> */}
                    {/* </div> */}
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
                <Card.Text style={{textAlign:'justify'}}>
                Immerse yourself in World of Coca-Cola, the one and only place you can explore the story of the world's most popular beverage brand. 
                It's a place where anyone can experience moments of happiness and wonder. At World of Coca-Cola, inspiration is around every corner - from the vault, to world-class art and memorabilia to more than 100 beverages to taste from around the world. With opportunities it's no wonder that the World of Coke is a must-see among the top things to do in Atlanta, Georgia.
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
                <Card.Title>Banff Mountain, Calgary, Canada</Card.Title>
                <Card.Text style={{textAlign:'justify'}}>
                  
                Stayed in Canmore for a week, visiting Banff National Park daily, and had an absolutely incredible experience! We visited all the major sites, like Lake Louise and Moraine Lake, and did lots of hiking at places like Johnston Canyon and Sundance Canyon! The beauty and diversity of the park blew me away 
                with its tall slot canyons, emerald glacial-fed lakes, and ultimately the towering mountains, especially being that I am from a very flat county full of vasts of patterned rectangular farms. 
                The town of Banff in the park was also very delightful, and the Cave and Basin National Historic Sight is worth a 
                visit with its fascinating hot springs. 
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
                <Card.Title>Wateron Park, US-Canada border crossing </Card.Title>
                <Card.Text style={{textAlign:'justify'}}>A compilation of eclectic and sophisticated artistry together with great restaurants, cute little souvenir shops and the best ice-cream parlour every! All located right on the water. Beautiful!
              
The Waterton Lake Cruise was fabulous! Over the years we have been on many day cruises on rivers, lakes, and oceans, 
and this was absolutely one of the best!Before arriving we anticipated it may be cancelled because of high winds. 
We were very surprised at how smooth the ride was in rough waters.The scenery all around Waterton Village was beautiful and memorable. 
There was so much to see and do.Waterton park and village is a great spot to visit, especially if you like the outdoors. Attractive townsite and campsites. 
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
              <Card.Img variant="top" src={"images/IMG_2619.jpg"} style={{height:'650px'}} />
                <Card.Body>
                  <Card.Title>Cameron Falls, Wateron park, Canada</Card.Title>
                  <Card.Text style={{textAlign:'justify'}}>
                  Cameron falls is one of the most beautiful and accessible sites that Waterton has to offer. It requires no hiking and is just a few short steps from the parking lot next to the Bertha Lake Trailhead
                  Cameron falls is probably one of the most photographed spots in Waterton - and for a good reason! 
                  The crystal blue waters crash down over 1.5 billion year old rocks into a sparkling pool of fresh mountain water. 
                  It is a sight to behold for people of all ages and mountain experience
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
              <Card.Img variant="top" src={"images/123.jpg"} style={{height:'400px'}}/>
                <Card.Body>
                  <Card.Title>Capitol Building, Washington DC, US</Card.Title>
                  <Card.Text style={{textAlign:'justify'}}>
                  The Capitol is among the most architecturally impressive and symbolically important buildings in the world. The Senate and the House of Representatives have met here for more than two centuries. Begun in 1793, the Capitol has been built, burnt, rebuilt, extended, and restored; today, it stands as a monument not only to its builders but also to the American people and their government.
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
                <Card.Img variant="top" src={"https://personalwebsite9.s3.amazonaws.com/1413921b-52e5-493f-b5e6-d8b8c5c53b12.JPG"} />
                  <Card.Body>
                    <Card.Title>White House, Washington DC, US</Card.Title>
                    <Card.Text style={{textAlign:'justify'}}>
                    One of America's most recognizable historical and political symbols is also the home and office of the President of the United States. We enjoyed trolling the street of Washington, eating good food and free museums. We enjoyed the convenience of visiting Maryland and Virginia. Everything is within driving distance.It is of course an iconic building you'll want to at least see from outside
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
              <Card.Img variant="top" src={"https://personalwebsite9.s3.amazonaws.com/008005f3-4187-4b41-9a90-8660511bb346.JPG"} />
                <Card.Body>
                  <Card.Title>Spartanburg, South Carolina, US </Card.Title>
                  <Card.Text style={{textAlign:'justify'}}>
                    Captured this beauty from my friend's place. It houses the Spartanburg Art Museum, Spartanburg County Regional History Museum, 
                    Science Center, Little Theatre, Ballet, Music Foundation, and other groups that were 
                    formerly located in The Arts Center on South Spring Street.
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


          <div className="sixth_section">
            <div className="card_section11">
                <Card style={{ width: '35rem' }}>
                <Card.Img variant="top" src={"https://personalwebsite9.s3.amazonaws.com/IMG_0886.jpg"} style={{height:'650px'}}/>
                  <Card.Body>
                    <Card.Title>Sikes Hall, Clemson University, South Carolina, US</Card.Title>
                    <Card.Text style={{textAlign:'justify'}}>
                    My first day and first picture in US. Lots of excitement for the upcoming challenges and beginning of a new family. Beautiful 
                    spot to start the tour of campus. I am gonna miss Clemson so much. Painful to see everyone leaving this wonderful place for 
                    their new life.

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
            <div className="card_section12">
              <Card style={{ width: '35rem' }}>
              <Card.Img variant="top" src={"https://personalwebsite9.s3.amazonaws.com/IMG_0368.jpg"} style={{height:'500px',width:'600px'}}/>
                <Card.Body>
                  <Card.Title>Sangamner, India </Card.Title>
                  <Card.Text style={{textAlign:'justify'}}>
                    The only picture we cousins share. Its been a while since we met each other. Had lots of fun that day,
                    I wish we all could meet again and just sit and remember about our childhood memories.
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
      </Container>

      </Container>
      
    </>
  )
}

export default Gallery;


// Hosted the website using Amazon's Amplify and Route 53 web service with S3 bucket as storage for 


