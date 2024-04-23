import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'Esta es la página de precios de mi servicio',
    keywords: ['Pricing Page', 'Mary', 'Información', '...']
   };
   
   export default function PricingPage() {
       return(
           <>
             <span className="text-7xl">Pricing Page</span>
           </>
       )
   }