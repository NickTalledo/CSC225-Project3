const Employees = (props) => {

    const updateEmployee = (employeeId) =>{
        props.setSelectedEmployee(employeeId);
    }

    return(

        <div style={{backgroundColor: '#ccc', padding: '20px 10px'  }}>
        
        {props.data.map((employee) => {
            return ( 
            <p
            key={employeeId} 
            onClick={() => {
                updateEmployee(employee.id);
                 }} 
                 style={{cursor:'pointer' }}
                  role = "button"
                  >
                {employee.name} in {employee.department} -- {employee.id}
                </p>
            );
        })}
        </div>
    );
};

export default Employees;