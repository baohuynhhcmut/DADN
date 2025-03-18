import React, { useState } from 'react';

// CSS inline
const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    .notification-container {
        position: fixed;
        top: 70px;
        right: 20px;
        z-index: 1000;
        font-family: 'Poppins', sans-serif;
        max-width: 500px;
    }

    .notification {
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        color: white;
        position: relative;
        margin-bottom: 16px;
        font-family: 'Poppins', sans-serif;
        
    }

    .notification.gradient-pink-red-purple {
        background: linear-gradient(94.77deg, rgba(243, 86, 89, 0.9) 15.3%, rgba(243, 86, 222, 0.9) 113.45%);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        border-radius: 12px;

    }

    .notification.gradient-blue-green-green {
        background: linear-gradient(94.77deg, rgba(86, 130, 243, 0.9) 15.3%, rgba(112, 243, 86, 0.9) 113.45%);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        border-radius: 12px;

    }

    .notification .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .notification .title {
        font-weight: 600;
        margin-bottom: 8px;
    }

    .notification .message {
        margin-bottom: 8px;
        font-weight: 400;
    }

    .notification .time {
        font-size: 0.875rem;
        opacity: 0.8;
        font-weight: 400;
    }

    .notification .close-button {
        background: none;
        border: none;
        color: white;
        font-size: 1.25rem;
        cursor: pointer;
        padding: 0;
        position: absolute;
        top: 8px;
        right: 8px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .notification .close-button:hover {
        opacity: 0.8;
    }
`;

interface NotificationProps {
    onClose: (id: number) => void; // Hàm đóng thông báo với id
}

const Notification: React.FC<NotificationProps> = ({ onClose }) => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "From Admin To Trường Đại Học Bách Khoa, ĐHQGHCM",
            message: "The humidity of the garden has exceeded the allowable threshold!",
            time: "10:30",
            gradientClass: "gradient-pink-red-purple"
        },
        {
            id: 2,
            title: "From System To Bcons Miền Đông",
            message: "We’ve just turned off your Led 1",
            time: "10:29",
            gradientClass: "gradient-blue-green-green"
        }
    ]);

    const handleClose = (id: number) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    return (
        <>
            {/* Thêm CSS vào DOM */}
            <style>{styles}</style>

            {/* Render các thông báo */}
            <div className="notification-container">
                {notifications.map((notification) => (
                    <div key={notification.id} className={`notification ${notification.gradientClass}`}>
                        <div className="header">
                            <div>
                                <p className="title">{notification.title}</p>
                                <p className="message">{notification.message}</p>
                                <p className="time">{notification.time}</p>
                            </div>
                            <button className="close-button" onClick={() => handleClose(notification.id)}>
                                &times; {/* Dấu "x" */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Notification;