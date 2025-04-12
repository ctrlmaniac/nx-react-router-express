import { createRequestHandler } from '@react-router/express';
import { Application } from 'express';
import { ServerBuild } from 'react-router';

export default async function clientRequestsHandler(
  module: string,
  app: Application
) {
  const build: ServerBuild = await import(module);

  app.all(
    '/{*any}',
    createRequestHandler({
      mode: 'production',
      build: build,
    })
  );
}
