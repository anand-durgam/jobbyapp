const FailureView = props => {
  const {onClickRetry} = props

  const renderJobsList = () => {
    onClickRetry()
  }

  return (
    <ul className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="jobs-failure-image"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-text">
        We cannot seem to find the page you are looking for
      </p>
      <button type="button" className="retry-button" onClick={renderJobsList()}>
        Retry
      </button>
    </ul>
  )
}
export default FailureView
