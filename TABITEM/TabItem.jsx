

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (<>
   
    <li className="tab-item-container  justify-content-center p-2 d-md-inline-flex ">
      <button
        type="button "
        className="btn btn-warning fs-5 fw-bold"
        value={`tab-btn  ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
    </>
  )
}

export default TabItem