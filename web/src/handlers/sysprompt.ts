import summary from "../data/summary.json";
import economic_overview from "../data/metadata/economic-overview.json"
import production_composition from "../data/metadata/production-composition.json"
import inflation_and_prices from "../data/metadata/inflation-&-prices.json"

export const buildSystemPrompt = () => {
  const { system_prompt, knowledge_context, response_rules } = summary;

  // Combine everything into one long structured text prompt
  const prompt =
    `${system_prompt}\n\n` +
    `---\n` +
    `Knowledge Context:\n` +
    `Timeframe: ${knowledge_context.timeframe}\n` +
    `Core Metrics: ${knowledge_context.core_metrics.join(", ")}\n` +
    `Data Source: ${knowledge_context.data_source}\n\n` +
    `Base Definitions:\n${Object.entries(knowledge_context.base_definitions)
      .map(([k, v]) => `• ${k}: ${v}`)
      .join("\n")}\n\n` +
    `Model Notes:\n${Object.entries(knowledge_context.models)
      .map(([k, v]) => `• ${k}: ${v}`)
      .join("\n")}\n\n` +
    `Interpretive Themes:\n${knowledge_context.interpretive_themes
      .map(t => `• ${t}`)
      .join("\n")}\n\n` +
    `Response Rules:\n${response_rules.map(r => `• ${r}`).join("\n")}\n\n` +
    `---\n` +
    `Dashboard Sections:\n` +
    `Economic Overview: ${JSON.stringify(economic_overview).slice(0, 500)} ...\n` +
    `Production Composition: ${JSON.stringify(production_composition).slice(0, 500)} ...\n` +
    `Inflation & Prices: ${JSON.stringify(inflation_and_prices).slice(0, 500)} ...\n`;

  return prompt;
};
