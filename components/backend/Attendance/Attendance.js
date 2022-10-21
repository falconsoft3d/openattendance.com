import React from 'react'

export default function Attendance() {
  return (
    <div className='attendance-main'>
         <div className='row m-2'>
            <div className='col m-2'>
                  <div className='attendance-main-int'>
                        <div className='attendance-main-int-header text-center'>
                              <h1>30 JULY 2022</h1>
                              <p>create your attendance</p>
                              <h1>Total 03:23</h1>
                              <h5>Workday</h5>
                        </div>
                        <div className='attendance-main-int-body text-center text-light'>
                              <h1>8:30 to 10 : 12</h1>
                              <h1>11:00 to -- : --</h1>
                        </div>
                        <div className='attendance-main-int-footer'>
                            <button type="submit" className="btn btn-success btn-lg btn-block">
                                  Entry
                            </button>


                            <button type="submit" className="btn btn-danger btn-lg btn-block">
                                  Stop
                            </button>

                            <button type="submit" className="btn btn-secondary btn-lg btn-block">
                                  Correct
                            </button>
                        </div>
                  </div>  
            </div>
            <div className='col m-2'>
                  
            </div> 
         </div>
    </div>
  );
}
