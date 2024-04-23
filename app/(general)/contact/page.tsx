import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'Esta es la página de contacto de la empresa',
    keywords: ['Contact Page', 'Mary', 'Información', '...']
   };
   
   export default function ContactPage() {
       return(
           <>
             <span className="text-7xl">Contact Page</span>
           </>
       )
   }