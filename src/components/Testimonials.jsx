"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      text: "Doppio has become my second office. The oat vanilla latte is perfection, and the staff always remembers my name. Best coffee in town!",
      rating: 5,
      drink: "Oat Vanilla Latte"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Freelance Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      text: "The atmosphere here is unmatched. Quiet enough to work, warm enough to feel welcome. Their croissants are dangerously good.",
      rating: 5,
      drink: "Butter Croissant"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Book Club Member",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      text: "Our book club meets here every month. The staff sets aside our favorite corner and always has our orders ready. Absolute gem.",
      rating: 5,
      drink: "Signature Doppio"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Coffee Enthusiast",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      text: "Finally found a place that takes espresso seriously. The beans are fresh, the crema is perfect, and the service is always friendly.",
      rating: 5,
      drink: "Signature Doppio"
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Morning Regular",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      text: "The consistency is incredible - perfect every single time. The team here makes mornings something to look forward to.",
      rating: 5,
      drink: "Nitro Cold Brew"
    },
    {
      id: 6,
      name: "Michael Torres",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      text: "The chai latte keeps me going through my workday. Doppio has become an essential part of my business routine.",
      rating: 5,
      drink: "Chai Latte"
    }
  ]

  return (
    <section className="bg-[#f6efe6] py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a5a33]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Loved by our community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#5f4636]">
            Don't just take our word for it — here's what our regulars have to say about their Doppio experience.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-3xl bg-white p-8 shadow-[0_12px_30px_rgba(84,50,30,0.06)]">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-amber-400">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="mt-2 text-3xl font-bold text-primary">4.9</p>
            <p className="text-sm text-[#6f5544]">Based on 1,284 reviews</p>
          </div>
          <div className="h-12 w-px bg-[#e6d6c5]"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">7+</p>
            <p className="text-sm text-[#6f5544]">Years serving the community</p>
          </div>
          <div className="h-12 w-px bg-[#e6d6c5]"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">15k+</p>
            <p className="text-sm text-[#6f5544]">Happy customers served monthly</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full rounded-3xl border border-[#e6d6c5] bg-white p-6 transition-all hover:shadow-[0_20px_40px_rgba(84,50,30,0.1)]">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="mt-4 text-base leading-relaxed text-[#5f4636]">
                    "{testimonial.text}"
                  </p>

                  {/* Drink Tag */}
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-[#f0e4d7] px-3 py-1 text-xs font-medium text-[#9a5a33]">
                      {testimonial.drink}
                    </span>
                  </div>

                  {/* User Info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#f0e4d7] pt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-xs text-[#6f5544]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Featured Testimonial */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-8 text-white shadow-xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[auto,1fr] md:items-center">
            <div className="text-center md:text-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mx-auto text-amber-300/40 md:mx-0">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl font-medium leading-relaxed italic md:text-2xl">
                "Doppio Coffee isn't just a coffee shop — it's the heart of our neighborhood.
                The moment you walk in, you feel at home."
              </p>
              <div className="mt-6">
                <p className="text-lg font-semibold text-amber-200">— Local Business Alliance</p>
                <p className="text-sm text-white/60">"Best Coffee Shop" Winner 2023, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white transition hover:bg-secondary"
          >
            Join our coffee family
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom Swiper Pagination Styles */}
      <style jsx>{`
        :global(.testimonials-swiper .swiper-pagination-bullet) {
          background-color: #d4c0ae;
          opacity: 0.5;
        }
        :global(.testimonials-swiper .swiper-pagination-bullet-active) {
          background-color: #9a5a33;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default Testimonials