import React from "react";
import "./Comp1.css";


const Comp1 = () => {
    // st stephen green
    const lat = 53.338741;
    const lon = -6.261563;
    const zoom = 16; // 15 is ideal


    return (
        <div className="Comp1">
            <iframe
                src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map"
            ></iframe>
        </div>
    );
};


export default Comp1;




// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyC85iTCGYU-pIeS9fp1agTcHYWjS5XgaxY&libraries'
// })(MapContainer);

