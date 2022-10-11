import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'

export default function ProductItem() {
  return (
    <S.Product>
      <Link to="">
        <S.ProductItem>
          <S.ProductItemImage>
            <img
              src="https://images.unsplash.com/photo-1663211479526-516cde69da9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              alt=""
            />
          </S.ProductItemImage>
        </S.ProductItem>
        <S.ProductItemInfo>
          <S.ProductItemTitle>
            Thuốc uống trở thành bất tử, vô địch thiên hạ
          </S.ProductItemTitle>
          <S.ProductItemPrice>
            <S.ProductItemPriceOriginal>đ 8.700</S.ProductItemPriceOriginal>
            <S.ProductItemPriceSale>đ 8.700</S.ProductItemPriceSale>
          </S.ProductItemPrice>
          <S.ProductItemMeta>
            <ProductRating />
            <S.ProductItemSold>
              <span>1.7k</span>
              <span>Đã bán</span>
            </S.ProductItemSold>
          </S.ProductItemMeta>
        </S.ProductItemInfo>
      </Link>
    </S.Product>
  )
}
