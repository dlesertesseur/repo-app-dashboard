import { DateRangePicker, Flex } from "@tremor/react";
import { es } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import React, { useContext } from "react";
import ActualTime from "./ActualTime";
import RetailerSelector from "./RetailerSelector";
import { AppStateContext } from "../context/AppStateContext";

const SelectionHeader = () => {
  const { t } = useTranslation();
  const { selectedDate, setSelectedDate } = useContext(AppStateContext);

  return (
    <div>
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
          {/* <ActualTime /> */}
        </div>
        <div>
          <RetailerSelector />
        </div>
      </Flex>
    </div>
  );
};

export default SelectionHeader;
