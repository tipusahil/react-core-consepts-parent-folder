


import Pakhis from "./pakhi"

// ---------------
export default function Animals({ animalsAll }) {
    return (
        <div>

            {/* {console.log(animalsAll.length)} */}
            <h1> animal ase hocce : {animalsAll.length} ta </h1>

{animalsAll.map(animal1 =>  <Pakhis animalOfPak={animal1}></Pakhis>  )}

        </div>
    )
}