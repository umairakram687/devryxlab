"use client";

import Link from "next/link";
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Instagram, 
  ArrowRight,
  Send
} from "lucide-react";
import footerData from "../../../data/footer.json";

const FiverrIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99a.995.995 0 0 0-.002 1.99m-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858c.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364c-1.748 0-2.549-1.355-2.549-2.515c0-1.14.703-2.505 2.45-2.505c1.856 0 2.471 1.384 2.471 2.408c0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81c-.508 0-.81.225-.908.81zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837l-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" />
  </svg>
);

const UpworkIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439" />
  </svg>
);


const iconMap: Record<string, any> = {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Fiverr: FiverrIcon,
  Upwork: UpworkIcon
};

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Top Section: Newsletter & Brand */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                 {footerData.company.tagline}
              </h2>
              <p className="text-neutral-400 max-w-md text-lg">
                {footerData.company.description}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
               <h3 className="text-xl font-bold text-white mb-2">{footerData.newsletter.title}</h3>
               <p className="text-neutral-400 mb-6">{footerData.newsletter.description}</p>
               
               <form className="flex gap-4">
                 <input 
                   type="email" 
                   placeholder={footerData.newsletter.placeholder} 
                   className="flex-1 bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                 />
                 <button className="bg-white text-neutral-950 px-6 py-3 rounded-xl font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                   {footerData.newsletter.buttonText}
                   <Send className="w-4 h-4" />
                 </button>
               </form>
            </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
           {/* Dynamic Columns */}
           {footerData.columns.map((column, idx) => (
             <div key={idx}>
               <h4 className="text-white font-bold mb-6">{column.title}</h4>
               <ul className="space-y-4">
                 {column.links.map((link, linkIdx) => (
                   <li key={linkIdx}>
                     <Link 
                       href={link.href}
                       className="text-neutral-400 hover:text-white transition-colors flex items-center group"
                     >
                       <span className="relative">
                         {link.label}
                         <span className="absolute left-0 -bottom-1 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                       </span>
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
           ))}

           {/* Socials Column (rendered manually or via data if structured that way. Here confusingly using 4th column for socials usually) */}
           {/* Actually, let's put Socials in their own area or a 4th column if appropriate. 
               The JSON has 3 columns. Let's start the 4th column as social links or contact info. 
           */}
           <div>
             <h4 className="text-white font-bold mb-6">Connect</h4>
             <div className="flex gap-4">
               {footerData.socials.map((social, idx) => {
                 const Icon = iconMap[social.icon] || ArrowRight;
                 return (
                   <a 
                     key={idx}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-neutral-950 transition-all duration-300 hover:scale-110"
                   >
                     <Icon className="w-5 h-5" />
                   </a>
                 );
               })}
             </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-neutral-500 text-sm">
           <p>{footerData.copyright}</p>
           
           <div className="flex gap-6 mt-4 md:mt-0">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
