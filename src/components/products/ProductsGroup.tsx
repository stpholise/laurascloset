 import Product from './Product'

 import Item2 from '../../assets/itemsImage/item2.jpg'

const ProductsGroup = () => {
    
    
    interface Popular {
        title: string;
        description: string;
        image: string;
        oldPrice: number;
        newPrice: number; 
        tag?: string;
        orders:number;
      }

    const testingArr: Popular[] = [
       
    
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
            tag: 'New Arival'
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },  
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
        {
            title:'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse,',
            description: 'Exclusive Shoes',
            image: '',
            oldPrice: 120.23,
            newPrice: 100.23,
            orders: 24,
        },
    ]
  return (
    <div className="">
        <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-2 px-4 md:px-0 '>
            {
                testingArr.map((item:Popular, index:number) => (
                    <Product key={index} 
                        title={item.title} 
                        oldPrice={item.oldPrice}  
                        newPrice={item.newPrice} 
                        image={Item2}
                        tag={item.tag} 
                        orders={item.orders} 
                        description={item.description}
                    />
                ))
            }
        </div>
        <div className="pagination">

            
        </div>
    </div>
  )
}

export default ProductsGroup