import { useState } from 'react';
import { useEffect } from 'react';
import './bottles.css';
import Bottle from '../Bottle/Bottle';
import { SetNewItemToCartToLS } from '../../utilities_by_jank/localStorage2';

const Bottles = () => {

    const [bottles_st, setbottles_st] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setbottles_st(data))
            .catch(err => console.log(`error ta holo ${err}`));
    }, []);

    // console.log(setbottles_st)


// ---------------------bottle parchase event handler start here--------------------------

const [card, setCard] = useState([]);

const handlerParchaseBtAddToCard = lastAdded_bottle =>{
    console.log(lastAdded_bottle.name);
    console.log(lastAdded_bottle);

    const newCard = [...card ,lastAdded_bottle ];
    setCard(newCard);
    // console.log(card);
    SetNewItemToCartToLS(lastAdded_bottle.id);
}

// ---------------------bottle parchase event handler end here-----------------------------


    return (
        <div>
            <h2>bottle ase holo: {bottles_st.length} </h2>
            <h3>bottle added to card: {card.length}</h3>
            <h3>last added bottle name: {(card.length-1).name} </h3>



            <div className="bottles_container">
                {
                    bottles_st.map(bottle => <Bottle 
                        // {...bottle} 
                        bottle={bottle}
                        key={bottle.id}
                        handlerParchaseBtAddToCard={handlerParchaseBtAddToCard}
                         ></Bottle>)
                    // key={bottle.id} bottle={bottle}
                }
            </div>

        </div>
    );
};

export default Bottles;