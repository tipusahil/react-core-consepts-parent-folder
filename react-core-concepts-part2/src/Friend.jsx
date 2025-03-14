export default function  Friend({ friend_1 } ){
// ----6...(friend_1) ei peramitar ta destucturing kora hoise, jeheto seta eekta obj tai seta theeke destucturing kore name & email niye niew hoise niseer line er maddome
    const { name , email } = friend_1;

    // console.log(friend_1)

    return (
        <div className="fri_style_2">
            <h2> name: {name} </h2>
            <h2> email: {email} </h2>
        </div>
    )
}