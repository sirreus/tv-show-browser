export const getFavorites = () => JSON.parse(localStorage.getItem('favorites') || '{}')

export const addToFavorites = (show) => {
  const id = show.id.toString()
  const newFav = { ...getFavorites() }
  newFav[id] = show
  localStorage.setItem('favorites', JSON.stringify(newFav))
  return newFav
}

export const removeFromFavorites = (show) => {
  const id = show.id.toString()
  const newFav = { ...getFavorites() }
  delete newFav[id]
  localStorage.setItem('favorites', JSON.stringify(newFav))
  return newFav
}
