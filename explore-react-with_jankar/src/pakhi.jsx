
import "./animStyle.css";

export default function Pakhis( {animalOfPak} ) {

    const {name , price}= animalOfPak;
return (
    <div className="anim_style">
        <h1>animal name: {name}  & price: {price} </h1>

    </div>
)
}