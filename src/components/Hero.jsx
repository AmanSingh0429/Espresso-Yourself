"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Playwrite_NO } from 'next/font/google'

const playwite = Playwrite_NO({ subsets: ['latin'] })

const Hero = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)
  const imageRef = useRef(null)
  const imageCardRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Initial animations (on page load)
    const tl = gsap.timeline()

    // Header animation
    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })

    // Badge animation
    tl.from(badgeRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.4')

    // Title animation (split text effect)
    const title = titleRef.current
    const titleChars = title?.querySelectorAll('h1')
    if (titleChars) {
      gsap.from(titleChars, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out'
      })
    } else {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    }

    // Description animation
    gsap.from(descriptionRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out'
    })

    // Buttons animation
    gsap.from(buttonsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      ease: 'power3.out'
    })



    // Image container animation
    gsap.from(imageRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: 'power3.out',
      transformOrigin: 'center center'
    })

    // Image card overlay animation
    gsap.from(imageCardRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.9,
      ease: 'back.out(1.2)'
    })

    // Floating animation for decorative blobs
    gsap.to('.blob-left', {
      y: 20,
      x: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    gsap.to('.blob-right', {
      y: -20,
      x: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    // Parallax effect on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const parallax = self.progress * 100
        if (imageRef.current) {
          gsap.set(imageRef.current, {
            y: parallax * 0.5,
            scale: 1 - parallax * 0.002
          })
        }
      }
    })

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 20
      const yPos = (clientY / window.innerHeight - 0.5) * 20

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x: xPos * 1,
          y: yPos * 1,
          duration: 1,
          ease: 'power2.out'
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Button hover animations
  const handleButtonHover = (e, isEnter) => {
    const button = e.currentTarget
    gsap.to(button, {
      scale: isEnter ? 1.05 : 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  return (
    <div ref={sectionRef}>
      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(147,84,49,0.18),transparent_38%),linear-gradient(180deg,#2b1d14_0%,#3a261c_100%)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:56px_56px]">
        </div>
        <div className="relative mx-auto flex h-fit min-h-[92vh] max-w-7xl flex-col justify-between px-6 py-6 sm:px-10 lg:px-12">
          <header ref={headerRef} className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Cafe Coffee</p>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 fill-amber-300 text-amber-300">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-sm text-white/85">4.9 loved by locals</span>
            </div>
          </header>
          <div className="grid items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-2xl text-white">
              <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-amber-100 backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee h-4 w-4">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" x2="6" y1="2" y2="4" />
                  <line x1="10" x2="10" y1="2" y2="4" />
                  <line x1="14" x2="14" y1="2" y2="4" />
                </svg>
                Fresh espresso, pastries, and quiet corners
              </div>
              <div ref={titleRef}>
                <h1 className={`max-w-xl text-4xl font leading-[1.1] tracking-tight sm:text-6xl lg:text-[3.5rem]`}>A warm place for <span className={` ${playwite.className} text-amber-200`}>coffee</span>, <span className={` ${playwite.className} text-amber-200 `}>conversation</span>, and  <span className={`${playwite.className} text-amber-200`}> slow mornings</span>.</h1>
              </div>
              <p ref={descriptionRef} className="mt-6 max-w-xl text-lg leading-8 text-stone-100/85 sm:text-xl">Cafe Coffee serves handcrafted espresso drinks, flaky pastries, and cozy vibes in the heart of the neighborhood.</p>
              <div ref={buttonsRef} className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#visit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 font-medium text-primary transition hover:-translate-y-0.5 hover:bg-amber-200"
                  onMouseEnter={(e) => handleButtonHover(e, true)}
                  onMouseLeave={(e) => handleButtonHover(e, false)}
                >
                  Visit us today
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/15"
                  onMouseEnter={(e) => handleButtonHover(e, true)}
                  onMouseLeave={(e) => handleButtonHover(e, false)}
                >
                  See the menu
                </a>
              </div>

            </div>
            <div className="relative">
              <div className="blob-left absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-amber-300/25 blur-3xl lg:block"></div>
              <div className="blob-right absolute -right-6 bottom-8 hidden h-32 w-32 rounded-full bg-orange-200/30 blur-3xl lg:block"></div>
              <div ref={imageRef} className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[#4a2f22] p-4 shadow-2xl shadow-black/20">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"
                  alt="Coffee and pastry at Cafe Coffee"
                  className="h-[520px] w-full rounded-[1.6rem] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div ref={imageCardRef} className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-primary/80 p-5 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2 text-sm text-amber-100/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    125 Willow Street, Downtown
                  </div>
                  <p className="mt-2 text-xl font-medium">Come in for a quiet work session or your daily espresso ritual.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero