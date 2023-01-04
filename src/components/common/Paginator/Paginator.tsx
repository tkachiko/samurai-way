import React, {FC, useEffect, useState} from 'react'
import styles from './Paginator.module.css'
import cn from 'classnames'

type PaginatorType = {
  pageSize: number
  totalItemsCount: number
  currentPage: number
  portionSize?: number
  onPageChanged: (pageNumber: number) => void
}

export const Paginator: FC<PaginatorType> = ({
                                               pageSize,
                                               totalItemsCount,
                                               currentPage,
                                               onPageChanged,
                                               portionSize = 10,
                                             }) => {
  let pagesCount: number = Math.ceil(totalItemsCount / pageSize)
  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage, portionSize])

  return <div className={styles.paginator}>
    {portionNumber > 1 &&
      <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>PREV</button>}

    {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p) => {
        return <span className={cn({
          [styles.selectedPage]: currentPage === p,
        }, styles.pageNumber)}
                     key={p}
                     onClick={() => {
                       onPageChanged(p)
                     }}>{p}</span>
      })}
    {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}>NEXT</button>}
  </div>
}
