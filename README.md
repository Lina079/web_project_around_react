Alrededor de los EE. UU. (React)
Repositorio: https://github.com/Lina079/web_project_around_react

Una SPA en React que consume una API REST para explorar, crear, editar y eliminar tarjetas de lugares “alrededor de los Estados Unidos”.

🖥️ Visión general
Galería de tarjetas con imagen y nombre de cada lugar.

Funcionalidad de dar “like”, eliminar o ampliar la foto.

Formularios para añadir nuevas tarjetas, editar perfil (nombre y descripción) y cambiar avatar (URL).

Sincronización en tiempo real con el servidor mediante llamadas a la API.

✨ Características
1. Carga inicial

* Obtiene usuario y lista de tarjetas al   iniciar la app.

2. Contexto de usuario

* CurrentUserContext para compartir datos de currentUser en toda la aplicación.

3. CRUD de tarjetas

* GET /cards

* POST /cards (añadir con loader “Creando…”)

* DELETE /cards/:id (confirmación en popup)

* PUT/DELETE /cards/:id/likes (toggle “like”)

4. Formularios controlados y con validación

* Mensajes de error en línea (validationMessage).

* Indicadores de carga: “Creando…”, “Guardando…”.

5. Editar perfil

* Popup con campos Nombre y Acerca de mí, validación de longitud, loader “Guardando…”.

6. Editar avatar

* Input de URL gestionado con useRef, validación nativa, loader “Guardando…”, campo limpio al abrir.

7. Popups accesibles (Popup.jsx y ImagePopup.jsx)

* Cierre por botón “×”, tecla Esc y click en backdrop.

* Reutilizables para todos los modales.

 🛠️ Tecnologías, herramientas y lenguajes

- **Entorno de desarrollo**  
  - Node.js (v14+) & npm / Yarn  
  - Vite (bundler rápido)  
  - Git / GitHub para control de versiones  
  - Visual Studio Code (IDE)  
  - Chrome DevTools (depuración y Network Throttling)  
- **Lenguajes**  
  - JavaScript (ES6+)  
  - HTML5 (JSX)  
  - CSS3 (Grid, Flexbox, media queries)  
- **Librerías y dependencias**  
  - React 18  
  - React DOM  
  - (Opcional) PropTypes  
  - Prettier / ESLint para estilo de código  

  ## 🎣 Hooks de React usados

- **useState**  
  Para gestionar estado local en cada formulario, listas de tarjetas, loaders, errores…  
- **useEffect**  
  Para llamadas a la API al montar, validación en tiempo real y capturar eventos de teclado.  
- **useContext**  
  Para compartir `currentUser` y su actualización sin “prop drilling”.  
- **useRef**  
  Para leer directamente el valor del input de avatar y optimizar formularios sin estado controlado.  

---

 🚀 Instalación y ejecución

1. Clona el repositorio:  
   ```bash
   git clone https://github.com/Lina079/web_project_around_react.git
   cd web_project_around_react


© 2025 Lina Castro Rodríguez

