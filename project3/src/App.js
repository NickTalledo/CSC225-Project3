import './App.css';
import Employee from './components/employee';
import Employees from './components/employees';
import Error from './components/error';
import Loading from './components/loading';
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [error, setError] = useState(false);

  const resetState = () => {
    setEmployeesData([]);
    setSelectedEmployee(null);
    setLoading(true);
    setError(false);
    getEmployeeData();
  }

  const getEmployeeData = (id=null) => {
    setLoading(true);
    let actualId = '';

    if(!!id && parseInt(id, 10) > 0){
      actualId = parseInt(id, 10);
    }



    axios
    .get(`https://api.matgargano.com/employees/${actualId}`)
    .then(response => {
      setEmployeeData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(true);
      setError(error.message || "No error given");
    }); 
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  useEffect(() => {
    if(!!selectedEmployee){
      getEmployeeData(selectedEmployee);
    }
  }, [selectedEmployee])

  const toggleLoading = () => setLoading(!loading);
  function toggleLoading(){
    setLoading(!loading);
  }
  
  return (
    <div className="App">
      {!!error && <Error resetState={resetState} message = {error} />}
      {!error && <div>
        {!!loading && <Loading />}
        {!loading && (
        <div>
          {!selectedEmployee &&(
          <Employees setSelectedEmployee= {setSelectedEmployee} data= {employeeData}/>
          )}
          {!!selectedEmployee && <Employee resetState={resetState} data={employeeData}/>}

          </div>
        )}
      </div>
  }
    </div>
  );
}