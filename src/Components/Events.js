function Events()
{
    
    return <div>

    <div className="event" style={{backgroundColor:'#FED8B1'}}>
       <img className = 'eventimage 'src={require('../assets/eventpic1.jpg')} alt='eventimage'/>
       <div className='eventcontent' style={{color: '#7d062d'}}>
          <h1>Event 1 name</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ac feugiat sed lectus vestibulum mattis ullamcorper. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
            Facilisis sed odio morbi quis commodo odio aenean sed. 
            </p>
           <a className='btn btn-primary' href="https://www.google.com/forms/about/" target='_blank' rel="noreferrer">Register</a>
       </div>
    </div>

    <div className="event" style={{backgroundColor:'#240750'}}>
       <img className = 'eventimage 'src={require('../assets/eventpic2.jpg')} alt='eventimage'/>
       <div className='eventcontent' style={{color:'#F8F4E1'}}>
          <h1>Event 2 name</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ac feugiat sed lectus vestibulum mattis ullamcorper. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
            Facilisis sed odio morbi quis commodo odio aenean sed. 
           </p>
           <a className='btn btn-primary' href="https://www.google.com/forms/about/" target='_blank' rel="noreferrer">Register</a>
       </div>
    </div>

    </div>
}
export default Events;