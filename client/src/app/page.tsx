import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='underline'>
      <div className={inter.className}>
        Social media
      </div>
    </main>
  )
}
