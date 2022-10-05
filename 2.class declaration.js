
class Rectangle {
	constructor (height, width) {
		this.height = height;
		this.width = width;
	}
}
let rectangle1 = new Rectangle(10,20);
let rectangle2 = new Rectangle(30,60);
console.log(rectangle1.height);//10
console.log(rectangle2.height);//30
console.log(rectangle1.width);//20