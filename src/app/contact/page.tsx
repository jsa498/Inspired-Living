import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Contact from '../../pages/Contact'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  )
} 