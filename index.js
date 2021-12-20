class Polygon {
    constructor (arr) {
        this.arr =arr
    }
    get countSides() {
        return this.arr.length
    }
    get perimeter() {
        let per = 0
        for (let side of this.arr) {
            per = per + side
        }
        return per
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (this.arr[0]< (this.arr[1]+this.arr[2]) && this.arr[1]< (this.arr[0]+this.arr[2]) && this.arr[2]< (this.arr[1]+this.arr[0])  ) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid(){
        for (let i=0; i<3;i++) {
            if (this.arr[i] !== this.arr[i+1]) {return false }
        return true 
    }}
    get area() {
        return this.arr[0] * this.arr[0]
    }
}
