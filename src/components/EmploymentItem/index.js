const EmploymentItem = props => {
  const {employmentDetails} = props
  const {label, employmentTypeId} = employmentDetails

  return (
    <li className="checkbox-container">
      <input type="checkbox" className="check-box" id={employmentTypeId} />
      <label htmlFor={employmentTypeId} className="label">
        {label}
      </label>
    </li>
  )
}

export default EmploymentItem
