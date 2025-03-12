const style3 = {
    margin:"20px",
    padding:"10px",
    border:"3px solid purple",
}
// -----------

export default function Roommate( { roommate1_OBJ } ) {
return (
    <div style={style3}>
        <h1>name: {roommate1_OBJ.name} </h1>
        <h1>age: {roommate1_OBJ.age} </h1>
        <h1>department: {roommate1_OBJ.department} </h1>
    </div>
)
}