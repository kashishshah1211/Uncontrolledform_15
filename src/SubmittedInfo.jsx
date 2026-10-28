export default function SubmittedInfo({ data }) {
  if (!data) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8 text-center">
        <div className="text-4xl">🔐</div>

        <h2 className="mt-3 text-xl font-bold text-gray-800">
          Submitted Information
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Enter your username and password, then click Login
          to see the submitted values here.
        </p>
      </div>
    )
  }

  return (
    <section className="rounded-2xl border border-green-200 bg-white p-6 shadow-lg sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700">
          ✓
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Form Submitted!
          </h2>

          <p className="text-sm text-green-700">
            Your entered information is displayed below.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="border-b border-gray-100 pb-4">
          <p className="text-sm font-medium text-gray-500">
            Username
          </p>

          <p className="mt-1 break-words font-semibold text-gray-900">
            {data.username}
          </p>
        </div>

        <div className="border-b border-gray-100 pb-4">
          <p className="text-sm font-medium text-gray-500">
            Password
          </p>

          <p className="mt-1 break-all font-semibold text-gray-900">
            {data.password}
          </p>
        </div>
      </div>

      <p className="mt-5 rounded-lg bg-amber-50 p-3 text-sm leading-6 text-amber-800">
        Demo only: Never display or store plain-text passwords
        in a real login application.
      </p>
    </section>
  )
}