// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// export const useInfiniteFetch = (url, page, load, oldData, searching) => {
//   //defines the parameters to be extracted
//   const [entries, setEntries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [done, setDone] = useState(false);

//   //useEffect that is dependent on page and searching

//   useEffect(() => {
//     //firstly checks if searching...if not it runs the next piece of code
//     if (!searching) {
//       setLoading(true);

//       //fetches the data determined by the url endpoint and the page number
//       ax.get(`${url}/${page}`, {
//         headers: {
//           Authorization: `Bearer ${Cookies.get("accessToken")}`,
//         },
//       })
//         .then((res) => {
//           if (res.data.status === 200) {
//             const newData = res.data.reqData;
//             //if the request is successful the Entries is updated with the new data and oldData
//             setEntries((prevData) => {
//               const theData = oldData ? oldData : prevData;
//               return [...theData, ...newData];
//             });

//             //if the pages have been exceeded then it sets done to true
//             setDone(res.data.totalPages === page);
//           } else {
//             load("Couldn't fetch data, try again later", true);
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           load("Please check your connection", true);
//         })
//         .finally(() => setLoading(false));
//     }
//   }, [page, searching]);

//   return { entries, loading, done };
// };
