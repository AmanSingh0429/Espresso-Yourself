const Footer = () => {
  return (
    <footer className="bg-[#2b1d14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Doppio Coffee</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Slow coffee,<br />warm moments.</h3>
            </div>
            <p className="text-sm leading-6 text-white/60">
              Handcrafted espresso drinks and fresh pastries served with thoughtful hospitality.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="text-sm text-white/60 transition hover:text-white/90">Menu</a>
              </li>
              <li>
                <a href="#visit" className="text-sm text-white/60 transition hover:text-white/90">Visit Us</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 transition hover:text-white/90">Gift Cards</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 transition hover:text-white/90">Our Story</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 transition hover:text-white/90">Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">Visit</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-amber-200/60">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>125 Willow Street, Downtown</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-amber-200/60">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16.5 12" />
                </svg>
                <span>Mon–Sun: 7:00 AM – 8:00 PM</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-amber-200/60">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(555) 248-3301</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-amber-200/60">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>hello@doppiocoffee.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">Subscribe</h4>
            <p className="text-sm text-white/60">Get weekly updates on new roasts and seasonal drinks.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-amber-300/50 focus:outline-none focus:ring-1 focus:ring-amber-300/50"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-amber-300 px-4 py-2.5 text-sm font-medium text-[#2b1d14] transition hover:bg-amber-200"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Doppio Coffee. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/40">
              <a href="#" className="transition hover:text-white/60">Privacy Policy</a>
              <a href="#" className="transition hover:text-white/60">Terms of Service</a>
              <a href="#" className="transition hover:text-white/60">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer