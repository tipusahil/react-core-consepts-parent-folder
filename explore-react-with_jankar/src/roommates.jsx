const style3 = {
    margin:"20px",
    padding:"10px",
    border:"3px solid purple",
}
// -----------

export default function Roommate( { roommate1Obj } ) {
return (
    <div style={style3}>
        <h1>name: {roommate1Obj.name} </h1>
        <h1>age: {roommate1Obj.age} </h1>
        <h1>department: {roommate1Obj.department} </h1>
    </div>
)
}