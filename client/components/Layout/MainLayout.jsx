import Nav from './components/Nav.jsx'

export default function MainLayout({ children }) {
  return (
    <main className='flex min-h-screen w-screen justify-center'>
      <Nav />
      {children}
    </main>
  )
}
