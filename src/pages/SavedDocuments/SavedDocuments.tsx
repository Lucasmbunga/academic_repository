import type { FC } from "react";
import { Header } from "../../components";
import { Filter, List } from "lucide-react";
import SavedDocumentCard from "./SavedDocumentCard/SavedDocumentCard";

export const SavedDocuments: FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl md:text-5xl text-center text-[#54232D] font-bold mt-18 mb-8">
          Documentos Salvos
        </h1>
        <div>
          <div className="w-full md:w-[65%] p-4 flex justify-between md:mx-auto font-semibold">
            <span className="flex items-center gap-2">
              <Filter />
              Filtros
            </span>
            <span className="flex items-center gap-2">
              <List />
              Todas as listas
            </span>
          </div>
          <div>
            <SavedDocumentCard imageUrl="src/assets/images/book.png" title="Introducao a Programacao" owner="Lucas Pascoal"/>
          </div>
        </div>
      </main>
    </div>
  );
};
