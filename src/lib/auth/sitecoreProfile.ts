export enum SitecoreCustomClaims {
  ORG_DISPLAY_NAME = "https://auth.sitecorecloud.io/claims/org_display_name",
  ORG_TYPE = "https://auth.sitecorecloud.io/claims/org_type",
  ORG_ID = "https://auth.sitecorecloud.io/claims/org_id",
  ORG_ACC_ID = "https://auth.sitecorecloud.io/claims/org_account_id",
  TENANT_NAME = "https://auth.sitecorecloud.io/claims/tenant_name",
  TENANT_ID = "https://auth.sitecorecloud.io/claims/tenant_id",
  ROLES = "https://auth.sitecorecloud.io/claims/roles",
}

export interface SitecoreProfile extends Record<string, any> {
  sub: string;
  nickname: string;
  email: string;
  picture: string;
  orgId?: string;
  orgDisplayName?: string;
  orgType?: string;
  orgAccId?: string;
  tenantName?: string;
  tenantId?: string;
  roles?: string[];
}
