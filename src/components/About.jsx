const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a5a33]">About us</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Crafted coffee, friendly faces, and a space that feels like home.</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[#5f4636]">We source quality beans, pair them with fresh-baked pastries, and serve everything with calm, thoughtful hospitality. Whether you need a quick pick-me-up or a place to linger, Doppio Coffee is designed to be your neighborhood favorite.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <article className="rounded-3xl border border-[#e6d6c5] bg-white p-6 shadow-[0_12px_30px_rgba(84,50,30,0.06)]">
          <h3 className="text-xl font-semibold">Small-batch beans</h3>
          <p className="mt-3 leading-7 text-[#6f5544]">Rich, balanced espresso with seasonal rotations.</p>
        </article>
        <article className="rounded-3xl border border-[#e6d6c5] bg-white p-6 shadow-[0_12px_30px_rgba(84,50,30,0.06)]">
          <h3 className="text-xl font-semibold">Bakery fresh</h3>
          <p className="mt-3 leading-7 text-[#6f5544]">Croissants, muffins, and sweet treats made daily.</p>
        </article>
        <article className="rounded-3xl border border-[#e6d6c5] bg-white p-6 shadow-[0_12px_30px_rgba(84,50,30,0.06)]">
          <h3 className="text-xl font-semibold">Cozy atmosphere</h3>
          <p className="mt-3 leading-7 text-[#6f5544]">Soft lighting, warm wood tones, and quiet nooks.</p>
        </article>
      </div>
    </section>
  )
}

export default About