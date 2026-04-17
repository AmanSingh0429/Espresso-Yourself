"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock, MapPin, Phone, Mail, Menu as ParkingIcon } from 'lucide-react'
import { Playwrite_NO } from 'next/font/google'

const playwite = Playwrite_NO({ weight: '400', subsets: ['latin'] })

gsap.registerPlugin(ScrollTrigger)

const Visit = () => {
  const sectionRef = useRef(null)
  const leftColumnRef = useRef(null)
  const rightColumnRef = useRef(null)
  const infoContainerRef = useRef(null)
  const mapRef = useRef(null)
  const socialRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations (fade in from bottom)
      gsap.fromTo(leftColumnRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(rightColumnRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Stagger children of info container
      if (infoContainerRef.current) {
        gsap.fromTo(infoContainerRef.current.children,
          {
            opacity: 0,
            x: -30
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: infoContainerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Map card animation
      gsap.fromTo(mapRef.current,
        {
          opacity: 0,
          scale: 0.95,
          rotationX: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Social card animation
      gsap.fromTo(socialRef.current,
        {
          opacity: 0,
          scale: 0.95
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: socialRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Hover animations for buttons and cards
      const buttons = document.querySelectorAll('.social-button')
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'back.out(1)'
          })
        })
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'back.in(1)'
          })
        })
      })

      // Floating animation for map pin icon
      gsap.to('.map-pin-icon', {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="visit" ref={sectionRef} className="bg-primary text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          {/* Left Column - Info */}
          <div ref={leftColumnRef}>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Plan your visit</p>
            <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl">Stop by for coffee, stay for the atmosphere.</h2>

            {/* Contact Info Container */}
            <div ref={infoContainerRef} className="mt-10 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <Clock className="mt-3 size-7 text-amber-200 animate-bounce" />
                  <div>
                    <p className={`${playwite.className}`}>Hours</p>
                    <p className="text-white/75">Monday-Sunday · 7:00 AM to 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-3 size-7 text-amber-200 animate-bounce" />
                  <div>
                    <p className={`${playwite.className}`}>Address</p>
                    <p className="text-white/75">125 Willow Street, Downtown</p>

                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <Phone className="mt-3 size-7 text-amber-200 animate-bounce" />
                  <div>
                    <p className={`${playwite.className}`}>Phone</p>
                    <p className="text-white/75">(555) 248-3301</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <Mail className="mt-3 size-7 text-amber-200 animate-bounce" />
                  <div>
                    <p className={`${playwite.className}`}>Email</p>
                    <p className="text-white/75">hello@doppiocoffee.com</p>
                  </div>
                </div>
              </div>

              {/* Parking Info */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <ParkingIcon className="mt-3 size-7 text-amber-200 animate-bounce" />
                  <div>
                    <p className={`${playwite.className}`}>Parking</p>
                    <p className="text-white/75">Street parking available • Free lot behind the building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map & Social */}
          <div ref={rightColumnRef} className="space-y-6">
            {/* Google Maps */}
            <div
              ref={mapRef}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-secondary shadow-2xl shadow-black/20 transform-gpu"
            >
              <div className="relative h-[300px] w-full">
                <iframe
                  title="Cafe Coffee Location"
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
            <div
              ref={socialRef}
              className="rounded-[2rem] border border-white/10 bg-secondary p-6 shadow-2xl shadow-black/20 transform-gpu"
            >
              <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Stay connected</p>
                <h3 className="mt-3 text-2xl font-semibold">Follow the scent of fresh espresso.</h3>
                <p className="mt-4 leading-7 text-white/75">Check out today's pastries, seasonal drinks, and cozy moments from the cafe.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://instagram.com"
                    className="social-button inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3 font-medium text-primary transition hover:bg-amber-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    className="social-button inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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