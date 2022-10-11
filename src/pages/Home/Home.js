import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult'
import { getCategories } from './home.slice'
import * as S from './home.style'
const Home = () => {
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data)
      })
  }, [dispatch])
  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories}></FilterPanel>
        </S.Side>
        <S.Main>
          <SearchItemResult />
        </S.Main>
      </S.Container>
    </div>
  )
}

export default Home
