import React from 'react'

export default function GetApp() {
  return (
    <section class="bg-gradient-primary-to-secondary" id="download">
        <div class="container px-5">
            <h2 class="text-center text-white font-alt mb-4">Get the app now!</h2>
            <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <a class="me-lg-3 mb-4 mb-lg-0" href="#!"><img class="app-badge" src="frontend/assets/img/google-play-badge.svg" alt="..." /></a>
                <a href="#!"><img class="app-badge" src="frontend/assets/img/app-store-badge.svg" alt="..." /></a>
            </div>
        </div>
    </section>      
  );
}
