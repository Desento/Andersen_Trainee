class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        this.setBrand(brand);
        this.setModel(model);
        this.setYearOfManufacturing(yearOfManufacturing);
        this.setMaxSpeed(maxSpeed);
        this.setMaxFuelVolume(maxFuelVolume);
        this.setFuelConsumption(fuelConsumption);
    }

    get brand() {
        return this.#brand;
    }

    get model() {
        return this.#model;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    setBrand(brand) {
        this.#brand = this.validateString(brand, 'Brand');
    }

    setModel(model) {
        this.#model = this.validateString(model, 'Model');
    }

    setYearOfManufacturing(year) {
        this.#yearOfManufacturing = this.validateNumber(year, 'Year', 1900, new Date().getFullYear());
    }

    setMaxSpeed(speed) {
        this.#maxSpeed = this.validateNumber(speed, 'maxSpeed', 100, 300);
    }

    setMaxFuelVolume(volume) {
        this.#maxFuelVolume = this.validateNumber(volume, 'maxFuelVolume', 5, 20);
    }

    setFuelConsumption(consumption) {
        this.#fuelConsumption = this.validateNumber(consumption, 'fuelConsumption');
    }

    start() {
        if (this.#isStarted) {
            throw new Error('Машина уже заведена');
        }

        this.#isStarted = true;
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Машина ещё не заведена');
        }

        this.#isStarted = false;
    }

    fillUpGasTank(amount) {
        this.validateNumber(amount, 'amount');

        if (amount <= 0) {
            throw new Error('Неверное количество топлива для заправки');
        }

        if (this.#currentFuelVolume + amount > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        }

        this.#currentFuelVolume += amount;
    }

    drive(speed, hours) {
        this.validateNumber(speed, 'speed');
        this.validateNumber(hours, 'hours');

        if (speed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро');
        }

        if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }

        const requiredFuel = (speed * hours * this.#fuelConsumption) / 100;

        if (requiredFuel > this.#currentFuelVolume) {
            throw new Error('Недостаточно топлива');
        }

        this.#currentFuelVolume -= requiredFuel;
        this.#mileage += speed * hours;
    }

    validateString(value, propertyName) {
        if (typeof value !== 'string' || value.length < 1 || value.length > 50) {
            throw new Error(`Неверное значение ${propertyName}`);
        }

        return value;
    }

    validateNumber(value, propertyName, min, max) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error(`Неверное значение ${propertyName}`);
        }

        if ((min !== undefined && value < min) || (max !== undefined && value > max)) {
            throw new Error(`${propertyName} должно быть в диапазоне от ${min} до ${max}`);
        }

        return value;
    }
}
