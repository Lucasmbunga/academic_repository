import type { FC } from "react";
import UniversityCard from "./UniversityCard";

export const UniversitiesSection: FC = () => {
  return (
    <section className=" bg-[#F7F3EC] px-6 md:px-12 lg:px-18 py-18">
        <h2 className="text-3xl text-[#54232D] font-bold mb-6">Procure por onde estuda</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <UniversityCard universityName="Kimpa Vita"/>
        <UniversityCard universityName="Kimpa Vita"/>
        <UniversityCard universityName="Kimpa Vita"/>
        <UniversityCard universityName="Kimpa Vita"/>
      </div>
    </section>
  );
};
