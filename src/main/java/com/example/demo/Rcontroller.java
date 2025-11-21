package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class Rcontroller {

    @Autowired
    private Rservice service;

    @PostMapping("/add")
    public String addEmployee(@RequestBody Rdata data) {
        int res = service.insert(data);
        if (res > 0) return "Employee added successfully";
        else return "Failed to add employee";
    }

    @GetMapping("/all")
    public List<Rdata> getAllEmployees() {
        return service.selectAll();
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateEmployee(@RequestBody Rdata data) {
        try {
            int rows = service.update(data);
            if (rows > 0) {
                return ResponseEntity.ok("Employee updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating employee");
        }
    }

}
