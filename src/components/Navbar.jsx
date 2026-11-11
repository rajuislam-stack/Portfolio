
export default function Navbar() {
  return (
    <header className="flex justify-between gap-4  fixed top-0 left-0 right-0 bg-gray-100 z-50 p-2 shadow-md">
      <div className="logo">
        <img src="./src/assets/Logo.jpg" 
        alt="logo"
        className="w-8 h-8 rounded-full"
         />
      </div>

      <div>

         <nav className="hidden  sm:block md:justify-center-safe">
         <ul className="flex gap-4">
          <li> 
            <a href="#home"><i class="fa-solid fa-home"></i> Home</a>
          </li>

          <li>
             <a href="#about"><i class="fa-regular fa-user"></i>About</a>
          </li>

          <li>
            <a href="#stack"><i class="fa-solid fa-code"></i>Stack</a>
          </li>

          <li>
            <a href="#works"><i class="fa-solid fa-hammer"></i>Works</a>
          </li>

          <li>
            <a href="#services"><i class="fa-brands fa-servicestack"></i>Services</a>
          </li>

          <li>
            <a href="#contact"><i class="fa-regular fa-envelope"></i>Let's build</a>
          </li>

         </ul>
      </nav>

       <button className="Menubar block sm:hidden">
         <i class="fa-solid fa-bars"></i>
       </button>
      </div>

    </header>
  )
}
