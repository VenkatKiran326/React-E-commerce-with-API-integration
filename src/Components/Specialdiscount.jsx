import React from 'react'
import { Link } from 'react-router-dom'

const Specialdiscount = () => {


  return (
    <>
    <section style={{
    backgroundImage: "url('https://woodmart.xtemos.com/wp-content/uploads/2017/10/xmas-row-bg.jpg?id=12507')",
    backgroundSize: 'cover',
    backgroundPosition: 'center', height: '60vh',justifyContent:'center',alignContent: 'center'
  }}>
     <div className="container p-5 text-center WinterHolidays text-white">
        <div className="row">
          <div className="col-md-6">
            <h6 className="holiday-subtitle mypara">Special discount offers
</h6>

            <h3 className='myHeading'>Christmas Giveaway Event reader will be distracted.</h3>
            
            <Link to={'/pages'}>
            <button className="m-3  colored">VIEW MORE</button>
            </Link>
            <Link to={'/shopnow'}>
            <button className="m-3 ">SHOP NOW</button>
            </Link>

          </div>
          <div className="col-md-6">
<img
  src="https://woodmart.xtemos.com/wp-content/uploads/2017/10/xmas-santa-img.png"
  alt="xmas santa"
  title="xmas-santa-img"
  width={537}
  height={279}
  loading="lazy"
  decoding="async"
  className="vc_single_image-img attachment-full"
  
/>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Specialdiscount