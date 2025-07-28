
import { useRouter } from 'next/router';

export default function Farms() {
  const router = useRouter();
  const handleSelect = (farmId) => {
    router.push(`/dashboard?farm=${farmId}`);
  };

  return (
    <div className="container">
      <h2>Select Your Farm</h2>
      <div className="card">
        <button onClick={() => handleSelect('A')}>Farm A - Tulare, CA</button><br /><br />
        <button onClick={() => handleSelect('B')}>Farm B - Visalia, CA</button>
      </div>
    </div>
  );
}
