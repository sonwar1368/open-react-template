import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import WaitlistForm from '../components/WaitlistForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Your SaaS Product - The Future is Coming</title>
        <meta name="description" content="Amazing description of your SaaS product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Revolutionize Your Workflow
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The all-in-one platform that saves you time and boosts productivity. 
              Join thousands of professionals already waiting.
            </p>
            <WaitlistForm />
          </div>
        </section>

        <Features />
        <HowItWorks />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Be the First to Know
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our product is launching soon. Enter your email to get notified when we go live.
            </p>
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your SaaS Product. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
