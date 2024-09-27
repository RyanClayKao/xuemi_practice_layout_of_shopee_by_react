import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// MEMO: 切換網址 path 路徑時，就回到最上方的位置；僅保留該 path 沒有變動時，仍然停留在使用者查看的位置高度
export default function ScrollToTop() {
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName])

  return null;
}
