import React from 'react'

function form() {
    return (
        <div>
            <div className="form-container">
               <div className="form-con">
               <div className='program-border'>
                    <h1>Program</h1>
                </div>
               </div>
               <div className="input-background">
              <div className='input-content'>
                <form action="post">
                <div className='form-text'>
                    <p>FILL IN PERSONAL DETAILS</p>
                </div>
                    <div className="input">
                        <input type="text" name="" id="" placeholder='FullName' />
                        <input type="text" name="" id="" placeholder='Phone No' />
                    </div>

                    <div className="input input1">
                        <input type="text" name="" id="" placeholder='FullName' />
                        <input type="text" name="" id="" placeholder='Phone No' />
                    </div>
                    <div className='form-text'>
                    <p>SKILL OF INTEREST</p>
                </div>
                <input type="" />
                </form>
              </div>

              </div>
            </div>
        </div>
    )
}

export default form
