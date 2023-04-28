import Image from "next/image";
import { useState } from "react";

export function Card(Cards) {
  const [show, setShow] = useState(true);
  const showBtn = () => {
    if(Cards.link != null){
      setShow(true);
    }else{
      setShow(false);
    }
  };
console.log(show);
console.log(Cards.link);
  return (
    <>
      <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-slate-400" onLoad={showBtn}>
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
        <div className="px-6 pt-4 pb-2">
          {show ? (
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <a target="_blank" href={Cards.link} className="h-fit">Website</a>
            </button>
          ) : (
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Coming Soon
            </button>
          )}
          

              
        
        </div>
      </div>
    </>
  );
}
