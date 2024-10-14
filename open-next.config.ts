import type { OpenNextConfig } from 'open-next/types/open-next.js';
const config = {
  // This is the default server, similar to the server-function in open-next v2
  // In this case we are not providing any override, so it will generate a normal lambda (i.e. no streaming)
  default: {
  },
  // You can define multiple functions here, each with its own routes, patterns and overrides
  functions: {
    tensor: {
      // Patterns needs to use the glob pattern
      patterns: ['api/*'],
      // For app dir, you need to include route|page, no need to include layout or loading
      // It needs to be prepended with app/ or pages/ depending on the directory used
      routes: ['app/api/tensor/route'],
    },
  },
} satisfies OpenNextConfig;

export default config;