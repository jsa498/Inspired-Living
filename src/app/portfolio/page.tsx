import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../pages/Portfolio'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
} 