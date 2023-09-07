import Image from "next/image";

const SOCIALS_LINKS = {
  twitter: "https://twitter.com/SatoruStarknet",
  github: "https://github.com/keep-starknet-strange/satoru",
  telegram: "https://t.me/SatoruStarknet",
  documentation: "https://book.satoru.run/",
} as const;

function RadialGradient() {
  return (
    <div
      className="blur-[150px] fixed top-1/2 left-0 right-0 -translate-y-1/2 h-[70vh] lg:h-[37rem] -z-10"
      style={{
        background:
          "radial-gradient(74.28% 74.28% at 50.04% 25.72%, rgba(255, 113, 68, 0.30) 0%, rgba(174, 30, 207, 0.30) 39.58%, rgba(0, 0, 0, 0.00) 100%)",
      }}
    />
  );
}

function MainContent() {
  return (
    <div className="flex items-center md:justify-center gap-14 min-h-screen max-w-7xl mx-auto px-8 flex-col lg:flex-row pb-6">
      <Image
        src="/satoru_logo.png"
        className="px-8"
        height={600}
        width={600}
        alt="Satoru's logo"
      />
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold text-center lg:text-left">
          SATORU
        </h1>
        <p className="text-lg lg:text-xl mt-6 text-center lg:text-left">
          Cutting-edge platform for Starknet, taking inspiration from the
          modular design of GMX V2.
        </p>
        <div className="flex justify-between items-center mt-12 lg:flex-row flex-col gap-8">
          <a
            href={SOCIALS_LINKS.documentation}
            target="_blank"
            rel="noreferrer"
            className="bg-black px-5 py-2 border-2 rounded-lg border-[#FF6756aa]"
          >
            Check the Docs
          </a>
          <div className="flex gap-4 items-center">
            <a href={SOCIALS_LINKS.twitter} target="_blank" rel="noreferrer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="2rem"
                width="2rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a href={SOCIALS_LINKS.telegram} target="_blank" rel="noreferrer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="2rem"
                width="2rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
              </svg>
            </a>
            <a href={SOCIALS_LINKS.github} target="_blank" rel="noreferrer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="2rem"
                width="2rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-6">
      <p className="text-2xl md:text-2xl whitespace-nowrap">
        POWERED BY <span className="font-bold">STARKNET</span>
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <RadialGradient />
      <MainContent />
      <Footer />
    </>
  );
}
