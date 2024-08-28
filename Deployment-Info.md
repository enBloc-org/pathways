# Pathways Website Deployment Documentation

## Table of Contents
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Deployment Environment](#deployment-environment)
4. [Dependencies](#dependencies)
5. [Deployment Process](#deployment-process)
6. [Configuration](#configuration)
7. [Backup and Recovery](#backup-and-recovery)

## Overview
A project to let employers search for T-Level programs. For more detail look [here](https://github.com/enBloc-org/pathways/blob/dev/README.md)

## Architecture
This website has a react frontend and a Express backend. Data comes from the The Institute for Apprenticeships and Technical Education's occupational maps API more info [here](https://occupational-maps.instituteforapprenticeships.org/public-api/)

## Deployment Environment
- **Hosting Provider:** Frontend netlify Backend Render
- **Domain Name:** Frontend https://pathways-front.netlify.app/ Backend https://pathways-back.onrender.com

## Dependencies
- Frontend Framework: React 18.3.1
- Backend Framework: Express 4.19.2


## Deployment Process
Push to dev or main and github should automatically deploy. If you encounter problems look on Netlify or Render for error messages related to the deployment

## Configuration
- **Environment Variables:** Frontend REACT_APP_SERVER gives the frontend the address for the backend
Backend API_KEY the key for accessing the occupational maps API, BASE_URL the part of the URL use in all calls to the occupational maps API, PORT what port to use if running locally, FRONTEND the address for the frontend.
- **Config Files:** Backend and Frontend have package.json for managing extensions and libraries. The frontend also has the Cypress config file.



## Backup and Recovery
- **Backup Schedule:** Back up was created at handoff
- **Backup Location:** Rollback Branch
- **Recovery Process:** Replace Dev or Main Branch with Rollback Branch and the product will work in the state it was handed off in.

Last Updated: 2024-08-28