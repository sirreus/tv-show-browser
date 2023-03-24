export const getLastSearch = () =>
  JSON.parse(localStorage.getItem("last-search") || "{}");

export const addToLastSearch = (show) => {
  const id = show.id.toString();
  const lastSearch = { ...getLastSearch() };

  lastSearch[id] = { show: { name: show.name, id: show.id } };
  localStorage.setItem("last-search", JSON.stringify(lastSearch));
};

export const updateLastSearch = (show) => {
  const id = show.id.toString();
  const lastSearch = { ...getLastSearch() };

  delete lastSearch[Object.keys(lastSearch)[0]];
  lastSearch[id] = { show: { name: show.name, id: show.id } };
  localStorage.setItem("last-search", JSON.stringify(lastSearch));
};
