import React, { useState } from 'react';
import './RecipeList.css';
import veg from '../assets/veg.png';
import nonveg from '../assets/no-veg.png';
import { BiryanisData, CurriesData, MilkShakesData, RiceItemsData, SnacksData, SweetsData, HealthyData } from './Data';
import Biryanies from './ItemSections/Biryanies';
import RiceRecipies from './ItemSections/RiceRecipies';
import Curries from './ItemSections/Curries';
import Snacks from './ItemSections/Snacks';
import Milkshakes from './ItemSections/Milkshakes';
import Sweets from './ItemSections/Sweets';
import Healthy from './ItemSections/Healthy';



function RecipeList() {
    const [biryanis, setBiryanis] = useState(BiryanisData);
    const [riceItems, setRiceItems] = useState(RiceItemsData);
    const [curries, setCurries] = useState(CurriesData);
    const [snacks, setSnacks] = useState(SnacksData);
    const [milkShakes, setMilkShakes] = useState(MilkShakesData);
    const [sweets, setSweets] = useState(SweetsData);
    const [healthy, setHealthy] = useState(HealthyData);

    
    const handleViewDetailsBtnClick = (recipeId, type) => {

        if (type === 'biryani') {
            setBiryanis((prevBiryanis) =>
                prevBiryanis.map((item) =>
                    item.id === recipeId ? { ...item, showDetails: !item.showDetails } : item
                )
            );
        }
        if (type === 'riceitems') {
            setRiceItems((prevRiceItems) =>
                prevRiceItems.map((item) =>
                    item.id === recipeId ? { ...item, showDetails: !item.showDetails } : item
                )
            );
        }
        if (type === 'curries') {
            setCurries((prevRiceItems) =>
                prevRiceItems.map((item) =>
                    item.id === recipeId ? { ...item, showDetails: !item.showDetails } : item
                )
            );
        }
        if (type === 'snacks') {
            setSnacks((prevRiceItems) =>
                prevRiceItems.map((item) =>
                    item.id === recipeId ? { ...item, showDetails: !item.showDetails } : item
                )
            );
        }
        if (type === 'sweets') {
            setSweets((prevRiceItems) =>
                prevRiceItems.map((item) =>
                    item.id === recipeId ? { ...item, showDetails: !item.showDetails } : item
                )
            );
        }
        if (type === 'milkshakes') {
            setMilkShakes((prevRiceItems) =>
                prevRiceItems.map((item) =>
                    item.id === recipeId ? { ...item, showDetails: !item.showDetails } : item
                )
            );
        }
        if (type === 'healthy') {
            setHealthy((prevRiceItems) =>
                prevRiceItems.map((item) =>
                    item.id === recipeId ? { ...item, showDetails: !item.showDetails } : item
                )
            );
        }    
    };

    return (
        <div>
            <div id='card'>
                <Biryanies
                    biryanis={biryanis}
                    veg={veg}
                    nonveg={nonveg}
                    handleViewDetailsBtnClick={handleViewDetailsBtnClick}
                />

                <RiceRecipies
                    riceItems={riceItems}
                    veg={veg}
                    nonveg={nonveg}
                    handleViewDetailsBtnClick={handleViewDetailsBtnClick}
                />
                <Curries
                    curries={curries}
                    veg={veg}
                    nonveg={nonveg}
                    handleViewDetailsBtnClick={handleViewDetailsBtnClick}
                />
                <Snacks
                    snacks={snacks}
                    veg={veg}
                    nonveg={nonveg}
                    handleViewDetailsBtnClick={handleViewDetailsBtnClick}
                />
                <Milkshakes
                    milkShakes={milkShakes}
                    veg={veg}
                    nonveg={nonveg}
                    handleViewDetailsBtnClick={handleViewDetailsBtnClick}
                />
                 <Sweets
                    sweets={sweets}
                    veg={veg}
                    nonveg={nonveg}
                    handleViewDetailsBtnClick={handleViewDetailsBtnClick}
                />
                <Healthy
                    healthy={healthy}
                    veg={veg}
                    nonveg={nonveg}
                    handleViewDetailsBtnClick={handleViewDetailsBtnClick}
                />           

            </div>
        </div>
    );
}

export default RecipeList;
