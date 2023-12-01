
import styles from './page.module.css'
import Card from './components/card'
import { services } from './statics'
import Section from './components/section'
 import Navbar from './components/navbar'

export default function Home() {

  return (
     
    <main className={styles.main}>
      <Navbar />
      <div>
      <Section 
      title={'Our landscaping work and services'} 
      subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.'}
      style={styles.cards}
       >
        {
          services.map(({title, body, icon}) => <Card key={title} title={title} body={body} icon={icon} />)
        }
      </Section>
      </div>
    </main>
  )
}

