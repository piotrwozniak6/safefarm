import dynamic from "next/dynamic";
import Header from "../components/Header";
import Filters from "../components/Filters";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 py-0 gap-0 max-w-4xl mx-auto">
      <Header />
      <div className="w-full flex justify-center mt-2 mb-8">
        <div className="w-full max-w-2xl">
          <Filters />
        </div>
      </div>
      <Map />

      {/* About Me section */}
      <section className="w-full max-w-5xl mx-auto my-20 px-4 py-14 flex flex-col md:flex-row items-center gap-10 bg-[#E7F4EC] rounded-2xl shadow-xl">
  <img 
    src="/pictureTest.jpg" 
    alt="Peter Viet portrait" 
    className="w-full md:w-[44%] rounded-2xl border border-[#D3E5D7] object-cover shadow-md"
  />

  <div className="md:w-[56%] text-safefarm-charcoal text-[1.075rem] md:text-[1.125rem] font-['Inter'] space-y-5 leading-[1.85rem]">
    <p><strong className="text-2xl md:text-3xl font-semibold font-serif leading-tight">Hi, I’m Peter Viet.</strong></p>

    <p>Over 130,000 people follow me on YouTube, where I share real stories about Vietnamese culture and life in Vietnam.</p>

    <p>But there’s one thing I kept running into again and again.</p>

    <div className="bg-white/70 p-4 rounded-lg border border-[#C3D9C8] text-[1.025rem] italic">
      In Vietnam, food labeled “organic” often isn’t. I’ve bought from certified shops, upscale markets, even farms that promised clean food. I still ended up disappointed. In Europe, that kind of certification usually means something.
    </div>

    <p>So I decided to change that.</p>

    <p>As a software engineer who trains every day and truly values health, I created Safe Farm. It’s a place where food is lab tested, verified, and made fully transparent. No fake labels. No fluff. Just proof.</p>

    <p>What started as a personal frustration has become a mission to make clean, honest food easier to trust and easier to find.</p>

    <p><strong className="font-semibold text-[1.05rem]">If that matters to you too, you’re in the right place.</strong></p>

    <div className="pt-3">
      <a 
        href="#why-safe-farm" 
        className="inline-block bg-[#2D3926] text-white text-sm md:text-base px-6 py-3 rounded-lg font-['Epilogue'] font-medium tracking-widest uppercase hover:bg-[#3a4c32] hover:scale-105 hover:shadow-xl transition-all duration-200"
      >
        Why Safe Farm?
      </a>
    </div>
  </div>
</section>
    </main>
  );
}

// import dynamic from "next/dynamic";
// import Header from "../components/Header";
// import Filters from "../components/Filters";

// const Map = dynamic(() => import("../components/Map"), { ssr: false });

// export default function HomePage() {
//   return (
//     <main className="flex flex-col items-center px-4 py-0 gap-0 max-w-4xl mx-auto">
//       <Header />
//       <div className="w-full flex justify-center mt-2 mb-8">
//         <div className="w-full max-w-2xl">
//           <Filters />
//         </div>
//       </div>
//       <Map />
//     </main>
//   );
// }
