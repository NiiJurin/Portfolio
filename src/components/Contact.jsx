import { useState, useEffect } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // hide toast after 3s
  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 3000);
    return () => clearTimeout(t);
  }, [sent]);

  return (
    <section id="contact" className="glass p-8 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: integrate with actual email/api
            setSent(true);
          }}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 bg-white/5 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-white/5 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-2 bg-white/5 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <button
            type="submit"
            className="glass w-full py-2 font-semibold text-emerald-200 hover:bg-white/10 transition"
          >
            Send Message
          </button>
        </form>
        {sent && (
          <p className="mt-4 text-emerald-400 text-sm">
            Thanks! Your message has been sent.
          </p>
        )}
      </div>
    </section>
  );
}