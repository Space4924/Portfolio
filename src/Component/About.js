import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-0 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> INTRODUCTION</h1>
                        <p class="mb-8 leading-relaxed">So Hi This is Bhoopendra Doing Bachelors in Architecture from Indian Institute of Technology Roorkee Uttrakahand aur bhut sara likhna hai isme vo baad me likhunga abhi time nhi hai market jana hai chalo thoda sa or likh deta hoo IN part Time I am very dedicated To my work of freelancing and one of the major time goes to tradeing Indian Market NIFTY 50 and BANK NIFTY</p>
                        <p>So here is my portfolio You can download it from here</p>
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="pic/about.png" />
                    </div>
                </div>
            </section></div>
    )
}

export default About