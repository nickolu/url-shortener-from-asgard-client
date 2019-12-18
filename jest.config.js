module.exports = {
    moduleFileExtensions: ["js", "jsx"],
    modulePaths: ["<rootDir>/node_modules/"],
    moduleNameMapper: {
        "\\.(png|jpg|svg)$": "<rootDir>/tests/__mocks__/asset.js",
        "\\.(css|scss)$": "<rootDir>/tests/__mocks__/style.js",
        "^/imports/(.*)": "<rootDir>/imports/$1"
    },
    unmockedModulePathPatterns: ["/^imports\\/.*\\.jsx?$/", "/^node_modules/"],
    coverageDirectory: "<rootDir>/tests/coverage",
    collectCoverageFrom: ["**/*.{js,jsx}", "!{babel,jest}.config.js"],
    coveragePathIgnorePatterns: ["/node_modules", "/tests", "/build"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    coverageReporters: ["text", "cobertura", "lcov"]
};
