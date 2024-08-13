const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234567', 
  database: 'nuclear_stations'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Маршрут для получения данных датчиков по id станции
app.get('/api/sensors/:stationId', (req, res) => {
  const stationId = req.params.stationId;
  const query = 'SELECT * FROM sensors WHERE station_id = ?';

  db.query(query, [stationId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

db.connect((err) => {
    if (err) {
      console.error('Ошибка подключения к базе данных:', err.stack);
      return;
    }
    console.log('Подключено к базе данных как id ' + db.threadId);
  });