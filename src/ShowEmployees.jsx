import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShowEmployees() {
  const [datas, setDatas] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9999/projects/all')
      .then(res => setDatas(res.data))
      .catch(err => console.error('Error fetching employees:', err));
  }, []);

  const handleUpdate = (item) => {
    navigate('/update', { state: { user: item } });
  };

  const handleView = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='home'>
      <center>
        <h2>Employee List</h2>
        <button onClick={() => navigate('/add')} className='buttons'>Add Employee</button>
      </center>

      {datas.length === 0 ? (
        <p>No data available</p>
      ) : (
        <center>
          <table className="styled-table" style={{ maxWidth: '900px' }}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>ID</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Date-of-Joining</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Gender</th>
                <th>View</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((item, index) => (
                <tr key={index}>
                  <td>{item.fname} {item.mname} {item.lname}</td>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.dob}</td>
                  <td>{item.date}</td>
                  <td>{item.department}</td>
                  <td>{item.salary}</td>
                  <td>{item.gender}</td>
                  <td><button onClick={() => handleView(item)}>View</button></td>
                  <td><button onClick={() => handleUpdate(item)}>Update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      )}

      {selectedItem && (
        <div className="modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          justifyContent: 'center', alignItems: 'center',
          zIndex: 1000
        }}>
          <div className="modal-box" style={{
            backgroundColor: 'white', padding: '20px', borderRadius: '8px',
            width: '350px', position: 'relative'
          }}>
            <button
              className="close-btn"
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'absolute', top: '10px', right: '10px',
                background: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer'
              }}
            >
              ×
            </button>
            <h3>Employee Details</h3>
            <p><strong>Name:</strong> {selectedItem.fname} {selectedItem.mname} {selectedItem.lname}</p>
            <p><strong>ID:</strong> {selectedItem.id}</p>
            <p><strong>Email:</strong> {selectedItem.email}</p>
            <p><strong>Phone:</strong> {selectedItem.phone}</p>
            <p><strong>DOB:</strong> {selectedItem.dob}</p>
            <p><strong>Joining Date:</strong> {selectedItem.date}</p>
            <p><strong>Salary:</strong> {selectedItem.salary}</p>
            <p><strong>Address:</strong> {selectedItem.address}</p>
            <p><strong>Gender:</strong> {selectedItem.gender}</p>
            <p><strong>Department:</strong> {selectedItem.department}</p>
            <p><strong>Experience:</strong> {selectedItem.exp} years</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowEmployees;
