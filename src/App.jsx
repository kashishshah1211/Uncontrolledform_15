import { useState } from 'react'
import LoginForm from './LoginForm'
import SubmittedInfo from './SubmittedInfo'

export default function App() {
  const [submittedData, setSubmittedData] = useState(null)

  const handleLogin = (data) => {
    setSubmittedData(data)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-700 px-4 py-8 text-center text-white sm:py-10">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Login Application
        </h1>

        <p className="mt-3 text-indigo-100">
          React Uncontrolled Components Demo
        </p>
      </header>

      <main className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 px-4 py-8 sm:px-6 md:grid-cols-2">
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Login Form
          </h2>

          <LoginForm onLogin={handleLogin} />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Submitted Information
          </h2>

          <SubmittedInfo data={submittedData} />
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white px-4 py-5 text-center text-sm text-gray-500">
        React + Tailwind CSS | Uncontrolled Form
      </footer>
    </div>
  )
}
