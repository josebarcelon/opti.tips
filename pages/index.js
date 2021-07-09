import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Opti.tips</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          👌{" "}
          <a className="text-black" href="https://opti.tips">
            Opti<spans className="text-yellow-500">.tips</spans>
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          One stop platform to optimizing your team/business/life.
        </p>{" "}
        <p className="mt-3 text-xl">Curated tips and tools for everything.</p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-yellow-400 focus:text-yellow-400"
          >
            <h3 className="text-2xl font-bold">Tips &rarr;</h3>
            <p className="mt-4 text-xl">Find the best tips for your needs</p>
          </a>

          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-yellow-400 focus:text-yellow-400"
          >
            <h3 className="text-2xl font-bold">Tools &rarr;</h3>
            <p className="mt-4 text-xl">Find the best tools for your needs</p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Boom
      </footer>
    </div>
  );
}
