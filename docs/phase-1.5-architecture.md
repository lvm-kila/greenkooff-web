# Fase 1.5 — Endurecimiento arquitectónico (Mock client / Server ready)

## Objetivo
Esta fase separa explícitamente **UI**, **lógica de aplicación**, **adapters de infraestructura** y **dominio/shared** para mantener el modo mock actual y preparar la migración posterior a Cognito, DynamoDB y Oneclick sin reescritura de pantallas.

## Capas resultantes

### 1) Presentation / UI (`src/app`, `src/components`, `src/hooks`)
- Las páginas App Router y componentes siguen renderizando UX y formularios.
- La UI dejó de invocar directamente repositorios/proveedores sensibles para casos de negocio críticos.
- Se creó `useRequireAuth` para centralizar redirecciones de rutas privadas.

### 2) Application layer (`src/lib/application/*`)
Servicios/casos de uso agregados:
- `AuthApplicationService`:
  - `login`, `register`, `logout`
  - `getCurrentSession`
  - `recoverAccess`
- `SubscriptionsApplicationService`:
  - `resolvePlanForContract`
  - `createContractDraft`
  - `createPendingSubscription`
  - `getContractOverview`
  - `getAccountSnapshot`
- `BillingApplicationService`:
  - `continueToPaymentEnrollment`
- Guard de aplicación:
  - `ensureAuthenticatedAccess(session, nextUrl)`

### 3) Infrastructure adapters (`src/lib/infrastructure/*`)
- `authAdapter`: selecciona `mock` o `cognito` scaffold según runtime.
- `subscriptionsAdapter`: selecciona `mock` o `dynamodb` scaffold según runtime.
- `billingAdapter`: selecciona `mock` o `oneclick` scaffold según runtime.

> Esta capa es reemplazable sin impacto en UI porque los contratos los consume la capa application.

### 4) Shared / Domain (`src/lib/domain`, `src/lib/*/types`)
- Se mantuvieron los tipos de dominio y DTOs existentes.
- Se reforzó la consistencia vía contratos explícitos en application (`contracts.ts`) para evitar que UI dependa de detalles de infraestructura.

## Runtime y wiring

### Service locator liviano
- `src/lib/runtime/services.ts` expone `getRuntimeServices()` con singleton en cliente.
- Entrega: `{ auth, subscriptions, billing }` ya cableados con adapters según `runtimeConfig`.
- Evita sobre-ingeniería (sin contenedor IoC complejo) y deja un punto único de reemplazo.

## Protección de rutas privadas
- Nuevo hook: `src/lib/guards/useRequireAuth.ts`.
- Implementa patrón único:
  1. Lee sesión (`useAuth`).
  2. Ejecuta `ensureAuthenticatedAccess`.
  3. Redirige a login con `next` cuando corresponde.
- Páginas privadas (`/mi-cuenta`, `/mi-cuenta/suscripcion`, `/mi-cuenta/pagos`, `/contratar/[slug]`) quedaron normalizadas con esta abstracción.

## Contratación y lifecycle de suscripción
La contratación se dejó modelada por casos de uso:
1. Resolver plan (`resolvePlanForContract`).
2. Verificar acceso autenticado (`useRequireAuth` + `ensureAuthenticatedAccess`).
3. Crear intención (`createPendingSubscription`, sobre draft/subscription mock).
4. Consultar overview para cuenta (`getContractOverview`).
5. Continuar inscripción de pago (`continueToPaymentEnrollment`).

Estados contemplados y mantenidos para Oneclick futuro:
- `pending_payment_method`
- `pending_activation`
- `active`
- demás estados ya definidos por dominio

## Preparación específica para fase AWS

### Para Cognito
- Punto de reemplazo: `src/lib/infrastructure/auth/index.ts`.
- UI consume `AuthApplicationService` vía contexto/runtime, no el provider directo.
- Próximo paso: cambiar implementación `cognitoAuthProvider` a backend real/session real.

### Para DynamoDB
- Punto de reemplazo: `src/lib/infrastructure/data/index.ts`.
- UI consume `SubscriptionsApplicationService`; repositorio real puede vivir tras API/server actions.
- Próximo paso: mover operaciones sensibles a endpoints server-side manteniendo contratos.

### Para Oneclick
- Punto de reemplazo: `src/lib/infrastructure/billing/index.ts`.
- UI consume `BillingApplicationService` con `continueToPaymentEnrollment`.
- Próximo paso: reemplazar mock enrollment por handlers server-side (init/confirm webhook/estado).

## Qué se mantiene en frontend vs backend (fase siguiente)

### Se mantiene frontend
- Formularios, estados visuales, páginas y componentes.
- Hooks de UX y renderizado de snapshots.
- Navegación App Router.

### Debe pasar a backend real en fase AWS
- Validación de sesión/autorización robusta.
- Mutaciones de contratación/suscripción.
- Enrolamiento y confirmaciones de medio de pago.
- Persistencia y lectura de datos de cuenta/facturación.

## Notas de compatibilidad
- Modo mock sigue operativo.
- No se agregaron secretos.
- No se introdujo runtime Edge.
- Build y lint quedan habilitados para CI/CD y deploy en Amplify.
