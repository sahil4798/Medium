export function SingleBlogSkeeleton() {
  return (
    <div className="flex justify-center">
      <div className="grid  grid-cols-4 s w-full px-1 0 pt-12 max-w-screen-2xl ">
        <div className="col-span-3  pl-2 ">
          <div className="h-8 bg-gray-200 rounded-full  max-w-[1100px]  mb-2"></div>
          <div className="h-8 bg-gray-200 rounded-full  max-w-md mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[175px] mb-6"></div>

          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[1100px] mb-2.5"></div>
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[1100px] mb-2.5"></div>
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[1100px] mb-2.5"></div>
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[1100px] mb-2.5"></div>
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[1100px] mb-2.5"></div>
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[1100px] mb-2.5"></div>
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[1100px] mb-2.5"></div>
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[1100px] mb-2.5"></div>
        </div>

        <div className="col-span-1  ">
          <div className="w-full ">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[60px] mb-4"></div>

            <div className="flex ">
              <div className="flex flex-col justify-center pr-2">
                <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 "></div>
              </div>
              <div className=" w-full">
                <div className="text-4xl font-semibold pb-3">
                  <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 max-w-20 mb-3"></div>
                </div>
                <div className="text-slate-400 ">
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-lg mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700  max-w-[200px] "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
