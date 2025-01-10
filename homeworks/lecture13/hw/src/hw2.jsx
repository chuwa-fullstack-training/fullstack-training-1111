import React, { Component } from 'react';

class HW2 extends Component {
  constructor() {
    super()
    this.list = new Array(20).fill(0).map((_, i) => i + 1)
  }
  render() {
    return (
      <div className='phoneContainer'>
        <div className='phone'>
          <div className='phoneHeader'>
            <h2>status bar</h2>
          </div>
          <div className='phoneBody'>
            <div className='phoneList'>
              <div className='screen'>
                {this.list.slice(0, 16).map((item, index) => (
                  <div key={index} className='phoneItem' onClick={() => alert(`Item ${item} clicked`)}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className='quickAccess'>
                {this.list.slice(16, 20).map((item, index) => (
                  <div key={index} className='phoneItem' onClick={() => alert(`Item ${item} clicked`)}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HW2;