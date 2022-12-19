const Error = (props) => {
    return (
    <div>
     <p>Error: {props.message}</p>
     <button onClick={props.resetState}>Back to List</button>  

    </div>
    );
}

export default Error;