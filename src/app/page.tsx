import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
} 