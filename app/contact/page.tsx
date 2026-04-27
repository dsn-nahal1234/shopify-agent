'use client'; // Added this to ensure the form handles clicks correctly
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto p-10 md:p-20 font-sans leading-relaxed">
        <Link href="/" className="text-blue-600 hover:underline mb-8 block">← Back to Home</Link>
        
        <h1 className="text-4xl font-black mb-4 text-black">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-10">
          Have questions about your audit or a payment? We are here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-2">Email Support</h2>
              <p className="text-xl font-medium">support@dsn-nahal.vercel.app</p>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-2">Business Address</h2>
              <p className="text-gray-700">
                Shopify Compliance Agent<br />
                [Your Real Address Here]<br />
                India
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <div>
                <label className="block text-sm font-bold mb-1">Name</label>
                <input type="text" name="name" required className="w-full p-3 border border-gray-200 rounded-lg bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Email</label>
                <input type="email" name="email" required className="w-full p-3 border border-gray-200 rounded-lg bg-white" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Message</label>
                <textarea name="message" required className="w-full p-3 border border-gray-200 rounded-lg bg-white h-32"></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-lg">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}