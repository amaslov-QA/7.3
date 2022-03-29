"jest"; {
    "verbose"; true,
    "collectCoverage"; true,
    "coverageReporters"; ["html"],
    "collectCoverageFrom"; [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/coverage/**"
      ],
    "coverageThreshold"; {
        "branches"; 100,
        "functions"; 100,
        "lines"; 100
    }
  }