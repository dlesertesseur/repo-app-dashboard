import {
  Bold,
  Button,
  Card,
  Flex,
  Metric,
  Subtitle,
  Title,
} from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useWindowSize } from "../../hooks";
import { getStoresByRetailId } from "../../api/retailers.api";
import "leaflet/dist/leaflet.css";

const MapPanel = () => {
  const [stores, setStores] = useState(null);
  const [position, setPosition] = useState([
    -34.60347397265535, -58.381591857672035,
  ]);

  const mapRef = useRef(null)
  const { selectedRetailer, selectedStore } = useContext(AppStateContext);
  const size = useWindowSize();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onPress = () => {
    //navigate("shifts");
    navigate("default");
  };

  const onBack = () => {
    navigate(-1);
  };

  const getStores = async () => {
    if (selectedRetailer) {
      const param = { id: selectedRetailer };
      const ret = await getStoresByRetailId(param);
      setStores(ret);
    }
  };

  useEffect(() => {
    getStores();
  }, [selectedRetailer]);

  useEffect(() => {
    if (selectedStore) {

      const found = stores?.find(store => store.id === selectedStore);
      if(found){
        console.log("useEffect() selectedStore found",found)
        
        const position = [found.latitude, found.longitude];
        const zoom = 13;
        mapRef.current.flyTo(position, zoom);
      }
    }
  }, [selectedStore]);

  const loadStores = () => {
    let ret = null;
    if (stores) {
      ret = stores.map((store) => {
        return (
          <Marker key={store.id} position={[store.latitude, store.longitude]}>
            <Popup>
              <Title>{store.name}</Title>
              <Subtitle>{store.address}</Subtitle>
            </Popup>
          </Marker>
        );
      });
    }
    return ret;
  };

  return (
    <div className="px-10 pt-2 w-screen">
      <Flex dir="row" alignItems="center" justifyContent="between">
        <div>
          <Metric>{t("panels.map.title")}</Metric>
          {/* <Subtitle>{t("panels.map.description")}</Subtitle> */}
        </div>
        <div>
          <Button size="xs" onClick={onBack}>
            {t("button.back")}
          </Button>
        </div>
      </Flex>

      {size.height ? (
        <Flex
          className="mt-2 bg-slate-400 z-0"
          style={{ height: size.height - 200 }}
        >
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", zIndex: 1 }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {stores ? loadStores() : null}
          </MapContainer>
        </Flex>
      ) : null}
    </div>
  );
};

export default MapPanel;
