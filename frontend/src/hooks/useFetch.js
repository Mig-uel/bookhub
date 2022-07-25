import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setBooks } from '../store/books/books'

export const useFetch = (url) => {
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        const req = await fetch(url)
        const res = await req.json()

        dispatch(setBooks(res))
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [dispatch, url])
}
