
const style1ByjsObject = {
    marginTop: "50px",
    border: "2px solid red",
    margin: "10px",
    padding: "10px",
    fontSize: "30px",
    listStyle: "x",

}
// ------------------ main syntex onno file e componeent like kaj korar----------
// export default function Conditional({ task, isDone }) {
//     return (
//         <h1 style={style1ByjsObject} > task: {task} </h1>
//     )
// }


/*  // ------------------------ Conditional rendering option 1 -----------------
export default function Conditional({ task, isDone }) {
    if (isDone === true) {
        return (
            <li style={style1ByjsObject}>  Finished: {task} </li>
        )

    } else {
    return <li style={style1ByjsObject}>  shika hoini,so shikte thako :: {task} </li>
    }

} */

/* // ------------------------ Conditional rendering option 2 -------(isDone)--------

export default function Conditional({ task, isDone }) {
    //(isDone === true) eta (isDone) evabeew lika jai, karon isDone true holeei code block ee dukbe, nahoi dukbena so (isDone) eta liklew same (isDone === true)  eei conditon er kajtai korbe.
    if (isDone) {
        return (
            <li style={style1ByjsObject}>  Finished: {task} </li>
        )
    } 
    return <li style={style1ByjsObject}>  shika hoini,so shikte thako :: {task} </li>

} */


/*// ------------------------ Conditional rendering option 3 ------direct return else na lika-----------

export default function Conditional({ task, isDone }) {
    if (isDone) {
        return (
            <li style={style1ByjsObject}>  Finished: {task} </li>
        )
    } 

    return <li style={style1ByjsObject}>  shika hoini,so shikte thako :: {task} </li>
    // else na lika direect return kora jabeee, if er condtion mitta hole oi block e dkubena ,& eta return hobe.
} */


/* // ------------------------ Conditional rendering option 4-----if else na lika-(ternery) diye kaj-----------

export default function Conditional({ task, isDone }) {

    return (
        <div style={style1ByjsObject}>

  <li > {isDone ? "finish bro" : "shika hoini,so shikte thakooo :"} : {task} </li>
  {/* evabe if else na lika ternery op. diye aro sohojee kaj condtion calanu jai }
        </div>
  
    )
} */


// // ------------------------ Conditional rendering option (5.1)---aro shorthand (&&)  multi Conditional op, diye-----------

// export default function Conditional({ task, isDone }) {

//     return (
//         <div style={style1ByjsObject}>


//   <li > {isDone && "finish bro"} : {task} </li>

//   {/* ei (&&) er ta tokon kaj korbe jkn (isDone) tar value true hobe. ortat (&&) etar  bam pasheer value jodi true hoi thle (&&) er dan pasher value ta dekabee , nahoi dekabena. ar false er jonno (||) or operation use hoi setaw shudo false er jonno kaj kore. ar (&& ) ta shudo true eer jonno kaj kore. */}
//   {/* <li > {isDone || "finish bro"} : {task} </li> */}
//         </div>

//     )
// }



// // ------------------------ Conditional rendering option (5.2)---aro shorthand (||) ei or (||)ta tokoni kaj korbe jodi (isDone) false hoi -----------

// export default function Conditional({ task, isDone }) {

//     return (
//         <div style={style1ByjsObject}>

//     <li > {task} : {isDone || " :: shika hoini,so shikte thakooo "}   </li>
//   {/* ei (||) ta tokoni kaj kore jokon naki false hoi,ortat (||) etar bam pasheer value jodi false hoi thle (||) er dan pasher value ta dekabee , nahoi dekabena.. ortat (isDone) jodi false hoi thlee eeeta kaj korbeeee, ar (&&) ta kaj kore true hole. */}

//         </div>

//     )
// }


// ------------------------ Conditional rendering option 6.---(condtion er upor base kore variablee er value set kora taw (jsx)) -----------

export default function Conditional({ task, isDone }) {

    let listName;

    if (isDone) {
        listName = <li style={style1ByjsObject}>  Finished: {task} </li>
    }
    else {
        listName = <li style={style1ByjsObject}>"shika hoini,so shikte thakooo :" : {task} </li>

    }

    return listName;
    
}


// export default Conditional; arrow function hole evabe nise theke export hbe.