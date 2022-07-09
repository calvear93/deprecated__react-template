import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

// Sync object
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    bail: 1,
    verbose: true,
    testTimeout: 30_000,
    slowTestThreshold: 10,
    coverageDirectory: '__reports__/coverage',
    collectCoverageFrom: ['src/**/*.(t|j)s(x)?'],
    coveragePathIgnorePatterns: [
        'index.ts',
        'main.ts',
        '.d.ts',
        '.mock.ts',
        '.config.ts',
        '__tests__',
        '__mocks__',
        '__fixtures__',
        '__reports__'
    ],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom',
        '@testing-library/react/dont-cleanup-after-each'
    ],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
} as Config.InitialOptions;
