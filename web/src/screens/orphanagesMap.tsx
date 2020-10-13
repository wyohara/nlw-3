import React from 'react';
import MarkMap from "../images/mark_map.svg";
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';


import '../styles/pages/orphanagesMap.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MarkMap} alt="Happy Logo"/>

          <h2>Escolha um Orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Seropédica</strong>
          <span> Rio de Janeiro</span>
        </footer>
      </aside>

      <Map
      center={[-22.7466566,-43.6898476]}
      zoom={15}
      style={{width:'100%', height:'100%'}}>
        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png '/>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFFFFF"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
