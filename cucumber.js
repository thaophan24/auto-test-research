
module.exports = {
    default: {
      requireModule: ["ts-node/register", "tsconfig-paths/register"],
      format: ["html:test-results/cucumber-report.json"],
      paths: ["./src/tests/features/**/*.feature"],
      require: ["./src/tests/steps/evo.steps.ts"],  
      worldParameters: {
        baseURL: "https://evocard.tpb.vn/" 
      }
    }
  };
  