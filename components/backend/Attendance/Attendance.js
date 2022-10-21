import React from 'react'

export default function Attendance() {
  return (
    <div className='attendance-main'>
         <div className='row m-2'>
            <div className='col m-2'>
                  <div className='attendance-main-int'>
                        <div className='attendance-main-int-header'>
                              1
                        </div>
                        <div className='attendance-main-int-body'>
                              1
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
                  1
            </div> 
         </div>
    </div>
  );
}
