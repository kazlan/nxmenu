import Head from 'next/head'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className="container mx-auto px-8">
      <nav className="flex flex-wrap min-w-20 items-center justify-between p-4">
        <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
          <a className="text-xl text-indigo-600 font-semibold font-heading" href="#">
            <img src="logotrans.png" className="img-fluid" alt="Optica mar" />
          </a></div>
          <div className="block lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">Products</a>
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">Team</a>
            <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">Customers</a>
          </div>
        <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">Blog</a>
          <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">FAQ</a>
          <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">Contact</a>
        </div>
      </nav>
      <div className="mx-auto px-8">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}
