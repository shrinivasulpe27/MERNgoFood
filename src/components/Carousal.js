import React from 'react'

export const Carousal = () => {
  return (
    <div>
        
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
      </form>
    </div>
    <div className="carousel-item active">
      <img src="https://www.wallpaperflare.com/static/226/1021/261/food-tomatoes-hamburgers-salad-wallpaper.jpg" className="d-block w-100" 
      style={{filter: "brightness(30%)"}} alt="Hello"/>
    </div>
    <div className="carousel-item">
      <img src="https://tse2.mm.bing.net/th?id=OIP.4PKS2_RBBJLhE7ttUn9KSgHaEK&pid=Api&P=0&h=180" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}} />
    </div>
    <div className="carousel-item">
      <img src="https://tse3.mm.bing.net/th?id=OIP.QgQo4hNgxc-hdqtzD2ZaSAHaEo&pid=Api&P=0&h=180" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
