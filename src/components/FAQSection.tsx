import type { FC } from "react";
import FAQ from "./FAQ";

export const FAQSection: FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-18 py-18 bg-[#EEE7DB]">
        <h2 className="text-3xl sm:text-4xl text-gray-950 font-bold mb-8">Perguntas frequentes</h2>
        <p className="text-gray-600 mb-8">if you've got questions[about anything], you've come to the right place.</p>
      <div className="flex flex-col gap-4">
        <FAQ question="How are you?" answer="I'm fine." />
        <FAQ question="How are you?" answer="I'm fine." />
        <FAQ question="How are you?" answer="I'm fine." />
        <FAQ question="How are you?" answer="I'm fine." />
      </div>
    </section>
  );
};
