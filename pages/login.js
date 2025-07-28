
import Link from 'next/link';

export default function Login() {
  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <Link href="/farms"><button>Login</button></Link>
      </div>
    </div>
  );
}
