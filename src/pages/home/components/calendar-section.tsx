import Calendar from "react-calendar";
import SectionTitle from "../../../common/components/section_title";

import { useState } from "react";
import { useTranslation } from "react-i18next";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarSection = () => {
  const [value] = useState<Value>(new Date());
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("calendar")} />
      <div className="flex justify-center pt-4">
        <Calendar value={value} locale="sr-BA" className="p-2" />
      </div>
    </>
  );
};

export default CalendarSection;
