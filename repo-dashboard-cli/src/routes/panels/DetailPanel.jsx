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
} from "@tremor/react";
import { useWindowSize } from "../../hooks";
import { config } from "../../config/Config";
import { useState } from "react";

const DetailPanel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const size = useWindowSize();
  const title = location.state.title;
  const detail = location.state.detail;
  const [selectedRow, setSelectedRow] = useState(null);

  const onSelectRow = (item) => {
    setSelectedRow(item.id);

    if (item.detalle) {
      if (item.detalle.length > 0) {
        navigate("activityDetail", {
          state: {
            group: title,
            user: item.asignadoA,
            detail: item.detalle,
          },
        });
      }
    } else {
      if (item.detalleJornada) {
        if (item.detalleJornada.length > 0) {
          navigate("workingDayDetail", {
            state: {
              group: title,
              user: item.asignadoA,
              detail: item.detalleJornada,
            },
          });
        }
      }
    }
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
          <Title>{t("panels.detail.title") + " : " + title}</Title>
          <Text>{t("panels.detail.description")}</Text>
        </div>
        <div>
          <Button size="xs" onClick={onBack}>
            {t("button.back")}
          </Button>
        </div>
      </Flex>

      {size && size.height > 0 ? (
        <div
          className="mt-5 overflow-auto"
          style={{ height: size.height - 250 }}
        >
          <Card>
            {/* <Title>{title}</Title> */}
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>{""}</TableHeaderCell>
                  <TableHeaderCell>
                    {t("panels.detail.colums.col1")}
                  </TableHeaderCell>
                  <TableHeaderCell>
                    {t("panels.detail.colums.col3")}
                  </TableHeaderCell>
                  <TableHeaderCell>
                    {t("panels.detail.colums.col4")}
                  </TableHeaderCell>
                  <TableHeaderCell>
                    {t("panels.detail.colums.col5")}
                  </TableHeaderCell>
                  <TableHeaderCell>
                    {t("panels.detail.colums.col6")}
                  </TableHeaderCell>
                  <TableHeaderCell>
                    {t("panels.detail.colums.col7")}
                  </TableHeaderCell>
                  <TableHeaderCell>
                    {t("panels.detail.colums.col8")}
                  </TableHeaderCell>
                  <TableHeaderCell>
                    {t("panels.detail.colums.col9")}
                  </TableHeaderCell>
                  <TableHeaderCell>
                    {t("panels.detail.colums.col10")}
                  </TableHeaderCell>
                  <TableHeaderCell>{""}</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {detail?.map((item) => (
                  <TableRow
                    key={item.id}
                    className={item.id === selectedRow ? "bg-gray-200" : ""}
                    onClick={() => {
                      onSelectRow(item);
                    }}
                  >
                    <TableCell>
                      <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white">
                        <img
                          src={getPhoto(item.foto)}
                          className="rounded-full"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Text>{item.asignadoA}</Text>
                    </TableCell>
                    {/* <TableCell>
                      <Text>{item.descripcion}</Text>
                    </TableCell> */}
                    <TableCell>
                      <Text>{item.horario}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.trabajo}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.destino}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.direccion}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.corte}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.fichadaDeEntrada}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.fichadaDeSalida}</Text>
                    </TableCell>
                    <TableCell>
                      <Badge color="emerald" icon={StatusOnlineIcon}>
                        {item.adicional}
                      </Badge>
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

export default DetailPanel;
