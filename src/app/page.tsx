import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex flex-col justify-center">
        <p className="text-white my-10 text-center font-mono font-bold animate-pulse transform transition duration-2000">Coming Soon ...</p>
        <div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#cc01ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="animate-pulse transform transition duration-2000 hover:scale-120"
            src="/octo-rocket.png"
            alt="octo-rocket Logo"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
}
