 import NewsLetter from "./home/NewsLetter";
import WeAccept from "./home/WeAccept";


interface Menu  {
  title: string;
  link: string;
}

const CompanyInfo: Menu[] = [
  {
    title: 'About Laura’s Closet ',
    link: '/about'
  },
  {
    title: 'Social Responsibility',
    link: '/Social'
  },
  {
    title: 'Affiliate',
    link: '/Affiliate'
  },
  {
    title: 'Fashion Blogger',
    link: '/Blogger'
  }, 
]

const Help: Menu[] = [
  {
    title: 'Shipping Info',
    link: '/help'
  },
  {
    title: 'Returns',
    link: '/return'
  },
  {
    title: 'How to Order',
    link: '/recalls'
  },
  {
    title: 'How to Track',
    link: '/accessibility'
  },
  {
    title: 'Size Chart',
    link: '/accessibility'
  },
]

const Customer : Menu[] = [
  {
    title: 'Contact Us',
    link: '/contact'
  },
  {
    title: 'FAQs',
    link: '/faqs'
  },
  {
    title: 'Payment',
    link: '/payment'
  },
  
  {
    title: 'Notices',
    link: '/notices',
  },
]

const legal: Menu[] = [
  {
    title: 'Privacy Center',
    link: '/privacy'
  },
  {
    title: 'Privacy & Cookie Policy',
    link: '/privacy'
  },
  {
    title: 'Manage Cookies',
    link: '/privacy'
  },
  {
    title: 'Copyright Notice',
    link: '/privacy'
  },
  {
    title: 'Imprint',
    link: '/privacy'
  },
]

const Footer = () => {

  return (
    <div className="bg-[#F9FAFB]  text-gray-500 text-sm  ">
      <div className="lg:container md:px-10 mx-auto py-12 flex flex-col px-2  gap-16">
        <div className="flex md:gap-10 lg:gap-24 justify-between flex-col lg:flex-row">
          <div className="flex flex-col sm:flex-row gap-6 justify-between  md:gap-8  lg:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="uppercase text-black font-semibold "> COMPANY INFO</h3>
              <ul className="flex flex-col gap-2">
                {
                  CompanyInfo.map((item, index) => (
                    <li key={index} className="flex gap-2 font-medium text-sm"> <a href={
                      item.link
                    }>{item.title}</a></li>
                  ))
                }
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="uppercase font-semibold text-black">  HELP & SUPPORT </h3>
              <ul className="flex flex-col gap-2">
                {
                  Help.map((item, index) => (
                    <li key={index} className="flex gap-2 font-medium text-sm"> <a href={item.link}>
                      {item.title}</a></li>
                  ))
                }
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="uppercase font-semibold text-black">  HELP & SUPPORT </h3>
              <ul className="flex flex-col gap-2">
                {
                  Customer.map((item, index) => (
                    <li key={index} className="flex gap-2 font-medium text-sm"> <a href={item.link}>
                      {item.title}</a></li>
                  ))
                }
              </ul>
            </div>
          </div>
          
            <NewsLetter />
         
        </div>
        <div className="flex md:flex-row flex-col-reverse gap-10 justify-between items-start">
            <div className="text-medium flex flex-col gap-2 sm:gap-7 lg:w-[444px]">
              <p className="text-left text-xs text-gray-500"> &copy; 2021 Laura’s Closet. All Rights Reserved</p>
              <div className="flex justify-start items-center flex-wrap">
                    {
                      legal.map((item, index) => (
                        <div key={index} className="  mb-3"><span className={`border-r border-gray-300 text-medium sm:text-sm text-xs px-2 ${index === legal.length - 1  ? 'border-r-0' : ''}`}><span className='capitalize border-b-2 border-gray-400'>{item.title}</span></span></div>
                        
                      ))
                    } 
              </div> 
            </div>
            <div className="lg:w-[555px] hidden sm:block">
            
               <WeAccept />
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer