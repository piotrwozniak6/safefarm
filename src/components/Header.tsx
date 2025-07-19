import { FaSearch } from 'react-icons/fa';

// Header component: displays the main headline and intro text
export default function Header() {
  return (
    <header className="w-full flex flex-col items-center pt-12 pb-8 bg-gradient-to-b from-green-50 to-white">
      {/* Green search icon */}
      <div className="mb-6">
        <FaSearch className="text-safefarm-green" style={{ fontSize: '2.5rem' }} />
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-safefarm-charcoal text-center mb-6 leading-tight font-['Inter']">
        Find truly organic food near you —<br />verified, not claimed.
      </h1>

      {/* Intro paragraph */}
      <div className="text-lg md:text-xl text-safefarm-charcoal text-center space-y-3 mb-2">
        <div className="font-['Inter'] font-normal leading-[1.6] tracking-[0.015em]">
          Everyone says they're organic.<br />
          Most are lying. We prove it.
        </div>
        <div className="font-['Inter'] font-normal leading-[1.6] tracking-[0.015em]">
          No fake labels. No marketing fluff.<br />
          We lab-test food from markets, shops, and online sellers — regularly and without warning.
        </div>
      </div>

      {/* Green tagline */}
      <div className="text-base md:text-lg font-['Epilogue'] text-[#264C1F] text-center tracking-[0.015em] leading-snug">
        <span className="italic font-medium">
          Safe Farm — where clean food earns its place.
        </span>
        <br className="hidden md:block" />
        <span className="font-medium mt-1 block">
          Want to be listed? Prove it.
        </span>
      </div>
    </header>
  );
}
