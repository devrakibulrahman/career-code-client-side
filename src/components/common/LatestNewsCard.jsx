import { IoMdArrowForward } from "react-icons/io";
import { SlCalender, SlClock } from "react-icons/sl";
import { Link } from "react-router-dom";

const LatestNewsCard = () => {
    return (
        <>
            <div className="w-full min-h-[400px] border border-slate-200/80 rounded-md overflow-hidden">
                <div className="w-full relative">
                    <div className="w-full h-[220px] bg-red-300 overflow-hidden">

                    </div>
                    <div className="absolute -bottom-[10px] end-6">
                        <span className="font-jakarta text-xs font-medium py-1 px-[10px] bg-emerald-600 text-white rounded-full">arts</span>
                    </div>
                </div>
                <div className="w-full p-6">
                    <div className="w-full flex items-center gap-4">
                        <div className="w-auto flex items-center justify-center gap-3">
                            <SlCalender className="text-sm text-gray-800"></SlCalender>
                            <p className="font-jakarta text-sm text-slate-400">20th Feb, 2024</p>
                        </div>
                        <div className="w-auto flex items-center justify-center gap-3">
                            <SlClock className="text-sm text-gray-800"></SlClock>
                            <p className="font-jakarta text-sm text-slate-400">2 min read</p>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <h1 className="font-jakarta text-lg font-semibold text-gray-800">11 Tips to Help You Get New Clients Through Cold Calling</h1>
                    </div>
                    <div className="w-full flex items-center justify-between mt-3">
                        <div className="w-auto">
                            <Link className="font-jakarta text-[15px] font-medium text-gray-800 inline-flex items-center justify-center gap-1 transition-all ease-linear duration-200 hover:text-emerald-600 group">Read More <IoMdArrowForward className="mt-1 transform ease-linear duration-200 group-hover:translate-x-1"></IoMdArrowForward></Link>
                        </div>
                        <div className="w-auto">
                            <p className="font-jakarta text-sm text-slate-400 font-medium">by <span className="text-gray-800">Google</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestNewsCard;