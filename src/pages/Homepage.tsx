 
  import Hero from '../components/home/Hero'
  import PopularCard from '../components/home/PopularCard'  
  import Item1 from '../assets/itemsImage/item1.jpg'
  import Item2 from '../assets/itemsImage/item2.jpg'
  import Item3 from '../assets/itemsImage/item3.jpg'
  import Item4 from '../assets/itemsImage/item4.jpg' 
  import Chanel from '../assets/brands/chanel.svg'
  import DG from '../assets/brands/D&G.svg'
  import Dior from '../assets/brands/Dior.svg'
  import Versace from '../assets/brands/Versace.svg'
  import Zara from '../assets/brands/Zara.svg'
  import Gucci from '../assets/brands/Gucci.svg'  
  import Marquee from "react-fast-marquee"; 
  import HeighlightCont from '../components/home/HighlightWrapper'

 interface Popular {
   title: string;
   description: string;
   image: string;
   oldPrice: number;
   newPrice: number;
   link:string; 
 }
 
 interface Brands {
   name: string;
   image: string;
 }

 
   const popular: Popular[] = [
     {
       title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
       description: 'Exclusive Shoes',
       image: Item1,
       oldPrice: 200,
       newPrice: 150,
       link: 'shoes', 
     },
     {
       title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
       description: 'Exquisite Styles & Collections',
       image: Item2,
       oldPrice: 200,
       newPrice: 150,
       link: 'shoes', 
     },
     {
       title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
       description: 'New Arrivals',
       image: Item3,
       oldPrice: 200,
       newPrice: 150,
       link: 'shoes', 
     },
     {
       title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
       description: 'Exclusive Items',
       image: Item4,
       oldPrice: 200,
       newPrice: 150,
       link: 'shoes', 
     },
   ]
 
   const brands: Brands[] = [
     {
       name: 'Chanel',
       image: Chanel
     },
     {
       name: 'D&G',
       image: DG
     },
     {
       name: 'Dior',
       image: Dior
     },
     {
       name: 'Versace',
       image: Versace
     },
     {
       name: 'Zara',
       image: Zara
     },
     {
       name: 'Gucci',
       image: Gucci
     },
   ]
const Homepage = () => {
  


  return (
    <div className=' '>
     
        <Hero />

        <main className="container mx-auto sm:px-4 md:gap-16 gap-16 py-16 md:px-4 lg:px-8 flex flex-col lg:gap-20 lg:py-20">
          {/* ========================================WEEKLY HIGHLIGHTS=========================================================================== */}
          {/* ============================================================================================================================= */}
          {/* ============================================================================================================================= */}
          {/* ============================================================================================================================= */}
          {/* ============================================================================================================================= */}
          <section className="weekly-heighlight flex flex-col items-center  gap-8 lg:gap-10"> 
            <div className="flex flex-col items-center lg:gap-2">
              <h2 className="text-2xl text-[#374151] font-semibold uppercase"> This Weeks Heighlight</h2> 
              <div className="border-2 border-[#374151] w-24 rounded-4xl"></div>
            </div>
           <HeighlightCont />
          </section>
          <section className="weekly-heighlight flex flex-col items-center  gap-8 lg:gap-10"> 
            <div className="flex flex-col items-center lg:gap-2">
              <h2 className="text-2xl text-[#374151] font-semibold uppercase"> Popular this week</h2> 
              <div className="border-2 border-[#374151] w-24 rounded-4xl"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-5 lg:h-[430px] px-4">
              {
                popular.map((item, index) => (
                 <PopularCard key={index} title={item.title} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice}  />
                ))
              }
            </div>
          </section>
          <section className="weekly-heighlight flex flex-col items-center  gap-8 lg:gap-10"> 
            <div className="flex flex-col items-center lg:gap-2">
              <h2 className="text-2xl text-[#374151] font-semibold uppercase"> Brands for you</h2> 
              <div className="border-2 border-[#374151]  w-24 rounded-4xl"></div>
            </div>
            <div className="  w-full md:w-auto flex  gap-10 ">
           
                    <Marquee   gradient={false} speed={30} pauseOnHover={true} className="flex gap-4 md:hidden  ">
                      {
                        brands.map((item, index) =>(
                          <img key={`${index} ${item.name}`} src={item.image}  alt={`${item.name}`}  className='h-14 mr-8 md:hidden' />
                      
                        )
                        )
                      }
                    </Marquee>
                { 
                  brands.map((item, index) => (
                  <img key={`${index} ${item.name}`} src={item.image}  alt={`${item.name}`}  className='h-14 hidden md:flex' />
                  ))
                }
            </div>
          </section>
          
            <section className={`bg-[url('/images/summerbg.jpg')]  bg-cover bg-center bg-no-repeat  relative h-96   lg:h-[500px] `}>
              <div className="flex flex-col items-start px-8 justify-center h-full bg-transparent  gap-4">
                <h2 className=" text-2xl sm:text-4xl text-[#0D3F64] font-semibold uppercase">Summer <span className='text-red-400'> Collections</span></h2>
                <button className=" bg-white text-red-300 px-4 py-1 sm:py-2 uppercase font-semibold text-sm flex gap-4 items-center">Shop Now <span className='text-2xl'>&rarr;</span></button>
              </div>

              <div className="countdown absolute bottom-4 left-8 flex text-white items-start font-semibold gap-4">
                <div>
                  <h4 className='text-center text-xl'>07</h4>
                  <p className='text-xs sm:text-sm'>Days</p>
                </div>
                :
                <div>
                  <h4 className='text-center text-xl'>08</h4>
                  <p className='text-xs sm:text-sm'>Hours</p>
                </div>
                :
                <div>
                  <h4 className='text-center text-xl'>04</h4>
                  <p className=' text-xs sm:text-sm'>Minutes</p>
                </div>
                :
                <div>
                  <h4 className='text-center text-xl'>05</h4>
                  <p className='text-xs sm:text-sm'>Seconds</p>
                </div> 
              </div>
            </section>
        
        </main>


    </div>
  )
}

export default Homepage