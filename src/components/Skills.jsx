import { Icon } from '@iconify/react';

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-4">
       <div>Technical Skills & Tools</div>

       <h3>Modern Web Technologies & Active Learning Stack</h3>

       <p>A practical toolkit built through daily coding practice—combining strong frontend styling with robust PHP backend fundamentals and ongoing database integration.</p>


        <div className="flex gap-4 flex-wrap justify-between ">

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


       <div>
        
       </div>
  
    </div>
  )
}
