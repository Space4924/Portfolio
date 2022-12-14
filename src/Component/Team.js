import React from 'react'
import All from './All'
import Navbar from './Navbar'

const Team = () => {
    return (
        <div>
        <Navbar/>
        <All/>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We called our team as SKOPIANS</p>
                    </div>
                    <div class="flex flex-wrap -m-2 ">
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="pic/nikhil.png" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">NIKHIL TIWARI</h2>
                                    <p class="text-gray-500">Content Writer</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="pic/santosh.png" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">MALOTHU SANTHOSH</h2>
                                    <p class="text-gray-500">GRAPHIC DESIGNER</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="pic/kirtika.jpeg" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">KIRTIKA</h2>
                                    <p class="text-gray-500">ALL ROUNDER</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="pic/jaipal.png" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">LAVUDYA JAIPAL</h2>
                                    <p class="text-gray-500">DATA</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="pic/sp.png" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">SHIVPRAKASH YADAV</h2>
                                    <p class="text-gray-500">NALLA AADMI</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="pic/omkar.png" />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">OMKAR TIWARI</h2>
                                    <p class="text-gray-500">INFLUNGER</p>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team