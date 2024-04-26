import React, { Component } from 'react'

export class Test extends Component {
  render() {
    return (
        <div className="bg-white text-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-4 text-center" >Best Global Logistics Solutions.</h2>
        <div className="flex justify-between space-x-4">
          {/* Card 1 */}
          <div className="card bg-gray-100 text-gray-800 p-3 rounded-lg shadow-lg flex-1">
            <img src="/1.jpg" alt="Air Freight Services" className="rounded-t-lg mb-3 h-32 object-cover" />
            <div className="p-3">
              <h3 className="text-lg font-semibold mb-2">Air Freight Services</h3>
              <p className="mb-3">At our Aero Service range, we are fully appreciative of how difficult it is for people to find...</p>
              <button className="bg-gray-100 text-teal-800 px-3 py-1 rounded">Read More</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-gray-100 text-gray-800 p-3 rounded-lg shadow-lg flex-1">
            <img src="/2.jpg" alt="Drone Services" className="rounded-t-lg mb-3 h-32 object-cover" />
            <div className="p-3">
              <h3 className="text-lg font-semibold mb-2">Drone Services</h3>
              <p className="mb-3">These are unique and often they differ from one industry to the other. Our logistics aerospace expertise...</p>
              <button className="bg-gray-100 text-teal-800 px-3 py-1 rounded">Read More</button>
            </div>
          </div>
        </div>
        <p className="italic mt-4">Logistic & Transport Solutions Time Finds Your Solutions</p>
      </div>
    )
  }
}

export default Test