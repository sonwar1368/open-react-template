export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Join Waitlist",
      description: "Secure your spot and get early access"
    },
    {
      number: "02", 
      title: "Get Early Access",
      description: "Be among the first to test our platform"
    },
    {
      number: "03",
      title: "Exclusive Launch Offer",
      description: "Special pricing for early adopters"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
