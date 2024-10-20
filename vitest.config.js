import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    watch:        true, // Explicitly enable watch mode if needed
    watchExclude: ['node_modules', 'dist'], // Specify directories to exclude from watch
    include:      ['tests/**/*.test.{js,ts}'], // Specify the test file pattern
    clearMocks:   true, // Optional: Automatically clear mocks between tests
  },
});
