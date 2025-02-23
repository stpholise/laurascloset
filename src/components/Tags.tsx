import { useEffect, useCallback  } from 'react'
import useEmblaCarousel from 'embla-carousel-react' 
import { EmblaCarouselType,   } from 'embla-carousel'
  import Autoplay from 'embla-carousel-autoplay'

const Tags = () => { 
    interface Itags {
        name: string;
        append?: string;
        link: string;
      }
    const tagItems: Itags[] = [
        { 
            name: 'Denim',
            link: 'denim'
        },
        {
            name: 'New Arrivals',
            append:'#Fresh',
            link: 'New Arrivals'
        },
        {
            name: 'Dresses',
            link: 'dresses'
        },
        {
            name: 'Tops',
            link: 'tops'
        },
        {
            name: 'Jackets',
            link: 'jackets'
        },
        {
            name: 'Lingerie & Lounge Wear',
            link: 'lingerie'
        },
        {
            name: 'Beachwear',
            link: 'beachwear'
        },
        {
            name: 'Blouses',
            link: 'blouse'
        },
        {
            name: 'Vintage',
            link: 'vintage'
        },
        {
            name: 'Shoes',
            link: 'shoes'
        },
        {
            name: 'Sandals',
            link: 'sandals'
        },
        {
            name: 'Bags',
            link: 'bags'
        },
        {
            name: 'Juwelries',
            link: 'juwelries'
        }
    ]

    const [emblaRef, emblaApi ] = useEmblaCarousel(
        {   loop: true, 
            align:'start', 
            dragFree: false,
            skipSnaps: false,
            active: true,  
            slidesToScroll: 1 ,
            duration: 100, 
            breakpoints: {
                '(min-width: 768px)': { loop: false, dragFree: true, skipSnaps: false, duration: 100, slidesToScroll: 1  },
                '(min-width: 1280px)': { active: false }, 
            },     

        },[Autoplay()] ) 

        const logPluginEvent = useCallback(( emblaApi: EmblaCarouselType, mauseOver: string) => {
            console.log(`Autoplay just triggered ${mauseOver}!`)
            console.log(`Autoplay just triggered ${emblaApi}!`)
          }, [])

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('slidesInView', ( ) => {  });   
            emblaApi.on('autoplay:stop', () => logPluginEvent(emblaApi, 'stopped'));
        }  
      }, [emblaApi, logPluginEvent])
    

  return (
    <div ref={emblaRef}  className="embla container mx-auto"  >
        <div className=" embla__container container   mx-auto flex flex-nowrap justify-between items-center py-4 md:gap-8 lg:gap-4">
            {
              
            tagItems.map((item, index) =>(
                    <button key={index}   className={`embla__slide cursor-pointer    min-w-fit   text-[#6B7280] text-sm px-2 w-max font-medium hover:text-[#1F2937] ${index === 0 ?  ' sm:ml-4 lg:ml-0': ''}${tagItems.length - 1 === index ?  ' sm:mr-4 md:mr-8 lg:mr-0': ''}`}> 
                   {item.name} 
                    {  item.append && <span className="bg-[#EB5757] ml-2 px-1 text-white">{item.append}</span> }
                </button>     
                ) 
            )
            }
        </div>
    </div>
  )
}

export default Tags