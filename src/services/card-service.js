const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'items';

const fetchAll = async (paramsString = null) => {
  const urlParamsString = paramsString ? `&${paramsString}` : '';

  const response = await fetch(`${domain}/${collectionName}?_expand=category&_expand=foodType${urlParamsString}`);
  const items = await response.json();

  return items;
};

const fetcById = async (id) => {
  const response = await fetch(`${domain}/${collectionName}/${id}?_expand=category&_expand=foodType`);
  const item = await response.json();

  return item;
};

const fetchByIdArr = async (idArr) => {
  const idsParamsString = idArr.map((id) => `id=${id}`).join('&');
  const items = await fetchAll(idsParamsString);

  return items;
};

const CardService = {
  fetchAll,
  fetcById,
  fetchByIdArr,
};

export default CardService;
