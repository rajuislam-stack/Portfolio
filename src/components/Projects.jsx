import { useState } from "react";
import { projectsInfo } from "../data";
import { Icon } from "@iconify/react";



export default function Projects() {
  const [projects, setProjects] = useState(projectsInfo);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const handlePrevious = ()=>{setCurrentIndex((index)=> index === 0 ? (projects.length - 1) : (index - 1) )}
 
  function handleNext(){
     setCurrentIndex((index)=> index === projects.length - 1 ? 0 : (index + 1));
  }


  return (
    <section className="flex flex-col justify-start items-center gap-4">
      <span id="works">My Projects</span>

      <h3>Featured Works & Practice Projects</h3>

      <p>A showcase of real-world applications built with clean architecture, modern frontend frameworks, and structured backend logic.</p>
  

       <div className="min-h-screen w-full relative ">
          
        {/* Background img */}

        <div className="absolute inset-0 z-0  bg-cover bg-no-repeat opacity-60"
        style={{backgroundImage:`url(${currentProject.projectImage})`}}/>
         

         {/*Gredient Overlay */}

        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-red-300/40 bg-red-200/10 "/>
       

         {/*//left and right button*/}

        <div className="relative flex justify-between items-center z-30 w-full h-full  p-4 sm:p-8">
           <button onClick={handlePrevious} className="next-prev-btn">
             <Icon icon="mdi:chevron-left" className="text-4xl "></Icon>
           </button>   
         
            <button onClick={handleNext} className="next-prev-btn" >
             <Icon icon="mdi:chevron-right" className="text-4xl"></Icon>
            </button>
        </div>
         

         {/*main content section */}

        <div className="flex flex-col justify-end items-center md:flex-row md:items-end gap-4  relative z-30 w-full h-110 ">
          
            <div className="flex flex-col gap-4  w-full p-4 m-2 text-white/80">
              <h1 className="text-4xl">{currentProject.title}</h1>

               <ul className="flex justify-around w-fit gap-4" >
                 {currentProject.tech.map((t,i)=>{
                  return <>
                   <li key={i} className="bg-white/10 rounded-2xl p-2 backdrop-blur-lg">{t}</li>
                  </>
                 })}
               </ul>

               <p>{currentProject.subtitle}</p>

            </div>

            <div className="flex flex-col justify-end gap-4 bg-black/50 rounded text-white w-full  p-4 m-2">
                <h4 className="text-white">Key Features</h4>
                <ul>
                 {currentProject.features.map((f,i)=>{
                   return <li key={i} className="flex gap-2 items-center justify-start">
                   <span className="inline-block w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0 "></span>
                   <span>{f}</span> <br/>
                   </li>
                 })}
                </ul>

                <div className="flex gap-4">
                   <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    className="action-btn"
                    >
                    <Icon icon="mdi:external-link"></Icon>
                    Live URL
                   </a>

                   <a 
                   href={currentProject.githubUrl}
                   target="_blank"
                   className="action-btn"
                   >
                    <Icon icon="mdi:github"></Icon>
                    Source Code
                    </a>
                </div>
            </div>

        </div>
        
       </div>
    

    </section>
  )
}
