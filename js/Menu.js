const csv = require('csv-parser');
const fs = require('fs');
const Entry = require('./entry'); // Assuming entry.js contains the Entry class
const MenuAbstract = require('./menuAbstract'); // Assuming menuAbstract.js contains the MenuAbstract class

class Menu extends MenuAbstract {
  constructor() {
    super();
    this._listMeal = [];
  }

  searchMeal(meal) {
    for (const item of this._listMeal) {
      if (item.getMeal() === meal) {
        return item;
      }
    }
    return null;
  }

  searchType(type) {
    const result = [];
    for (const item of this._listMeal) {
      if (item.getType() === type) {
        result.push(item);
      }
    }
    return result;
  }

  printMenu() {
    console.log("[Meals], [Calories], [Ingredients], [Food Types], [Prices]");
    this._listMeal.forEach((item, index) => {
      console.log(`Meal ${index + 1}: ${item}`);
    });
  }

  addMenu(restaurant, newItem) {
    this._listMeal.push(newItem);
  }

  removeMenu(restaurant, meal) {
    const search = this.searchMeal(meal);
    if (!search) {
      return this.notFound();
    } else {
      const index = this._listMeal.indexOf(search);
      this._listMeal.splice(index, 1);
    }
  }

  writeBack(restaurant) {
    const csvwriter = fs.createWriteStream(restaurant);
    this._listMeal.forEach((meal) => {
      const mealList = [
        meal.getMeal(),
        meal.getCalories().toString(),
        meal.getIngredients(),
        meal.getType(),
        meal.getPrice().toString(),
      ];
      csvwriter.write(mealList.join(',') + '\n');
    });
    csvwriter.end();
  }

  editInventory(meal, calories, ingredients, mealType, price) {
    const shop = this.searchMeal(meal);
    if (!shop) {
      return null;
    }
    shop.setCalories(calories);
    shop.setIngredients(ingredients);
    shop.setType(mealType);
    shop.setPrice(price);
    return shop;
  }

  createInventory(restaurant) {
    const csvreader = fs.createReadStream(restaurant).pipe(csv());
    csvreader.on('data', (line) => {
      const entry = new Entry();
      entry.setMeal(line[0]);
      entry.setCalories(parseInt(line[1]));
      entry.setIngredients(line[2]);
      entry.setType(line[3]);
      entry.setPrice(parseFloat(line[4]));
      this._listMeal.push(entry);
    });
  }

  giveOptions() {
    console.log("\n[0] - Exit Program");
    console.log("[1] - Search");
    console.log("[2] - Print Menu");
    console.log("[3] - Add to the Menu");
    console.log("[4] - Remove from the Menu");
    console.log("[5] - Edit Menu");
  }

  notFound() {
    console.log("The inputed value was either not in our system or misspelled. Please try again.");
  }
}
