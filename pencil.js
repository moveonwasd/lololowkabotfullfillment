const http = require("http");
const images = ["https://drive.google.com/uc?export=view&id=1B09Vj5-Cz06-_--GU-GjNms-32V0zdip", "https://drive.google.com/uc?export=view&id=1G9iYHBqLYBKcVa2Fl9Yc1GRRrJpUPihU", "https://drive.google.com/uc?export=view&id=1wXC22qwilgTHkyFNsHhl0AZvy1A_rD-A", "https://drive.google.com/uc?export=view&id=1xeTFjtRfFfecRgJb82RjP4mMGvismfPS", "https://drive.google.com/uc?export=view&id=13HqxAmhz58Api4UwsYmU3HEyB1UiQKWZ", "https://drive.google.com/uc?export=view&id=1KJabTwkdL8SP_lYW58x-8wF_YvV81_KO", "https://drive.google.com/uc?export=view&id=1II5_UEQ4ETmXoZhiNg4kJ9Tj2B8-VWme", "https://drive.google.com/uc?export=view&id=1tPslmtahge8fgb1a3hz3wanbkpqYwVZ3"];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  let pencil = JSON.stringify({
    fulfillmentMessages: {
      payload: {
        telegram: {
          text: "pencil"
        }
      }
    }
  });
  res.end(pencil);
});

server.listen(5000);
