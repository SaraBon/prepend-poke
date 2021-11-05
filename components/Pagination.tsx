
import Link from 'next/link'
import styles from './index.module.css'


interface Props {
  totalPages: number,
  currentPage: number
}

const Pagination: React.FC<Props> = ({ totalPages, currentPage }) => {
  return (
    <div className={styles.paginationWrap}>
	  {Array.from({length: totalPages} as {length: number}, (_, index) => {
         return (
          <div className={`${styles.pageNumber} ${index === currentPage && styles.activePage}`}>
          <Link href="/[page]" as={`/${index}`}>
               <a>{index}</a>
             </Link>
          </div>
         )
      })}
    </div>
  )
}

export default Pagination
