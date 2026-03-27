import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center w-full  bg-cover bg-center bg-no-repeat min-h-200"
      style={{ backgroundImage: `url('../src/assets/faq/')` }}
    >
      <div className="text-center">
        <h3 className="text-4xl font-bold">
          Frequently Asked Questions
        </h3>
        <p className="text-xl mt-2">
          Find answers to common questions about our program
        </p>
      </div>
      <Accordion
      type="single"
      collapsible
      defaultValue="commonquestions"
      className="max-w-3xl mt-10 h-full"
    >
      <AccordionItem value="commonquestions">
        <AccordionTrigger>Find answers to common questions about our program</AccordionTrigger>
        <AccordionContent>
          Our comprehensive program typically runs for 10 months, with classes scheduled to accommodate college students, and prepare them for their journy ahead.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="prerequisites">
        <AccordionTrigger>What are the prerequisites?</AccordionTrigger>
        <AccordionContent>
          While no prior programming experience is strictly required, having some familiarity with programming is preferred. You should be comfortable using a computer, as that’s essential for following along with the course material.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="placement">
        <AccordionTrigger>How does the placement assistance work?</AccordionTrigger>
        <AccordionContent>
          Students who pass our end-of-course assessment receive comprehensive placement support including resume building, interview preparation, and direct connections to our hiring partners.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="scholarships">
        <AccordionTrigger>Can I apply for scholarships?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer performance-based scholarships. Top performers during the initial weeks of the program can qualify for partial or full scholarships.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}