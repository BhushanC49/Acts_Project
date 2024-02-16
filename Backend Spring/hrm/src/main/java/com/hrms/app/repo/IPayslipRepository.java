package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import com.hrms.app.model.Payslip;

public interface IPayslipRepository extends MongoRepository<Payslip, String> {
    List<Payslip> findByEmpIdAndYearAndMonth(String empId, int year, int month);
}

