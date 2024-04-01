import Card from "./components/card";
import Companies from "./components/companies";
import Contact from "./components/contact";
import Faqs from "./components/faqs";
import Footer from "./components/footer";
import { Hero } from "./components/hero";
import Navbar from "./components/navbar";
import Packages from "./components/packages";
import Section from "./components/section";
import Testimonials from "./components/testimonials";
import Map from "./components/map";
import styles from "./page.module.css";
import { services } from "./statics";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Section
        title={
          <span>
            Naši radovi i {" "}
            <span className={styles.darkBlueTitle}>usluge uređenja</span>
          </span>
        }
        subtitle={
          "Preko 20 godina iskustva u oblasti računovodstva i poreskog savetovanja. Nudimo Vam kompletnu knjigovodstvenu uslugu i savetovanje iz oblasti finansija. Spremni smo da Vam pomognemo u svim oblastima finansija, računovodstva i poreskog savetovanja. Sa svojim klijentima ostvarujemo profesionalan i poverljiv odnos, te postajemo nezamenljiv poslovni partner kome možete verovati i koji je uvek na raspolaganju."}
        style={styles.cards}
      >
        {services.map(({ title, body, icon }) => (
          <Card key={title} title={title} body={body} icon={icon} />
        ))}
      </Section>
      <Packages />
      <Companies />
      <Faqs />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
    </main>
  );
}
