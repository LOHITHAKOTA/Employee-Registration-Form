import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddEmployee() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fname: '', mname: '', lname: '', id: '', email: '', phone: '',
    dob: '', date: '', salary: '', address: '', gender: '', department: '', exp: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:9999/projects/add', {
      ...data,
      id: Number(data.id),
      salary: parseInt(data.salary),
      exp: parseInt(data.exp)
    })
      .then(() => {
        alert('Employee added');
        navigate('/');
      })
      .catch(err => alert('Error: ' + err.message));
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
  <li onClick={() => navigate('/show')}>View</li>
  <li onClick={() => navigate('/add')}>Add</li>
</ul>

      </aside>

      <main className="main-content">
      <center><h2>Employee Registration Form</h2></center>
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div>
              <label>First Name</label>
              <input name="fname" value={data.fname} onChange={handleChange} required pattern="[A-Za-z]{3,25}" maxLength={25} />
            </div>
            <div>
              <label>Middle Name</label>
              <input name="mname" value={data.mname} onChange={handleChange} required pattern="[A-Za-z]{3,25}" />
            </div>
            <div>
              <label>Last Name</label>
              <input name="lname" value={data.lname} onChange={handleChange} required pattern="[A-Za-z]{3,25}" />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Employee ID</label>
              <input name="id" value={data.id} onChange={handleChange} required pattern="[0-9]{1,7}" />
            </div>
            <div>
              <label>Email</label>
              <input name="email" value={data.email} onChange={handleChange} required maxLength={30} />
            </div>
            <div>
              <label>Phone</label>
              <input name="phone" value={data.phone} onChange={handleChange} required pattern="[0-9]{10}" />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Date of Birth</label>
              <input type="date" name="dob" value={data.dob} onChange={handleChange} required />
            </div>
            <div>
              <label>Joining Date</label>
              <input type="date" name="date" value={data.date} onChange={handleChange} required />
            </div>
            <div>
              <label>Salary</label>
              <input name="salary" type="number" value={data.salary} onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Address</label>
              <input name="address" value={data.address} onChange={handleChange} required maxLength={100} />
            </div>
            <div>
              <label>Gender</label>
              <select name="gender" value={data.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label>Department</label>
              <input name="department" value={data.department} onChange={handleChange} required maxLength={20} />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Experience (years)</label>
              <input name="exp" type="number" value={data.exp} onChange={handleChange} required />
            </div>
          </div>
      <button type="submit">Submit</button>
    </form>
    </main>
    </div>
  );
}
export default AddEmployee;
