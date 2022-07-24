import React from "react";
import { useParams } from "react-router-dom";
import { Actions } from "./Actions";
import { Risks } from "./Risks";
import { Issues } from "./Issues";

const projects = JSON.parse(localStorage.getItem("projects"));

// const Risks = () => {
//   return (
//     <div>
//       {/* Risks Table  */}
//       <div>
//         <h1 className="title">Risks</h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>
//                 <abbr>Name</abbr>
//               </th>
//               <th>Description</th>
//               <th>Solution</th>

//               <th>
//                 <abbr>Potential Severity</abbr>
//               </th>
//               <th>
//                 <abbr>Poteintial Cost</abbr>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th>1</th>
//               <td>
//                 Leicester City
//                 <strong>(C)</strong>
//               </td>
//               <td>38</td>
//               <td>23</td>
//               <td>23</td>
//             </tr>
//             <tr>
//               <th>2</th>
//               <td>Arsenal</td>
//               <td>38</td>
//               <td>23</td>
//               <td>20</td>
//             </tr>
//             <tr>
//               <th>3</th>
//               <td>Tottenham Hotspur</td>
//               <td>38</td>
//               <td>19</td>
//               <td>23</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       {/* Add Risk */}
//       <div className="column is-half">
//         <h1 className="title">Add Action</h1>
//         <form>
//           {/* Risk name  */}
//           <div className="field">
//             <label className="label">Name</label>
//             <div className="control">
//               {/* <input
//                     className="input is-success"
//                     type="text"
//                     value={project_name}
//                     onChange={(ev) => setProject_name(ev.target.value)}
//                     placeholder="Text input"
//                   /> */}
//             </div>
//           </div>
//           {/* Risk Description  */}
//           <div className="field">
//             <label className="label"> Description</label>
//             <div className="control">
//               {/* <textarea
//                     className="textarea"
//                     value={project_desc}
//                     onChange={(ev) => setProject_desc(ev.target.value)}
//                     placeholder="Textarea"
//                   ></textarea> */}
//             </div>
//           </div>
//           {/* Risk Solution  */}
//           <div className="field">
//             <label className="label"> Solution</label>
//             <div className="control">
//               {/* <textarea
//                     className="textarea"
//                     value={project_desc}
//                     onChange={(ev) => setProject_desc(ev.target.value)}
//                     placeholder="Textarea"
//                   ></textarea> */}
//             </div>
//           </div>

//           {/* Risk Severity  */}
//           <div className="field">
//             <label className="label"> Potential Severity</label>
//             <div className="control">
//               <div className="select">
//                 <select>
//                   <option>High</option>
//                   <option>Moderate</option>
//                   <option>Low</option>
//                 </select>
//               </div>
//             </div>

//             {/* Risk Cost  */}

