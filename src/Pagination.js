import React from 'react'
import "./Pagination.css"
const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    const prevPageHandler = () =>
    {
        if (currentPage !==1) setCurrentPage(currentPage-1)
    }
     const nextPageHandler = () =>
    {
        if (currentPage !==totalPosts) setCurrentPage(currentPage+1)
    }
    return (
        <div className='pagination'>
            <button onClick={prevPageHandler}> Prev</button>
            {
                
              pages.map((page, index) => { return <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? "active" : ""}>{page}</button>})
            }
            <button onClick={nextPageHandler}>Next</button>
    </div>
  )
}
export default Pagination;
