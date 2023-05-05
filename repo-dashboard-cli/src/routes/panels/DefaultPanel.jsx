import { Text, Title, Flex, Button } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const DefaultPanel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="px-10 pt-2 w-screen">
      <Flex dir="row" alignItems="center" justifyContent="between">
        <div>
          <Title>{t("panels.default.title")}</Title>
          <Text>{t("panels.default.description")}</Text>
        </div>
        <div>
          <Button size="xs" onClick={onBack}>
            {t("button.back")}
          </Button>
        </div>
      </Flex>

      <div className="h-96 pt-4 bg-slate-100 rounded-md"></div>
    </div>
    
  );
};

export default DefaultPanel;
