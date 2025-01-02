import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Services from '../../pages/Services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Services />
      </main>
      <Footer />
    </div>
  )
} 