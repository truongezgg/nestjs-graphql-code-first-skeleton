import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';
const tsconfig = require('../../../tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(
  tsconfig.compilerOptions.paths,
  {
    prefix: '<rootDir>/../../../',
  },
);

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.e2e-spec.ts$',
  moduleNameMapper,
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
};

export default config;
