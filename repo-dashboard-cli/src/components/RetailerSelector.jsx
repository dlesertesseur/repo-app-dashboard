import React, { useContext, useEffect, useState } from "react";
import { Flex, SelectBox, SelectBoxItem } from "@tremor/react";
import { BadgeCheckIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";
import { getAllRetailers, getStoresByRetailId } from "../api/retailers.api";
import { AppStateContext } from "../context/AppStateContext";

const RetailerSelector = () => {
  const { t } = useTranslation();
  const [retailers, setRetailers] = useState([]);
  const [stores, setStores] = useState([]);

  const {
    setSelectedRetailer,
    selectedRetailer,
    setSelectedStore,
    selectedStore,
  } = useContext(AppStateContext);

  const getRetailers = async () => {
    const ret = await getAllRetailers();
    setRetailers(ret);
  };

  const getStores = async () => {
    const param = { id: selectedRetailer };
    const ret = await getStoresByRetailId(param);
    setStores(ret);
  };

  const onRetailerSelected = async (id) => {
    if (id !== "all") {
      setSelectedRetailer(id);
    } else {
      setSelectedRetailer(null);
    }

    setSelectedStore(null);
  };

  useEffect(() => {
    if (selectedRetailer && selectedRetailer !== "all") {
      getStores();
    }
  }, [selectedRetailer]);

  useEffect(() => {
    getRetailers();
  }, []);

  const createRetailers = () => {
    const list = retailers.map((retailer) => {
      return (
        <SelectBoxItem
          key={retailer.id}
          value={retailer.id}
          text={retailer.name}
          icon={BadgeCheckIcon}
        />
      );
    });

    const ret = [
      <SelectBoxItem
        key={"all"}
        value={"all"}
        text={t("placeholder.retailers")}
        icon={PlusCircleIcon}
      />,
      ...list,
    ];

    return ret;
  };

  const createStores = () => {
    const ret = stores.map((store) => {
      return (
        <SelectBoxItem
          key={store.id}
          value={store.id}
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
        className="ml-2"
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
    <Flex className="w-full">
      <SelectBox
        placeholder={t("placeholder.retailers")}
        onValueChange={(value) => {
          onRetailerSelected(value);
        }}
        value={selectedRetailer ? selectedRetailer : "all"}

      >
        {retailers ? createRetailers() : null}
      </SelectBox>

      {selectedRetailer && stores? showStoreSelector() : null}
    </Flex>
  );
};

export default RetailerSelector;
