# Data Fragmentation

## Summary
Data fragmentation occurs when critical business data is spread across disconnected systems, spreadsheets, local databases, and inconsistent repositories, preventing reliable enterprise insight.

## Symptoms
- Different teams report different numbers for the same metric
- Data must be manually combined from multiple sources
- Reports depend on local extracts or spreadsheets
- Customer, product, vendor, or finance data is inconsistent across systems
- Data ownership and source-of-truth are unclear

## Typical Root Causes
- Siloed systems and operating models
- Acquisition-driven platform complexity
- Weak data governance and stewardship
- Lack of common data definitions and master data standards
- Point-to-point integrations and duplicate data stores

## Business Impact
- Slower reporting and decision-making
- Increased manual reconciliation effort
- Higher risk of inaccurate regulatory or management reporting
- Reduced trust in analytics and AI outputs
- Slower transformation due to unclear baseline data

## Architecture Implications
- Application landscape lacks canonical data models
- Integrations replicate inconsistent data structures
- Data platforms become reconciliation layers instead of trusted products
- Governance is fragmented across business domains
- Operating model lacks clear data ownership

## Commonly Affected Business Capabilities
- management reporting
- data governance
- financial planning
- customer management
- supply chain planning
- performance management

## Commonly Affected Technology Capabilities
- data integration
- master data management
- data catalog management
- semantic layer management
- data quality management
- analytics platform enablement

## Relevant AI and Automation Opportunities
- AI-assisted data classification and mapping
- anomaly detection for inconsistent records
- knowledge assistant for metric definitions
- AI-assisted reporting using governed sources
- process mining to locate data breakpoints

## Relevant Value Models
- governance_maturity
- operational_efficiency
- ai_adoption_value

## Typical KPIs and Evidence Signals
- number of source systems per key metric
- reconciliation effort per reporting cycle
- data quality issue volume
- report rework rate
- user trust in reporting
- duplicate record rate

## Common Solution Directions
- Establish data ownership and governance forums
- Define canonical data models and metric definitions
- Implement data catalog and lineage capabilities
- Rationalize duplicate data stores
- Strengthen master data management and integration patterns

## Risks and Watchouts
- Building dashboards before fixing data ownership
- Treating a data lake as a governance solution
- Ignoring local data needs during standardization
- Over-centralizing without business stewardship
- Using AI on untrusted data without confidence labels

## Related Pain Point Patterns
- poor_master_data_management
- manual_reconciliation
- limited_real_time_insights
- excel_middleware
- duplicated_processes
