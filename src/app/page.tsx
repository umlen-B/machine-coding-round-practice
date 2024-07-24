import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const pages = () => {
    const links = [
      {
        href: "/01-debounce",
        title: "Debounce Search",
        description: "Checkout debounce search with Nextjs and TypeScript",
      },

      {
        href: "/02-throttle",
        title: "Throttle Search",
        description: "Checkout throttle search with Nextjs and TypeScript",
      },

      {
        href: "/03-debounce-throttle",
        title: "Debounce & Throttle",
        description:
          "Checkout debounce and throttle with Nextjs and TypeScript",
      },
      {
        href: "/04-to-do-list",
        title: "To Do List",
        description: "Checkout to do list with Nextjs and TypeScript",
      },
      {
        href: "/05-drag-drop-upload",
        title: "Drag Drop Upload",
        description: "Checkout Drag Drop Upload with Nextjs and TypeScript",
      },
      {
        href: "/06-drag-drop-sort",
        title: "Drag Drop sorting",
        description: "Checkout Drag Drop sorting with Nextjs and TypeScript",
      },
      {
        href: "/07-file-explorer",
        title: "File explorer",
        description: "Checkout file explorer with Nextjs and TypeScript",
      },
      {
        href: "/08-email-composer",
        title: "Email Composer",
        description: "Checkout email composer with Nextjs and TypeScript",
      },
    ];
    return links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        // target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {link.title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {link.description}
        </p>
      </Link>
    ));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/machine-coding-round-practice/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {pages()}
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
