import Card from "./components/card";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Faqs from "./components/faqs";
import Footer from "./components/footer";
import { Hero } from "./components/hero";
import Navbar from "./components/navbar";
import Section from "./components/section";
import styles from "./page.module.css";
import { questions, services } from "./statics";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Section
        title={
          <span>
            Our landscaping work and{" "}
            <span className={styles.darkBlueTitle}>services</span>
          </span>
        }
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis."
        }
        style={styles.cards}
      >
        {services.map(({ title, body, icon }) => (
          <Card key={title} title={title} body={body} icon={icon} />
        ))}
      </Section>
      <Faqs />
      <Contact />
      <Footer />
    </main>
  );
}
