import React from 'react'

function Milkshakes(props) {
  const { milkShakes, veg, nonveg, handleViewDetailsBtnClick } = props

  return (
    <React.Fragment>
      <div id='heading-card'>
        Milk Shakes
      </div>
      <ul>
        {milkShakes.map((item) => (
          <li id='curries-list-item' className='list-item' key={item.id}>
            <div id='recipe-name-cont'>
              <div id='recipe-name'>
                {item.type === "veg" ? <img src={veg} alt='veg-image' /> : <img src={nonveg} alt='non-veg-image' />}
                <h3>{item.name}</h3>
              </div>
              <button id='recipe-view-btn' onClick={() => handleViewDetailsBtnClick(item.id, 'milkshakes')}>
                {item.showDetails ? '-' : '+'}
              </button>
            </div>
            {item.showDetails && (
              <div id='details-cont'>
                <p><h5>Difficulty Level: </h5>{item.difficulty}</p>
                <p><h5>Ingredients: </h5>{item.ingredients}</p>
                <p><h5>Process: </h5>{item.process}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </React.Fragment>
    )
}

export default Milkshakes