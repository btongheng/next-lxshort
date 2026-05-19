import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className='flex flex-col items-center justify-center pt-20'>
      <h1 style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.25rem', margin: '1rem 0 2rem' }}>
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </div>
  )
}
