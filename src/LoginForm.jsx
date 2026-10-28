import { useRef, useState } from 'react'

export default function LoginForm({ onLogin }) {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const formRef = useRef(null)

  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const username = usernameRef.current.value.trim()
    const password = passwordRef.current.value

    if (!username || !password) {
      return
    }

    onLogin({ username, password })
  }

  const handleReset = () => {
    formRef.current.reset()
    setShowPassword(false)
    onLogin(null)
    usernameRef.current.focus()
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div>
        <label
          htmlFor="username"
          className="mb-2 block font-semibold text-gray-700"
        >
          Username
        </label>

        <input
          ref={usernameRef}
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
          autoComplete="username"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block font-semibold text-gray-700"
        >
          Password
        </label>

        <input
          ref={passwordRef}
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(event) =>
              setShowPassword(event.target.checked)
            }
            className="accent-indigo-600"
          />
          Show password
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Login
      </button>

      <button
        type="button"
        onClick={handleReset}
        className="w-full rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
      >
        Reset Form
      </button>
    </form>
  )
}