import GoogleMapReact from 'google-map-react';

type compo ={
    text:string
}
const AnyReactComponent = ({ text }:compo) => <div>{text}</div>;
export const Map =()=>{
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

    return(
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    text="My Marker"
                />
            </GoogleMapReact>
    </div>
    )
}

// import { GoogleMap,Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";

// // type compo ={
// //     text:string
// // }
// // const AnyReactComponent = ({ text }:compo) => <div>{text}</div>;
// export const Map =()=>{
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyBevcNwrNmYW0oNlNHD29LvfngxxvRsUeQ",
//       });

//     const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

//     // const defaultProps = {
//     //     center: {
//     //       lat: 10.99835602,
//     //       lng: 77.01502627
//     //     },
//     //     zoom: 11
//     //   };

//     return(
//         <div style={{ height: '50vh', width: '100%' }}>
//             {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap
//           mapContainerClassName="map-container"
//           center={center}
//           zoom={10}
//         >
//         <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
//         </GoogleMap>
//       )}
//     </div>
//     )
// }