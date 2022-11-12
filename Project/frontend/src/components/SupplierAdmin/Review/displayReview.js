// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ButtonHTMLAttributes } from "react";
// import { jsPDF } from "jspdf";
// import { Button } from "react-bootstrap";

// export default function DisplayReview() {
//   const createPDF = async () => {
//     const date = new Date().toISOString().split("T")[0];
//     const pdf = new jsPDF("landscape", "px", "a1", false);
//     const data = await document.querySelector("#reviewPDF");
//     pdf.html(data).then(() => {
//       pdf.save("Review" + date + ".pdf");
//     });
//   };

//   var color = "black";
//   const [reviewList, setReviewList] = useState([]);
//   const [search, setSearch] = useState("");

//   function DeleteReview(id) {
//     axios.delete("http://localhost:8070/review/delete/" + id).then(() => {
//       window.location.reload(false);
//       alert("Review Record Deleted Successfully");
//     });
//   }

//   useEffect(() => {
//     axios.get("http://localhost:8070/review/").then((allReview) => {
//       setReviewList(allReview.data);
//     });
//   }, []);

//   return (
//     <div id="reviewPDF">
//       <div
//         className="container"
//         style={{
//           width: "65%",
//           float: "right",
//           marginTop: "50px",
//           marginRight: "300px",
//           position: "sticky",
//         }}
//       >
//         <h1 className="display-6" style={{ marginBottom: "20px" }}>
//           Review Details
//         </h1>

//         <table className="table" style={{ width: "100%" }}>
//           <thead>
//             <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
//               <th scope="col">Review ID</th>

//               <th scope="col">Supplier ID</th>
//               <th scope="col">Ratings</th>
//               <th scope="col">Review</th>
//               <th scope="col">Date</th>
//               <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reviewList
//               ? reviewList
//                   .filter((val) => {
//                     if (search === "") return val;
//                     else if (
//                       val.review.toLowerCase().includes(search.toLowerCase())
//                     ) {
//                       return val;
//                     }
//                   })

//                   .map((val) => (
//                     <tr>
//                       <td scope="row">{val.reviewID}</td>
//                       <td>{val.supplierID}</td>
//                       <td>{val.ratings}</td>
//                       <td>{val.review}</td>
//                       <td>{val.date}</td>
//                     </tr>
//                   ))
//               : reviewList}
//           </tbody>
//         </table>
//       </div>
//       <button onclick={createPDF}>Export</button>
//     </div>
//   );
// }
