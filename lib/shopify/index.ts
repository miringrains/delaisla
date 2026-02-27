/**
 * Shopify Storefront API Integration
 *
 * This module will house all Shopify Storefront GraphQL queries,
 * mutations, and type definitions following the Vercel Commerce pattern.
 *
 * Required env vars (see .env.example):
 *   SHOPIFY_STOREFRONT_ACCESS_TOKEN
 *   SHOPIFY_STORE_DOMAIN
 */

export const SHOPIFY_STOREFRONT_API_VERSION = "2024-10";

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !token) {
    throw new Error(
      "Missing SHOPIFY_STORE_DOMAIN or SHOPIFY_STOREFRONT_ACCESS_TOKEN env vars"
    );
  }

  const endpoint = `https://${domain}/api/${SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors.map((e: { message: string }) => e.message).join("\n"));
  }

  return json.data as T;
}
