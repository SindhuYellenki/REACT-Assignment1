import './index.css'

const HistoryItem = props => {
  const {details, onDelete} = props

  const {timeAccessed, logoUrl, title, domainUrl, id} = details

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="listItem">
      <p className="time">{timeAccessed}</p>
      <div className="logoContainer">
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="name">{title}</p>
        <p className="name">{domainUrl}</p>
      </div>
      <button className="button" type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
          onClick={onClickDelete}
        />
      </button>
    </li>
  )
}

export default HistoryItem
