import { DateRangePicker, Flex } from "@tremor/react";
import { es } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { AppStateContext } from "../context/AppStateContext";
import React, { useContext } from "react";
import RetailerSelector from "./RetailerSelector";
import OrganizationPanel from "./OrganizationPanel";

const SelectionHeader = () => {
  const { t } = useTranslation();
  const { selectedDate, setSelectedDate } = useContext(AppStateContext);

  return (
    <div className={"z-50"}>
      <Flex className="py-2 px-10 justify-between w-full">
        <div>
          <DateRangePicker
            className=""
            value={selectedDate}
            onValueChange={setSelectedDate}
            locale={es}
            enableDropdown={false}
            placeholder={t("placeholder.dateSelector")}
          />
        </div>
        <div>
          <OrganizationPanel />
        </div>
        <div className="flex flex-row items-center">
          <RetailerSelector />
        </div>
      </Flex>
    </div>
  );
};

export default SelectionHeader;
