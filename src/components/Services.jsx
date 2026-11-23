import { servicesData } from "../data";
import { serviceHighlights } from "../data";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="flex flex-col items-center justify-start">
      <span>What I Offer</span>
      <h1>Core Web Services</h1>
      <p>Turning ideas into clean, responsive, and functional web applications — from modern React frontends to full-stack PHP & Laravel solutions and bug fixing.</p>


      <div className="relative w-full ">
            <div className="absolute w-1.5 h-full rounded-4xl bg-linear-to-b from-black/10 via-red-700/10 to-red-500/10 l-4"/>
            
           {
            servicesData.map((servicesObj)=>{
              return  <ServiceCard servicesObj = {servicesObj} key={servicesObj.id}/>
            })
           }

      </div>
      
    </section>
  )
}
