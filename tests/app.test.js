// tests/app.test.js

const HealthcareApp = require('../src/app');

describe('HealthcareApp', () => {
  let app;

  beforeEach(() => {
    app = new HealthcareApp();
  });

  test('should register a new patient', () => {
    const patient = app.registerPatient('John Doe', 30, 'Flu');
    expect(patient).toEqual({ id: 1, name: 'John Doe', age: 30, condition: 'Flu' });
  });

  test('should retrieve a patient by ID', () => {
    app.registerPatient('Jane Doe', 25, 'Cold');
    const patient = app.getPatientById(1);
    expect(patient.name).toBe('Jane Doe');
  });

  test('should return null for non-existent patient ID', () => {
    const patient = app.getPatientById(999);
    expect(patient).toBeNull();
  });

  test('should list all registered patients', () => {
    app.registerPatient('John Doe', 30, 'Flu');
    app.registerPatient('Jane Doe', 25, 'Cold');
    const patients = app.listPatients();
    expect(patients.length).toBe(2);
  });
});