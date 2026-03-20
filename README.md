# DevOps Project - 3-Tier Architecture

A complete local DevOps project built with VMware and Ubuntu Server 22.04.

## Architecture Diagram

![Architecture](screenshots/diagram.png)

## Project Flow

Client → Nginx (Load Balancer) → Node.js App → MySQL Database

\+ Monitoring via Prometheus & Grafana

## Virtual Machines

| VM | Hostname | IP | Role |
|---|---|---|---|
| VM1 | load-balancer | 192.168.190.10 | Nginx |
| VM2 | app-server | 192.168.190.20 | Node.js + Docker |
| VM3 | database-server | 192.168.190.30 | MySQL |

## Tech Stack

- VMware Workstation
- Ubuntu Server 22.04
- Nginx
- Node.js 18
- MySQL 8
- Docker
- Docker Compose
- Prometheus
- Grafana

## Endpoints

- `GET /` → Hello World
- `GET /metrics` → Prometheus metrics

## How to Run
```bash
cd app
docker-compose up -d
```

## Screenshots

### Nginx Load Balancer
![Nginx](screenshots/nginx.png)

### Docker Compose Services
![Docker](screenshots/docker.png)

### Prometheus Targets
![Prometheus](screenshots/prometheus.png)

### Grafana Dashboard
![Grafana](screenshots/grafana.png)
