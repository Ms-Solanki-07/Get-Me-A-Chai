import React from 'react'

const About = () => {
  return (
    <div>
     {/* about page on get me a chai using tailwind css and nextjs  */}
        <div className="bg-white h-0.5 opacity-20 w-full"></div>
        <div className="text-white mx-auto container pb-16">
            <h2 className="text-2xl font-bold text-center my-4 mb-8">About Get Me A Chai</h2>
            <p className="max-w-[80vw] md:max-w-[60vw] mx-auto text-center">
            Get Me A Chai is a platform that allows creators to connect with their fans and receive support through contributions. Whether you're a content creator, artist, or entrepreneur, you can use this platform to fund your projects and engage with your audience.
            </p>
        </div>
        <div className="bg-white h-0.5 opacity-20 w-full"></div>
        <div className="text-white mx-auto container pb-16">
            <h2 className="text-2xl font-bold text-center my-4 mb-8">How It Works</h2>
            <p className="max-w-[80vw] md:max-w-[60vw] mx-auto text-center">
            Fans can support their favorite creators by making contributions, which can be used to fund projects, cover expenses, or simply show appreciation. Creators can set up their profiles, share their stories, and engage with their supporters.
            </p>
        </div>
        <div className="bg-white h-0.5 opacity-20 w-full"></div>
        <div className="text-white mx-auto container pb-16">
            <h2 className="text-2xl font-bold text-center my-4 mb-8">Get Involved</h2>
            <p className="max-w-[80vw] md:max-w-[60vw] mx-auto text-center">
            If you're a creator looking to fund your projects or a fan wanting to support your favorite creators, Get Me A Chai is the perfect platform for you. Join us today and be part of a community that values creativity and support.
            </p>   
        </div>
        <div className="bg-white h-0.5 opacity-20 w-full"></div>
        <div className="text-white mx-auto container pb-16">
            <h2 className="text-2xl font-bold text-center my-4 mb-8">Contact Us</h2>
            <p className="max-w-[80vw] md:max-w-[60vw] mx-auto text-center">
            For any inquiries or support, feel free to reach out to us at <a href="mailto:mssolanki1122@gmail.com" className='text-blue-500'>mssolanki1122@gmail.com</a> </p>
        </div>
    </div>
  )
}

export default About


export const metadata = {
  title: 'About - Get Me A Chai',
  description: 'Learn more about Get Me A Chai, how it works, and how you can get involved.',
}