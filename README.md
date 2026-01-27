Agenda web

Para el funcionamiento correcto de la agenda web se realizo un cambio importante en el flujo de la aplicacion para que fuese funcional siendo este la eliminacion de app.html para crear un unico archivo raiz html siendo este index.html

Ahora bien el flujo de la aplicacion es simple

Primera pantalla: (El login)
Muestra un login al ingresar a la pagina, el login no esta completado es una version demo que unicamente verifica si en usuario existe o esta en el input la palabra "admin"

IMPORTANTE:
para entrar a la aplicacion debe colocarse admin en usuario y dar en iniciar sesion para llamar al callback correspondiente y que pueda dar acceso a la app

Segunda pantalla: (La app)
En esta pantalla contamos con un menu lateral responsive (funcional tambien desde dispositivos moviles aunque no tan comodo) en el cual tenemos las siguientes opciones:
-- Usuario : No lleva a nada no se implemento
-- Agenda : Muestra la lista con las que cuenta el usuario guardados en LocalStorage ademas de permitir ver la informacion detallada de cada contacto al dar click sobre la tarjeta del mismo que despliega
        - Informacion completa del usuario
        - Posibilidad de editar o eliminar el usuario
-- Agregar Contacto: Muestra un form para agregar contato con la opcion de cancelar o agregar
-- To Do List: Muestra un boton para agregar tareas o que lleva al formulario de agregar tarea y las tareas organizadas de manera que permite observar:
    - el titulo de la tarea
    - La prioridad
    - La fecha maxima
    - Botones para editar / eliminar la tarea 
-- Agregar Tarea : Envia un formulario para agregar una nueva tarea con la opcion de guardar o cancelar y luego enviar a la lista de tareas

Unicamente seria el flujo de la aplicacion 
