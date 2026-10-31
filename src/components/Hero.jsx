
export default function Hero() {
  return (
      <div className="flex flex-col md:flex-row gap-4 max-w-full">
        <div className="order-2 md:order-1">
          <div>👋 Hello, I'm</div>
          <h1>RAJU ISLAM</h1>

          <h2>Full-Stack Developer | React developer|</h2>

          <p>"Crafting scalable full-stack web apps with React, PHP & Tailwind — driven by a deep love for problem solving and clean architecture."</p>

          <div className="flex">
            <button >
             <i class="fa-regular fa-envelope"></i>
              Let's Connect
            </button> 

            <button>
              <i class="fa-regular fa-circle-down"></i>
              Download CV
            </button>
          </div>

          <div className="flex gap-4">
             <a href="#github">
              <i class="fa-brands fa-github"></i>
             </a>

             <a href="#whatsapp">
              <i class="fa-brands fa-whatsapp"></i>
             </a>

             <a href="#gmail">
              <i class="fa-regular fa-envelope"></i>
             </a>

          </div>

          <div>
            <p>SCOLL TO EXPLORE</p>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img src="./src/assets/my-img.jpg" alt="myImg" className="max-w-50 rounded-full"/>
        </div>
      </div>
  )
}
