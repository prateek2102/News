const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/newsRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', newsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
