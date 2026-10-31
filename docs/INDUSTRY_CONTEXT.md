# Industry context for AI agent catalog and governance

**Reviewed: 31 October 2026.** This note connects official vendor materials to product questions raised by the prototype. It does not claim feature parity, integrations, vendor endorsement, or customer validation.

## Alation

Alation's [17 September 2026 AIOS announcement](https://www.alation.com/news-and-press/alation-launches-aios-tm-expansion-with-six-products-that-accelerate-ai-transformation/) describes a cross-platform registry and agent lineage connected to the state of underlying data. The announcement distinguishes available AI Governance enhancements from early-access offerings such as Ontologies and Governed Collections.

Its [AI Governance solution page](https://www.alation.com/solutions/ai-governance/) links AI assets to business use cases, dependencies, risk-tiered workflows, and evidence.

**Product interpretation:** agent metadata and business ownership are a starting point. A stronger catalog should make the relationship between the agent, its purpose, the governed data it consumes, and the decision evidence inspectable.

**Prototype evidence:** searchable inventory, business purpose, owner visibility, risk filtering, and a contextual agent profile.

**Proposed extension:** ingest lineage and data-quality/policy signals from a governed catalog. This is not implemented.

## Collibra

Collibra's [AI Command Center documentation, updated 18 September 2026](https://productresources.collibra.com/docs/release-notes/Content/AICommandCenter/co_aicc-about.htm), describes a consolidated registry, governance dashboards, and operational agent signals.

Its [Agent Contracts documentation, updated 22 October 2026](https://productresources.collibra.com/docs/release-notes/Content/AICommandCenter/GuardianAgents/co_agent-contracts.htm), describes reviewable rules for agent behavior and access, with runtime enforcement through Guardian Agents. **The cited Agent Contracts documentation explicitly identifies the capability as private preview.**

**Product interpretation:** governance needs both an operating view of the agent estate and a record that links responsibility, permitted behavior, decisions, and evidence. A registry alone is not an enforcement mechanism.

**Prototype evidence:** estate overview, accountable agent profiles, review/retirement journeys, eligibility-aware actions, and distinct result states.

**Proposed extension:** versioned agent policies/contracts and runtime evidence. These are future concepts, not capabilities of this repository.

## Informatica

Informatica's [AI Governance Blueprint for the Agentic Enterprise](https://www.informatica.com/resources/articles/ai-governance-blueprint-agentic-enterprise.html) emphasizes inventory, discovery/classification, metadata, and granular lineage using IDMC and Cloud Data Governance and Catalog. The page was reviewed on the date above; a publication date was not established.

**Product interpretation:** experience with enterprise data catalogs, including EDC/CDGC-style metadata and stewardship, can be extended to agent records and their relationships with governed data.

**Prototype evidence:** metadata-led discovery, business context, accountable ownership, and action workflows that disclose platform differences.

**Proposed extension:** classify connected datasets, link relevant glossary terms and policies, and show downstream impact when source data or permissions change. These integrations are not implemented.

## What the market research changes in the product framing

1. Treat an AI agent as a governed asset with business purpose and accountability.
2. Connect the catalog record to data, tools, policies, and evidence over time.
3. Distinguish an inventory, a review workflow, and a runtime control system.
4. Make connector coverage, freshness, source capability, and uncertain outcomes visible.
5. Validate whether governance users can reach a correct decision, rather than optimizing only for the number of catalog records.

These are design implications drawn from the sources, not claims that the prototype reproduces the vendors' products. Product availability and naming may change after the review date.
