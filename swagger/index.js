const swaggerUi = require('swagger-ui-express');
const userSwagger = require('./userSwagger');
const menuSwagger = require('./menuSwagger');
const homeSwagger = require('./homeSwagger');
const gallerySwagger = require('./gallerySwagger');
const verifySwagger = require('./verifySwagger'); 

module.exports = (app) => {
    const swaggerDefinition = {
        swagger: "2.0",
        info: {
            title: "Trippcard API",
            version: "1.0.0",
        },
        basePath: "/api",
        paths: {
            ...userSwagger.paths,
            ...menuSwagger.paths,
            ...homeSwagger.paths,
            ...gallerySwagger.paths,
            ...verifySwagger.paths 
        },
        tags: [
            ...userSwagger.tags,
            ...menuSwagger.tags,
            ...homeSwagger.tags,
            ...gallerySwagger.tags,
            ...verifySwagger.tags 
        ]
    };

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
};
