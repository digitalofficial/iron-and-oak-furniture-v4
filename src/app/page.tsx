import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Materials from "@/components/Materials";
import Testimonial from "@/components/Testimonial";
import CommissionForm from "@/components/CommissionForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <Process />
        <Materials />
        <Testimonial />
        <CommissionForm />
      </main>
      <Footer />
    </>
  );
}
