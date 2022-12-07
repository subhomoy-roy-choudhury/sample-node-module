const RoutePermissions = {
  admin: {
    "/vendor/": {
      regex: "\/vendor\/",
      methods: {
        POST: true,
        DELETE: true,
      },
    },
    "/vendor/${vendor_id}/": {
      regex: "\/vendor\/",
      methods: {
        DELETE: true,
      },
    },
    "/v1.0/org/{orgID}/apps/{appID}": {
      regex: "\/v1\.0\/org\/[+-]?\d{1,10}\/apps\/\d{1,10}",
      methods: {
        GET: true,
      },
    },
  },
  supervisor: {
    "/vendor/": {
        regex: "/vendor/",
        methods: {
          POST: true,
          DELETE: false,
        },
      },
      "/vendor/${vendor_id}/": {
        regex: "",
        methods: {
          DELETE: false,
        },
      },
      "/v1.0/org/{orgID}/apps/{appID}": {
        regex: "/v1.0/org/[+-]?d{1,10}/apps/d{1,10}",
        methods: {
          GET: true,
        },
      },
  },
};
