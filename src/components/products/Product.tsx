
import Heart from '/heart 1.svg'

interface Popular {
  title: string;
  description?: string;
  image: string;
  oldPrice: number;
  newPrice: number; 
  tag?: string;
  orders:number;
}

const Product = ({title,   image, newPrice, oldPrice, orders, tag}: Popular) => { 
  return (
    <div className="flex flex-col gap-4 lg:max-w-80  border border-gray-100 relative">
      <img src={image} alt="" className="h-80" />
      <div className="flex flex-col gap-3 p-3 ">
        <p className="text-sm font-medium text-[#1F2937]">{title}</p>
        <div className="flex gap-8 justify-between items-start">
          <div className="">
            <p className="text-lg font-semibold text-[#374151] ">{newPrice} </p>
            <p className="text-[#9CA3AF] line-through">{oldPrice} </p>
          </div>
          
          <div className="">
            <p  className="text-[#4B5563] ">{orders} orders</p>
          { tag && <button className="bg-black py-1 px-4 text-xs text-white">{tag}</button>}
          </div>
        </div>
      </div>
      <div className="absolute top-4 p-3 right-4 w-12 h-12 bg-[#0000004d] flex justify-center items-center">
        <img src={Heart} alt="" className='' />
      </div>
    </div>
  )
}

export default Product