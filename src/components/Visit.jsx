const Visit = () => {
  return (
    <section id="visit" className="bg-[#2b1d14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          {/* Left Column - Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">Plan your visit</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Stop by for coffee, stay for the atmosphere.</h2>

            {/* Contact Info */}
            <div className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock3 mt-1 h-5 w-5 text-amber-200">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16.5 12" />
                </svg>
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-white/75">Monday–Sunday · 7:00 AM to 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mt-1 h-5 w-5 text-amber-200">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-white/75">125 Willow Street, Downtown</p>
                  <a
                    href="https://maps.google.com/?q=125+Willow+Street+Downtown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs text-amber-200/60 transition hover:text-amber-200"
                  >
                    Get directions
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mt-1 h-5 w-5 text-amber-200">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-white/75">(555) 248-3301</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mt-1 h-5 w-5 text-amber-200">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-white/75">hello@doppiocoffee.com</p>
                </div>
              </div>
            </div>

            {/* Parking Info - Added */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 h-5 w-5 text-amber-200">
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                  <path d="M3 6h18" />
                </svg>
                <div>
                  <p className="font-medium">Parking</p>
                  <p className="text-white/75">Street parking available • Free lot behind the building</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map & Social */}
          <div className="space-y-6">
            {/* Google Maps */}
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#3a261c] shadow-2xl shadow-black/20">
              <div className="relative h-[300px] w-full">
                <iframe
                  title="Doppio Coffee Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb4ccf7%3A0xb3b6b6b6b6b6b6b6!2sWillow%20Street!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-[2rem]"
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-white/60">
                  📍 125 Willow Street, Downtown • Corner of Maple & 3rd
                </p>
              </div>
            </div>

            {/* Stay Connected */}
            <div className="rounded-[2rem] border border-white/10 bg-[#3a261c] p-6 shadow-2xl shadow-black/20">
              <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Stay connected</p>
                <h3 className="mt-3 text-2xl font-semibold">Follow the scent of fresh espresso.</h3>
                <p className="mt-4 leading-7 text-white/75">Check out today's pastries, seasonal drinks, and cozy moments from the cafe.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="https://instagram.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3 font-medium text-[#2b1d14] transition hover:bg-amber-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                  <a href="https://facebook.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/15">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visit