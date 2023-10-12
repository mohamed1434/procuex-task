"use client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { push } = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post("/api/auth/login", payload);

      toast.success("Logged In");

      push("/");
    } catch (e) {
      const error = e as AxiosError;

      toast.error("Email or Password Incorrect");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full py-8 px-8  sm:px-24"
      >
        <img src="../images/logo.svg" className="object-cover w-56" />
        <h1 className="text-[28px] font-semibold">Company Login</h1>
        <div className="relative">
          <input
            type="email"
            id="floating_outlined"
            className="block py-2 px-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-[#E8EAED] appearance-none dark:text-black dark:border-[#E8EAED] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="email"
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            id="floating_outlined"
            className="block py-2 px-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-black dark:border-[#E8EAED] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="password"
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Password
          </label>
        </div>
        <button className="p-2 bg-[#0093FF] rounded-lg text-white">
          Login
        </button>
        <div className="flex relative justify-center top-0 w-full h-[0.1rem] bg-gray-200">
          <div className="absolute -top-[9px] bg-white text-sm px-3">Or</div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
