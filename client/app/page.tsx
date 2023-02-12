export default function Login() {
  return (
    <main className="absolute h-full w-full grid place-items-center">
      <div className="w-1/4 p-4 rounded-md bg-white shadow-md">
        <h1 className="mb-5 text-2xl text-center">Login</h1>
        <div className="flex flex-col gap-3">
          <button className="auth-button">Google</button>
          <button className="auth-button">Facebook</button>
          <button className="auth-button">Github</button>
        </div>
      </div>
    </main>
  );
}
