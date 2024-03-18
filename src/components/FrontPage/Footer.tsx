import { FiSearch } from "react-icons/fi";
import { TfiFacebook, TfiTwitterAlt } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";


export default function Footer() {
    const style = {background: 'url("./oval.svg")', backgroundSize:'cover'}
    
    return (
        <footer className="w-screen relative flex flex-col  items-center">
            <div className="z-20 absolute w-[250px] h-[250px] left-[50%] sm:left-auto scale-50 sm:scale-100 translate-y-[-45%] sm:-translate-y-[30%] sm:-translate-x-[10%]">
                <img src="./footer-card-transparent.svg" width={250} className="z-10 absolute top-0 left-0 -translate-x-[110%]" />
                <img src="./footer-card.svg" width={250} className="absolute top-0 left-0 -translate-x-[110%] translate-y-[30px]" />
            </div>
            <div className="z-10 pb-20 bg-customBlack w-screen h-full text-white flex flex-col items-center justify-center rounded-tl-[250px] rounded-tr-[250px]"  >                
                <div className="relative flex flex-col gap-1 pt-12">                    
                    <h3 className="font-[700] text-3xl sm:text-5xl text-center">Choose Your Cards</h3>
                    <p className="w-full  max-w-[280px] sm:max-w-[400px] font-[400] text-sm text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className=" w-full flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-12 pt-14">
                    <div className="flex flex-row items-center gap-2">                        
                       <img src="./tap-up-simple.svg" />
                       <p className="py-2 flex flex-row gap-1">
                            <span >Tap</span>
                            <span className="text-customGreen">Up</span>
                        </p>
                    </div>
                    <div className="flex flex-row gap-12 px-4">
                        <div className="flex flex-col gap-4">                        
                            <p className="font-[700]">Lorem Ipsum</p>
                            <p className="font-[400]">Lorem Ipsum</p>
                            <p className="font-[400]">Lorem Ipsum</p>
                            <p className="font-[400]">Lorem Ipsum</p>
                        </div>
                        <div className="flex flex-col gap-4">                        
                            <p className="font-[700]">Lorem Ipsum</p>
                            <p className="font-[400]">Lorem Ipsum</p>
                            <p className="font-[400]">Lorem Ipsum</p>
                        </div>
                        <div className="flex flex-col gap-4">                        
                            <p className="font-[700]">Lorem Ipsum</p>
                            <p className="font-[400]">Lorem Ipsum</p>
                            <p className="font-[400]">Lorem Ipsum</p>
                        </div>
                    </div>                    
                    <div className="flex flex-col gap-4 w-full sm:w-auto px-4">  
                        <div className="relative w-fit">
                            <input type="text"
                            placeholder="Search..."
                            className="border border-[#f3f3f3] text-[#d9d9d9] bg-transparent px-6 py-3 rounded-full"
                            />
                            <FiSearch className="stroke-[#d9d9d9] text-2xl absolute right-6 top-1/2 -translate-y-1/2"  />
                        </div>
                        <p className="font-[700]">Lorem Ipsum</p>
                        <p className="font-[400] w-full sm:w-[420px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className="flex flex-row gap-x-8">
                            <TfiFacebook className="fill-customGreen text-xl" />
                            <TfiTwitterAlt className="fill-customGreen text-xl" />
                            <SiInstagram className="fill-customGreen text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}