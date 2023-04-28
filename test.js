<div className="flex h-[90vh] w-full flex-wrap justify-evenly mt-6 gap-4">
            {Cards.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>



<div  
      className="h-60 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={Cards.image}
          alt={Cards.title}
          width={700}
          height={700}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Cards.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {Cards.description}
          </p>
        </div>
      </div>


<div  
className="w-full h-fit m-5 flex flex-col  gap-2  shadow md:flex-row  hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700 ">
  <Image
    className="w-auto md:w-[60vw]  object-cover "
    src={Cards.image}
    alt={Cards.title}
    width={800}
    height= {800}
    
  />
  <div className="flex flex-col p-2 justify-evenly w-full bg-white ">
    <div className="">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {Cards.title}
    </h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    {Cards.description}
    </p>
    </div>
    <div className="flex ">
    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Website</button>
    
    </div>
  </div>
</div>