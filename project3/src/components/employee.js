const Employee = (props) => {
    return (
    <div style={{padding: '20px 30px', backgroundColor: '#000', color:'#FFF'}}>
        <div class="card">
        <div class="card-body">
          <h1>
            {props.data.name} in {props.data.department}
          </h1>
          <p>Id: {props.data.id}</p>
          <p>Start Date: {props.data.startDate}</p>
          <p>Role: {props.data.role}</p>
          <p>Photo: {props.data.photo}</p>
          <button onClick={props.resetState}>Back to List</button>
        </div>
      </div>
    </div>
  );
};

export default Employee;