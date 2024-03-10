import { FiSearch } from "react-icons/fi";
import { TfiFacebook, TfiTwitterAlt } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="w-screen relative flex flex-col  items-center h-[600px] overflow-hidden">
            <div className="w-screen h-[400px] text-white flex flex-col items-center justify-center"  style={{background: 'url("./oval.svg")', backgroundSize:'cover'}}>
                <div className="relative flex flex-col gap-1 pt-12">
                    <div className="z-20 absolute top-0 left-0 w-[250px]">
                        <img src="./footer-card-transparent.svg" width={250} className="z-10 absolute top-0 left-0 -translate-x-[110%]" />
                        <img src="./footer-card.svg" width={250} className="absolute top-0 left-0 -translate-x-[110%] translate-y-[30px]" />
                    </div>
                    <h3 className="font-[700] text-5xl">Choose Your Cards</h3>
                    <p className="w-full max-w-[400px] font-[400] text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="w-full flex flex-row items-center justify-center gap-x-12 pt-14">
                    <div className="flex flex-row items-center gap-2">                        
                       <img src="./tap-up-simple.svg" />
                       <p className="py-2 flex flex-row gap-1">
                            <span >Tap</span>
                            <span className="text-customGreen">Up</span>
                        </p>
                    </div>
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
                    <div className="flex flex-col gap-4">                        
                        <div className="relative w-fit">
                            <input type="text"
                            placeholder="Search..."
                            className="border border-[#f3f3f3] text-[#d9d9d9] bg-transparent px-6 py-3 rounded-full"
                            />
                            <FiSearch className="stroke-[#d9d9d9] text-2xl absolute right-6 top-1/2 -translate-y-1/2"  />
                        </div>
                        <p className="font-[700]">Lorem Ipsum</p>
                        <p className="font-[400] w-[420px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className="flex flex-row gap-x-8">
                            <TfiFacebook className="fill-customGreen text-xl" />
                            <TfiTwitterAlt className="fill-customGreen text-xl" />
                            <SiInstagram className="fill-customGreen text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-[0] h-[220px] w-full bg-customBlack"></div>
        </footer>
    )
}