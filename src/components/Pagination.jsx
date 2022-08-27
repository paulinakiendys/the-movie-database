import { Button } from "react-bootstrap"
const Pagination = ({ page, total_pages, hasPreviousPage, onPreviousPage, hasNextPage, onNextPage }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <Button
        disabled={!hasPreviousPage}
        onClick={onPreviousPage}
        variant="primary"
      >Prev</Button>

      {page} of {total_pages}
      
      <Button
        disabled={!hasNextPage}
        onClick={onNextPage}
        variant="primary"
      >Next</Button>
    </div>
  )
}

export default Pagination