# Tripleten web_project_around

Nombre del Proyecto:

AROUND  THE U.S.

Descripción del Proyecto y su Funcionalidad
AROUND THE U.S. es una página web interactiva que permite a los usuarios explorar destinos emblemáticos a través de una galería de imágenes. La experiencia se enriquece con la posibilidad de interactuar de múltiples formas: los usuarios pueden editar su perfil, agregar nuevos lugares a la galería, marcar sus destinos favoritos con el icono de “me gusta”, eliminar tarjetas mediante una ventana de confirmación y actualizar su foto de perfil. Todo ello está integrado con un backend remoto, de manera que la información del usuario y las tarjetas se cargan y actualizan dinámicamente a través de una API.

Entre las mejoras implementadas se destacan:

Integración con la API: Se realizan solicitudes GET, POST, PATCH, PUT y DELETE para cargar y actualizar tanto la información del usuario como las tarjetas.
Interfaz interactiva y responsive: Los popups se abren y cierran de manera fluida (incluyendo transiciones como “Guardando…” durante las solicitudes) y la página se adapta a distintas resoluciones.
Experiencia de usuario mejorada: Al editar el perfil o actualizar el avatar, el botón muestra el estado “Guardando…” mientras se procesa la solicitud, mejorando la retroalimentación visual.
Gestión de tarjetas: Los usuarios pueden agregar nuevas tarjetas, dar “me gusta” (con la actualización inmediata del icono), y eliminar tarjetas mediante una ventana emergente de confirmación para evitar borrados accidentales.

Tecnologías y Técnicas Utilizadas
Frontend:

HTML: Estructura semántica y accesible del contenido.

CSS: Estilizado y diseño con metodología BEM. Se utilizan Flexbox y Grid Layout para lograr un diseño responsive y transiciones suaves para popups y elementos interactivos (como el cambio de color del icono de “me gusta”).

JavaScript (ES6):
Programación orientada a objetos, con clases separadas para cada componente (Card, Popup, PopupWithImage, PopupWithForm, PopupWithConfirmation, Api, UserInfoProject, FormValidator y Section).

Integración con la API mediante fetch para cargar y actualizar datos.
Manejo de eventos para la apertura y cierre de popups, validación de formularios y actualización dinámica del DOM.
Herramientas de Desarrollo:

Visual Studio Code: IDE para escribir, formatear y depurar el código.

Git y GitHub: Control de versiones y colaboración en el desarrollo del proyecto.


Experiencia Personal
Este proyecto representa un gran avance en mi carrera como desarrolladora web. AROUND THE U.S. me permitió integrar conceptos fundamentales de programación orientada a objetos y la interacción con una API real, además de afianzar mis conocimientos en HTML, CSS y JavaScript. Cada nueva funcionalidad –como la validación de formularios, la gestión de popups y la integración con el servidor– fue un desafío que me ayudó a crecer y a consolidar mis habilidades. La experiencia de ver el proyecto funcionar de forma interactiva y en tiempo real es realmente gratificante y me motiva a seguir avanzando en mi camino como desarrolladora.



Sitio web del proyecto:

https://lina079.github.io/web_project_around/

