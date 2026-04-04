# Próximos pasos para integración real (AWS + Oneclick)

## 1) Cognito
- Crear User Pool con email como username.
- Definir App Client para SPA/SSR con flujos permitidos.
- Configurar políticas de contraseña y recuperación.
- Mapear atributos (`name`, `email`, `custom:company`).
- Implementar `cognitoAuthProvider` con SDK AWS/Amplify según estrategia.

## 2) DynamoDB
- Tablas sugeridas:
  - `users`
  - `subscriptions`
  - `billing_events`
  - `payment_methods`
- Definir PK/SK y GSI por `userId`.
- Implementar repositorio `dynamodbDataRepository` con validación de idempotencia para cobros/eventos.

## 3) Transbank Oneclick
- Implementar `oneclickBillingProvider`:
  - inicio de inscripción
  - confirmación de inscripción
  - almacenamiento de `tbkUser` + `username` tokenizado
- Registrar eventos de billing y estado de suscripción en repositorio.

## 4) Amplify SSR runtime / variables
- Definir variables por ambiente (dev/stg/prod).
- Configurar secretos solo en runtime seguro (no `NEXT_PUBLIC_*` para llaves privadas).
- Revisar despliegue Next.js SSR en Amplify sin Edge runtime.

## 5) Hardening recomendado
- middleware de auth server-side para secciones privadas.
- auditoría de logs y trazabilidad de eventos de cobro.
- pruebas E2E del flujo: registro → contratar → enrolar pago → activar.
