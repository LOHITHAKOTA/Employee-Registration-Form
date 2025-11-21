package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class Rservice {

    @Autowired
    private JdbcTemplate jd;

    public int insert(Rdata d) {
        String sql = "INSERT INTO Emp_details (fname, mname, lname, id, email, phone, dob, date, salary, address, gender, department, exp) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return jd.update(sql, d.getFname(), d.getMname(), d.getLname(), d.getId(), d.getEmail(), d.getPhone(), d.getDob(),
                         d.getDate(), d.getSalary(), d.getAddress(), d.getGender(), d.getDepartment(), d.getExp());
    }

    public int update(Rdata d) {
        String sql = "UPDATE Emp_details SET fname=?, mname=?, lname=?, email=?, phone=?, dob=?, date=?, salary=?, address=?, gender=?, department=?, exp=? WHERE id=?";
        return jd.update(sql, d.getFname(), d.getMname(), d.getLname(), d.getEmail(), d.getPhone(), d.getDob(),
                         d.getDate(), d.getSalary(), d.getAddress(), d.getGender(), d.getDepartment(), d.getExp(), d.getId());
    }


    public List<Rdata> selectAll() {
        String sql = "SELECT * FROM Emp_details";
        return jd.query(sql, (rs, rowNum) -> {
            Rdata r = new Rdata();
            r.setFname(rs.getString("fname"));
            r.setMname(rs.getString("mname"));
            r.setLname(rs.getString("lname"));
            r.setId(rs.getInt("id"));
            r.setEmail(rs.getString("email"));
            r.setPhone(rs.getString("phone"));
            r.setDob(rs.getString("dob"));
            r.setDate(rs.getString("date"));
            r.setSalary(rs.getInt("salary"));
            r.setAddress(rs.getString("address"));
            r.setGender(rs.getString("gender"));
            r.setDepartment(rs.getString("department"));
            r.setExp(rs.getInt("exp"));
            return r;
        });
    }

}
