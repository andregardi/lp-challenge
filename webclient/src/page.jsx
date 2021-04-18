var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
       
          
          
          <section className="lastVisited">
            <h2 className="sectionTitle">LAST VISITED</h2>
            <div className="shelfsContainer">
              <div className="shelf">
                <div className="propertyImageBox">
                  <img src="img/property-6.jpg" alt="property" className="propertyImage" />
                </div>
                <div className="propertyInfos">
                  <p className="propertyPrice">$<span>10,000.000</span></p>
                  <p className="propertyView">total view:<span>0</span></p>
                </div>
              </div>
              <div className="shelf">
                <div className="propertyImageBox">
                  <img src="img/property-7.jpg" alt="property" className="propertyImage" />
                </div>
                <div className="propertyInfos">
                  <p className="propertyPrice">$<span>10,000.000</span></p>
                  <p className="propertyView">total view:<span>0</span></p>
                </div>
              </div>
              <div className="shelf">
                <div className="propertyImageBox">
                  <img src="img/property-8.jpg" alt="property" className="propertyImage" />
                </div>
                <div className="propertyInfos">
                  <p className="propertyPrice">$<span>10,000.000</span></p>
                  <p className="propertyView">total view:<span>0</span></p>
                </div>
              </div>
              <div className="shelf">
                <div className="propertyImageBox">
                  <img src="img/property-9.jpg" alt="property" className="propertyImage" />
                </div>
                <div className="propertyInfos">
                  <p className="propertyPrice">$<span>10,000.000</span></p>
                  <p className="propertyView">total view:<span>0</span></p>
                </div>
              </div>
              <div className="shelf">
                <div className="propertyImageBox">
                  <img src="img/property-10.jpg" alt="property" className="propertyImage" />
                </div>
                <div className="propertyInfos">
                  <p className="propertyPrice">$<span>10,000.000</span></p>
                  <p className="propertyView">total view:<span>0</span></p>
                </div>
              </div>
            </div>
          </section>
       
      </div>
    );
  }
});