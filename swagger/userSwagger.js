module.exports = {
    swagger: "2.0",
    info: {
        version: "1.0.0",
        title: "Trippcard API",

    },
    basePath: "/api/users",
    tags: [
        {
            name: "User",
        }
    ],
    paths: {
        "/signup": {
            post: {
                tags: ["User"],
                summary: "Create new user",
                parameters: [{
                    in: "body",
                    name: "body",
                    description: "User signup data",
                    required: true,
                    schema: {
                        type: "object",
                        properties: {
                            email: { type: "string", example: "user@example.com" },
                            password: { type: "string", example: "strongpassword" },
                            phoneNumber: { type: "string", example: "1234567890" }
                        }
                    }
                }],
                responses: { "200": { description: "User created successfully" } }
            }
        },
        "/login": {
            post: {
                tags: ["User"],
                summary: "Login user",
                parameters: [{
                    in: "body",
                    name: "body",
                    description: "User login credentials",
                    required: true,
                    schema: {
                        type: "object",
                        properties: {
                            email: { type: "string", example: "user@example.com" },
                            password: { type: "string", example: "strongpassword" }
                        }
                    }
                }],
                responses: { "200": { description: "Login successful" } }
            }
        },
        "/fetch": {
            get: {
                tags: ["User"],
                summary: "Get all users",
                responses: { "200": { description: "List of all users" } }
            }
        },
        "/update": {
    put: {
        tags: ["User"],
        summary: "Update user details",
        parameters: [{
            in: "body",
            name: "body",
            description: "Fields to update",
            required: true,
            schema: {
                type: "object",
                properties: {
                    currentEmail: { type: "string", example: "user@example.com" },
                    newEmail: { type: "string", example: "newuser@example.com" },
                    newPassword: { type: "string", example: "newStrongPassword" },
                    newPhoneNumber: { type: "string", example: "0987654321" }
                }
            }
        }],
        responses: { "200": { description: "User updated successfully" } }
    }
},

        "/delete": {
            delete: {
                tags: ["User"],
                summary: "Soft delete user",
                parameters: [{
                    in: "body",
                    name: "body",
                    description: "Email of user to soft delete",
                    required: true,
                    schema: {
                        type: "object",
                        properties: { email: { type: "string", example: "user@example.com" } }
                    }
                }],
                responses: { "200": { description: "User soft deleted successfully" } }
            }
        }
    }
};
