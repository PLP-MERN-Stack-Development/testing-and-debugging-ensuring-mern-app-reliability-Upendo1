export default {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  transform: {},                    // do not transform with Babel
  extensionsToTreatAsEsm: [".js"],  // treat .js as ES modules
};
