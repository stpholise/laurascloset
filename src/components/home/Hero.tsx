 import Imge from '../../assets/image-removebg-preview 1.svg'
 import ArrowRight from '/icons/utility/right-arrow.svg'

const Hero = () => {
  return (
    <div className="w-full flex md:flex-row  flex-col justify-center items-center md:h-[444px] lg:h-[645px]   ">    
        <div className="lg:w-[930px] md:w-[600px] w-full h-80 md:h-[444px]   lg:h-[645px] flex  flex-col border justify-center items-center  md:flex-row  bg-[#111827] md:py-20 md:px-12 lg:py-28 lg:px-20 striped-bg ">
            <div className="lg:p-10 lg:bg-[#1F2937] flex flex-col gap-4  md:w-80 md:h-80 lg:w-[556px] lg:h-96 md:flex md:flex-col md:gap-7 lg:gap-14  ">
                <div className="">
                    <h1 className="font-semibold text-4xl flex flex-col gap-2 py-2 md:text-4xl   lg:text-[56px] text-white lg:flex lg:flex-col">
                        <span>Get up to 30% off</span> <span className="text-[#F7C59F]">New Arrivals</span> 
                    </h1>
                    <p className="text-[#F3F4F6]">Introducing our latest collection of products</p>
                </div>
                <button className="border cursor-pointer md:text-base text-sm flex items-center justify-start uppercase gap-4 px-4 border-[#fafafa] font-semibold text-[#fafafa]  w-fit h-10 md:h-11" >Place your Order <img src={ArrowRight} alt=""  /></button>
            </div>
        </div>
        <div className="lg:w-[500px]  md:w-96 lg:h-[645px] h-full bg-[#F7C59F]   relative">
            <div className="lg:w-80 md:w-60 z-20 md:h-60 lg:h-80 rounded-full bg-white absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2"> </div>
            <img src={Imge} alt="" className='absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 z-40 lg:w-80 lg:h-[600px] md:w-72 md:h-11/12 ' />
        </div>
    </div>
  )
}

export default Hero