import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AddJobForm from "../components/common/AddJobForm";

const AddJob = () => {
    return (
        <>
            <section className="w-full min-h-screen">
                <div className="w-full min-h-[370px] py-36 bg-all-job-bg bg-cover bg-top bg-no-repeat relative">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full text-center mt-10">
                                <h1 className="font-jakarta text-2xl text-white font-medium leading-sung md:text-3xl md:leading-snug tracking-wide">Add New Job</h1>
                            </div>
                            <div className="w-full absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-center">
                                <div className="w-auto flex items-center justify-center gap-1">
                                    <Link to='/' className="font-jakarta text-[15px] font-semibold text-white/50 transition ease-linear duration-200 hover:text-white">CareerCode</Link>
                                    <RiArrowRightSLine className="font-semibold text-xl mt-[3px] text-white/50"></RiArrowRightSLine>
                                    <Link to='/' className="font-jakarta text-[15px] font-semibold text-white">Add Job</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="w-full flex items-center justify-center">
                            <div className="w-full max-w-[745px] min-h-[500px] p-6 border border-slate-200/50 rounded-lg">
                                <AddJobForm></AddJobForm>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddJob;