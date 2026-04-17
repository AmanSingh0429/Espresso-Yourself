import { Coffee, Milk, Cloud, Croissant, Star, ArrowRight, CakeSlice } from 'lucide-react'
import { Playwrite_NO } from 'next/font/google'

const playwite = Playwrite_NO({ weight: '400', subsets: ['latin'] })

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Signature Doppio",
      description: "A bold, silky double espresso with a caramel finish.",
      price: "$4.50",
      category: "Coffee",
      popular: true,
      icon: Coffee
    },
    {
      id: 2,
      name: "Oat Vanilla Latte",
      description: "Creamy oat milk, vanilla syrup, and a smooth espresso base.",
      price: "$5.75",
      category: "Latte",
      popular: false,
      icon: Milk
    },
    {
      id: 3,
      name: "Iced Mocha",
      description: "Cold, chocolatey, and perfectly balanced for sunny afternoons.",
      price: "$5.95",
      category: "Cold Brew",
      popular: true,
      icon: Cloud
    },
    {
      id: 4,
      name: "Butter Croissant",
      description: "Golden, flaky, and baked fresh every morning.",
      price: "$3.95",
      category: "Pastry",
      popular: false,
      icon: Croissant
    },
    {
      id: 5,
      name: "Honey Lavender Latte",
      description: "Floral lavender, local honey, and smooth espresso with oat milk.",
      price: "$6.25",
      category: "Latte",
      popular: true,
      icon: Milk
    },
    {
      id: 6,
      name: "Espresso Brownie",
      description: "Rich, fudgy brownie made with our signature espresso blend.",
      price: "$4.25",
      category: "Pastry",
      popular: false,
      icon: CakeSlice
    }
  ]

  return (
    <section id="menu">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-l uppercase tracking-[0.3em] text-[#9a5a33]">Menu highlights</p>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-5xl">Simple favorites, made with care.</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-[#e4d1bf] bg-white p-6 shadow-[0_12px_30px_rgba(84,50,30,0.05)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(84,50,30,0.12)] hover:-translate-y-1"
              >
                {/* Popular badge */}
                {/* {item.popular && (
                  <div className="absolute right-4 top-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-[#9a5a33]">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      Popular
                    </span>
                  </div>
                )} */}

                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {/* Category icon from object */}
                      <div className="transition-opacity duration-300 group-hover:opacity-100">
                        <IconComponent size={24} className="text-[#9a5a33]" />
                      </div>
                      <h3 className={`text-xl ${playwite.className} font-normal transition-colors duration-300 group-hover:text-[#9a5a33]`}>
                        {item.name}
                      </h3>
                    </div>
                    {/* Hover underline effect */}
                    <div className="mt-3 h-0.5 w-12 bg-gradient-to-r from-[#9a5a33] to-[#c47a4a] transition-all duration-500 group-hover:w-full"></div>
                    <p className="mt-2 max-w-xl leading-7 text-[#6f5544] transition-all duration-300 group-hover:text-[#5f4636]">
                      {item.description}
                    </p>
                  </div>
                  <div className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-[#f7e9d7] transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-950 group-hover:shadow-lg">
                    {item.price}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* View full menu button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-amber-950 hover:shadow-lg hover:-translate-y-0.5"
          >
            View full menu
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu