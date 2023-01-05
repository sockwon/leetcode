class ParkingSystem {
    private big;
    private medium;
    private small;
    constructor(big: number, medium: number, small: number) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    addCar(carType: number): boolean {
        if(carType === 1 && this.big>0){
            this.big -= 1
            return true
        }else if(carType === 2 && this.medium>0){
            this.medium -= 1
            return true
        }else if(carType === 3 && this.small>0){
            this.small -= 1
            return true
        }
        return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */