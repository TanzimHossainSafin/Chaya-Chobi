import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <>
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => signIn("github", { callbackUrl: "/" })}
      >
        Signin with GitHub
      </button>
      <button
        type="button"
        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer ml-2"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Signin with Google
      </button>
    </>
  )
}