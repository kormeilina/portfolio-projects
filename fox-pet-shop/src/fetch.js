export async function fetchItems() {
    try {
      const response = await fetch("../json/data_of_foxes.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Ошибка:`, error);
    }
  }
  