// import React from "react"
// import { Route, Routes, Link } from "react-router-dom"
// import RecipePage from "./RecipePage"

// export default function Cards({data}) {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/books">Books</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/recipes" element={<RecipePage />} />
//       </Routes>
//     </>
//   )
// }





//Working
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
// import RecipeLanding from "./RecipeLanding";
const Cards = ({data}) => {
    return (
        <div className="recipeCards">
            <p>{data.name}</p>
        </div>
    )
}
export default Cards