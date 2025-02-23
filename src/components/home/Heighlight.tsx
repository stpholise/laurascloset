
import { clsx } from 'clsx' 
interface HeighlightProps {
    title: string;
    description: string;
    image: string;
    percentOff: number;
    code: string;
    link?:string;
    colSpan?: number;
    length: number;
    index: number;
  }

  const Heighlight = ({title, description, percentOff,  code,   image, colSpan, length, index} : HeighlightProps) => {

   
  return ( 
    
    <div className={`embla__slide min-w-11/12  md:min-w-md lg:min-w-min  lg:w-full   ${clsx(
      { 
        'mr-4': index === length - 1,
        'lg:mr-0': index === length - 1,
        'ml-0': index === 0,
        'lg:ml-0': index === 0,
        'lg:col-span-2': colSpan,
      }
    )}  relative overflow-hidden  md:h-80 md:w-full h-72 w-full   lg:h-[500px]`}> 
   { image && <img src={image} alt="" className="w-full h-full object-cover" />}
      <div className={`flex flex-col absolute top-0 left-0 right-0 bottom-0 w-full items-center justify-center  bg-[#0000000d]  px-12`}>
        <div className="">
          <h2 className="capitalize text-3xl md:text-4xl  lg:text-[56px] font-samibold text-center text-[#FAFAFA]">{title}  </h2>
        </div>
        <div className="uppercase flex flex-col items-start justify-center absolute bottom-4 left-4 bg-[#0000004d] text-[#FAFAFA] p-3 ">
          <h4 className="font-semibold text-base">{description}</h4>
          <p className=" text-xs font-medius">price of {percentOff}% off</p>
          <p className="font-mixed text-sm"> Discount Code {code}</p>
     
        </div>
      </div>
    </div>
  )
}

export default Heighlight