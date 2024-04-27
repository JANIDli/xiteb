import React, { Component } from 'react'

export class StatsBanner extends Component {
    
  render() {
    return (
      <div className="flex justify-around bg-white p-4 shadow-md">
      <div className="text-center px-4">
        <div className="text-4xl font-bold" style={{ color: '#1A2B56' }}>890</div>
        <div className="text-gray-600">Delivered packages</div>
      </div>
      <div className="text-center px-4">
        <div className="text-4xl font-bold" style={{ color: '#1A2B56' }}>137</div>
        <div className="text-gray-600">Countries covered</div>
      </div>
      <div className="text-center px-4">
        <div className="text-4xl font-bold" style={{ color: '#1A2B56' }}>740</div>
        <div className="text-gray-600">Tons of Goods</div>
      </div>
      <div className="text-center px-4">
        <div className="text-4xl font-bold" style={{ color: '#1A2B56' }}>600</div>
        <div className="text-gray-600">Satisfied Clients</div>
      </div>
    </div>
    )
  }
}

export default StatsBanner