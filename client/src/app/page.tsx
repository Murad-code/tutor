import { Navbar } from "@/components/Navbar";
import SignUpForm from "@/components/SignUpForm";

export default function Home() {
  return (
    <main className="bg-[#197278] text-white p-10">
      <h1 className="text-5xl">Find a Tutor</h1>
      <p className="mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        illo, possimus, similique impedit modi odio quia optio consequatur minus
        alias aliquid neque quasi, rem odit ab quo harum consectetur nemo.
      </p>
      <SignUpForm />
    </main>
  );
}
