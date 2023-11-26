import { DotShape2, Services } from "../SvgIcon"
export default function Hero () {
  return (
    <div
   className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px] px-6  lg:px-8"
   >
   <div className="container mx-auto">
      <div className="flex flex-wrap items-center -mx-4">
         <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
               <h1
                  className="mb-5 text-4xl font-bold !leading-[1.208] text-dark  sm:text-[42px] lg:text-[40px] xl:text-5xl"
                  >
                     Elevate Your Online Presence with Clousor&apos;s Expertise
               </h1>
               <p
                  className="mb-8 max-w-[480px] text-base text-body-color "
                  >
                  Discover the art of web development with Clousor, where every pixel is crafted with precision. Elevate your brand&apos;s online journey with our expertise
               </p>
               <ul className="flex flex-wrap items-center gap-4">
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-blue hover:bg-blue-dark lg:px-7"
                        >
                     Get Started
                     </a>
                  </li>
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="inline-flex items-center justify-center py-3 px-6 lg:px-7 text-center text-base font-medium text-white hover:text-primary rounded bg-black"
                        >
                        <span className="mr-2">
                           <Services className="w-6 h-6"/>
                        </span>
                        View Services
                     </a>
                  </li>
               </ul>
               <div className="clients pt-16">
                  <h6
                     className="flex items-center mb-6 text-xs font-normal text-body-color"
                     >
                     Some Of Our Clients
                     <span className="inline-block w-8 h-px ml-3 bg-body-color"></span>
                  </h6>
                  <div className="flex items-center gap-4 xl:gap-[50px]">
                     <a href="javascript:void(0)" className="block py-3">
                     <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                        alt="oracle"
                        />
                     </a>
                     <a href="javascript:void(0)" className="block py-3">
                     <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                        alt="intel"
                        />
                     </a>
                     <a href="javascript:void(0)" className="block py-3">
                     <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                        alt="logitech"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="hidden px-4 lg:block lg:w-1/12"></div>
         <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
               <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                     src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
                     alt="hero"
                     className="max-w-full lg:ml-auto"
                     />
                  <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <DotShape2 />
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}
