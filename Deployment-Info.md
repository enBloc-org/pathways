# Pathways Website Deployment Documentation

## Table of Contents
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Deployment Environment](#deployment-environment)
4. [Dependencies](#dependencies)
5. [Deployment Process](#deployment-process)
6. [Configuration](#configuration)
7. [Monitoring and Logging](#monitoring-and-logging)
8. [Backup and Recovery](#backup-and-recovery)
9. [Security Considerations](#security-considerations)
10. [Maintenance and Updates](#maintenance-and-updates)
11. [Troubleshooting](#troubleshooting)
12. [Contact Information](#contact-information)

## Overview
A project to let employers search for T-Level porgrams for more detail look [here](https://github.com/enBloc-org/pathways/blob/dev/README.md)

## Architecture
This website has a react frontend and a Express backend. Data comes from the The Institute for Apprenticeships and Technical Education's occupational maps API more info [here](https://occupational-maps.instituteforapprenticeships.org/public-api/)

## Deployment Environment
- **Hosting Provider:** Frontend netlify Backend Render
- **Domain Name:** Frontend https://pathways-front.netlify.app/ Backend https://pathways-back.onrender.com

## Dependencies
- Frontend Framework: React 18.3.1
- Backend Framework: Express 4.19.2



## Deployment Process
Push to dev or main and github should automatically deploy. If you encouter problems look on Netlify or Render for error messages related to the deployment

## Configuration
- **Environment Variables:** [List and describe important environment variables]
- **Config Files:** [Describe location and purpose of configuration files]
- **Third-party Service Configurations:** [e.g., API keys, external service settings]

## Monitoring and Logging
- **Monitoring Tools:** [e.g., New Relic, Datadog]
- **Log Locations:** [Describe where logs are stored and how to access them]
- **Key Metrics:** [List important metrics to monitor]

## Backup and Recovery
- **Backup Schedule:** [Describe the backup frequency and retention policy]
- **Backup Location:** [Where backups are stored]
- **Recovery Process:** [Brief overview of how to restore from a backup]

## Security Considerations
- **Access Control:** [Describe user roles and permissions]
- **Data Protection:** [Outline measures for protecting sensitive data]
- **Regular Security Practices:** [e.g., updates, vulnerability scans]

## Maintenance and Updates
- **Regular Maintenance Tasks:** [List routine maintenance activities]
- **Update Process:** [Describe how to update the website and its components]

## Troubleshooting
[List common issues and their solutions or troubleshooting steps]

## Contact Information
- **Primary Contact:** [Name, Role, Email, Phone]
- **Secondary Contact:** [Name, Role, Email, Phone]
- **Emergency Contact:** [Name, Role, Email, Phone]

[Last Updated: YYYY-MM-DD]