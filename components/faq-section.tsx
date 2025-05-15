"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/glass-accordion"
import { GlassCard } from "@/components/ui/glass-card"

const faqs = [
  {
    question: "How does Lovable work?",
    answer:
      "Lovable uses AI to turn your natural language descriptions into fully functional web applications. Simply describe what you want to build, and our AI will generate the code for you.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all! Lovable is designed for both technical and non-technical users. You can build applications without writing a single line of code.",
  },
  {
    question: "Can I customize the generated code?",
    answer:
      "Yes, you can customize the generated code to fit your specific needs. Our platform provides a code editor where you can make changes to the generated code.",
  },
  {
    question: "How do I deploy my application?",
    answer:
      "Lovable provides one-click deployment to our global CDN. Your application will be live and accessible to users worldwide in seconds.",
  },
  {
    question: "What kind of applications can I build?",
    answer:
      "You can build a wide range of applications, from simple landing pages to complex web applications with authentication, databases, and more.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take security seriously. All data is encrypted in transit and at rest. We also provide options for adding authentication and authorization to your applications.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-white/80">Have questions? We've got answers.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <GlassCard>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-white/80">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
