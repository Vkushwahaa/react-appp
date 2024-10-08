// import femaleProfile from "./images/femaleProfile.jpg";
// import maleProfile from "./images/maleProfile.jpg";
// const GroupedTeamMembers = ({
//   employees,
//   selectedTeam,
//   handleTeamSelectionChange,
// }) => {
//   const filteredEmployees = employees.filter(
//     (employees) => employees.teamName === selectedTeam
//   );

//   return (
//     <main className="container">
//       <div className="row justify-content-center mt-3 mb-3">
//         <div className="col-6">
//           <select
//             className="form-select form-select-lg"
//             value={selectedTeam}
//             onChange={handleTeamSelectionChange}
//           >
//             <option value="TeamA">TeamA</option>
//             <option value="TeamB">TeamB</option>
//             <option value="TeamC">TeamC</option>
//             <option value="TeamD">TeamD</option>
//           </select>
//         </div>
//       </div>
//       <div className="row justify-content-center mt-3 mb-3">
//         <div className="col-8">
//           <div className="card-collection">
//             {filteredEmployees.map((employee) => (
//               <div
//                 key={employee.id}
//                 id={employee.id}
//                 className="card m-2"
//                 style={{ cursor: "pointer" }}
//               >
//                 {employee.gender === "male" ? (
//                   <img src={maleProfile} className="card-img-top" />
//                 ) : (
//                   <img src={femaleProfile} className="card-img-top" />
//                 )}

//                 <div className="card-body">
//                   <h5 className="card-title">fullName: {employee.fullName}</h5>
//                   <p className="card-text">
//                     <b>Designation:</b>
//                     {employee.designation}
//                     <br />
//                     <b>teamName:</b>
//                     {employee.teamName}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };
import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
  function groupTeamMembers() {
   const teams = ["TeamA", "TeamB", "TeamC", "TeamD"];
   return teams.map((team)=> {
    const members = employees.filter((employee)=> employee.teamName===team)
   
      return{
            team,
            members,
            Collapsed: selectedTeam !== team,
          };
         
  });
  }

  function handleTeamClick(event) {
    let transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, Collapsed: !groupedData.Collapsed }
        : groupedData
    );
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name : {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.Collapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation:{member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};
export default GroupedTeamMembers;
