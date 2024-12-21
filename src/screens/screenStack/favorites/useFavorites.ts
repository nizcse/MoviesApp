import { useAppSelector } from '~/customHooks/redux/redux'

const useFavorites = () => {
    const favorites = useAppSelector(state=>state?.favoriteSlice?.favorites)
  return {
    favorites
  }
}

export default useFavorites