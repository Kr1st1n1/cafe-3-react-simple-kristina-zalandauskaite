const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/foodType`);
  const foodTypes = await response.json();

  return foodTypes;
};

const FoodTypeService = {
  fetchAll,
};

export default FoodTypeService;
