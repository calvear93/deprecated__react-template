import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        reporters: ['junit', 'vitest-sonar-reporter'],
        outputFile: '__reports__/sonar-report.xml',
        setupFiles: ['@testing-library/react/dont-cleanup-after-each']
    },
    ...viteConfig
});
