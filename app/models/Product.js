import Entity from "./Entity.js";

let idCounter = 1;

class Product extends Entity {
  id;
  description;
  category;
  grade;

  constructor(title, description, grade, category) {
    super(title);
    this.id = idCounter;
    this.description = description;
    this.category = category;
    this.grade = grade;

    idCounter++;
  }
}

export default Product;
