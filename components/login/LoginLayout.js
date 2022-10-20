import React from 'react'

export default function LoginLayout({children}) {
  return (
    <div>

<div class="container">

{/* <!-- Outer Row --> */}
<div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                    {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div> 
    </div>
  );
}
