package com.example.demo;

public class Rdata {
    private String fname;
    private String mname;
    private String lname;
    private int id;
    private String email;
    private String phone;
    private String dob;      
    private String date;   
    private int salary;
    private String address;
    private String gender;
    private String department;
    private int exp;

    public String getFname() { return fname; }
    public void setFname(String fname) { this.fname = fname; }
    public String getMname() { return mname; }
    public void setMname(String mname) { this.mname = mname; }
    public String getLname() { return lname; }
    public void setLname(String lname) { this.lname = lname; }
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getDob() { return dob; }
    public void setDob(String dob) { this.dob = dob; }
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
    public long getSalary() { return salary; }
    public void setSalary(int salary) { this.salary = salary; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
    public int getExp() { return exp; }
    public void setExp(int exp) { this.exp = exp; }

    @Override
    public String toString() {
        return "Rdata{" +
                "fname='" + fname + '\'' +
                ", mname='" + mname + '\'' +
                ", lname='" + lname + '\'' +
                ", id=" + id +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", dob='" + dob + '\'' +
                ", date='" + date + '\'' +
                ", salary=" + salary +
                ", address='" + address + '\'' +
                ", gender='" + gender + '\'' +
                ", department='" + department + '\'' +
                ", exp=" + exp +
                '}';
    }
}
