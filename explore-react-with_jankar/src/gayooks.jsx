const style2 = {
    margin:"20px",
    padding:"10px",
    border:"2px solid green"
}

export default function Gayooks( { singersOBJ } ){
return <div style={style2}>

    {console.log(singersOBJ)}
    <h1> singer name: {singersOBJ.name}</h1>
    <h1> singer age: {singersOBJ.age}</h1>
</div>
}