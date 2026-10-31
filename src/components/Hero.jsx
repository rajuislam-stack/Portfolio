
export default function Hero() {
  return (
      <div className="flex flex-col md:flex-row gap-4 max-w-full">
        <div>
          <div>👋 Hello, I'm</div>
          <h1>RAJU ISLAM</h1>

          <h2>Full-Stack Developer | React developer|</h2>

          <p>"Crafting scalable full-stack web apps with React, PHP & Tailwind — driven by a deep love for problem solving and clean architecture."</p>

          <div className="fled">
            <button>Let's Connect</button> 
            <button>Download CV</button>
          </div>

          <div className="flex gap-4">
             <a href="#github">
              <i class="fa-brands fa-github"></i>
             </a>

             <a href="#leetcode">
               <i class="fa-brands fa-whatsapp"></i>
             </a>

             <a href="#gmail">
              <i class="fa-regular fa-envelope"></i>
             </a>

          </div>
        </div>

        <div>
          <img src="./src/assets/my-img.jpg" alt="myImg" className="min-w-30 rounded-full"/>
        </div>
      </div>
  )
}
