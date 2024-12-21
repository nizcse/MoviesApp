import { useEffect, useState, useCallback, useRef } from 'react';
import { callMovieData } from '~/utils/api';

const useHome = () => {
  const [loading,setLoading] = useState<boolean>(false)
  const [moviesArray, setMoviesArray] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');

  const cache = useRef<Map<string, Movie[]>>(new Map());

  const fetchMovieArray = useCallback(async () => {
    setLoading(true);
    const query = debouncedQuery.trim();
    if (!query && cache.current.has('')) {
      setMoviesArray(cache.current.get('') || []);
      return;
    }

    if (cache.current.has(query)) {
      setMoviesArray(cache.current.get(query) || []);
      return;
    }

    const params: CallApiParams = {
      method: 'get',
      subUri: '',
      query,
    };

    try {
      const response: Movie[] = await callMovieData(params);

      setMoviesArray(response);
      setLoading(false)
      cache.current.set(query, response);
    } catch (error) {
      console.error(error, 'error in api');
      setLoading(false)
    }
  }, [debouncedQuery]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    fetchMovieArray();
  }, [debouncedQuery, fetchMovieArray]);

  return {
    moviesArray,
    searchQuery,
    setSearchQuery,
    loading
  };
};

export default useHome;
