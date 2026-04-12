import About from "@/components/About"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
import Testimonials from "@/components/Testimonials"
import Visit from "@/components/Visit"

const page = () => {
  return (
    <div>
      <main className="min-h-screen bg-[#f6efe6] text-[#2b1d14]">
        <Hero />
        <About />
        <Menu />
        <Visit />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}

export default page