//             <div>
//               <label className="label">Potential Cost</label>
//               <p className="control">
//                 <span className="select">
//                   <select>
//                     <option>$</option>
//                     <option>£</option>
//                     <option>€</option>
//                   </select>
//                 </span>
//               </p>
//               <p className="control">
//                 {/* <input
//                       className="input"
//                       type="text"
//                       value={project_budget}
//                       onChange={(ev) => setProject_budget(ev.target.value)}
//                       placeholder="Amount of money (0.00)"
//                     /> */}
//               </p>
//             </div>
//           </div>
//           {/* Submit Action  */}
//           <div className="buttons">
//             <button className="button is-primary" type="submit">
//               Add New Risk
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// const Issues = () => {
//   return (
//     <div>
//       {/* Issues Table  */}
//       <div>
//         <h1 className="title">Issues</h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>
//                 <abbr>Name</abbr>
//               </th>
//               <th>Description</th>
//               <th>Solution</th>
//               <th>
//                 <abbr>Severity</abbr>
//               </th>
//               <th>
//                 <abbr>Cost</abbr>
//               </th>
//               <th>
//                 <abbr>Reported Date</abbr>
//               </th>
//               <th>
//                 <abbr>Solution Date</abbr>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th>1</th>
//               <td>
//                 Leicester City
//                 <strong>(C)</strong>
//               </td>
//               <td>38</td>
//               <td>23</td>
//               <td>12</td>
//               <td>12</td>
//               <td>3</td>
//             </tr>
//             <tr>
//               <th>2</th>
//               <td>Arsenal</td>
//               <td>38</td>
//               <td>20</td>
//               <td>11</td>
//               <td>7</td>
//               <td>7</td>
//             </tr>
//             <tr>
//               <th>3</th>
//               <td>Tottenham Hotspur</td>
//               <td>38</td>
//               <td>19</td>
//               <td>13</td>
//               <td>6</td>
//               <td>6</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       {/* Add Issue */}
//       <div className="column is-half">
//         <h1 className="title">Add Issue</h1>
//         <form>
//           {/* Issue name  */}
//           <div className="field">
//             <label className="label">Name</label>
//             <div className="control">
//               {/* <input
//               className="input is-success"
//               type="text"
//               value={project_name}
//               onChange={(ev) => setProject_name(ev.target.value)}
//               placeholder="Text input"
//             /> */}
//             </div>
//           </div>
//           {/* Issue Description  */}
//           <div className="field">
//             <label className="label"> Description</label>
//             <div className="control">
//               {/* <textarea
//               className="textarea"
//               value={project_desc}
//               onChange={(ev) => setProject_desc(ev.target.value)}
//               placeholder="Textarea"
//             ></textarea> */}
//             </div>
//           </div>
//           {/* Issue Solution  */}
//           <div className="field">
//             <label className="label"> Solution</label>
//             <div className="control">
//               {/* <textarea
//               className="textarea"
//               value={project_desc}
//               onChange={(ev) => setProject_desc(ev.target.value)}
//               placeholder="Textarea"
//             ></textarea> */}
//             </div>
//           </div>
//           {/* Issue Severity  */}
//           <div className="field">
//             <label className="label">Severity</label>
//             <div className="control">
//               <div className="select">
//                 <select>
//                   <option>High</option>
//                   <option>Moderate</option>
//                   <option>Low</option>
//                 </select>
//               </div>
//             </div>

//             {/* Issue Cost  */}

//             <div>
//               <label className="label">Cost</label>
//               <p className="control">
//                 <span className="select">
//                   <select>
//                     <option>$</option>
//                     <option>£</option>
//                     <option>€</option>
//                   </select>
//                 </span>
//               </p>
//               <p className="control">
//                 {/* <input
//                 className="input"
//                 type="text"
//                 value={project_budget}
//                 onChange={(ev) => setProject_budget(ev.target.value)}
//                 placeholder="Amount of money (0.00)"
//               /> */}
//               </p>
//             </div>
//           </div>
//           {/* Issue Reported Date */}

//           <div className="field">
//             <label className="label">Reported Date</label>
//             <div className="control">
//               {/* <input
//               className="input is-success"
//               type="date"
//               value={project_start_date}
//               onChange={(ev) => setProject_start_date(ev.target.value)}
//             /> */}
//             </div>
//           </div>
//           {/* Issue End Date  */}

//           <div className="field">
//             <label className="label">Resolution Date</label>
//             <div className="control">
//               {/* <input
//               className="input is-success"
//               type="date"
//               value={project_end_date}
//               onChange={(ev) => setProject_end_date(ev.target.value)}
//             /> */}
//             </div>
//           </div>

//           {/* Submit Action  */}
//           <div className="buttons">
//             <button className="button is-primary" type="submit">
//               Add New Issue
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

export const EachProjectDetialsList = () => {
  const params = useParams();
  //   console.log(params);
  const job = projects[params.projectname];

  return (
    <div className="columns">
      <div className="column is-centered">
        <h1 className="title">{job.project_name} Project</h1>
        <Actions name={job.project_name} />
        <Risks name={job.project_name} />
        <Issues name={job.project_name} />
      </div>
    </div>
  );
};
