function Tour(props) {
    return (
        <div >
            <h3>{props.dataKey.name}</h3>
            <img src={props.dataKey.image} alt="city image here" ></img>
        </div>
    )
}
export default Tour