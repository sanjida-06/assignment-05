import banner from '../../assets/banner-stack.png';
const Hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <section className='flex justify-between items-center px-6 py-2'>
        <div className="justify-left items-center ">
            <p className="pl-[30px] text-4xl font-bold text-black-900">Build Your Ideal</p>
            <p className="pl-[30px] w-fit bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent text-4xl font-bold">Development Stack</p>
            <p className="text-[15px] text-[#64748b] text-left pl-[30px]">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
            <div className ="section-1-left-btn gap-4 flex items-center pl-[30px] pt-4">
                <button className="bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#8b5cf6] w-fit pt-2 pr-4 pb-2 pl-4 text-white rounded-md"><a href="#">Explore Technologies</a></button>
                <button className="border border-gray-300 text-gray-500 hover:bg-gray-100 rounded-md pt-2 pr-4 pb-2 pl-4"><a href="#">Learn More</a></button>
            </div>
        </div>
        <div className="section-1-right">
            <img className='h-auto w-auto' src={banner} alt="banner" />
        </div>
    </section>
    </div>
  );
};

export default Hero;