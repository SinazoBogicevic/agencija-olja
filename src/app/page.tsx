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
            Наши радови и{" "}
            <span className={styles.darkBlueTitle}>услуге уређења</span>
          </span>
        }
        subtitle={
          "Преко 20 година искуства у области рачуноводства и пореског консалтинга. Нудимо Вам комплетну књиговодствену услугу и консалтинг из области финансија. Спремни смо да Вам помогнемо у свим областима финансија, рачуноводства и пореског консалтинга. Са нашим клијентима успостављамо професионалан и поверљив однос и постајемо незаменљив пословни партнер коме можете веровати и који вам је увек на располагању."}
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
