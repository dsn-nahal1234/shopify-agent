'use client';
import Script from 'next/script';

export default function Home() {
  const makePayment = async () => {
    // This will connect to our API tomorrow
    console.log("Payment button clicked!");
    alert("Razorpay Checkout will trigger here after we set up the API tomorrow!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6 font-sans">
      {/* This loads the Razorpay script needed for the payment window */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      <header className="max-w-2xl text-center space-y-4">
        <div className="text-blue-600 font-bold tracking-widest text-sm uppercase">2026 Compliance Ready</div>
        <h1 className="text-5xl font-black tracking-tight">
          Shopify <span className="text-blue-600">Compliance</span> Agent
        </h1>
        <p className="text-xl text-gray-600">
          Instant EU AI Act audits for your store. 
          Protect your business from regulatory fines in 60 seconds.
        </p>
      </header>

      <main className="mt-12 bg-gray-50 border border-gray-200 p-10 rounded-3xl shadow-sm max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold">One-Time Audit</h2>
        <div className="mt-4 text-5xl font-black text-blue-600">₹49</div>
        <p className="text-gray-500 mt-2">Get a full transparency report</p>
        
        <button 
          onClick={makePayment}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-200"
        >
          Pay & Start Audit
        </button>
      </main>

      <footer className="mt-20 text-xs text-gray-400 flex gap-6">
        <a href="/privacy" className="hover:text-black">Privacy Policy</a>
        <a href="/terms" className="hover:text-black">Terms of Service</a>
        <a href="/contact" className="hover:text-black">Contact Us</a>
      </footer>
    </div>
  );
}