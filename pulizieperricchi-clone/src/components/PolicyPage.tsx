import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Section {
  title: string;
  content: string;
}

interface PolicyPageProps {
  title: string;
  sections: Section[];
}

export default function PolicyPage({ title, sections }: PolicyPageProps) {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="bg-darkBg pt-32 pb-16">
        <div className="container-custom">
          <h1 className="heading-xl text-white text-center mb-12">{title}</h1>

          <div className="bg-black border border-gray-800 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className={section.title ? "space-y-3" : "mt-8"}>
                  {section.title && (
                    <h2 className={`${index === 0 ? "text-xl" : "text-lg"} text-gold font-hargreeves ${index === 0 ? "mb-4" : "mb-2"}`}>
                      {section.title}
                    </h2>
                  )}
                  <div className="text-gray-300 whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
