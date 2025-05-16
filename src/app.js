// src/app.js

class HealthcareApp {
    constructor() {
      this.patients = [];
    }
  
    registerPatient(name, age, condition) {
      const patient = { id: this.patients.length + 1, name, age, condition };
      this.patients.push(patient);
      return patient;
    }
  
    getPatientById(id) {
      return this.patients.find(patient => patient.id === id) || null;
    }
  
    listPatients() {
      return this.patients;
    }
  }
  
  module.exports = HealthcareApp;