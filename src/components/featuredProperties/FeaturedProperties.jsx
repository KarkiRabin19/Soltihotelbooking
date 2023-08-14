import "./FeaturedProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fb">
    <div className="fpItem">
        <img src="/assets/bed.jpg" alt="" className="fb" />
        <span className="fpName">Solatile Hotel</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from Rs1000</span>
        <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
      <img src="/assets/Bedroom.jpg" alt="" className="fb" />
      <span className="fpName">Everest Hotel</span>
      <span className="fpCity">Baneshwor</span>
      <span className="fpPrice">Starting from Rs2000</span>
      <div className="fpRating">
          <button>9.5</button>
          <span>Exceptional</span>
      </div>
    </div>
    <div className="fpItem">
        <img src="/assets/mp.jpeg" alt="" className="fb" />
        <span className="fpName">Sunshine Resort Pokhara</span>
        <span className="fpCity">Pokhara</span>
        <span className="fpPrice">Starting from Rs1000</span>
        <div className="fpRating">
            <button>9.3</button>
            <span>Excellent</span>
        </div>
      </div>
      </div>
  
  )
}

export default FeaturedProperties
