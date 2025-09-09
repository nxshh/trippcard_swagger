require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const swaggerConfig = require('./swagger/index');
const menuRoutes = require("./routes/menuRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const verifyRoutes = require('./routes/verifyRoutes');
const homeRoutes = require('./routes/homeRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/userRoutes');

app.use('/users', userRoutes);
app.use('/pacakges/home', homeRoutes);
app.use('/packages/menu', menuRoutes);
app.use('/packages/gallery', galleryRoutes);
app.use('/packages/verify', verifyRoutes);

swaggerConfig(app);

sequelize.authenticate()
    .then(() => console.log('PostgreSQL connected successfully'))
    .catch(err => console.error('Postgres connection error:', err));

sequelize.sync({ alter: true })
    .then(() => console.log('Database synced'))
    .catch(err => console.error('DB sync error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger UI available at: http://localhost:${PORT}/api-docs`);
});
