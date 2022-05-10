function Tours(props) {
    return (
           <div>
             <img src={props.image} alt={props.alt} />
             <p>{props.title} </p>
             
               <br/>
           </div>
    );
}
export default Tours;