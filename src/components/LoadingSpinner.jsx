import { Spinner } from "react-bootstrap"

const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center py-5">
            <Spinner animation='grow'></Spinner>
        </div>
    )
}

export default LoadingSpinner