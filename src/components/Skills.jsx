import { Icon } from '@iconify/react';

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
       <div>Technical Skills & Tools</div>

       <h3>Modern Web Technologies & Active Learning Stack</h3>

       <p>A practical toolkit built through daily coding practice—combining strong frontend styling with robust PHP backend fundamentals and ongoing database integration.</p>


        <div className="w-full flex gap-8 flex-wrap ">

          <div>
             <Icon icon="skill-icons:html" className='w-13 h-13' />
             <p>HTML</p>
          </div>

          <div>
             <Icon icon="skill-icons:css" className='w-13 h-13' />
             <p>CSS</p>
          </div>
          
          <div>
             <Icon icon="skill-icons:tailwindcss-dark"  className='w-13 h-13' />
             <p>Tailwind CSS</p>
          </div>

          <div>
             <Icon icon="skill-icons:javascript"  className='w-13 h-13' />
             <p>JavaScript</p>
          </div>
  
        <div>
          <Icon icon="skill-icons:react-dark"  className='w-13 h-13' />
          <p>React</p>
        </div>

        <div>
          <Icon icon="skill-icons:php-dark"  className='w-13 h-13' />
          <p>PHP</p>
        </div>

        <div>
          <Icon icon="devicon:framermotion" className='w-13 h-13' />
          <p>Framer Motion</p>
        </div>

        <div>
          <Icon icon="skill-icons:c" className='w-13 h-13'/>
          <p>C</p>
        </div>

        <div>
          <Icon icon="simple-icons:codeblocks" className='w-13 h-13'/>
          <p>CodeBlocks</p>
        </div>

         <div>
           <Icon icon="logos:git-icon" className='w-13 h-13' />
            <p>Git</p>
         </div>
        
          <div>
             <Icon icon="logos:github-icon" className='w-13 h-13' />
             <p>GitHub</p>
          </div>
         

          <div>
            <Icon icon="logos:figma" className='w-13 h-13'/>
            <p>Figma</p>
          </div>

          <div>
            <Icon icon="devicon:vercel-wordmark" className='w-20 h-13 ' />
            <p>Vercel</p>
          </div>

          <div>
            <Icon icon="logos:visual-studio-code"className='w-13 h-13' />
            <p>Visual Studio Code</p>
          </div>
       </div>


       <div className='grid grid-cols-2 sm:grid-cols-4  gap-4'>
         <div>
           <h3>1.6+ year</h3>
           <h4>Core Logic & Learning</h4>
           <p>Consistently sharpening analytical thinking through daily practice, fundamental problem solving, basic data structures, and understanding time/space complexity.</p>
         </div>

         <div>
           <h3>10+ Tools</h3>
           <h4>Frontend Stack Mastery</h4>
           <p>Proficient in modern web tools including HTML5, CSS3, Sass, Tailwind CSS, JavaScript, and React to build responsive user interfaces.</p>
         </div>

         <div>
           <h3>Backend Focus</h3>
           <h4>PHP & Laravel Architecture</h4>
           <p>Building reliable server-side logic with core PHP while actively advancing toward full-stack architecture with Laravel and MySQL.</p>
         </div>

         <div>
           <h3>100% Dedicated</h3>
           <h4>Commitment & Passion</h4>
           <p>Committed to writing clean, maintainable code with absolute dedication, constantly learning, and striving to deliver the best result for every project.</p>
         </div>
        
       </div>
  
    </div>
  )
}
