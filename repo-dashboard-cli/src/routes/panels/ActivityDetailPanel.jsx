import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Flex,
  Button,
  Bold,
} from "@tremor/react";
import { useWindowSize } from "../../hooks";
import { config } from "../../config/Config";
import { useState } from "react";

const ActivityDetailPanel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const size = useWindowSize();

  const group = location.state.group;
  const user = location.state.user;
  const detail = location.state.detail;

  const [selectedRow, setSelectedRow] = useState(null);

  const onSelectRow = (item) => {
    setSelectedRow(item.id);
  };

  const onBack = () => {
    navigate(-1);
  };

  const getPhoto = (photo) => {
    const ret = config.URL_BASE_PHOTO + photo;
    return ret;
  };

  return (
    <div className="px-10 pt-2 w-screen">
      <Flex dir="row" alignItems="center" justifyContent="between">
        <div>
          <Title>{t("panels.activityDetail.title") + " | " + group + " | " + user}</Title>
          <Text>{t("panels.activityDetail.description")}</Text>
        </div>
        <div>
          <Button size="xs" onClick={onBack}>
            {t("button.back")}
          </Button>
        </div>
      </Flex>

      {size && size.height > 0 ? (
        <div className="mt-5 overflow-auto" style={{ height: size.height - 250 }}>
          <Card>
            {/* <Title>{title}</Title> */}
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>{""}</TableHeaderCell>
                  <TableHeaderCell>{t("panels.activityDetail.colums.col1")}</TableHeaderCell>
                  <TableHeaderCell>{t("panels.activityDetail.colums.col2")}</TableHeaderCell>
                  <TableHeaderCell>{t("panels.activityDetail.colums.col3")}</TableHeaderCell>
                  <TableHeaderCell>{t("panels.activityDetail.colums.col4")}</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {detail?.map((item) => (
                  <TableRow
                    key={item.ean}
                    className={item.id === selectedRow ? "bg-gray-200" : ""}
                    onClick={() => {
                      //onSelectRow(item);
                    }}
                  >
                    <TableCell>
                      <div className="inline-block h-24 w-24 ring-white">
                        <img src={getPhoto(item.foto)} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Bold>{item.ean}</Bold>
                    </TableCell>
                    <TableCell>
                      <Bold>{item.nombre}</Bold>
                    </TableCell>
                    <TableCell>
                      <Bold>{item.cantidad}</Bold>
                    </TableCell>
                    <TableCell>
                      {item.adicional ? (
                        <Badge color="emerald" icon={StatusOnlineIcon}>
                          {item.adicional}
                        </Badge>
                      ) : null}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default ActivityDetailPanel;
