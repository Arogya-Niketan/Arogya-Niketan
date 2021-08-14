import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IHospital } from '../HospitalsList/hospital';

export class HospitalData implements InMemoryDbService {

    createDb(): { hospitals: IHospital[] }{
        const hospitals: IHospital[] = [
            {
                "id":13452,
                "hospitalName": "Krishna Multi Speciality Hospital",
                "phone":"989768590",
                "email":"krishna@gmail.com",
                "location":"Bhimavaram",
                "address":"sai ram nagar",
                "bedsAvailable":24,
                "ventilation":56,
                "criticalCareUnit":34,
                "isolationWard":32
            },
            {
                "id":13452,
                "hospitalName": "Raghu Multi Speciality Hospital",
                "phone":"989796456",
                "email":"raghu@gmail.com",
                "location":"Rajahmundry",
                "address":"sai Datha nagar",
                "bedsAvailable":24,
                "ventilation":56,
                "criticalCareUnit":45,
                "isolationWard":32
            },
            {
                "id":35679,
                "hospitalName": "Seshu Multi Speciality Hospital",
                "phone":"630276839",
                "email":"seshu@gmail.com",
                "location":"Kakinada",
                "address":"sai seshu nagar",
                "bedsAvailable":24,
                "ventilation":56,
                "criticalCareUnit":20,
                "isolationWard":32
            },
            {
                "id":22987,
                "hospitalName": "Raghu Multi Speciality Hospital",
                "phone":"989796456",
                "email":"raghu@gmail.com",
                "location":"Rajahmundry",
                "address":"sai Datha nagar",
                "bedsAvailable":24,
                "ventilation":56,
                "criticalCareUnit":45,
                "isolationWard":32
            },
            {
                "id":34567,
                "hospitalName": "Seshu Multi Speciality Hospital",
                "phone":"630276839",
                "email":"seshu@gmail.com",
                "location":"Kakinada",
                "address":"sai seshu nagar",
                "bedsAvailable":24,
                "ventilation":56,
                "criticalCareUnit":20,
                "isolationWard":32
            }

        ];
        return { hospitals };
        
    }

}