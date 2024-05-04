import { Button } from "./ui/button";

const GetInTouch = () => {
  return (
    <div className="max-w-screeen-xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center">Get In Touch</h1>{" "}
      <section className="text-gray-600 body-font relative">
        <div className="container px-5  mx-auto flex justify-center">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-2 md:mt-0">
          
           
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Your Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <textarea
                placeholder="Write Your Message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
           
                <Button className="bg-gradient">Send Message</Button>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
