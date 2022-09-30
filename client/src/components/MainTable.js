const MainTable = props => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <table className="table table-hover table-bordered">
            <thead>
            <tr>
              <th>№</th>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map(person => (
              <tr key={person.number}>
                <td>{person.number}</td>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.address}</td>
                <td>{person.phone}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainTable;
