import LoginForm from "@/components/Forms/LoginForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="grid md:grid-cols-2 w-full h-[100vh]">
      {/**Left */}
      <div className="flex flex-col w-full items-center justify-center gap-4">
        <LoginForm />
      </div>

      {/**Right */}
      <div className="h-full md:block hidden ">
        <img
          src="../images/loginImage.svg"
          className=" w-full h-[100vh] object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
