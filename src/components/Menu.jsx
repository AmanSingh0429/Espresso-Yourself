const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Signature Doppio",
      description: "A bold, silky double espresso with a caramel finish.",
      price: "$4.50",
      category: "Coffee",
      popular: true
    },
    {
      id: 2,
      name: "Oat Vanilla Latte",
      description: "Creamy oat milk, vanilla syrup, and a smooth espresso base.",
      price: "$5.75",
      category: "Latte",
      popular: false
    },
    {
      id: 3,
      name: "Iced Mocha",
      description: "Cold, chocolatey, and perfectly balanced for sunny afternoons.",
      price: "$5.95",
      category: "Cold Brew",
      popular: true
    },
    {
      id: 4,
      name: "Butter Croissant",
      description: "Golden, flaky, and baked fresh every morning.",
      price: "$3.95",
      category: "Pastry",
      popular: false
    },
    {
      id: 5,
      name: "Honey Lavender Latte",
      description: "Floral lavender, local honey, and smooth espresso with oat milk.",
      price: "$6.25",
      category: "Latte",
      popular: true
    },
    {
      id: 6,
      name: "Espresso Brownie",
      description: "Rich, fudgy brownie made with our signature espresso blend.",
      price: "$4.25",
      category: "Pastry",
      popular: false
    }
  ]

  return (
    <section id="menu" className="bg-[#f0e4d7]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a5a33]">Menu highlights</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Simple favorites, made with care.</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-[#e4d1bf] bg-white p-6 shadow-[0_12px_30px_rgba(84,50,30,0.05)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(84,50,30,0.12)] hover:-translate-y-1"
            >
              {/* Popular badge */}
              {/* {item.popular && (
                <div className="absolute right-4 top-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-[#9a5a33]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-amber-500">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Popular
                  </span>
                </div>
              )} */}

              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {/* Category icon */}
                    <div className=" transition-opacity duration-300 group-hover:opacity-100">
                      {item.category === "Coffee" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a5a33]">
                          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                        </svg>
                      )}
                      {item.category === "Latte" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a5a33]">
                          <path d="M2 2h20" />
                          <path d="M7 2v4" />
                          <path d="M12 2v4" />
                          <path d="M17 2v4" />
                          <rect x="3" y="6" width="18" height="12" rx="2" />
                        </svg>
                      )}
                      {item.category === "Cold Brew" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a5a33]">
                          <path d="M12 2v4" />
                          <path d="M12 18v4" />
                          <path d="M4.93 4.93l2.83 2.83" />
                          <path d="M16.24 16.24l2.83 2.83" />
                          <path d="M2 12h4" />
                          <path d="M18 12h4" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                      {item.category === "Pastry" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a5a33]">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#9a5a33]">
                      {item.name}
                    </h3>
                  </div>
                  {/* Hover underline effect */}
                  <div className="mt-3 h-0.5 w-12 bg-gradient-to-r from-[#9a5a33] to-[#c47a4a] transition-all duration-500 group-hover:w-full"></div>
                  <p className="mt-2 max-w-xl leading-7 text-[#6f5544] transition-all duration-300 group-hover:text-[#5f4636]">
                    {item.description}
                  </p>


                </div>
                <div className="whitespace-nowrap rounded-full bg-[#2b1d14] px-4 py-2 text-sm font-semibold text-[#f7e9d7] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#9a5a33] group-hover:shadow-lg">
                  {item.price}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View full menu button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-[#2b1d14] px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-[#9a5a33] hover:shadow-lg hover:-translate-y-0.5"
          >
            View full menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu