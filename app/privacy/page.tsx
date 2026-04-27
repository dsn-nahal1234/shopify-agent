import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-10 md:p-20 font-sans text-gray-800 leading-relaxed">
      <Link href="/" className="text-blue-600 hover:underline mb-8 block">← Back to Home</Link>
      
      <h1 className="text-4xl font-black mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last Updated: April 27, 2026</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold">1. Introduction</h2>
          <p>Welcome to **Shopify Compliance Agent**. We value your privacy and the security of your store data. This policy explains how we collect, use, and protect information when you use our audit services.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">2. Information We Collect</h2>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            <li><strong>Store Data:</strong> Publicly available information from your Shopify store URL.</li>
            <li><strong>Transaction Data:</strong> Payment details processed securely via Razorpay (we do not store your card numbers).</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our AI auditing tool.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">3. How We Use Data</h2>
          <p>We use the data collected strictly to perform the <strong>Regulatory Compliance Audit</strong>. Your store data is passed to our AI models (Claude/GPT) solely for analysis and is not used to train global models.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">4. Third-Party Sharing</h2>
          <p>We share information with third parties only as necessary to provide our service:</p>
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Payment Processing:</strong> Razorpay.</li>
            <li><strong>AI Analysis:</strong> Anthropic / OpenAI (via private API).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">5. Data Retention</h2>
          <p>Compliance reports are stored for 30 days to allow you to download them, after which they are permanently deleted from our servers.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">6. Contact Us</h2>
          <p>For any privacy-related queries, please contact us at:</p>
          <p className="font-bold mt-2">support@dsn-nahal.vercel.app</p>
        </div>
      </section>

      <footer className="mt-20 pt-10 border-t border-gray-100 text-center text-gray-400 text-sm">
        &copy; 2026 Shopify Compliance Agent. All rights reserved.
      </footer>
    </div>
  );
}