
import Facebook from '/icons/facebook 1.svg'
import Twitter from '/icons/twitter 1.svg'
import Instagram from '/icons/instagram 1.svg'
import Tiktok from '/icons/tiktok 1.svg'
import Snapchat from '/icons/snapchat 1.svg'
import Apple from '/icons/apple-black-logo 1.svg'
import Android from '/icons/android-logo 1.svg'

const NewsLetter = () => {
  return (
    <div className='md:w-[555px] w-full flex flex-col gap-8  '> 
        <div className="flex sm: gap-4 sm:gap-12 justify-between flex-col sm:flex-row"> 
            <div className='flex flex-col gap-4'>  
                <h3 className="font-semibold  lowercase text-[#1F2937] "> Socials</h3>
                <div className="socials flex gap-4">
                    <a href="" title="Facebook-icon"> <img src={Facebook} alt="Facebook" className="lg:h-8 lg:w-8"/> </a>
                    <a href="" title="Twitter-icon">  <img src={Twitter} alt="Twitter" className="lg:h-8 lg:w-8"/> </a>
                    <a href="" title="Instagram-icon">  <img src={Instagram} alt="Instagram" className="lg:h-8 lg:w-8"/>  </a>
                    <a href="" title="Tiktok-icon">  <img src={Tiktok} alt="Tiktok" className="lg:h-8 lg:w-8"/> </a>
                    <a href="" title="Snapchat-icon">  <img src={Snapchat} alt="Snapchat" className="lg:h-8 lg:w-8"/> </a>
                </div>
            </div>
            <div className=" flex flex-col gap-4">
                <h3 className="lowercase text-[#1F2937] font-semibold text-start"> Platforms</h3>
                <div className="socials flex gap-4 px-2">
                    <a href="" title="Android-icon"> <img src={Android} alt="Facebook" className="lg:h-8 lg:w-8"/>  </a>
                    <a href="" title="Apple-icon"><img src={Apple} alt="Facebook" className="lg:h-8 lg:w-8"/> </a>
                </div>
            </div>
        </div>
        <div className="">
            <div className=" w-full">
                <h3 className="font-medium uppercase text-[#1F2937] text-center sm:text-left">SIGN UP FOR LAURAS'S COLSET STYLE NEWS</h3>
                <form action="" className="flex w-full gap-2 flex-col items-center sm:flex-row sm:gap-4">
                    <input type="text" placeholder="Your email " className="lg:w-[410px] max-w-md w-full sm:w-10/12 outline-0 px-4 py-2 border lg:h-11 border-gray-200 "/>
                    <button type="submit" className='bg-[#1F2937] text-white lg:h-11 w-fit px-10 sm:w-40 py-2 '>Subscribe</button>
                </form> 
            </div>
            <p className="text-xs mt-4">By clicking the SUBSCRIBE button, you are agreeing to our <span className="text-blue-700 border-b border-blue-600 font-semibold"> Privacy & Cookie Policy</span></p>
        </div>
    </div>
  )
}

export default NewsLetter