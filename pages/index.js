import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Fitness Coach App</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">💪 AI Fitness Coach</h1>
        <p className="text-lg text-center max-w-xl">
          Your personalized AI-powered fitness and diet assistant built with Next.js & Tailwind CSS.
        </p>
      </main>
    </>
  )
}
