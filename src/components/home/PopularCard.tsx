interface Popular {
    title: string; 
    image: string;
    oldPrice: number;
    newPrice: number; 
  }

const PopularCard = ({title, image, oldPrice, newPrice} : Popular) => {
  return (
    <div>
        <div className="popular-card flex flex-col items-start justify-center   gap-2">
            <div className="w-full">
                <img src={image} alt={title} className="h-80 object-cover w-full" />
            </div>
            <div className="">
                <p className="text-sm text-[#374151]">{title}</p>
            </div>
            <div className=" flex items-center justify-between w-full text-sm">
                <div className="price flex gap-4">
                    <span className="old-price font-semibold">N{newPrice}</span>
                    <span className="new-price text-gray-400 line-through">N{oldPrice}</span>
                </div>
                <button className="text-sm font-semibold ">
                    Add to Cart
                </button>
            </div>
         
        </div>
    </div>
  )
}

export default PopularCard