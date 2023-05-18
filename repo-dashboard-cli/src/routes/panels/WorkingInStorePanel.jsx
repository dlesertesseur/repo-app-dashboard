import {
  Badge,
  Bold,
  Button,
  Flex,
  List,
  ListItem,
  Metric,
  SelectBox,
  SelectBoxItem,
  Subtitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useWindowSize } from "../../hooks";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getWorkingInStore } from "../../api/workingInStore.api";
import { BadgeCheckIcon, StatusOnlineIcon } from "@heroicons/react/outline";
import { config } from "../../config/Config";

const WorkingInStorePanel = () => {
  const [stores, setStores] = useState(null);
  const [position, setPosition] = useState([
    -34.60347397265535, -58.381591857672035,
  ]);

  const { selectedRetailer, selectedStore, setSelectedStore } =
    useContext(AppStateContext);
  const { t } = useTranslation();
  const [selectedRow, setSelectedRow] = useState(null);
  const mapRef = useRef(null);
  const size = useWindowSize();
  const navigate = useNavigate();

  const createIcon = () => {
    const icon = new L.Icon({
      iconUrl: "/repo-app/dashboard/retailers/" + selectedRetailer + ".png",
      // iconAnchor: [25,25],
      // popupAnchor: [25,25],
      iconSize: [32, 32],
    });

    return icon;
  };
  const onPress = () => {
    //navigate("shifts");
    navigate("default");
  };

  const onBack = () => {
    navigate(-1);
  };

  const getData = async () => {
    if (selectedRetailer) {
      const param = { id: selectedRetailer };
      const ret = await getWorkingInStore(param);
      setStores(ret);
    }
  };

  const getPhoto = (photo) => {
    const ret = config.URL_BASE_PHOTO + photo;
    //const ret = "../photos/user_default.png";
    return ret;
  };

  useEffect(() => {
    getData();
  }, [selectedRetailer]);

  useEffect(() => {
    if (selectedStore) {
      const found = stores?.find((store) => store._id === selectedStore);
      if (found) {
        const position = [found.latitude, found.longitude];
        const zoom = 13;
        mapRef.current.flyTo(position, zoom);
      }
    }
  }, [selectedStore]);

  const loadStores = () => {
    let ret = null;
    if (stores) {
      ret = stores?.map((store) => {
        return (
          <Marker
            icon={createIcon()}
            key={store.name}
            position={[store.latitude, store.longitude]}
          >
            <Popup>
              <Title>{store.name}</Title>
              <Subtitle>{store.address}</Subtitle>

              <List>
                {store?.operators.map((item) => (
                  <ListItem key={item.id}>
                    {/* <span>{item.trabajo}</span> */}

                    <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white">
                      <img src={getPhoto(item.foto)} className="rounded-full" />
                    </span>
                    <div className="flex flex-row justify-start items-center">{item.asignadoA}</div>
                    <span>
                      <Badge
                        className="h-6 ml-2"
                        color="emerald"
                        icon={StatusOnlineIcon}
                      >
                        {item.adicional}
                      </Badge>
                    </span>
                  </ListItem>
                ))}
              </List>
            </Popup>
          </Marker>
        );
      });
    }
    return ret;
  };

  const createStores = () => {
    const ret = stores.map((store) => {
      return (
        <SelectBoxItem
          key={store._id}
          value={store._id}
          text={store.name}
          icon={BadgeCheckIcon}
        />
      );
    });
    return ret;
  };

  const showStoreSelector = () => {
    const component = (
      <SelectBox
        placeholder={t("placeholder.stores")}
        className="w-80"
        onValueChange={(value) => {
          setSelectedStore(value);
        }}
        value={selectedStore ? selectedStore : "all"}
      >
        {stores ? createStores() : null}
      </SelectBox>
    );
    return component;
  };

  return (
    <div className="px-10 pt-2 w-screen">
      <Flex dir="row" alignItems="center" justifyContent="between">
        {selectedRetailer && stores ? showStoreSelector() : null}

        <Button size="xs" className="" onClick={onBack}>
          {t("button.back")}
        </Button>
      </Flex>

      {size.height ? (
        <Flex className="mt-2 z-0" style={{ height: size.height - 200 }}>
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

export default WorkingInStorePanel;
