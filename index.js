import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [userData, setUserData] = useState({
    name: '', age: '', gender: '', height: '', weight: '',
    goal: '', level: '', location: '', diet: '', notes: ''
  })
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState(null)
  const [error, setError] = useState('')

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  async function generatePlan() {
    setError('')
    setPlan(null)
    setLoading(true)
    try {
      const prompt = `You are an expert fitness coach. Receive the user data as JSON and respond with a JSON object containing keys: workout, diet, tips. Each value should be a string. User: ${JSON.stringify(userData)}`
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      if (!res.ok) throw new Error('Server error')
      const json = await res.json()
      if (json.error) throw new Error(json.error)
      setPlan(json.result)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <motion.h1 className="text-3xl font-bold mb-6" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}}>
        💪 AI Fitness Coach — (Demo)
      </motion.h1>

      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {['name','age','gender','height','weight','goal','level','location','diet','notes'].map(k => (
            <input
              key={k}
              name={k}
              placeholder={k.charAt(0).toUpperCase()+k.slice(1)}
              value={userData[k]}
              onChange={handleChange}
              className="p-2 rounded bg-gray-700 text-white"
            />
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={generatePlan}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? 'Generating...' : 'Generate AI Plan'}
          </button>
        </div>

        {error && <p className="mt-3 text-red-400">{error}</p>}

        {plan && (
          <motion.div className="mt-6 bg-gray-900 p-4 rounded" initial={{opacity:0}} animate={{opacity:1}}>
            <h2 className="text-xl font-semibold">🏋️ Workout Plan</h2>
            <pre className="whitespace-pre-wrap text-sm text-gray-200">{plan.workout}</pre>

            <h2 className="text-xl font-semibold mt-4">🥗 Diet Plan</h2>
            <pre className="whitespace-pre-wrap text-sm text-gray-200">{plan.diet}</pre>

            <h2 className="text-xl font-semibold mt-4">💬 Tips</h2>
            <pre className="whitespace-pre-wrap text-sm text-gray-200">{plan.tips}</pre>
          </motion.div>
        )}
      </div>

      <p className="mt-6 text-sm text-gray-400">Tip: add OPENAI_API_KEY in <code className="bg-gray-700 px-1 rounded">.env.local</code></p>
    </div>
  )
}
