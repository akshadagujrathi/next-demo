
import Banner from "./components/Banner";
import styles from './page.module.css';
import Brand from "./components/Brand";
import Features from "./components/Features";
import Demo from "./components/Slider";
import NewsletterForm from "./components/Newsletter";






export default function Home() {
  
  return (
    <div>
      <section className={styles['banner']}>
        <Banner />
      </section>
     
      <section className={styles['brand']}>
        <Brand />
      </section>
     
      <section className={`position-relative ${styles['feature-background']}`}>
        <Features />
      </section>
     
     <Demo />
     <NewsletterForm />
     
    </div>
  );
}
