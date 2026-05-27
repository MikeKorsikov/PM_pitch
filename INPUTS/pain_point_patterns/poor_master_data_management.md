# Poor Master Data Management

## Summary
Poor master data management occurs when core business entities such as customer, vendor, product, material, employee, or account data are inconsistent, duplicated, incomplete, or poorly governed.

## Symptoms
- Duplicate or conflicting records exist across systems
- Business entities lack consistent identifiers or classifications
- Teams manually correct master data before reporting or processing
- Data ownership and stewardship are unclear
- Integrations fail due to inconsistent reference data

## Typical Root Causes
- Decentralized master data creation and maintenance
- Weak data governance and stewardship model
- Missing validation rules and lifecycle controls
- Lack of MDM tooling or golden record design
- Legacy systems with inconsistent data structures

## Business Impact
- Financial, operational, and reporting errors
- Delays in procurement, billing, planning, and logistics
- Increased compliance and audit risk
- Higher manual correction and reconciliation effort
- Reduced trust in analytics, automation, and AI outputs

## Architecture Implications
- Core systems use inconsistent identifiers and hierarchies
- Integration and migration outcomes are unreliable
- Data quality issues propagate across platforms
- Lineage and ownership are difficult to trace
- Operating model lacks accountable data stewards

## Commonly Affected Business Capabilities
- master data governance
- customer management
- supplier management
- product management
- financial reporting
- supply chain planning

## Commonly Affected Technology Capabilities
- master data management
- data quality management
- entity resolution
- data governance platform management
- integration management
- data lineage management

## Relevant AI and Automation Opportunities
- AI-assisted entity resolution and deduplication
- anomaly detection for master data errors
- workflow automation for data stewardship approvals
- intelligent document processing for master data intake
- knowledge assistant for data standards and definitions

## Relevant Value Models
- governance_maturity
- operational_efficiency
- automation_roi
- ai_adoption_value

## Typical KPIs and Evidence Signals
- duplicate record rate
- data validation error frequency
- master data creation cycle time
- percentage of records aligned to golden source
- integration failure rate caused by master data
- manual data correction effort

## Common Solution Directions
- Define master data ownership and stewardship
- Establish golden records and lifecycle rules
- Implement validation at entry and integration points
- Rationalize duplicates and inconsistent hierarchies
- Introduce MDM capabilities where justified

## Risks and Watchouts
- Treating MDM as only a technology implementation
- Blocking operations with overly strict validation
- Incorrect deduplication or record merging
- Weak business ownership after cleanup
- Underestimating migration and change effort

## Related Pain Point Patterns
- data_fragmentation
- zombie_data
- manual_reconciliation
- integration_complexity
- compliance_audit_complexity
