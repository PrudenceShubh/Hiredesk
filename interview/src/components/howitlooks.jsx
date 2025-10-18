import React from 'react'
import howItWorks from '../assets/howItWorks'

const Howitlooks = () => {
  return (      
    <div className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className='text-3xl font-bold p-5 '>How It Works </h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            Our streamlined process makes hiring and job hunting efficient and effective
          </h2>
        </div>
        
        <div className="space-y-16">
          {howItWorks.map((data, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex  items-center gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Step Content */}
                <div className="flex-1 bg-gray-900 rounded-xl p-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500  text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {data.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{data.title}</h3>
                  </div>
                  
                  <p className="text-white mb-6 text-lg leading-relaxed">
                    {data.discription}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className=" p-6 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="text-blue-600 font-semibold mb-3">For Job Seekers</h4>
                      <p className="text-white">{data.for_job_seaker}</p>
                    </div>
                    <div className=" p-6 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="text-purple-600 font-semibold mb-3">For Employers</h4>
                      <p className="text-white">{data.for_employee}</p>
                    </div>
                  </div>
                </div>
                
                {/* Step Visual */}
                <div className="flex-1">
                  <div className=" p-8 rounded-lg shadow-lg  h-60 flex items-center justify-center">
                    <div className="text-center text-white ">
                      <p className="text-4xl font-bold ">Step {data.number}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Howitlooks
