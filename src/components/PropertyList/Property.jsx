import "./Property.css";



const Property = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="/assets/soltihotel.jpg"
          alt=""
          
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="/assets/sunrise apartments.jpeg"
          alt=""
         
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>100 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="/assets/resorts.jpg"
          alt=""
        
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>100 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="/assets/villas.jpeg"
          alt=""
         
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>150 hotels</h2>
        </div>
      </div><div className="pListItem">
        <img
          src="/assets/cabins.jpeg"
          alt=""
          
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>50 hotels</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Property;
