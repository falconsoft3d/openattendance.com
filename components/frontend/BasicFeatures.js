import React from 'react'
import Image from 'next/image';

export default function BasicFeatures() {
  return (
    <section class="bg-light">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                    <div class="col-12 col-lg-5">
                        <h2 class="display-4 lh-1 mb-4">Enter a new age of web design</h2>
                        <p class="lead fw-normal text-muted mb-5 mb-lg-0">This section is perfect for featuring some information about your application, why it was built, the problem it solves, or anything else! There s plenty of space for text here, so dont worry about writing too much.</p>
                    </div>
                    <div class="col-sm-8 col-md-6">
                        <div class="px-5 px-sm-0">
                            <Image src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
}
