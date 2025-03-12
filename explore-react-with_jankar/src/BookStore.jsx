const styleBro = {
    margin:"20px",
    padding:"10px",
    border:"3px solid #58ece4",
}
// -----------


export default function BookStore( {book} ){
    return (
        <div style={styleBro}>
            {console.log(book)}
            <h1>book name: {book.name} </h1>
            <h1>book name: {book.price} </h1>
            <h1>book name: {book.writer} </h1>
        </div>
    )
}