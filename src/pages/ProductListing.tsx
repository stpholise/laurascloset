import Filter from "../components/products/Filter"
import ProductsGroup from "../components/products/ProductsGroup"
import AdHero from '../components/products/AdHero'

const ProductListing = () => {
  return (
    <div>
        <AdHero />
        <div className="container mx-auto p-2 md:py-4 flex justify-between items-start md:items-center flex-col md:flex-row gap-4 ">
          <div className="text-gray-400 text-sm"><span  className="font-semibold text-black text-sm">Showing 1 - 20</span> out of 2,356 Products</div>
          <div className="text-gray-400">Sort by: <span className="font-semibold text-black "> New Arival </span></div>
        </div>
        <section className="container mx-auto gap-4 py-2 md:py-10  flex flex-col md:flex-row px-2">  
            <Filter />
            <ProductsGroup />
        </section>
    </div>
  )
}

export default ProductListing