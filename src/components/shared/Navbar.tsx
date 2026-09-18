import logo from '../../assets/logo-text.png';
const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
    <div className = 'container mx-auto flex justify-between items-center px-6 py-2'>
            <div>
        <img className='h-9 w-auto' src={logo} alt="Logo" />
        </div>
        <div className='flex gap-4 items-center'>
        <ul className='flex gap-4 items-center text-decoration-none'>
            <li>
            <a href="#" className='text-[#d91b7e] hover:text-[#d91b7e]'>Home</a>
            </li>
          <li>
            <a href="#" className='text-gray-500 hover:text-gray-600'>Technologies</a>
          </li>
          <li>
            <a href="#" className='text-gray-500 hover:text-gray-600'>Projects</a>
          </li>
          <li>
            <a href="#" className='text-gray-500 hover:text-gray-600'>About</a>
          </li>
          <li>
            <a href="#" className='text-gray-500 hover:text-gray-600'>Contact</a>
          </li>
          
        </ul></div>

      <div className='flex gap-4 items-center'>
        <button className='bg-white text-gray rounded-md px-4 py-2'>
           <a href="#">Sign In</a>
        </button>
        <button className='bg-[#d91b7e] text-white rounded-full px-4 py-2'>
           <a href="#">Sign Up</a>
        </button>
      </div>
      
    </div>
    </nav>
  );
};

export default Navbar;