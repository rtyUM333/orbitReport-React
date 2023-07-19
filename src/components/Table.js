import './styling.css';

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((date, id) => (
            <tr key = {id}>
              <td>{date.name}</td> 
              <td>{date.typeOfSatellite}</td> 
              <td>{date.launchDate}</td> 
              <td>{date.operational? "Active" : "Inactive"}</td> 
              </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table;