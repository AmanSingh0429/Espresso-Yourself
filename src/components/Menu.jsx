const Menu = () => {
  return (
    <section id="menu" className="bg-[#f0e4d7]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a5a33]">Menu highlights</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Simple favorites, made with care.</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="flex items-start justify-between gap-6 rounded-3xl border border-[#e4d1bf] bg-white p-6 shadow-[0_12px_30px_rgba(84,50,30,0.05)]">
            <div>
              <h3 className="text-xl font-semibold">Signature Doppio</h3>
              <p className="mt-2 max-w-xl leading-7 text-[#6f5544]">A bold, silky double espresso with a caramel finish.</p>
            </div>
            <div className="whitespace-nowrap rounded-full bg-[#2b1d14] px-4 py-2 text-sm font-semibold text-[#f7e9d7]">$4.50</div>
          </article>
          <article className="flex items-start justify-between gap-6 rounded-3xl border border-[#e4d1bf] bg-white p-6 shadow-[0_12px_30px_rgba(84,50,30,0.05)]">
            <div>
              <h3 className="text-xl font-semibold">Oat Vanilla Latte</h3>
              <p className="mt-2 max-w-xl leading-7 text-[#6f5544]">Creamy oat milk, vanilla syrup, and a smooth espresso base.</p>
            </div>
            <div className="whitespace-nowrap rounded-full bg-[#2b1d14] px-4 py-2 text-sm font-semibold text-[#f7e9d7]">$5.75</div>
          </article>
          <article className="flex items-start justify-between gap-6 rounded-3xl border border-[#e4d1bf] bg-white p-6 shadow-[0_12px_30px_rgba(84,50,30,0.05)]">
            <div>
              <h3 className="text-xl font-semibold">Iced Mocha</h3>
              <p className="mt-2 max-w-xl leading-7 text-[#6f5544]">Cold, chocolatey, and perfectly balanced for sunny afternoons.</p>
            </div>
            <div className="whitespace-nowrap rounded-full bg-[#2b1d14] px-4 py-2 text-sm font-semibold text-[#f7e9d7]">$5.95</div>
          </article>
          <article className="flex items-start justify-between gap-6 rounded-3xl border border-[#e4d1bf] bg-white p-6 shadow-[0_12px_30px_rgba(84,50,30,0.05)]">
            <div>
              <h3 className="text-xl font-semibold">Butter Croissant</h3>
              <p className="mt-2 max-w-xl leading-7 text-[#6f5544]">Golden, flaky, and baked fresh every morning.</p>
            </div>
            <div className="whitespace-nowrap rounded-full bg-[#2b1d14] px-4 py-2 text-sm font-semibold text-[#f7e9d7]">$3.95</div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Menu