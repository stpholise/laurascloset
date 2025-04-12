import Heighlight from './Heighlight'

import ExclusiveShoes from '../../assets/images/exclusiveShoe.jpg'
import ExquisiteStyle from '../../assets/images/Exquisite Style.jpg'
import NewArrivals from '../../assets/images/New Arrivals.jpg'
import ExclusiveItems from '../../assets/images/Exclusive Items.jpg'

import useEmblaCarousel from 'embla-carousel-react' 
import Autoplay from 'embla-carousel-autoplay'

interface WeeklyHeighlight {
    title: string;
    description: string;
    image: string;
    percentOff: number;
    code: string;
    link:string;
    colSpan?: number;
  }

const weeklyHeighlight: WeeklyHeighlight[] = [
    {
      title: 'Exclusive Shoes',
      description: 'Exclusive Shoes',
      image: ExclusiveShoes,
      percentOff: 20,
      code: 'VATR3920 ',
      link: 'shoes', 
    },
    {
      title: 'Exquisite Styles & Collections',
      description: 'Exquisite Styles & Collections',
      image: ExquisiteStyle,
      percentOff: 20,
      code: 'VATR3920 ',
      link: 'shoes',
      colSpan: 2
    },
    {
      title: 'New Arrivals',
      description: 'New Arrivals',
      image: NewArrivals,
      percentOff: 20,
      code: 'VATR3920 ',
      link: 'shoes',
      colSpan:2
    },
    {
      title: 'Exclusive Items',
      description: 'Exclusive Items',
      image: ExclusiveItems,
      percentOff: 20,
      code: 'VATR3920 ',
      link: 'shoes', 
    },
  ]

const HeighlightCont = () => {


    const [emblaRef, ] = useEmblaCarousel({
        loop: true, 
        align:'start', 
        dragFree: false,
        skipSnaps: false,
        active: true,  
        slidesToScroll: 1 ,
        duration: 200, 
        breakpoints: {
            '(max-width: 1024px)': { active: true }, 
           
            '(min-width: 1024px)': { active: false }, 
        },      
    },[Autoplay({delay: 5000,})])


  return ( 
    <div ref={emblaRef}  className="embla w-full sm:container  ">
       <div className="  flex lg:grid   flex-nowrap justify-start gap-4 w-full  lg:grid-cols-3 lg:grid-rows-2">

            {
            weeklyHeighlight.map((item, index) => (
                <Heighlight  
                length={weeklyHeighlight.length}
                key={index} 
                title={item.title} 
                description={item.description} 
                image={item.image} 
                percentOff={item.percentOff} 
                code={item.code} 
                link={item.link} 
                colSpan={item.colSpan}
                index={index}
                />
            ))
            }
        </div> 
    </div> 
  )
}

export default HeighlightCont