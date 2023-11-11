import './App.css';

import { Navbar, Hero, AnggotaKelas, Jadwal, WaliKelas, Instagram, Motivasi, MemorableMoment, HotNews, Gallery, Footer } from '../../../components';
import styles from '../../../styles';


function App() {
  return (
    <div className='w-full overflow-hidden'>
      <div className='bg-secondary w-full'>
        <Navbar />
      </div>

      <div className='bg-secondary w-full'>
        <Hero />
      </div>

      <div className={`bg-secondary w-full ${styles.paddingY}`}>
        <AnggotaKelas />
      </div>

      <div className='bg-secondary w-full'>
        <WaliKelas />
      </div>

      <div className={`bg-primary w-full ${styles.paddingY}`}>
        <HotNews />
      </div>

      <div className='w-full'>
        <Instagram />
      </div>

      <div className={`bg-secondary w-full pb-8 ${styles.paddingX}`}>
        <MemorableMoment />
      </div>

      <div className={`bg-primary w-full ${styles.paddingY}`}>
        <Gallery />
      </div>

      <div className={`bg-secondary w-full ${styles.paddingY} ${styles.paddingX}`}>
        <Jadwal />
      </div>

      <div className={`bg-secondary w-full ${styles.paddingY}`}>
        <Motivasi />
      </div>

      <div className='bg-primary w-full'>
        <Footer />
      </div>


    </div>
  )
}

export default App;
