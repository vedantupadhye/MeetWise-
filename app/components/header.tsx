import Link from 'next/link'
import { Button } from '@/components/ui/button'
// import { ThemeToggle } from './theme-toggle'
import { ThemeToggle } from './theme-toggle'
import { Calendar } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
        <span className='text-purple-400'>
        MeetWise
        </span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Connect Google Calendar
          </Button>
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

