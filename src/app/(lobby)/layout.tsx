import Footer from "@/components/footer/Footer";
import LogoSection from "@/components/lobby/BrandSection";
import Collection from "@/components/lobby/Collection";
import NewsletterSection from "@/components/lobby/NewsletterSections";
import PromoSection from "@/components/lobby/PromoSection";
import Testimonials from "@/components/lobby/Testimonials";
import NavBar from "@/components/navbar/NavBar";
import ProductCarousel from "@/components/product/ProductCarousel";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="flex flex-col max-w-screen-xl mx-auto items-center gap-5">
        {children}
        <ProductCarousel />
        <Collection />
        <PromoSection />
        <LogoSection />
        <Testimonials />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
