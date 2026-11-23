import { Icon } from "@iconify/react"


export default function ServiceCard({servicesObj}) {
  return (
    <div className="flex flex-col w-[45%] h-fit bg-black/10 shadow-2xl rounded-2xl m-4 p-4">
      <h3>{servicesObj.title}</h3>

      <div className="flex gap-4">
        <span>{servicesObj.role}</span>
        <span>{servicesObj.badge}</span>
      </div>
  
     <p>{servicesObj.summary}</p>

      <div>
        <h5>Available For</h5>
         
         <ul className="flex flex-col gap-4">
           {servicesObj.deliverables.map((text,i)=>{
            return(<li key={i} className="flex justify-start items-center gap-4">
               <span className="inline-block w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                <span>{text}</span>
            </li>)
         })}
         </ul>
      </div>


      <div>
        <Icon icon="code"></Icon>
        <h3>Technologies Used</h3>
      
        <ul className="flex flex-wrap gap-4">
          {servicesObj.technologies.map((tech,i)=>{
            return(<li key={i} className="bg-red-500/10 rounded px-3 py-1 ">
                  {tech}
            </li>)
          })}
        </ul>

      </div>




    </div>
  )
}
