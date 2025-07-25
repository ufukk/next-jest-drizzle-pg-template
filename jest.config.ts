module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
    roots: [
        "<rootDir>"
    ],
    modulePaths: [
        "<rootDir>",
    ],
    moduleDirectories: [
        "<rootDir>",
        "node_modules"
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
};