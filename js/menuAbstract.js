class MenuAbstract {
    searchMeal(meal) {
      // To be implemented by derived classes
      throw new Error("Method 'searchMeal' must be implemented.");
    }
  
    searchType(type) {
      // To be implemented by derived classes
      throw new Error("Method 'searchType' must be implemented.");
    }
  
    printMenu() {
      // To be implemented by derived classes
      throw new Error("Method 'printMenu' must be implemented.");
    }
  
    addMenu(restaurant, newItem) {
      // To be implemented by derived classes
      throw new Error("Method 'addMenu' must be implemented.");
    }
  
    removeMenu(restaurant, meal) {
      // To be implemented by derived classes
      throw new Error("Method 'removeMenu' must be implemented.");
    }
  
    writeBack(restaurant) {
      // To be implemented by derived classes
      throw new Error("Method 'writeBack' must be implemented.");
    }
  
    editInventory(meal, calories, ingredients, mealType, price) {
      // To be implemented by derived classes
      throw new Error("Method 'editInventory' must be implemented.");
    }
  
    createInventory(restaurant) {
      // To be implemented by derived classes
      throw new Error("Method 'createInventory' must be implemented.");
    }
  
    giveOptions() {
      // To be implemented by derived classes
      throw new Error("Method 'giveOptions' must be implemented.");
    }
  
    notFound() {
      // To be implemented by derived classes
      throw new Error("Method 'notFound' must be implemented.");
    }
  }
  
  module.exports = MenuAbstract;
  