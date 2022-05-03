import React, { Component } from 'react'

export default class category extends Component {
  render() {
    return (
      <div>
      <h1 className='text-center text-info'>categories</h1>
      
          <div className='row mt-2 mx-5'>
           
                  
                  <div className='col-md-3'  style={{backgroundColor :'#2257bf', width:'100px', marginLeft:'10px', marginTop:'10px'}}>
                  <a href='#'><bold>Operation system</bold></a>
                  <p>78 courses </p>
                  </div>
                  <div   className='col-md-3'style={{backgroundColor :'#2257bf', width:'100px', marginLeft:'10px', marginTop:'10px'}}>
                  <a href='#'>learn CI/CD </a>
                  <p>78 courses </p>
                  </div>
                  <div className='col-md-3'  style={{backgroundColor :'#2257bf', width:'100px', marginLeft:'10px', marginTop:'10px'}}>
                  <a href='#'>Containers</a>
                  <p>78 courses </p>
                  </div>
                  <div className='col-md-3' style={{backgroundColor :'#2257bf', width:'100px', marginLeft:'10px', marginTop:'10px'}}>
                  <a href='#'>Cloud</a>
                  <p>78 courses </p>
                  </div>
                  <div className='col-md-3'  style={{backgroundColor :'#2257bf', width:'100px', marginLeft:'10px', marginTop:'10px'}}>
                  <a href='#'>Virtualisation</a>
                  <p>78 courses </p>
                  </div>
                  <div className='col-md-3' style={{backgroundColor :'#2257bf', width:'100px', marginLeft:'10px', marginTop:'10px'}}>
                  <a href='#'>Networking and security</a>
                  <p>78 courses </p>
                  </div>
                  <div className='col-md-3' style={{backgroundColor :'#2257bf', width:'100px', marginLeft:'10px', marginTop:'10px'}}>
                  <a href='#'>Automated testing tools</a>
                  <p>78 courses </p>
                  </div>
                  <div className='col-md-3' style={{backgroundColor :'#2257bf', width:'100px', marginLeft:'10px', marginTop:'10px'}}>
                  <a href='#'>Infrastructure provisioning</a>
                  <p>78 courses </p>
                  </div>
                  <div className='col-md-3' style={{ width:'100px', marginLeft:'10px', marginTop:'10px'}}>
                  <a href='#'>See All</a>
                  </div>

                 
                  
              </div>

          </div>
    
      
    
    )
  }
}
