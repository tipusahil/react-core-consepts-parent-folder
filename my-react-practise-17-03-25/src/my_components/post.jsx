const styleByObj = {
    margin: "10px",
    padding: "10px",
    borderRadius: "20px",
    border: "2px solid green",
};


export default function Post1({ postOne }) {

    const { id, body } = postOne;
    console.log(postOne.body);

    // const {id,title} = postOne;
    return (
        <div style={styleByObj}>

            <h3>one post: {id}  </h3>
            <h3>one post: {body} </h3>
  

        </div>

    );
}

