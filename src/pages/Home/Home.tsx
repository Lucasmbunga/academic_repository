import type { FC } from "react";
import {
    FAQSection,
  Header,
  HeroSection,
  
  ShareDocumentSection,
  UniversitiesSection,
} from "../../components";


export const Home:FC=()=>{
    return(
        <>
        <Header />
        <HeroSection />
        <UniversitiesSection />
        <ShareDocumentSection />
        <FAQSection />
        </>
    );
}