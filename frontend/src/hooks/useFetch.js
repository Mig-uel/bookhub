import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// actions
import { setBooks } from '../store/books/books'
import { setLoading } from '../store/loading/loading'

export const useFetch = (url) => {
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        dispatch(setLoading(true))

        const req = await fetch(url)
        const res = await req.json()

        dispatch(setBooks(res), setLoading(false))
      } catch (error) {
        dispatch(setLoading(true))
        console.log(error.message)
      }
      dispatch(setLoading(false))
    })()
  }, [dispatch, url])
}
