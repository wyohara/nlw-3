import React from 'react';
import imgMapMarker from '../images/marker.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanage-map.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={imgMapMarker} alt="Logo Happy"/>
                    <h2>Escolha um Orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Seropédica</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map 
            center={[-22.7466566,-43.6898476]}
            zoom={14}
            style={{width:'100%', height:'100%'}}>
                {/*<TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png '/>*/}
                <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API}`}/>
            </Map>

            <Link to="" className="create-orphanage"><FiPlus size={32} color="#FFF"/></Link>
        </div>
    )
}

export default OrphanagesMap;