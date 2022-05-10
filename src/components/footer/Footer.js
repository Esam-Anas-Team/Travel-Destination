function Footer(props) {
    let urlFac ="https://upload.wikimedia.org/wikipedia/commons/8/83/Facebook_Light_Logo.jpg";
    let urlIns="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png";
    let altvalues= "social media logo";
    const mystyle = {
      
        width: "50px",
        height: "50px"
       
      };

    return (
        <>
           <img style={mystyle} src={urlFac} alt={altvalues} />
           <img  style={mystyle} src={urlIns} alt={altvalues} />
           <p>
             This Website belongs To Esam & Anas
           </p>
        </>
    )
}

export default Footer;