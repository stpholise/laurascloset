
import { useState } from 'react'
import 'animate.css';

    interface Filter {
        lable: string,
        value: string
    } 
    const filters: Filter[] = [
        {lable: 'Women', value: 'women'},
        {lable: 'Ladies', value: 'ladies'},
        {lable: 'Girls', value: 'girls'},
        {lable: 'Babies', value: 'babies'}, 
    ] 
    const brands: Filter[] = [
        {lable: 'Gucci', value: 'gucci'},
        {lable: 'Prada', value: 'prada'},
        {lable: 'Fendi', value: 'fendi'},
        {lable: 'Dior', value: 'dior'}, 
        {lable: 'Versace', value: 'versace'},
        {lable: 'Zara', value: 'zara'},
        {lable: 'Fendi', value: 'fendi'}, 
    ] 
    const categories: Filter[] = [
        {lable: 'Shoes', value: 'shoes'},
        {lable: 'Bags', value: 'bags'},
        {lable: 'Dresses', value: 'dresses'},
        {lable: 'Blouses', value: 'blouses'},
        {lable: 'Trousers', value: 'trousers'},
        {lable: 'Skirts', value: 'skirts'},
        {lable: 'Vintage', value: 'vintage'},
    ]
const Filter = () => {

    const [showFilter, setShowFilter] = useState(false)

 

    const sizes: Filter[] = [ 
        {lable: 'Small', value: 's'},
        {lable: 'Medium', value: 'm'},
        {lable: 'Large', value: 'l'},
        {lable: 'Sexy Plus Size', value: 'xl'},
        {lable: 'Plus Size', value: 'xxl'},
    ]

  return (
    <div className=" h-10 md:h-fit">
        <div className={`fixed top-0 left-0 right-0 bottom-0 ${showFilter ? 'block': 'hidden'}`} onClick={() => {setShowFilter(false)}}></div>
        <button className='flex md:hidden items-center justify-end' onClick={() => {setShowFilter(!showFilter) ; console.log(showFilter)}}>
            <p className="font-semibold text-gray-400">Filter</p>
            <div title='menu-button' className={`block md:hidden   h-9 w-9 relative cursor-pointer`} onClick={() => setShowFilter(!showFilter)}> 
                <div className={`" absolute  bg-gray-500 rounded-3xl  transition-transform duration-[600ms]  transition-top " ${showFilter ? '  rotate-[-135deg]  h-1 w-7' : 'h-1 w-7 -translate-y-1/2 -translate-x-1/2  top-1/4 left-1/2'}`}></div>
                <div className={`" absolute h-1 w-5 bg-gray-500 rounded-3xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform duration-[600ms]  transition-top "  ${showFilter ? ' opacity-0 ' : ''} `}></div>
                <div className={`" absolute h-1 w-3 bg-gray-500 rounded-3xl transition-transform duration-[600ms]  transition-top " ${showFilter ? '  rotate-[-45deg]  w-7  ' : 'top-3/4 left-1/2  -translate-y-1/2 -translate-x-1/2 '}`}></div>
            </div>
            </button>
        <div className={` transition-all duration-500 flex flex-col gap-8 md:gap-14 md:justify-start  md:items-start md:sticky md:top-0 md:bottom-0  md:opacity-100 md:visible md:z-30   bg-gray-200 md:bg-gray-100 px-4 py-10   md:w-72 lg:w-80 md:px-4 md:py-6 text-left fixed  top-16 left-0 right-0 overflow-y-scroll md:overflow-y-auto h-screen md:flex-col md:flex  md:h-fit
            ${showFilter ? 
                ' animate__animated  animate__fadeInUp z-50   ' 
                : 'animate__animated hidden  opacity-0 invincible md:opacity-100   md:text-opacity-100 md:visible md:z-30 z-0 '}`}
            >

            <div className="closeBtn absolute top-4 right-4">  
                    <button title='menu-button' className={`block md:hidden   h-9 w-9 relative cursor-pointer `} onClick={() => setShowFilter(!showFilter)}> 
                        <div className={`" absolute  bg-gray-500 rounded-3xl  transition-transform duration-[600ms]  transition-top " ${showFilter ? '  rotate-[-135deg]  h-1 w-7' : 'h-1 w-7 -translate-y-1/2 -translate-x-1/2  top-1/4 left-1/2'}`}></div>
                        <div className={`" absolute h-1 w-5 bg-gray-500 rounded-3xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform duration-[600ms]  transition-top "  ${showFilter ? ' opacity-0 ' : ''} `}></div>
                        <div className={`" absolute h-1 w-3 bg-gray-500 rounded-3xl transition-transform duration-[600ms]  transition-top " ${showFilter ? '  rotate-[-45deg]  w-7  ' : 'top-3/4 left-1/2  -translate-y-1/2 -translate-x-1/2 '}`}></div>
                    </button> 
            </div>
            <div className="prices ">
                <h3 className="uppercase font-semibold "> PRICES</h3>
            </div>
            <div className="filters flex flex-col gap-4">
                <h3 className="uppercase font-semibold"> FILTERS </h3>
                <ul className="flex flex-col gap-2">
                    {
                        filters.map((item, index) => (
                            <li key={index} className="text-[#374151] text-sm flex gap-2 "><input type="checkbox" id={item.value} /> <label htmlFor={item.value}>{item.lable}</label> </li>
                        ))
                    }
                </ul>
            </div>
            <div className="brands flex flex-col gap-4 "> 
                <h3 className="uppercase font-semibold"> BRANDS </h3>
                <ul className="flex flex-col gap-2">
                    {
                        brands.map((item, index) => (
                            <li key={index} className="text-[#374151] text-sm flex gap-2"> <input type="checkbox" id={item.value} /> <label htmlFor={item.value}>{item.lable}</label></li>
                        ))
                    }
                </ul>
            </div>
            <div className="categories flex flex-col gap-4">
                <h3 className="uppercase font-semibold"> CATEGORIES</h3> 
                <ul className="flex flex-col gap-2">
                    {
                        categories.map((item, index) => (
                            <li key={index} className="text-[#374151] text-sm flex gap-2"> <input type="checkbox" id={item.value} /> <label htmlFor={item.value}>{item.lable}</label></li>
                        ))
                    }
                </ul>
            </div>
            <div className="categories flex flex-col gap-4">
                <h3 className="uppercase font-semibold"> Size</h3> 
                <ul className="flex flex-col gap-2">
                    {
                        sizes.map((item, index) => (
                            <li key={index} className="text-[#374151] text-sm flex gap-2"> <input type="checkbox" id={item.value} /> <label htmlFor={item.value}>{item.lable}</label></li>
                        ))
                    }
                </ul>
            </div>
            <div className="w-full flex justify-center py-4 my-4"> 
                <button className=' border-2 border-gray-300 px-12 py-1 ' onClick={() => setShowFilter(false)}> Filter</button>
            </div>
        </div>
    </div>
  )
}

export default Filter