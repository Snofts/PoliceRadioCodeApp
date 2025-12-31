import { Send } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmiting(true);

    setTimeout(() => {
      toast.success("Message Sent");
      setIsSubmiting(false);
    }, 1500);
  };

  return (
    <section id="contact-us">
      <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
        <h3 className="text-4xl font-semibold my-20 text-center">
          Send Us a Message
        </h3>
        <form
          action=""
          className="space-y-6 grid grid-cols-2 max-md:grid-cols-[20rem] max-sm:grid-cols-[10rem] grid-rows-[8rem_10rem_10rem] max-md:grid-rows-[7rem_7rem_10rem_5rem] gap-y-0 gap-x-7"
        >
          <div className="col-span-1 max-md:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium mb-2 ">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              placeholder="Jane Mandy..."
            />
          </div>
          <div className="col-span-1 max-md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium mb-2 ">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 "
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full h-[80%] px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
              placeholder="Hello, I'd like to talk about..."
            />
          </div>
          <div className="col-span-2 flex justify-center max-md:items-center">
            <button
              type="submit"
              disabled={isSubmiting}
              className="bg-blue-500 hover:bg-blue-400 transition-colors w-[10rem] h-[3rem] rounded-full flex items-center justify-center items-center gap-2"
            >
              {isSubmiting ? "Sending...." : "Send Message"}
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
