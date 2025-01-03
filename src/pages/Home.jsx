import { useCareerCode, useLatestNews, usePopularCate } from "../hooks/Hooks";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import Android from "../assets/icons/android.png";
import Adobe from "../assets/icons/adobe.png";
import Meta from "../assets/icons/meta.png";
import Microsoft from "../assets/icons/microsoft.png";
import Figma from "../assets/icons/figma.png";
import Snapchat from "../assets/icons/snapchat.png";
import icon1 from "../assets/icons/pen.png";
import icon2 from "../assets/icons/envelope.png";
import LandingForm from "../components/common/LandingForm";
import CategoryCard from "../components/common/CategoryCard";
import JopCard from "../components/job/JobCard";
import CareerCodeCard from "../components/common/CareerCodeCard";
import LatestNewsCard from "../components/common/LatestNewsCard";

const Home = () => {

    // custom hooks declare here ---->
    const categoryData = usePopularCate(`/api/popularCateApi.json`);
    const careerCode = useCareerCode(`/api/careerCodeApi.json`);
    const latestNews = useLatestNews(`/api/latestNewsApi.json`);

    return (
        <>
            {/* landing section */}
            <section className="w-full">
                <div className="w-full bg-emerald-600/5 inset-0 py-36 md:py-56 relative">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full max-w-[1200px] h-full absolute top-0 left-1/2 bg-transparent -z-10 transform -translate-x-1/2">
                                <div className="w-10 h-10 animate-[bounce_2s_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2 absolute top-[20%] left-[50%] transform -translate-x-1/2">
                                    <img src={Adobe} alt="icon" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-10 h-10 animate-[pulse_2s_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2 absolute bottom-[8%] left-[48.9%]">
                                    <img src={Meta} alt="icon" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-[40%] left-[14%]">
                                    <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2">
                                        <img src={Microsoft} alt="icon" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="absolute bottom-[15%] right-[10%]">
                                    <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2">
                                        <img src={Snapchat} alt="icon" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="w-10 h-10 animate-[pulse_2s_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2 absolute top-[32%] right-[20%]">
                                    <img src={Android} alt="icon" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-10 h-10 animate-[bounce_2s_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2 absolute bottom-[8%] left-[15%]">
                                    <img src={Figma} alt="icon" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-full mt-10">
                                <div className="w-full flex flex-col items-center justify-center">
                                    <div className="w-full text-center mb-5 max-w-md">
                                        <h1 className="font-jakarta text-4xl font-bold leading-normal lg:text-5xl lg:leading-normal">Join us & <span className="text-emerald-600">Explore Thousands</span> of Jobs</h1>
                                    </div>
                                    <div className="w-full text-center">
                                        <p className="font-jakarta text-slate-400 text-lg max-w-xl mx-auto lg:max-w-[650px]">Find Jobs, Employment & Career Opportunities. Some of the companies we&apos;ve helped recruit excellent applicants over the years.</p>
                                    </div>
                                </div>
                                <div className="w-full max-w-[610px] p-3 bg-white rounded-md shadow-sm mt-8 mx-auto lg:max-w-[778px] xl:max-w-[933px]">
                                    <LandingForm></LandingForm>
                                </div>
                                <div className="w-full mt-4 text-center">
                                    <p className="font-jakarta text-gray-400 font-normal text-[15px]"><span className="text-gray-800">Popular Searches :</span> Designer, Developer, Software Engineer, Network Engineer, Data Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* category section */}
            <section className="w-full">
                <div className="w-full min-h-[300px] bg-white">
                    <div className="container mx-auto px-4">
                        <div className="w-full py-16 md:py-24">
                            <div className="w-full min-h-[300px]">
                                <div className="w-full text-center pb-8">
                                    <div className="w-auto text-center mb-4">
                                        <h1 className="font-jakarta text-2xl leading-normal font-semibold text-gray-800 md:text-[26px] md:leading-normal">Populate Categories</h1>
                                    </div>
                                    <div className="w-auto">
                                        <p className="font-jakarta text-slate-400 font-light text-[15px] max-w-xl mx-auto leading-normal">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                                    </div>
                                </div>
                                <div className="w-full grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                                    {
                                        categoryData?.map((cate) => (
                                            <CategoryCard key={cate?.id} category={cate}></CategoryCard>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* popular job section */}
            <section className="w-full">
                <div className="w-full min-h-[500px] bg-slate-50">
                   <div className="container mx-auto px-4">
                        <div className="w-full py-16 md:py-24">
                            <div className="w-full min-h-[300px]">
                                <div className="w-full text-center pb-8">
                                    <div className="w-auto text-center mb-4">
                                        <h1 className="font-jakarta text-2xl leading-normal font-semibold text-gray-800 md:text-[26px] md:leading-normal">Populate Jobs</h1>
                                    </div>
                                    <div className="w-auto">
                                        <p className="font-jakarta text-slate-400 font-light text-[15px] max-w-xl mx-auto leading-normal">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                                    </div>
                                </div>
                                <div className="w-full grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                    <JopCard></JopCard>
                                    <JopCard></JopCard>
                                    <JopCard></JopCard>
                                    <JopCard></JopCard>
                                    <JopCard></JopCard>
                                    <JopCard></JopCard>
                                </div>
                                <div className="w-full text-center mt-10">
                                    <div className="w-auto inline-block">
                                        <Link className="font-jakarta text-[15px] font-medium text-gray-400 flex items-center justify-center gap-1 transition-all ease-linear duration-200 hover:text-gray-800 group">See More Jobs <IoMdArrowForward className="mt-1 transition ease-linear duration-300 transform group-hover:translate-x-1"></IoMdArrowForward></Link>
                                    </div>
                                </div>
                            </div>
                        </div>     
                   </div>
                </div>
            </section>

            {/* why career code */}
            <section className="w-full">
                <div className="w-full min-h-[500px] bg-white">
                    <div className="container mx-auto px-4">
                        <div className="w-full py-16 md:py-24">
                            <div className="w-full min-h-[300px]">
                                <div className="w-full text-center pb-8">
                                    <div className="w-auto text-center mb-4">
                                        <h1 className="font-jakarta text-2xl leading-normal font-semibold text-gray-800 md:text-[26px] md:leading-normal">Here&apos;s why you&apos;ll love it Jobstack</h1>
                                    </div>
                                    <div className="w-auto">
                                        <p className="font-jakarta text-slate-400 font-light text-[15px] max-w-xl mx-auto leading-normal">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                                    </div>
                                </div>
                                <div className="w-full grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                                    {
                                        careerCode?.map((data, idx) => (
                                            <CareerCodeCard key={idx} career={data}></CareerCodeCard>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* latest new */}
            <section className="w-full">
                <div className="w-full min-h-[500px] bg-slate-50 py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full text-center pb-8">
                                <div className="w-auto text-center mb-4">
                                    <h1 className="font-jakarta text-2xl leading-normal font-semibold text-gray-800 md:text-[26px] md:leading-normal">Latest Blog or News</h1>
                                </div>
                                <div className="w-auto">
                                    <p className="font-jakarta text-slate-400 font-light text-[15px] max-w-xl mx-auto leading-normal">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                {
                                    latestNews?.map((data, idx) => (
                                        <LatestNewsCard key={idx} news={data}></LatestNewsCard>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full mt-16 md:mt-24">
                            <div className="w-full min-h-[175px] bg-white relative rounded-xl border border-slate-200/80 overflow-hidden">
                                <div className="w-full min-h-[175px] py-10 px-6 flex flex-col gap-8 items-center justify-between relative z-[1] lg:flex-row lg:px-8">
                                    <div className="w-auto text-center lg:text-left">
                                        <h1 className="font-jakarta text-gray-800 text-2xl font-semibold mb-4">Explore a <span className="text-emerald-600">job now!</span></h1>
                                        <p className="font-jakarta text-[15px] text-slate-400 max-w-[575px]">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                                    </div>
                                    <div className="w-auto flex items-center justify-center gap-2">
                                        <button className="font-jakarta text-[15px] font-semibold text-white bg-emerald-600 border border-emerald-600 transition-all ease-linear duration-200 hover:bg-emerald-700 py-2 px-5 rounded-md">Apply Now</button>
                                        <button className="font-jakarta text-[15px] font-semibold text-emerald-600 bg-emerald-600/5 border border-emerald-600/10 transition-all ease-linear duration-200 hover:bg-emerald-600 hover:text-white py-2 px-5 rounded-md">Learn More</button>
                                    </div>
                                </div>
                                <div className="w-[150px] h-[150px] overflow-hidden absolute bottom-[-20px] -end-5 opacity-5">
                                    <img src={icon1} alt="icon" className="w-full h-full object-cover"/>
                                </div>
                                <div className="w-[120px] h-[120px] overflow-hidden absolute top-[-10px] -start-5 opacity-5 -rotate-45">
                                    <img src={icon2} alt="icon" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;