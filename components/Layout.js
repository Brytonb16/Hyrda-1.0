
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav style={{ padding: '10px', background: '#e0f7fa', textAlign: 'center' }}>
        <Link href="/dashboard"><button>Dashboard</button></Link>
        <Link href="/settings"><button style={{ marginLeft: '10px' }}>Settings</button></Link>
      </nav>
      {children}
    </>
  );
}
