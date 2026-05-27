# Duplicated Processes

## Summary
Duplicated processes occur when teams, regions, or systems execute similar business activities through separate workflows, rules, tools, or templates.

## Symptoms
- Multiple variants of the same workflow exist across teams or regions
- Teams maintain separate templates, spreadsheets, or macros for similar activities
- Process outputs require reconciliation between equivalent workflows
- Users follow different approval paths for the same business object
- Process documentation is inconsistent or locally owned

## Typical Root Causes
- Organizational silos and local optimization
- Lack of enterprise process ownership
- Mergers and acquisitions creating parallel operating models
- Weak process architecture and governance
- Fragmented tooling and unmanaged SaaS adoption

## Business Impact
- Increased operating cost from duplicated effort
- Inconsistent customer and employee experience
- Higher operational and compliance risk
- Slower process change and transformation rollout
- Reduced scalability of automation and shared services

## Architecture Implications
- Fragmented process architecture without a canonical process model
- Multiple systems implement similar business logic
- Integrations duplicate equivalent transformations
- Data inconsistencies emerge from multiple processing paths
- Operating model relies on local SMEs and exceptions

## Commonly Affected Business Capabilities
- process management
- workflow management
- shared services management
- operational excellence
- compliance management
- service management

## Commonly Affected Technology Capabilities
- workflow orchestration
- process mining
- API management
- application rationalization
- business rules management
- integration management

## Relevant AI and Automation Opportunities
- process mining to identify duplicated or divergent workflows
- AI-assisted process mapping and normalization
- workflow automation for standardized execution
- AI agent orchestration across handoffs
- intelligent document processing for SOP comparison

## Relevant Value Models
- operational_efficiency
- automation_roi
- governance_maturity

## Typical KPIs and Evidence Signals
- number of process variants per capability
- cost per process instance
- percentage of standardized processes
- reconciliation effort between process outputs
- change rollout time across variants
- duplicate automation or bot count

## Common Solution Directions
- Define enterprise process taxonomy and ownership
- Harmonize high-value process variants
- Consolidate redundant workflow tools
- Centralize reusable business rules and APIs
- Use shared services or process orchestration where appropriate

## Risks and Watchouts
- Removing necessary local regulatory or market variation
- Underestimating hidden dependencies in local variants
- Over-standardizing before understanding value
- Losing SME knowledge during consolidation
- Automating duplicate variants instead of rationalizing them

## Related Pain Point Patterns
- fragmented_governance
- org_silos
- shadow_it
- manual_reconciliation
- inefficient_workflow
