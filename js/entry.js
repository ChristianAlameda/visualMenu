class Entry {
  constructor() {
    this._price = 0;
    this._ingredients = "";
    this._type = "";
    this._calories = 0;
    this._meal = "";
  }

  getMeal() {
    return this._meal;
  }

  setMeal(meal) {
    this._meal = meal;
  }

  getPrice() {
    return this._price;
  }

  setPrice(price) {
    this._price = price;
  }

  getIngredients() {
    return this._ingredients;
  }

  setIngredients(ingredients) {
    this._ingredients = ingredients;
  }

  getType() {
    return this._type;
  }

  setType(type) {
    this._type = type;
  }

  getCalories() {
    return this._calories;
  }

  setCalories(calories) {
    this._calories = calories;
  }

  toString() {
    const line = `${this._meal} ${this._calories} ${this._ingredients} ${this._type} ${this._price}`;
    return line;
  }

  display() {
    const line = `Meal: ${this._meal} | Calories: ${this._calories} | Ingredients: ${this._ingredients} | Food Type: ${this._type} | Price: ${this._price}`;
    return line;
  }
}

module.exports = Entry;