Development configuration for the Multi-Repo structure.

Configuration is used for the following stack:

- NEXT.js
- strapi
- PostgreSQL

The project structure should be:

```
.
├── cms
│   └── .dockerignore
├── dev-config
│   ├── docker-compose.yml
│   ├── Dockerfile.cms
│   ├── Dockerfile.frontend
│   └── README.md
└── frontend
    └── .dockerignore
```

- `cms` - strapi
- `dev-config` - current repo
- `frontend` - NEXT.js
