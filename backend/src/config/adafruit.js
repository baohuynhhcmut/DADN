const mqtt = require('mqtt');

const AIO_USERNAME = 'khanhtruong';
const AIO_KEY = 'aio_Ugps08cqAHkg71u8xqkDEiBS5RHR';
const FEED_NAME = 'V1';

const MQTT_BROKER = `mqtts://${AIO_USERNAME}:${AIO_KEY}@io.adafruit.com`;

const client = mqtt.connect(MQTT_BROKER);

client.on('connect', () => {
    console.log('Connected to Adafruit IO');

    // Đăng ký nhận dữ liệu từ feed
    client.subscribe(`${AIO_USERNAME}/feeds/${FEED_NAME}`);

    // Gửi dữ liệu lên feed mỗi 5 giây
    setInterval(() => {
        let randomValue = 20;
        console.log(`Sending value: ${randomValue}`);

        client.publish(`${AIO_USERNAME}/feeds/${FEED_NAME}`, randomValue.toString());
    }, 5000);
});

client.on('message', (topic, message) => {
    console.log(`Received message: ${message.toString()} from ${topic}`);
});

// Xử lý lỗi
client.on('error', (err) => {
    console.error('Error:', err);
});
