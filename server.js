require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerConfig = require('./swagger/index');
const menuRoutes = require("./routes/menuRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const verifyRoutes = require('./routes/verifyRoutes');
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/packages/home', homeRoutes);
app.use('/packages/menu', menuRoutes);
app.use('/packages/gallery', galleryRoutes);
app.use('/packages/verify', verifyRoutes);

swaggerConfig(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger UI available at: http://localhost:${PORT}/api-docs`);
});
