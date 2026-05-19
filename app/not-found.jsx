import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.25rem', margin: '1rem 0 2rem' }}>
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </main>
  )
}
