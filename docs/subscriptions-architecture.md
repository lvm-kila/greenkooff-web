# Arquitectura base de suscripciones (fase mock)

## Objetivo
Esta fase implementa una base funcional para suscripciones mensuales sin integrar AWS ni Transbank reales.

## Capas
- **Dominio**: `src/lib/domain/types.ts` define `UserProfile`, `AuthUser`, `SubscriptionPlan`, `Subscription`, `PaymentMethod`, `BillingEvent`, `ContractDraft` y estados.
- **Auth**: interfaz en `src/lib/auth/types.ts`, selector en `src/lib/auth/provider.ts`, provider mock en `src/lib/auth/providers/mock.ts`, scaffold Cognito en `src/lib/auth/providers/cognito.ts`.
- **Data**: interfaz en `src/lib/data/types.ts`, selector en `src/lib/data/provider.ts`, repo mock con `localStorage` en `src/lib/data/providers/mock.ts`, scaffold DynamoDB en `src/lib/data/providers/dynamodb.ts`.
- **Billing / enrollment**: contrato en `src/lib/billing/types.ts`, selector en `src/lib/billing/provider.ts`, mock enrollment en `src/lib/billing/providers/mock.ts`, scaffold Oneclick en `src/lib/billing/providers/oneclick.ts`.

## Configuración runtime
`src/lib/config/runtime.ts` lee:
- `NEXT_PUBLIC_AUTH_PROVIDER`
- `NEXT_PUBLIC_DATA_PROVIDER`
- `NEXT_PUBLIC_PAYMENTS_PROVIDER`

Default: `mock`.

## Flujo de contratación implementado
1. Usuario visita Home / Planes.
2. CTA `Contratar plan` → `/contratar/[slug]`.
3. Si no hay sesión: redirect a `/auth/login?next=/contratar/[slug]`.
4. Login/Register mock funcional.
5. Confirmación de plan con pricing recalculado desde catálogo interno (`src/lib/billing/plans.ts` + `src/lib/billing/pricing.ts`).
6. Confirmación crea `ContractDraft` y `Subscription` en estado `pending_payment_method`.
7. Redirect a `/suscripcion/exito`.
8. En `/mi-cuenta/pagos` se puede simular inscripción de método (mock), pasando a `pending_activation`.

## Mi cuenta
- `/mi-cuenta`: resumen perfil + estado de suscripción.
- `/mi-cuenta/suscripcion`: plan y próximo paso.
- `/mi-cuenta/pagos`: método de pago mock e historial de eventos mock.

## Persistencia mock
- Auth: usuarios + sesión mock en `localStorage`.
- Data: drafts/suscripciones/pagos/eventos en `localStorage`.

## Evolución esperada
Cambiar providers por `cognito`, `dynamodb`, `oneclick` sin reescribir pantallas ni flujo.
