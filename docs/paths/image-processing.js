module.exports = {
  '/url': {
    get: {
      tags: ['Image Proccessing'],
      summary: 'comression image',
      description: ' compression imnage',
      operationId: 'compression imnage',
      produces: ['application/json'],

      parameters: [
        {
          in: 'query',
          name: 'imageUrl',
          type: 'string',
          description: 'the oneline image url',
          required: true,
        },
        {
          in: 'query',
          name: 'imageFormat',
          type: 'string',
          description: 'one of the valid image extension, webp, png, ...etc',
          required: false,
          default: 'webp',
        },
        {
          in: 'query',
          name: 'imageWidth',
          type: 'number',
          description: 'number of width',
          default: 'the width of original image',
        },
        {
          in: 'query',
          name: 'imageHight',
          type: 'number',
          description: 'number of height',
          default: 'the height of original image',
        },
      ],

      responses: {
        200: {
          description: 'the returned as streem',
        },
      },
    },
  },

  '/data-base64': {
    get: {
      tags: ['Image Proccessing'],
      summary: ' image proccessing by id',
      description: 'image proccessing by id',
      operationId: 'image proccessing',
      produces: ['application/json'],

      parameters: [
        {
          in: 'query',
          name: 'imageUrl',
          type: 'string',
          description: 'the oneline image url',
          required: true,
        },
        {
          in: 'query',
          name: 'imageFormat',
          type: 'string',
          description: 'one of the valid image extension, webp, png, ...etc',
          required: false,
          default: 'webp',
        },
        {
          in: 'query',
          name: 'imageWidth',
          type: 'number',
          description: 'number of width',
          default: 'the width of original image',
        },
        {
          in: 'query',
          name: 'imageHight',
          type: 'number',
          description: 'number of height',
          default: 'the height of original image',
        },
      ],

      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                properties: {
                  image: {
                    type: 'string',
                    example: 'data:image/png;base64,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',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
