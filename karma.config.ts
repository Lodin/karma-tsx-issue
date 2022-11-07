import karma from 'karma';

const cfg = await karma.config.parseConfig(undefined, {}, {
  promiseConfig: true,
  throwErrors: true
});

const server = new karma.Server(cfg);
await server.start();
