import React from 'react'

const VisitZealand = () => {
    return (
        <div style={{
            backgroundImage: 'url("./img2.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
            className=' px-8 md:px-16 lg:px-32 py-12 text-white'>
            <h1 className=' text-4xl font-bold uppercase text-center py-6'>5 Reasons why you should visit New Zealand </h1>
            <div className=' border-2 border-teal-600 p-10 flex flex-col-reverse md:flex-row justify-between'>
                <div className=' md:w-[30%] flex flex-col gap-6'>
                    <h1 className=' text-4xl tracking-wide'>Trip of you dream</h1>

                    <ol class="relative border-s border-gray-200 dark:border-white flex flex-col gap-5 py-4">
                        <li class=" ms-8">
                            <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border-2 border-white dark:border-whate "></div>
                            <p class=" text-base font-normal text-gray-500 dark:text-gray-400">5 days and 4 nights in a hotel with a magical Atmosphere</p>

                        </li>
                        <li class=" ms-8">
                            <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border-2 border-white dark:border-whate "></div>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Hot air ballon fight at dawn + Photoshoot Riding an ATV in the desert.</p>
                        </li>
                        <li class="ms-8">
                            <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white dark:border-whate "></div>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">3 citites Auckland, Christachurch, Wellington.</p>
                        </li>
                        <li class="ms-8">
                            <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border-2 border-white dark:border-whate "></div>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Round-trip tickets + transfer to the hotel.</p>
                        </li>
                        <li class="ms-8">
                            <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border-2 border-white dark:border-whate "></div>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">1100$ for two.</p>
                        </li>
                    </ol>
                    <div className=' flex justify-center'>
                        <button className=' text-xl font-bold uppercase px-10 py-4 bg-cyan-400 rounded-3xl'>Book a tour</button>
                    </div>
                </div>

                <div className=' md:w-[60%]'>
                    <div id="default-carousel" className="relative w-full " data-carousel="slide">
                        {/* <!-- Carousel wrapper --> */}
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            {/* <!-- Item 1 --> */}
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="./p2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            {/* <!-- Item 2 --> */}
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="./img2.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            {/* <!-- Item 3 --> */}
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="./img2.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                        </div>
                        {/* <!-- Slider indicators --> */}
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                        {/* <!-- Slider controls --> */}
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VisitZealand
