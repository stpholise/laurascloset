 
 import AliPay from '/cardIcons/AliPay.svg'
import MasterCard from '/cardIcons/MasterCard.svg' 
import Paypal from '/cardIcons/PayPal.svg'
import Amazon from '/cardIcons/Amazon.svg'
import AmericanExpress from '/cardIcons/American Express.svg'
import ApplePay from '/cardIcons/ApplePay.svg'
import Bitcoin from '/cardIcons/Bitcoin.svg'
import Discover from '/cardIcons/Discover.svg'
import GooglePay from '/cardIcons/Google Pay.svg'
import eBay from '/cardIcons/eBay.svg'
import monobank from '/cardIcons/monobank.svg'
import Payoneer from '/cardIcons/Payoneer.svg'
import WesterUnion from '/cardIcons/Western Union.svg'
import BitPay from '/cardIcons/BitPay.svg'

const WeAccept = () => {

    // interface Card {
    //     [index: number]: string;
    // }
    

    const cards: string[] =[
        MasterCard,
        Paypal,
        eBay,
        GooglePay,
        monobank,
        Discover, 
        WesterUnion,
        Payoneer,
        ApplePay,
        AmericanExpress,
        Amazon,
        AliPay,
        BitPay,
        Bitcoin 
    ]

  return (
    <div className="flex flex-col gap-6 lg:w-[460px] "> 
        <h2 className="text-sm uppercase font-semibold text-black">We accept</h2>
        <div className="flex gap-2 flex-wrap">
            {
                cards.map((card, index) => (
                    <img  src={card} alt="" key={index} className="h-8" />
                ))
            }
        </div>
    </div>
  )
}

export default WeAccept