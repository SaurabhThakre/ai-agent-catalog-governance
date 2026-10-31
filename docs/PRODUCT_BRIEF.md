# Product brief

## Opportunity

Extend the discoverability and stewardship of a data catalog to AI agents that can retrieve data, use tools, and take actions. The product should help an operator understand an agent's business context and accountability, then choose and verify an appropriate governance response.

This is a design hypothesis supported by a prototype. No customer-research findings or production impact are asserted.

## Primary journey

1. Find an agent or a governance exception in Agent Search.
2. Inspect its business purpose, accountable owner, platform, status, risk, and recent activity.
3. Open a persistent profile for permissions, risk, dependencies, and activity context.
4. Select an individual or bulk action.
5. Check eligibility and review the impact before confirmation.
6. Inspect per-agent results and resolve failures or manual follow-up.

## Catalog metadata model represented in the UI

| Metadata group | Representative fields | Decision supported |
| --- | --- | --- |
| Identity and purpose | Agent ID, name, business purpose, business domain | Identify the asset and understand why it exists |
| Accountability | Accountable owner and ownership acknowledgement | Find the responsible person and distinguish assignment from acceptance |
| Operating context | Platform, environment, model/version, lifecycle status | Understand where and how the agent operates |
| Risk and use | Risk level, last activity, run and success indicators | Prioritize investigation and lifecycle review |
| Governance context | Permissions, dependencies, activity, action outcome | Review exposure and follow a decision through to its recorded result |

In a production design, identity reconciliation, agent versioning, evidence provenance, timestamps, and policy relationships would require explicit schema and API contracts. The prototype does not implement that data layer.

## Prioritization rationale

| Priority | Proposed scope | Reason |
| --- | --- | --- |
| Core | Search, agent profiles, ownership gaps, risk queues, action preview/results | Supports an end-to-end operator decision with clear accountability |
| Next | Connector freshness, identity reconciliation, approval routing, job reconciliation | Makes catalog coverage and control outcomes dependable |
| Later | Deep lineage, inherited data-quality context, contracts, continuous runtime signals | Adds context and control depth after the core operating workflow is validated |

This prioritization is a product proposal, not a committed delivery roadmap or an engineering estimate.

## Important behavior illustrated by the bulk-action scenario

Three sample agents are selected: Claims Reconciliation, Vendor Onboarding, and Invoice Router. Two support automatic blocking; the custom/SDK source requires manual control. The simulated outcome shows a confirmed block, a provider timeout, and a skipped agent. Retry is available for the failed operation.

A production service would need capability checks, authorization, idempotency keys, asynchronous status tracking, retries with backoff, and source-state reconciliation. The UI is designed to expose those distinctions without claiming the underlying services exist here.

## Validation questions

- Can a governance operator find a critical or ownerless agent without knowing its exact name?
- Can they explain who is accountable and what the agent is used for?
- Does the persistent profile preserve enough context to compare and investigate agents?
- Do they understand why a selected agent is excluded from automatic blocking?
- Can they distinguish confirmed, failed, and skipped outcomes and choose the correct next step?

## Measurement proposal

Measure task completion and time, interpretation errors, ownership acknowledgement coverage, metadata completeness, and unresolved action outcomes. Establish baselines and agree on definitions before setting numerical targets. No such measurements have been collected for this prototype.
