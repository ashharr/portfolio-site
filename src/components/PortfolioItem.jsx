import { memo } from 'react';

const PortfolioItem = memo(function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-sky-100 dark:hover:bg-sky-900 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
         <img
            src={imgUrl}
            alt={`${title} project screenshot`}
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
            loading="lazy"
         />
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
               {stack.map((item, index) => (
                  <span 
                     key={`${item}-${index}`}
                     className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
                  >
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   )
});

export default PortfolioItem;