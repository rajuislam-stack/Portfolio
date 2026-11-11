
export default function About() {
  return (
    <div className="flex flex-col items-center gap-2">

      <div>
        <span id="about">About Me</span>

        <h1>Crafting Digital Excellence</h1>

        <p>A full-stack developer and problem solver dedicated to building exceptional user experiences and clean code architecture.</p>
      </div>


      <div className="flex flex-col sm:flex-row gap-2">
          <div>
              <div className="border-2 bg-red-50 p-2">
                  <h1>Hello! I'm Raju Islam</h1>

                  <p>
                    I'm a passionate <strong className="text-blue-800">Full-Stack Developer</strong> based in Bangladesh, focused on crafting modern, high-performance web applications. <br /> <br />

                    With expertise in <strong className="text-red-400">React, Tailwind CSS, PHP, and JavaScript</strong>, I specialize in building scalable, user-centric interfaces. My dedication to problem-solving and clean code enables me to deliver efficient digital solutions. <br /><br />

                    Currently pursuing my higher secondary studies, I balance rigorous academic life with intensive software development , constantly pushing the boundaries of what's possible in modern web development.

                  </p>

              </div>

              <div className="grid grid-cols-2 grid-rows-3 gap-2 ">
                  <div>
                     <p>Name</p>
                     <h3>Raju Islam</h3>
                  </div>

                  <div>
                     <p>Role</p>
                     <h3>Full-Stack Web Developer & Problem Solver</h3>
                  </div>

                  <div>
                    <p>Focus</p>
                    <h3>React, Tailwind CSS, PHP & Algorithms</h3>
                  </div>

                  <div>
                    <p>Education</p>
                    <h3>HSC Studies (Dinajpur Education Board)</h3>
                  </div>

                  <div>
                    <p>Languages</p>
                    <h3>Bengali (Native), English (Technical & Communicative)</h3>
                  </div>

                  <div>
                    <p>Specialty</p>
                    <h1>Frontend Architecture & Problem Solving</h1>
                  </div>
              </div>

          </div>

          <div>
             <div className="grid grid-cols-2 m-2">
                  <div>
                     <i class="fa-brands fa-react"></i>
                     <h1>1.5+</h1>
                     <p>Years Experience</p>
                  </div>

                  <div>
                     <i class="fa-solid fa-hammer"></i>
                     <h1>3+</h1>
                     <p>  Core Tech Stacks (React, PHP, Tailwind)</p>
                  </div>

                  <div>
                      <i class="fa-regular fa-lightbulb"></i>
                      <h1>93%+</h1>
                      <p>JavaScript Proficiency</p>
                  </div>

                  <div>
                   <i class="fa-solid fa-paintbrush"></i>
                    <h1>100%</h1>
                    <p>Dedication to Clean Code & Logic</p>
                  </div>
             </div>

             <div className="flex flex-col gap-2">
                 <div className="flex gap-2 m-2">
                     <div>
                      <i class="fa-solid fa-layer-group"></i>
                     </div>
                     
                     <div>
                      <h1>Full-Stack Expertise</h1>

                      <p>Mastery in frontend interactive UI (React, Tailwind, Framer Motion) with solid understanding of backend logic using PHP.</p>
                     </div>
                 </div>

                  <div className="flex gap-2">
                     <div>
                      <i class="fa-solid fa-brain"></i>
                     </div>
                     
                     <div>
                      <h1>Problem-Solving Mindset</h1>

                      <p>Strong passion for writing optimized algorithms, data structures, and logical troubleshooting.</p>
                     </div>
                 </div>

                  <div className="flex gap-2">
                     <div>
                      <i class="fa-solid fa-arrow-trend-up"></i>
                     </div>
                     
                     <div>
                      <h1>Growth Mindset</h1>
                      <p>Continuously learning, refactoring code architecture, and improving technical problem-solving skills every single day.</p>
                     </div>
                 </div>
             </div>
          </div>
      </div>


    </div>
  )
}
