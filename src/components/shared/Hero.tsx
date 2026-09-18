import banner from '../../assets/banner-stack.png';
const Hero = () => {
  return (
    <div>
      <section className='flex justify-between items-center px-6 py-2'>
        <div className="justify-left items-center">
            <p className="pl-[30px] text-4xl font-bold text-black-900">Build Your Ideal</p>
            <p className="pl-[30px] w-fit bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent text-4xl font-bold">Development Stack</p>
            <p className="text-[20px] text-[#64748b] text-left pt-[10px] pr-[20px] pb-[10px] pl-[30px]">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
            <div className ="section-1-left-btn">
                <button className="pl-[30px] ">Explore Technologies</button>
                <button className="pl-[30px]">Learn More</button>
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