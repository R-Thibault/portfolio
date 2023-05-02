import Image from "next/image";
import { useState } from "react";

export function Card(Cards) {
  const [showSite, setShowSite] = useState(true);
  const [showGit, setShowGit] = useState(true);
  const showBtn = () => {
    if(Cards.link != null){
      setShowSite(true);
    }else{
      setShowSite(false);
    }
    if(Cards.git != null){
      setShowGit(true);
    }else{
      setShowGit(false);
    }
  };

console.log(showSite);
console.log(Cards.link);
  return (
    <>
      <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 m-4" onLoad={showBtn}>
        <Image
          className="grow"
          src={Cards.image}
          alt={Cards.title}
          width={700}
          height={700}
        />
        <div className="px-6 py-4 grow">
          <h5 className="font-bold text-xl mb-2">{Cards.title}</h5>
          <p className="text-gray-700 text-base">{Cards.description}</p>
        </div>
        <div className="flex items-center gap-2 px-6 pt-4 pb-2">
          {showSite ? (
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <a target="_blank" href={Cards.link} className="h-fit">Website</a>
            </button>
          ) : (
            null
          )}
          {showGit ? (
            <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <a target="_blank" href={Cards.git} className="h-fit">Github</a>
          </button>
          ) : (
            null
          )}



              
        
        </div>
      </div>
    </>
  );
}
