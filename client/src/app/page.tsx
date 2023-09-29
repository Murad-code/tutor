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
      <div className="HeroContainer md:flex space-x-4 text-black ">
        <div className="flex-grow md:max-w-[500px]  HeroHeader mt-20 text-white">
          <h2 className="text-center text-bold text-2xl md:text-6xl">
            Become A Tutor!
          </h2>
          <h3 className="text-center text-sm md:text-2xl italic mt-12">
            Fill in the details to join our community of knowledge sharers and
            become a tutor!
          </h3>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
}
