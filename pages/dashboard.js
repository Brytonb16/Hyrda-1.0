
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const { farm } = router.query;

  const [droneFile, setDroneFile] = useState(null);
  const [soilFile, setSoilFile] = useState(null);

  const handleDroneUpload = (e) => {
    setDroneFile(e.target.files[0]);
  };

  const handleSoilUpload = (e) => {
    setSoilFile(e.target.files[0]);
  };

  const fertilizerData = {
    A: { nitrogen: '1.2%', phosphorus: '0.5%', potassium: '0.8%' },
    B: { nitrogen: '1.5%', phosphorus: '0.7%', potassium: '1.1%' }
  };

  const currentFarm = fertilizerData[farm] || fertilizerData.A;

  return (
    <div className="container">
      <h2>Farm Dashboard - Farm {farm}</h2>
      <div className="card">
        <p><strong>Soil Moisture:</strong> 22%</p>
        <p><strong>Nitrogen:</strong> {currentFarm.nitrogen}</p>
        <p><strong>Phosphorus:</strong> {currentFarm.phosphorus}</p>
        <p><strong>Potassium:</strong> {currentFarm.potassium}</p>
        <p><strong>Last Irrigation:</strong> 2 days ago</p>
        <div>
          <label><strong>Upload Drone Imagery:</strong></label><br/>
          <input type="file" onChange={handleDroneUpload} /><br />
          {droneFile && <p>Uploaded: {droneFile.name}</p>}
        </div>
        <div style={{marginTop: '15px'}}>
          <label><strong>Upload Soil Sensor Data:</strong></label><br/>
          <input type="file" onChange={handleSoilUpload} /><br />
          {soilFile && <p>Uploaded: {soilFile.name}</p>}
        </div>
        <p style={{marginTop: '20px'}}><strong>Recommended Action:</strong> Fertilize Zone 3 next week.</p>
      </div>
    </div>
  );
}
