import './Tour.css'
export default function tour(props){
    return(
        <div >
        <h3>{props.dataWithKey.name}</h3>
        <img src={props.dataWithKey.image} alt ="seen" ></img>
    </div>
    )
}