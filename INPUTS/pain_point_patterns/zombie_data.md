# Zombie Data

## Summary
Zombie data is obsolete, duplicated, ownerless, low-quality, or unused data that remains in systems and reports, creating confusion, risk, and maintenance burden.

## Symptoms
- Old records remain active without clear business purpose
- Reports include stale or duplicate data
- Teams cannot identify data owners or retention rules
- Migration projects uncover large volumes of unusable data
- Users distrust reports because outdated data appears current

## Typical Root Causes
- Weak data lifecycle management
- Poor master data governance
- Legacy system retention without cleanup
- Lack of ownership for archived or inactive records
- Data copied repeatedly across systems and spreadsheets

## Business Impact
- Higher storage, migration, and support costs
- Increased compliance and privacy risk
- Poor reporting and decision quality
- Slower data migration and modernization
- Reduced trust in analytics and AI outputs

## Architecture Implications
- Data platforms contain unmanaged historical clutter
- Retention and deletion rules are inconsistent
- Data lineage is hard to interpret
- Master data and reporting layers include obsolete records
- Operating model lacks lifecycle accountability

## Commonly Affected Business Capabilities
- data governance
- records management
- master data governance
- compliance management
- reporting management
- application portfolio management

## Commonly Affected Technology Capabilities
- data lifecycle management
- data quality management
- retention policy management
- data catalog management
- archival management
- master data management

## Relevant AI and Automation Opportunities
- AI-assisted data classification and ownership detection
- anomaly detection for stale or unusual records
- intelligent document processing for retention evidence
- AI-assisted reporting of data cleanup candidates
- workflow automation for data remediation approvals

## Relevant Value Models
- governance_maturity
- operational_efficiency
- ai_adoption_value

## Typical KPIs and Evidence Signals
- percentage of inactive or obsolete records
- duplicate or stale data rate
- storage and migration cost linked to unused data
- records without owner
- retention policy exceptions
- report errors caused by obsolete data

## Common Solution Directions
- Define data lifecycle and retention policies
- Assign ownership for critical data domains
- Identify and remediate obsolete records
- Improve master data governance
- Include cleanup in migration and modernization programs

## Risks and Watchouts
- Deleting data without retention and legal review
- Misclassifying active data as obsolete
- Cleanup without ownership model
- Ignoring downstream report dependencies
- Applying AI classification without human validation

## Related Pain Point Patterns
- poor_master_data_management
- data_fragmentation
- compliance_audit_complexity
- legacy_system_dependency
- limited_real_time_insights
