let customerIdUser = 1;
let vehicleId = 1;
let rentalId = 1;
class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = customerIdUser++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails(): string {
        return `ID: ${this.id} - Tên: ${this.name} - Email: ${this.email} - SĐT: ${this.phone}`
    }
}

abstract class Vehicle {
    id: number;
    type: string;
    rentalPricePerDay: number;
    isAvailable: boolean;
    constructor(id: number, type: string, rentalPricePerday: number, isAvailable: boolean) {
        this.id = vehicleId++;
        this.type = type;
        this.rentalPricePerDay = rentalPricePerday;
        this.isAvailable = isAvailable;
    }
    rent(): void {
        this.isAvailable = false;
    }
    returnVehicle(): void {
        this.isAvailable = true;
    }
    abstract calculateRentalCost(days: number): number;
    abstract getFeatures(): string;
    abstract getInsurancePolicy(): string;
}

class Car extends Vehicle {
     constructor (id: number, type: string, rentalPricePerday: number, isAvailable: boolean) {
        super (id, type, rentalPricePerday, isAvailable);
        this.rentalPricePerDay = 1500;
    }
    calculateRentalCost(days: number): number {
        return days * this.rentalPricePerDay;
    }
    getFeatures(): string {
        return ` Điều hoà và GPS dẫn đường`
    }
    getInsurancePolicy(): string {
        return `Bảo hiểm toàn diện, miễn thường $500`
    }
}

class Motorcycle extends Vehicle {
    constructor (id: number, type: string, rentalPricePerday: number, isAvailable: boolean) {
        super (id, type, rentalPricePerday, isAvailable);
        this.rentalPricePerDay = 8000;
    }
    calculateRentalCost(days: number): number {
        return days * this.rentalPricePerDay;
    }
    getFeatures(): string {
        return ` Mũ bảo hiểm đi kèm`
    }
    getInsurancePolicy(): string {
        return `Bảo hiểm trách nhiệm dân sự cơ bản`
    }
}


class Truck extends Vehicle {
    constructor (id: number, type: string, rentalPricePerday: number, isAvailable: boolean) {
        super (id, type, rentalPricePerday, isAvailable);
        this.rentalPricePerDay = 20000;
    }
    calculateRentalCost(days: number): number {
        return days * this.rentalPricePerDay;
    }
    getFeatures(): string {
        return `Thùng hàng lớn và Bửng nâng thủy lực `
    }
    getInsurancePolicy(): string {
        return `Bảo hiểm hàng hóa và phương tiện thương mại`
    }
}

class Rental {
    rentalId: number;
    customer: Customer;
    vehicle: Vehicle;
    days: number;
    totalCost: number;
    constructor(rentalId: number, customer: Customer, vehicle: Vehicle, days: number, totalCost: number) {
        this.rentalId = rentalId;
        this.customer = customer;
        this.vehicle = vehicle;
        this.days = days;
        this.totalCost = totalCost;
    }
    getDetails(): void {
        console.log(`RentaId: ${this.rentalId}`);
        console.log(`Customer: `);
        console.log(`${this.customer.id}`);
        console.log(`${this.customer.name}`);
        console.log(`${this.customer.email}`);
        console.log(`${this.customer.phone}`);
        console.log(`Vehicle: `);
        console.log(`${this.vehicle.id}`);
        console.log(`${this.vehicle.type}`);
        console.log(`${this.vehicle.rentalPricePerDay}`);
        console.log(`${this.vehicle.isAvailable}`);
        console.log(`Days: ${this.days}`);
        console.log(`TotalCosst: ${this.totalCost}`);
    }

}

class RentalAgency {
    vehicles: Vehicle[] = [];
    customers: Customer[] = [];
    rentals: Rental[] = [];
    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
    }
    addCustomer(name: string, email: string, phone: string):  void | null {
        

    }
    rentVehicle(customerId: number, vehicleId: number, days: number): void | null {
    }
    returnVehicle(vehicleId: number): void {

    }
    listAvailableVehicles(): void {

    }
    listCustomerRentals(customerId: number): void {
        let cus = this.customers.forEach( cuss => cuss.id === customerId) 
        if (cus.length ===) {

        }
    }
    calculateTotalRevenue(): number {
        return 
    }
    getVehicleTypeCount(): void {

    }
    getVehicleFeatures(vehicleId: number): void {

    }
    getVehicleInsurance(vehicleId: number): void {

    }
}


function menu() {
    const choices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
    for (let choice of choices) {
        console.log(`==========MENU============`);
        console.log(`1. Thêm khách hàng mới.`);
        console.log(`2. Thêm phương tiện mới.(cho chọn loại: Car, Motorcycle, Truck).`);
        console.log(`3. Thuê xe (chọn khách hàng, chọn xe, nhập số ngày)`);
        console.log(`4. Trả xe`);
        console.log(`5. Hiển thị danh sách xe còn trống `);
        console.log(`6. Hiển thị danh sách hợp đồng của một khách hàng`);
        console.log(`7. Tính và hiển thị tổng doanh thu`);
        console.log(`8. Đếm số lượng từng loại xe(sử dụng reduce hoặc map)`);
        console.log(`9. Tìm kiếm và hiển thị thông tin bằng mã định danh`);
        console.log(`10.Hiển thị tính năng và chính sách bảo hiểm của một xe`);
        console.log(`11.Thoát chương trình`);
        console.log(` Chọn ${choice}`);
        switch (choice) {
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            case "7":
                break;
            case "8":
                break;
            case "9":
                break;
            case "10":
                break;
            case "11":
                console.log(` Bạn đã thoát chương trình.`);
                break;
            default:
                console.log(` Lựa chọn không hợp lệ.`);
        }
    }
}
menu();