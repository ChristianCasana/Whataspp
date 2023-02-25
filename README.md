[X] Manejar usuarios
[X] Esos usuarios puedan iniciar sesión
[X] Crear conversaciones
[X] Leer las conversaciones de las cuales son miembros
[X] Crear grupos de conversación
[X] Enviar mensajes
[X] Eliminar mensajes

- Confirmación de lectura del mensaje
- Manejar foto de perfil
- Reenviar un mensaje
- Crear links para invitar gente a un grup

![Database Diagram](https://i.imgur.com/IHhtWv2.png)

Ejemplo de respuestas:

```Javascript
{
  error: false,
  status: 201,
  message: 'User created ssuccesfully',
  data: {
    id: 5,
    firstName: 'Christian',
    ...
  }
}
```