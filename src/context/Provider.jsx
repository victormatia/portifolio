import { useMemo, useState } from "react";
import globalContext from "./globalContext";
import { useTranslation } from "react-i18next";

function Provider ({ children }) {
  const [currentPage, setCurrentPage] = useState('');
  const [showBGHeader, setShowBGHeader] = useState(false);
  const [isNavBarActive, setIsNavBarActive] = useState(false);
  const [currLanguage, setCurrLanguage] = useState('ptBR');
  const { t } = useTranslation();

  const timeLinePoints = useMemo(() => ([
    {
      id: 1,
      title: t('timeLineP1Title'),
      context: t('timeLineP1Context'),
      date: t('timeLineP1Date'),
    },
    {
      id: 2,
      title: t('timeLineP2Title'),
      context: t('timeLineP2Context'),
      date: t('timeLineP2Date'),
    },
    {
      id: 3,
      title: t('timeLineP3Title'),
      context: t('timeLineP3Context'),
      date: t('timeLineP3Date'),
    },
    {
      id: 4,
      title: t('timeLineP4Title'),
      context: t('timeLineP4Context'),
      date: t('timeLineP4Date'),
    },
    {
      id: 5,
      title: t('timeLineP5Title'),
      context: t('timeLineP5Context'),
      date: t('timeLineP5Date'),
    },
    {
      id: 6,
      title: t('timeLineP6Title'),
      context: t('timeLineP6Context'),
      date: t('timeLineP6Date'),
    },
  ]), [currLanguage]);

  const context = {
    currentPage,setCurrentPage,
    showBGHeader, setShowBGHeader,
    isNavBarActive, setIsNavBarActive,
    currLanguage, setCurrLanguage,
    timeLinePoints,
  }

  return (
    <globalContext.Provider value={ context } >
      { children }
    </globalContext.Provider>
  )
}

export default Provider;
