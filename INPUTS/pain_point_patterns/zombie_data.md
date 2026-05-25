# This file contains information about unique pain point patterns and how it should be handled

# Zombie Data

1. Symptoms
Databases accumulating large volumes of outdated or expired transactional records
Degraded performance in analytics and operational query systems
Increasing cloud storage and backup costs over time
Retention of data beyond business or regulatory usefulness
Slow data pipelines and maintenance operations due to excessive data volume
2. Root Causes
Lack of formal data retention and lifecycle management policies
Fear of deleting historical data due to perceived business risk
Legacy systems not designed to support data archiving or deletion
Absence of automated data lifecycle management pipelines
Weak enforcement of data governance standards
3. Business Impact
Rising infrastructure and cloud storage costs
Increased regulatory and compliance risk (e.g., GDPR, SOX)
Degraded system performance affecting analytics and operations
Higher risk exposure in case of data breaches or leaks
Increased operational complexity in maintaining large datasets
4. Technology Indicators
Tables containing excessive historical records beyond business relevance
Rapidly growing database storage utilization metrics
Long-running backup and restore processes
Poor query performance on time-based or transactional datasets
Lack of automated archival or data pruning jobs
5. Architecture Implications
Reduced database and analytics performance at scale
Increased backup and recovery time windows
Higher infrastructure scaling requirements
Weak data lifecycle governance across systems
Inefficient storage tiering and utilization
6. Common Solution Patterns
Implement enterprise data lifecycle and retention policies
Introduce automated archiving pipelines for historical data
Move cold or inactive data to low-cost storage tiers (e.g., object storage)
Implement automated data purge mechanisms based on retention rules
Optimize indexing and partitioning strategies for large datasets
Introduce data governance controls for lifecycle enforcement
7. AI & Automation Opportunities
AI-based classification of data for retention vs archival decisions
Intelligent optimization of database indexing and partitioning strategies
Automated detection of obsolete or low-value datasets
AI-driven recommendations for archiving and cleanup policies
Autonomous data lifecycle management agents
8. KPIs / Metrics
Percentage of data within defined retention period
Cloud storage cost growth rate
Average query latency across key datasets
Backup and restore execution time
Volume of data archived vs actively used
9. Risks of Transformation
Accidental deletion of data required for historical or legal purposes
Disruption of reporting systems dependent on historical datasets
Compliance risks due to incorrect retention policy execution
Temporary performance issues during large-scale data migration
Resistance from stakeholders relying on historical data access
10. Related Patterns
data_fragmentation
poor_master_data_management
compliance_audit_complexity
poor_end_to_end_visibility
integration_complexity