function formatLocations(nodes) {
  let result = "";
  nodes.forEach((n) => {
    result += `\n ${n.target[0].join(" > ")} \n ${n.html} \n`;
  });
  return result;
}

function formatImpact(impact) {
  const impactValues = ["minor", "moderate", "serious", "critical"];
  return " ! ".repeat(impactValues.indexOf(impact) + 1);
}

export function printAccessibilityViolations(violations) {
  console.log(violations);
  const violationMessage = violations
    .map(
      (v) =>
        `\n [${formatImpact(v.impact)}] { ${v.id.toUpperCase()} }: ${v.help} (${
          v.nodes.length
        } occurrences)` +
        `\n\n  Impact: ${v.impact}` +
        `\n\n   Description: ${v.description}` +
        `\n\n Locations: ${formatLocations(v.nodes)}`
    )
    .join("\n\n");

  throw new Error(`ACCESSIBILITY VIOLATIONS FOUND:\n${violationMessage}`);
}
