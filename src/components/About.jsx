"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Counter from '../utils/Counter'
import { Playwrite_NO } from 'next/font/google'

const playwite = Playwrite_NO({ subsets: ['latin'] })

const About = () => {
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Main timeline for about section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        // toggleActions: 'play none none reverse',
        // markers: true
      }
    })

    // Badge animation
    tl.from(badgeRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    })

    // Title animation
    tl.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3')

    // Description animation
    tl.from(descriptionRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')

    // Cards animation (staggered with 3D effect)
    const cards = cardsRef.current?.querySelectorAll('article')
    if (cards) {
      gsap.fromTo(
        cards,
        {
          y: 60,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.25,
          ease: 'back.in',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          }
        }
      );

      // Add hover animations for each card
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
            boxShadow: '0 20px 40px rgba(84, 50, 30, 0.15)'
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
            boxShadow: '0 12px 30px rgba(84, 50, 30, 0.06)'
          })
        })
      })
    }

    // Parallax effect on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        if (titleRef.current) {
          gsap.set(titleRef.current, {
            x: progress * 30
          })
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
      {/* Main header section - larger */}
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <p ref={badgeRef} className="text-lg font-semibold uppercase tracking-[0.3em] text-[#9a5a33]">
            About us
          </p>
          <h2 ref={titleRef} className="mt-4 text-4xl tracking-tight sm:text-5xl lg:text-6xl text-primary">
            Crafted coffee, friendly faces, and a space that feels like home.
          </h2>
        </div>
        <div ref={descriptionRef}>
          <p className="text-xl leading-8 text-[#5f4636] sm:text-xl">
            We source quality beans, pair them with fresh-baked pastries, and serve everything with calm,
            thoughtful hospitality. Whether you need a quick pick-me-up or a place to linger, Cafe Coffee
            is designed to be your neighborhood favorite.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-[#dd7f4d]"></div>
            <span className="text-sm text-[#9a5a33]">Est. 2017</span>
            <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-[#dd7f4d]"></div>
          </div>
        </div>
      </div>

      {/* Features grid - larger cards */}
      <div ref={cardsRef} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 - Small-batch beans */}
        <article className="group relative overflow-hidden rounded-3xl border border-[#e6d6c5] bg-white p-8 shadow-[0_12px_30px_rgba(84,50,30,0.06)] transition-all duration-300">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-[#9a5a33]/5 to-transparent blur-2xl"></div>
          <div className="relative">
            <div className="mb-4 inline-flex rounded-2xl bg-[#f0e4d7] p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a5a33]">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                <line x1="6" x2="6" y1="2" y2="4" />
                <line x1="10" x2="10" y1="2" y2="4" />
                <line x1="14" x2="14" y1="2" y2="4" />
              </svg>
            </div>
            <h3 className={`text-2xl ${playwite.className} text-[#2b1d14]`}>Small-batch beans</h3>
            <p className="mt-3 text-l leading-7 text-[#6f5544]">
              Rich, balanced espresso with seasonal rotations sourced directly from sustainable farms.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#9a5a33] group-hover:scale-110 group-hover:translate-x-6 transition-all duration-500">
              <span>Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </article>

        {/* Card 2 - Bakery fresh */}
        <article className="group relative overflow-hidden rounded-3xl border border-[#e6d6c5] bg-white p-8 shadow-[0_12px_30px_rgba(84,50,30,0.06)] transition-all duration-300">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-[#9a5a33]/5 to-transparent blur-2xl"></div>
          <div className="relative">
            <div className="mb-4 inline-flex rounded-2xl bg-[#f0e4d7] p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a5a33]">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h3 className={`text-2xl ${playwite.className} text-[#2b1d14]`}>Bakery fresh</h3>
            <p className="mt-3 text-l leading-7 text-[#6f5544]">
              Croissants, muffins, and sweet treats made fresh daily by our in-house pastry chef.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#9a5a33] group-hover:scale-110 group-hover:translate-x-6 transition-all duration-500">
              <span>Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </article>

        {/* Card 3 - Cozy atmosphere */}
        <article className="group relative overflow-hidden rounded-3xl border border-[#e6d6c5] bg-white p-8 shadow-[0_12px_30px_rgba(84,50,30,0.06)] transition-all duration-300">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-[#9a5a33]/5 to-transparent blur-2xl"></div>
          <div className="relative">
            <div className="mb-4 inline-flex rounded-2xl bg-[#f0e4d7] p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a5a33]">
                <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className={`text-2xl ${playwite.className} text-[#2b1d14]`}>Cozy atmosphere</h3>
            <p className="mt-3 text-l leading-7 text-[#6f5544]">
              Soft lighting, warm wood tones, comfortable seating, and quiet corners perfect for reading or working.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#9a5a33] group-hover:scale-110 group-hover:translate-x-6 transition-all duration-500">
              <span>Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </article>
      </div>

      {/* Additional stats section - makes it larger */}
      <div className="mt-16 grid gap-6 rounded-3xl bg-secondary p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-12">
        <div className="text-center">
          <div className="text-4xl font-bold text-white"><Counter target={7} /> +</div>
          <p className="mt-2 text-sm text-white">Years of Excellence</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white"><Counter target={15} />k+</div>
          <p className="mt-2 text-sm text-white">Happy Customers</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white"><Counter target={50} />+</div>
          <p className="mt-2 text-sm text-white">Coffee Varieties</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white"><Counter target={100} />%</div>
          <p className="mt-2 text-sm text-white">Locally Sourced</p>
        </div>
      </div>
    </section>
  )
}

export default About