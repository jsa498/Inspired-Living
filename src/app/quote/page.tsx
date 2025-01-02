import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Quote from '../../pages/Quote'

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Quote />
      </main>
      <Footer />
    </div>
  )
} 