import React from 'react';
const LFC = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcc519dd7c6c697c6/649ea0fb0c6d81cae0a0ed36/Liverpool_2023-24_away_kit_trio.png?auto=webp&format=pjpg&width=1920&quality=60';
const ACM = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb6fb91527b2d5f6c/647857f80acce7971a6114c8/AC_Milan_2023-24_home_kit_.png?auto=webp&format=pjpg&width=3840&quality=60';
const MCI = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5359b91c6d6ee14a/64bf85f11a932227ac4853be/Man_City_I_Third_kit_.png?auto=webp&format=pjpg&width=1920&quality=60';
const RMA = 'https://www.soccer.com/wcm/connect/e4a99c57-c3be-4caa-9e1e-3959d7aa93e3/RealMadrid1718_HERO.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-e4a99c57-c3be-4caa-9e1e-3959d7aa93e3-o0KBzTj';
const HomeCarousel = () => {
  return (
    <React.Fragment>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active c-item" >
            <a href = '/products' alt='featured'><img src={ACM} className="d-block w-100 c-img" alt="AC Milan 2023-24"/></a>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item c-item">
            <a href= '/products' alt='featured '><img src={LFC} className="d-block w-100 c-img" alt="Liverpool 2023-24"/></a>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item c-item">
            <a href = '/products' alt='featured'><img src={MCI} className="d-block w-100 c-img" alt="Man City 2023-24"/></a>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item c-item">
            <a href = '/products' alt='featured'><img src={RMA} className="d-block w-100 c-img" alt="Real Madrid 2017-18"/></a>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </React.Fragment>
  )
}

export default HomeCarousel