import Nav from '../Nav.jsx'

export default function MainLayout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main className='flex min-h-screen w-screen justify-center'>
        {children}
      </main>
    </>
  )
}
