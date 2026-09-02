import { Upload } from "lucide-react";
import type { FC } from "react";

export const ShareDocumentSection: FC = () => {
  return (
    <section className="bg-white px-6 py-18 md:p-12 lg:p-18">
      <h2 className="text-4xl text-gray-900 font-bold mb-8">
        Share the wealth [of knowlege].
      </h2>
      <p className="text-gray-600 mb-8">
        Someone oute there is searching for your document. Upload for
        free,search global audience, and embed directily on your website.
      </p>
      <div className="flex flex-col items-center justify-center gap-8 bg-[#EEE7DB] px-6 py-18  min-[321px]:p-12 md:p-24 transition-all duration-300 ease-linear">
        <Upload size={50} className="cursor-pointer" />
        <button className="text-white font-bold px-4 py-3 bg-[#54232D] rounded-lg cursor-pointer">
          Carregar documento
        </button>
      </div>
    </section>
  );
};
