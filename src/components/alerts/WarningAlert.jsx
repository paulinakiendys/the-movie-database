import { Alert } from "react-bootstrap"

const WarningAlert = ({ message }) => {
  return (
    <Alert variant="danger"><p>{message}</p></Alert>
  )
}

export default WarningAlert