import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
     <img src="https://th.bing.com/th/id/OIP.idwtrbOb4Ii1wDyDZ6Ha4AHaEK?pid=ImgDet&rs=1"
     alt=""
     className="FeaturedImg"/>
     <div className="featuredTitles">
     <h1>Pokhara</h1>
     <h2>210 properties</h2>
     </div>
     </div>
     <div className="featuredItem">
     <img src="https://th.bing.com/th/id/OIP.LBOSTjVCMLafTvMoP6bXzQHaDa?pid=ImgDet&rs=1"
     alt=""
     className="FeaturedImg"/>
     <div className="featuredTitles">
     <h1>Illam</h1>
     <h2>510 properties</h2>
     </div>
     </div>
     <div className="featuredItem">
     <img src="https://th.bing.com/th/id/OIP.Vsb8GtJytPQXCWhNEODhfQHaDh?pid=ImgDet&rs=1"
     alt=""
     className="FeaturedImg"/>
     <div className="featuredTitles">
     <h1>Mustang</h1>
     <h2>78 properties</h2>
     </div>
     </div>
    
    </div>
  )
}

export default Featured
