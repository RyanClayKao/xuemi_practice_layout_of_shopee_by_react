import { Modal } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const eventProductId = "p003";

export default function PopupModal() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const popupHistory = JSON.parse(localStorage.getItem("shopee:popup.history"));
    
    // 如果在三秒內，就不要再顯示彈窗廣告
    if (popupHistory &&  Date.now() - popupHistory < 3 * 1000) {
      setIsVisible(false);
    } else {
      const history = {
        time: Date.now(),
        productId: eventProductId,
      };

      // namespace
      localStorage.setItem("shopee:popup.history", JSON.stringify(history));
    }
  }, []);

  return (
    isVisible && (
      <Modal
        open={true}
        footer={null}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
      >
        <Link to={`/${eventProductId}-event`}>
          <img
            src="https://images.unsplash.com/photo-1725203653086-b774ec111109?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
            alt="p003-event"
          />
        </Link>
      </Modal>
    )
  );
}
