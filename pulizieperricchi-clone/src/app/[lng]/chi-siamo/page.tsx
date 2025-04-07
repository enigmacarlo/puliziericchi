import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "../../i18n";

export default async function AboutPage({
  params: { lng }
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng);

  // Define values based on translations
  const values = [
    { id: "exclusivity", key: "aboutPage.ourValues.exclusivity" },
    { id: "excellence", key: "aboutPage.ourValues.excellence" },
    { id: "discretion", key: "aboutPage.ourValues.discretion" },
    { id: "reliability", key: "aboutPage.ourValues.reliability" }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar t={t} />

      {/* Hero Section */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/about-header-bg.jpg)'
        }}
      >
        <div className="container-custom text-center">
          <h1 className="heading-xl text-white mb-4">{t('aboutPage.title')}</h1>
          <p className="subtitle max-w-3xl mx-auto">
            {t('aboutPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-darkBg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="heading-lg text-white mb-8">{t('aboutPage.ourStory.title')}</h2>
              <p className="text-gray-300">
                {t('aboutPage.ourStory.description1')}
              </p>
              <p className="text-gray-300">
                {t('aboutPage.ourStory.description2')}
              </p>
              <blockquote className="border-l-4 border-gold pl-4 italic text-gold py-2">
                {t('aboutPage.ourStory.motto')}
              </blockquote>
              <p className="text-gray-300">
                {t('aboutPage.ourStory.description3')}
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/about-2.jpg"
                alt="Pulizie di lusso per interni esclusivi a Novi Ligure e in tutta Italia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <h2 className="heading-lg text-white text-center mb-16">{t('aboutPage.ourValues.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-darkBg border border-gray-800 p-8 rounded-lg"
              >
                <h3 className="heading-md text-gold mb-4">{t(`${value.key}.title`)}</h3>
                <p className="text-gray-300">{t(`${value.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Locations - New Section */}
      <section className="section-padding bg-darkBg border-y border-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg text-white text-center mb-6">{t('aboutPage.locations.title')}</h2>
          <p className="subtitle text-center max-w-3xl mx-auto mb-16">
            {t('aboutPage.locations.description')}
          </p>

          <div className="space-y-10">
            {t('aboutPage.locations.areas', { returnObjects: true }).map((area: any, index: number) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-lg p-8 hover:border-gold transition-colors"
              >
                <h3 className="heading-md text-gold mb-3">{area.name}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding bg-darkBg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/about-1.jpg"
                alt="Servizio di pulizia esclusivo per ville di lusso a Milano, Portofino e Costa Azzurra"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="heading-lg text-white mb-8">{t('aboutPage.ourPhilosophy.title')}</h2>
              <h3 className="text-gold text-2xl mb-4">{t('aboutPage.ourPhilosophy.subtitle')}</h3>
              <p className="text-gray-300">
                {t('aboutPage.ourPhilosophy.description1')}
              </p>
              <p className="text-gray-300">
                {t('aboutPage.ourPhilosophy.description2')}
              </p>
              <p className="text-gray-300">
                {t('aboutPage.ourPhilosophy.description3')}
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  className="gold-gradient text-darkBg hover:opacity-90 transition-opacity"
                >
                  <Link href="/contatti">
                    {t('aboutPage.ourPhilosophy.cta')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
