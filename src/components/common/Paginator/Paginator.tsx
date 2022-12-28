import React, {FC} from 'react'
import styles from './Paginator.module.css'

type PaginatorType = {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}

export const Paginator: FC<PaginatorType> = ({pageSize, totalUsersCount, currentPage, onPageChanged}) => {
  let pagesCount: number = Math.ceil(totalUsersCount / pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map(p => {
        return <span className={currentPage === p ? styles.selectedPage : ''}
                     onClick={() => onPageChanged(p)}
                     key={p}
        >{p}</span>
      })}
    </div>
  )
}
