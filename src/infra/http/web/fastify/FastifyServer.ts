import { env } from '@/infra';
import { FastifyApplication } from './FastifyApp';

export function startServer() {
  FastifyApplication.listen({
    host: '0.0.0.0',
    port: env.PORT,
  }).then(() => {
    console.log(`🚀 HTTP Server running at port ${env.PORT} 🚀`);
  });
}
