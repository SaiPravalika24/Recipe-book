import React from 'react';

function Biryanies(props) {
    const { biryanis, veg, nonveg, handleViewDetailsBtnClick } = props
    //console.log("biryanis", biryanis);
    return (
        <React.Fragment>
            <div id='heading-card'>
                Biryani's
            </div>
            <ul>
                {biryanis.map((item) => (
                    <li id='biryani-list-item' className='list-item' key={item.id}>
                        <div id='recipe-name-cont'>
                            <div id='recipe-name'>
                                {item.type === "veg" ? <img src={veg} alt='veg-image' /> : <img src={nonveg} alt='non-veg-image' />}
                                <h3>{item.name}</h3>
                            </div>
                            <button id='recipe-view-btn' onClick={() => handleViewDetailsBtnClick(item.id, 'biryani')}>
                                {item.showDetails ? '-' : '+'}
                            </button>
                        </div>
                        {item.showDetails && (
                            <div id='details-cont'>
                                <div><h5>Difficulty Level: </h5>{item.difficulty}</div>
                                <div><h5>Ingredients: </h5>{item.ingredients}</div>
                                <div><h5>Process: </h5>{item.process}</div>
                                <div><h5>Tips: </h5></div>
                                
                            </div>
                        )}
                    </li>
                ))}
            </ul>

        </React.Fragment>
    );
}

export default Biryanies;
