import type { FC } from "react";
import { DocumentCard, Header } from "../../components";

export const Documents: FC = () => {
  return (
    <div>
      <Header />
      <main className="mt-12 px-2 md:px-9 py-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold my-8">Tendencias em Carreira e Crescimento.</h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-5 ">
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold my-8">Tendencias em Carreira e Crescimento.</h2>
          <div className="flex flex-wrap items-center gap-5">
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
            <DocumentCard imageUrl="src/assets/images/book.png" title={'Introdução a Programação '} owner="Lucas Pascoal" views={79}/>
          </div>
        </div>
      </main>
    </div>
  );
};
