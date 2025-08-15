let customerIdUser = 1
let vehicleId = 1
let rentalId = 1

class Customer {
    id: number
    name: string
    email: string
    phone: string

    constructor(name: string, email: string, phone: string) {
        this.id = customerIdUser++
        this.name = name
        this.email = email
        this.phone = phone
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`
    }
}

abstract class Vehicle {
    id: number
    type: string
    rentalPricePerDay: number
    isAvailable: boolean

    constructor(type: string, rentalPricePerDay: number, isAvailable: boolean) {
        this.id = vehicleId++
        this.type = type
        this.rentalPricePerDay = rentalPricePerDay
        this.isAvailable = isAvailable
    }

    rent() {
        this.isAvailable = false
    }

    returnVehicle() {
        this.isAvailable = true
    }

    abstract calculateRentalCost(days: number): number
    abstract getFeatures(): string
    abstract getInsurancePolicy(): string
}

class Car extends Vehicle {
    constructor(rentalPricePerDay: number, isAvailable: boolean) {
        super('Car', rentalPricePerDay, isAvailable)
    }

    calculateRentalCost(days: number): number {
        return this.rentalPricePerDay * days
    }

    getFeatures(): string {
        return 'Điều hòa, GPS dẫn đường'
    }

    getInsurancePolicy(): string {
        return 'Bảo hiểm toàn diện, miễn thường $500'
    }
}

class Motorcycle extends Vehicle {
    constructor(rentalPricePerDay: number, isAvailable: boolean) {
        super('Motorcycle', rentalPricePerDay, isAvailable)
    }

    calculateRentalCost(days: number): number {
        return this.rentalPricePerDay * days
    }

    getFeatures(): string {
        return 'Mũ bảo hiểm đi kèm'
    }

    getInsurancePolicy(): string {
        return 'Bảo hiểm trách nhiệm dân sự cơ bản'
    }
}

class Truck extends Vehicle {
    constructor(rentalPricePerDay: number, isAvailable: boolean) {
        super('Truck', rentalPricePerDay, isAvailable)
    }

    calculateRentalCost(days: number): number {
        return this.rentalPricePerDay * days
    }

    getFeatures(): string {
        return 'Thùng hàng lớn, Bửng nâng thủy lực'
    }

    getInsurancePolicy(): string {
        return 'Bảo hiểm hàng hóa và phương tiện thương mại'
    }
}

class Rental {
    rentalId: number
    customer: Customer
    vehicle: Vehicle
    days: number
    totalCost: number

    constructor(customer: Customer, vehicle: Vehicle, days: number) {
        this.rentalId = rentalId++
        this.customer = customer
        this.vehicle = vehicle
        this.days = days
        this.totalCost = vehicle.calculateRentalCost(days)
        vehicle.rent()
    }

    getDetails(): string {
        return `RentalID: ${this.rentalId}, Customer: ${this.customer.name}, Vehicle: ${this.vehicle.type}, Days: ${this.days}, TotalCost: ${this.totalCost}`
    }
}

class RentalAgency {
    vehicles: Vehicle[] = []
    customers: Customer[] = []
    rentals: Rental[] = []

    addVehicle(vehicle: Vehicle) {
        this.vehicles.push(vehicle)
    }

    addCustomer(name: string, email: string, phone: string): Customer {
        const customer = new Customer(name, email, phone)
        this.customers.push(customer)
        return customer
    }

    rentVehicle(customerId: number, vehicleId: number, days: number): Rental | null {
        const customer = this.customers.find(c => c.id === customerId)
        const vehicle = this.vehicles.find(v => v.id === vehicleId && v.isAvailable)
        if (customer && vehicle) {
            const rental = new Rental(customer, vehicle, days)
            this.rentals.push(rental)
            return rental
        }
        return null
    }

    returnVehicle(vehicleId: number) {
        const vehicle = this.vehicles.find(v => v.id === vehicleId)
        if (vehicle) vehicle.returnVehicle()
    }

    listAvailableVehicles() {
        console.log('Danh sách xe còn trống:')
        this.vehicles.filter(v => v.isAvailable).forEach(v => {
            console.log(`ID: ${v.id}, Type: ${v.type}, Price: ${v.rentalPricePerDay}`)
        })
    }

    listCustomerRentals(customerId: number) {
        console.log(`Hợp đồng của khách hàng ID ${customerId}:`)
        this.rentals.filter(r => r.customer.id === customerId).forEach(r => {
            console.log(r.getDetails())
        })
    }

    calculateTotalRevenue(): number {
        return this.rentals.reduce((sum, r) => sum + r.totalCost, 0)
    }
}

const agency = new RentalAgency()
agency.addCustomer('Nguyen Van A', 'a@gmail.com', '0123456789')
agency.addCustomer('Tran Thi B', 'b@gmail.com', '0987654321')
agency.addVehicle(new Car(100, true))
agency.addVehicle(new Motorcycle(50, true))
agency.addVehicle(new Truck(200, true))

function menu() {
    const choices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
    for (let choice of choices) {
        console.log(`==========MENU============`)
        console.log(`1. Thêm khách hàng mới.`)
        console.log(`2. Thêm phương tiện mới.(cho chọn loại: Car, Motorcycle, Truck).`)
        console.log(`3. Thuê xe (chọn khách hàng, chọn xe, nhập số ngày)`)
        console.log(`4. Trả xe`)
        console.log(`5. Hiển thị danh sách xe còn trống `)
        console.log(`6. Hiển thị danh sách hợp đồng của một khách hàng`)
        console.log(`7. Tính và hiển thị tổng doanh thu`)
        console.log(`8. Đếm số lượng từng loại xe(sử dụng reduce hoặc map)`)
        console.log(`9. Tìm kiếm và hiển thị thông tin bằng mã định danh`)
        console.log(`10.Hiển thị tính năng và chính sách bảo hiểm của một xe`)
        console.log(`11.Thoát chương trình`)
        console.log(` Chọn ${choice}`)
        switch (choice) {
            case "1":
                agency.addCustomer('Le Van C', 'c@gmail.com', '0111222333')
                break
            case "2":
                agency.addVehicle(new Car(120, true))
                break
            case "3":
                agency.rentVehicle(1, 1, 3)
                break
            case "4":
                agency.returnVehicle(1)
                break
            case "5":
                agency.listAvailableVehicles()
                break
            case "6":
                agency.listCustomerRentals(1)
                break
            case "7":
                console.log(`Tổng doanh thu: ${agency.calculateTotalRevenue()}`)
                break
            case "8":
                break
            case "9":
                break
            case "10":
                break
            case "11":
                console.log(` Bạn đã thoát chương trình.`)
                break
            default:
                console.log(` Lựa chọn không hợp lệ.`)
        }
    }
}

menu();