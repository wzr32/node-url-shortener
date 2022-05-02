import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "URL Shortener Documentation",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:5000",
    },
  ],
  components: {
    schemas: {
      url: {
        type: "object",
        required: ["url"],
        properties: {
          url: {
            type: "string",
          },
        },
      },
    },
  },
};

const swaggerOPtions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts", "./src/modules/generate/*.routes.ts"],
};

export default swaggerJSDoc(swaggerOPtions);
