import emailjs from '@emailjs/browser';
import { MapPin, Mail, Phone, Clock, Handshake, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Sending message...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.dismiss(loadingToast);
      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#F5F7FB] min-h-screen py-12 overflow-hidden">

      {/* Top intro section */}
      <section className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm tracking-[0.2em] uppercase text-[#12A4C7] font-semibold">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0A2365] leading-tight">
            Get in Touch with Aqua Bloom International Pvt Ltd
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#4A607A] max-w-xl">
            We are always ready to assist you with inquiries about our sea cucumber
            products, export services, and business partnerships. Whether you are a
            local buyer or an international distributor, our team is here to
            support you.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#12A4C7]/10 rounded-full blur-2xl" />
          <img
            src="/Contact.jpeg"
            alt="Sea Cucumber"
            className="relative rounded-3xl shadow-2xl object-cover w-full h-[300px]"
          />
        </div>
      </section>

      {/* 🌊 Wave + Floating Cards Section */}
      <section className="relative mt-36">

        {/* Wave Background */}
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="/ocean_wave.png"
            alt="Ocean Waves"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F7FB]/100 via-[#F5F7FB]/40 to-transparent"></div>
        </div>

        {/* Cards */}
        <div className="relative max-w-6xl mx-auto px-4 pb-40">
          <div className="grid gap-6 md:grid-cols-3 -mt-24">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E1EDF5] p-6 flex flex-col gap-4 transition hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#12A4C7]/10 flex items-center justify-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kaithady+Nunavil+Chavakacheri+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-[#12A4C7]/10 flex items-center justify-center"
                >
                  <MapPin className="w-6 h-6 text-[#12A4C7] animate-floatX" />
                </a>
              </div>
              <h3 className="text-sm font-semibold tracking-[0.18em] text-[#0A2365] uppercase">
                Our Office
              </h3>
              <p className="text-sm text-[#4A607A] leading-relaxed">
                Aqua Bloom International Pvt Ltd
                <br />
                Kaithady Nunavil,
                <br />
                Chavakacheri.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E1EDF5] p-6 flex flex-col gap-4 transition hover:-translate-y-2 duration-300">
              <a
                href="mailto:aquabloom26@gmail.com?subject=Business Inquiry"
                className="w-12 h-12 rounded-2xl bg-[#12A4C7]/10 flex items-center justify-center group"
              >
                <Mail className="w-6 h-6 text-[#12A4C7] animate-mailSend" />
              </a>
              <h3 className="text-sm font-semibold tracking-[0.18em] text-[#0A2365] uppercase">
                Email Us
              </h3>
              <p className="text-sm text-[#4A607A] leading-relaxed">
                For product details or partnerships:
                <br />
                <span className="font-semibold text-[#0A2365] break-all">
                  aquabloom26@gmail.com
                </span>
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E1EDF5] p-6 flex flex-col gap-4 transition hover:-translate-y-2 duration-300">
              <a
                href="https://wa.me/94717683693"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-[#12A4C7]/10 flex items-center justify-center"
              >
                <Phone className="w-6 h-6 text-[#12A4C7] animate-ring" />
              </a>
              <h3 className="text-sm font-semibold tracking-[0.18em] text-[#0A2365] uppercase">
                Call Us
              </h3>
              <p className="text-sm text-[#4A607A] leading-relaxed">
                Speak directly with our team.
                <br />
                <span className="font-semibold text-[#0A2365]">
                  +94 71 768 3693
                </span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Business Hours + Form Section */}
      <section className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-2">

        {/* Left */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2365]">
            Business Hours & Support
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#4A607A] max-w-xl">
            Our team is available throughout the week to guide you on product
            availability, export documentation, and long-term supply
            arrangements.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="bg-white border border-[#E1EDF5] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#12A4C7]" />
                <h3 className="text-xs font-semibold tracking-[0.22em] uppercase text-[#12A4C7]">
                  Business Hours
                </h3>
              </div>
              <ul className="mt-4 text-sm text-[#4A607A] space-y-2">
                <li><span className="font-semibold text-[#0A2365]">Monday - Friday:</span> 9:00 AM - 5:00 PM</li>
                <li><span className="font-semibold text-[#0A2365]">Saturday:</span> 9:00 AM - 1:00 PM</li>
                <li><span className="font-semibold text-[#0A2365]">Sunday:</span> Closed</li>
              </ul>
            </div>

            <div
              className="relative rounded-2xl p-6 shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/QualityAssurance.jpeg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-2xl"></div>

              <div className="relative flex items-center gap-3">
                <Handshake className="w-5 h-5 text-white" />
                <h3 className="text-xs font-semibold tracking-[0.22em] uppercase text-white">
                  Let's Build a Partnership
                </h3>
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-white">
                We value long-term relationships built on trust, quality, and reliability.
                Contact us today to discuss how we can work together.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-3xl shadow-2xl border border-[#E1EDF5] p-8">
          <div className="flex items-center gap-3">
            <Send className="w-5 h-5 text-[#12A4C7]" />
            <h2 className="text-lg md:text-xl font-semibold text-[#0A2365]">
              Send Us a Message
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <input
              name='name'
              onChange={(e) => handleChange(e)}
              value={form.name}
              type="text"
              placeholder="Full Name"
              className="w-full rounded-full border border-[#D4E3F0] bg-[#F9FBFF] px-4 py-3 text-sm text-[#0A2365] focus:outline-none focus:ring-2 focus:ring-[#12A4C7]"
            />
            <input
              name='email'
              onChange={(e) => handleChange(e)}
              value={form.email}
              type="email"
              placeholder="Email Address"
              className="w-full rounded-full border border-[#D4E3F0] bg-[#F9FBFF] px-4 py-3 text-sm text-[#0A2365] focus:outline-none focus:ring-2 focus:ring-[#12A4C7]"
            />
            <textarea
              name='message'
              onChange={(e) => handleChange(e)}
              value={form.message}
              rows="4"
              placeholder="Your Message"
              className="w-full rounded-2xl border border-[#D4E3F0] bg-[#F9FBFF] px-4 py-3 text-sm text-[#0A2365] resize-none focus:outline-none focus:ring-2 focus:ring-[#12A4C7]"
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-full bg-[#12A4C7] px-6 py-3 text-sm font-semibold tracking-[0.16em] uppercase text-white shadow-md hover:bg-[#0F8AA9] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}