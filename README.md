# FASE B: ARQUITECTURA DE NEGOCIO
## Aplicada al Proceso de Matrículas de la Universidad Peruana Unión (UPEU)
### Marco de Referencia: TOGAF ADM (Architecture Development Method)

---

## 1. INTRODUCCIÓN DE LA FASE B

La Fase B del método de desarrollo arquitectónico TOGAF ADM (Architecture Development Method) corresponde a la definición de la **Arquitectura de Negocio**. Esta fase constituye el primer nivel de arquitectura específica dentro del ciclo ADM, y tiene por objetivo comprender, modelar y rediseñar la estructura funcional de los procesos de negocio de una organización, estableciendo la base sobre la cual se edificarán las arquitecturas de datos, aplicaciones y tecnología en fases posteriores.

En el contexto de la **Universidad Peruana Unión (UPEU)**, institución de educación superior de orientación adventista con presencia en múltiples sedes a nivel nacional, la Fase B se aplica al proceso de matrícula estudiantil, el cual representa uno de los procesos de negocio más críticos y transversales de la organización académica. Este proceso involucra múltiples actores institucionales, sistemas de información, flujos documentales y validaciones que determinan la habilitación académica del estudiante para el periodo lectivo correspondiente.

La justificación de aplicar TOGAF ADM a este proceso radica en la necesidad de contar con una visión holística, estructurada y alineada con los objetivos estratégicos de la institución. La matrícula no es un proceso aislado; es el punto de convergencia entre la gestión académica, la gestión financiera, la atención al estudiante y el cumplimiento normativo institucional. Por ello, su análisis, modelado y rediseño bajo el marco TOGAF garantiza que cualquier mejora propuesta esté articulada con la arquitectura empresarial global de la UPEU.

El presente documento desarrolla de manera formal y exhaustiva cada uno de los componentes que conforman la Fase B, desde el análisis del estado actual del proceso (AS-IS), pasando por la identificación de actores, subprocesos y brechas, hasta la propuesta del estado futuro deseado (TO-BE), con el análisis de beneficios esperados y conclusiones fundamentadas en los principios de TOGAF.

---

## 2. OBJETIVO DE LA ARQUITECTURA DE NEGOCIO

### 2.1 Objetivo General

Definir y documentar la Arquitectura de Negocio del proceso de matrícula de la Universidad Peruana Unión, identificando su estado actual, sus deficiencias estructurales y proponiendo un modelo optimizado que mejore la eficiencia operativa, la experiencia del estudiante y la integración entre los actores institucionales involucrados, todo ello alineado con los principios y directrices del marco TOGAF ADM.

### 2.2 Objetivos Específicos

- Describir con precisión el proceso actual de matrícula (AS-IS), identificando cada actividad, actor responsable, canal de interacción y flujo de información.
- Identificar los puntos críticos, cuellos de botella, redundancias y deficiencias presentes en el proceso actual.
- Modelar el proceso futuro mejorado (TO-BE), incorporando principios de automatización, integración sistémica y mejora continua.
- Establecer el análisis de brechas (GAP Analysis) entre el estado actual y el estado deseado.
- Proporcionar una base sólida para el desarrollo de las fases subsiguientes del ADM (Arquitectura de Datos, Aplicaciones y Tecnología).
- Garantizar que el rediseño del proceso esté alineado con la visión estratégica institucional de la UPEU y con los estándares de calidad académica y administrativa.

### 2.3 Alcance de la Arquitectura de Negocio

El alcance de la presente Fase B comprende el proceso de matrícula estudiantil en su totalidad, desde el momento en que el estudiante acepta el compromiso de honor institucional hasta la entrega del documento correspondiente en la facultad y la verificación médica requerida. Este alcance incluye tanto las etapas de gestión virtual (realizadas a través de plataformas digitales) como las etapas presenciales que requieren la asistencia física del estudiante en las instalaciones de la universidad.

---

## 3. DESCRIPCIÓN DEL PROCESO ACTUAL DE MATRÍCULA UPEU

### 3.1 Contexto Institucional

La Universidad Peruana Unión opera un modelo de matrícula semestral que combina actividades en línea con actividades presenciales. Este modelo híbrido responde a la naturaleza de la institución y a los requisitos normativos de la Superintendencia Nacional de Educación Superior Universitaria (SUNEDU), así como a las políticas internas de la UPEU relacionadas con el compromiso académico, financiero y de salud del estudiante.

El proceso de matrícula afecta a la totalidad del estudiantado activo de la institución en cada periodo académico, lo que lo convierte en un proceso de alta demanda, con picos de carga concentrados en periodos cortos y con repercusiones directas sobre la planificación académica, la asignación de aulas, la proyección financiera y la gestión del personal docente y administrativo.

### 3.2 Descripción Paso a Paso del Proceso Actual

El proceso de matrícula en su estado actual (AS-IS) se desarrolla mediante ocho etapas secuenciales claramente definidas, que se describen a continuación:

**Etapa 1 – Aceptación del Compromiso de Honor**
El proceso se inicia con la lectura y aceptación formal del compromiso de honor institucional por parte del estudiante. Este documento establece las normas de convivencia, los valores institucionales y los compromisos académicos y éticos que el estudiante asume al ser parte de la comunidad universitaria de la UPEU. Esta etapa se realiza a través del sistema virtual de la universidad. La aceptación es un prerrequisito indispensable para continuar con las etapas siguientes.

**Etapa 2 – Validación de Datos Personales**
Una vez aceptado el compromiso de honor, el sistema solicita al estudiante la validación y actualización de sus datos personales. Esto incluye información de identificación, dirección de residencia, datos de contacto, información familiar y otros campos requeridos por la institución. Esta etapa es también virtual y tiene como objetivo garantizar que la base de datos institucional cuente con información actualizada y confiable del estudiante.

**Etapa 3 – Validación del Responsable Financiero**
En esta etapa, el estudiante debe registrar o validar los datos del responsable financiero, es decir, la persona que asumirá las obligaciones económicas derivadas de la matrícula y los servicios educativos. Esta validación incluye datos de identificación, relación con el estudiante, información de contacto y, en algunos casos, capacidad económica declarada. Al igual que las etapas anteriores, esta actividad se realiza de manera virtual.

**Etapa 4 – Selección de Cursos**
El estudiante procede a seleccionar los cursos correspondientes a su plan de estudios para el periodo académico. El sistema muestra la oferta de asignaturas disponibles según el ciclo, la carrera y los prerrequisitos cumplidos. Esta etapa es crítica porque determina la carga académica del estudiante y tiene impacto directo en la planificación de horarios y recursos docentes. Se realiza de manera virtual a través del sistema de gestión académica.

**Etapa 5 – Generación de Pre-Matrícula**
Una vez seleccionados los cursos, el sistema genera un documento de pre-matrícula que consolida la selección académica del estudiante. Este documento sirve como constancia provisional y base para la generación de los documentos definitivos. La pre-matrícula puede estar sujeta a validación por parte de la facultad o coordinación académica. Esta etapa es virtual.

**Etapa 6 – Generación del Contrato**
Con la pre-matrícula confirmada, el sistema genera el contrato de prestación de servicios educativos entre el estudiante (y/o su responsable financiero) y la institución. Este contrato establece las condiciones económicas, el monto de las pensiones, las fechas de pago, las condiciones de mora y otros aspectos legales y financieros relevantes. Dependiendo del flujo específico, esta etapa puede requerir confirmación o firma electrónica del estudiante.

**Etapa 7 – Entrega del Compromiso de Honor (Facultad)**
Esta etapa marca la transición del proceso virtual al proceso presencial. El estudiante debe acudir físicamente a su facultad para entregar el compromiso de honor firmado en formato físico. Esta actividad implica desplazamiento, atención presencial por parte del personal administrativo de la facultad y registro manual del documento. Esta etapa representa una ruptura en el flujo digital del proceso.

**Etapa 8 – Centro Médico (Alumnos que no pasaron en el 2018-I)**
La última etapa del proceso aplica a un segmento específico del estudiantado: aquellos alumnos que no completaron el proceso de revisión médica en el semestre 2018-I. Estos estudiantes deben acudir presencialmente al centro médico de la universidad para regularizar su situación de salud como requisito para formalizar su matrícula. Esta etapa es selectiva, presencial y, en el contexto actual, puede considerarse un remanente de una condición no resuelta de periodos anteriores.

---

## 4. MODELO AS-IS DEL PROCESO

### 4.1 Representación del Flujo AS-IS

El proceso AS-IS puede representarse como un flujo secuencial lineal con dos modalidades de interacción: virtual y presencial. La siguiente descripción narrativa del flujo sirve como base para el modelado formal en notaciones como BPMN (Business Process Model and Notation):

```
INICIO
  │
  ▼
[VIRTUAL] Paso 1: Aceptación del Compromiso de Honor
  │
  ▼
[VIRTUAL] Paso 2: Validación de Datos Personales
  │
  ▼
[VIRTUAL] Paso 3: Validación del Responsable Financiero
  │
  ▼
[VIRTUAL] Paso 4: Selección de Cursos
  │
  ▼
[VIRTUAL] Paso 5: Generación de Pre-Matrícula
  │
  ▼
[VIRTUAL] Paso 6: Generación del Contrato
  │
  ▼
[PRESENCIAL] Paso 7: Entrega del Compromiso de Honor en Facultad
  │
  ▼
[PRESENCIAL - Condicional] Paso 8: Centro Médico (si aplica)
  │
  ▼
FIN: Matrícula Formalizada
```

### 4.2 Características del Modelo AS-IS

- **Naturaleza secuencial estricta**: Cada etapa depende de la finalización de la anterior; no existe paralelismo ni procesamiento concurrente.
- **Hibridez virtual-presencial**: Las primeras seis etapas son virtuales, mientras que las dos últimas son presenciales, generando una discontinuidad en la experiencia del usuario.
- **Validaciones aisladas**: Las validaciones de datos personales, financieros y académicos se realizan en etapas separadas sin integración sistémica entre sí.
- **Dependencia de intervención manual**: Especialmente en las etapas presenciales, el proceso depende de la disponibilidad y eficiencia del personal administrativo.
- **Condicionalidad no automatizada**: La Etapa 8 aplica solo a un subconjunto de estudiantes, pero su identificación y gestión no está completamente automatizada.

---

## 5. IDENTIFICACIÓN DE PROBLEMAS DEL PROCESO ACTUAL

### 5.1 Problemas Estructurales

**5.1.1 Ruptura del Flujo Digital**
La transición abrupta del canal virtual al canal presencial en la Etapa 7 representa la principal ruptura del flujo del proceso. Esta discontinuidad obliga al estudiante a realizar un desplazamiento físico para una actividad que, en esencia, podría resolverse mediante firma electrónica o mecanismos digitales equivalentes. Esta situación genera costos de tiempo, transporte y congestión en los espacios físicos de la facultad durante los periodos de matrícula.

**5.1.2 Fragmentación de Validaciones**
Las validaciones de datos personales (Etapa 2) y del responsable financiero (Etapa 3) se realizan en etapas distintas y de manera aislada, sin integración con otras fuentes de datos institucionales (como el sistema de pagos, el registro histórico académico o bases de datos externas de identificación). Esto genera redundancia de datos y potencial inconsistencia entre los distintos repositorios de información.

**5.1.3 Ausencia de Paralelismo**
El proceso es estrictamente secuencial, lo que impide la ejecución paralela de actividades que no tienen dependencias entre sí. Por ejemplo, la validación financiera podría iniciarse simultáneamente con la validación de datos personales, reduciendo el tiempo total del proceso.

**5.1.4 Gestión Manual de Documentos Físicos**
La entrega física del compromiso de honor en la facultad implica la gestión y archivo de documentos en soporte papel, con los riesgos asociados: pérdida de documentos, deterioro, dificultad de consulta posterior, necesidad de espacio físico de almacenamiento y ausencia de trazabilidad digital.

### 5.2 Problemas Operativos

**5.2.1 Congestión en Picos de Demanda**
Durante los periodos de matrícula, las facultades y el centro médico experimentan alta afluencia de estudiantes, generando colas, tiempos de espera prolongados y sobrecarga del personal administrativo. La falta de gestión de turnos o citas previas agrava esta situación.

**5.2.2 Duplicidad de Ingreso de Datos**
Los estudiantes ingresan información personal y financiera que, en muchos casos, ya existe en los sistemas institucionales de periodos anteriores. La ausencia de mecanismos de reutilización y verificación automática de datos preexistentes genera trabajo redundante tanto para el estudiante como para el personal administrativo.

**5.2.3 Falta de Retroalimentación en Tiempo Real**
El proceso no cuenta con mecanismos suficientes de notificación y retroalimentación al estudiante durante las etapas de validación. Esto genera incertidumbre y puede llevar a que los estudiantes acudan presencialmente para consultar el estado de su matrícula, incrementando la carga en ventanillas y puntos de atención.

**5.2.4 Gestión Deficiente de Casos Especiales**
La Etapa 8, destinada a estudiantes con pendientes médicos del 2018-I, no cuenta con un flujo diferenciado y automatizado. La identificación de estos estudiantes y el seguimiento de su cumplimiento se realiza de manera manual o semiautomática, lo que puede resultar en omisiones o duplicaciones en el control.

### 5.3 Problemas Sistémicos

**5.3.1 Baja Integración entre Sistemas**
Los sistemas que intervienen en el proceso (gestión académica, gestión financiera, centro médico, secretaría de facultad) operan con bajo nivel de integración, lo que implica que la información no fluye automáticamente entre ellos y requiere intervención humana para la sincronización de estados.

**5.3.2 Ausencia de Trazabilidad Completa**
No existe un mecanismo centralizado que permita conocer en tiempo real el estado exacto de la matrícula de cada estudiante, identificar en qué etapa se encuentra, qué etapas ha completado y cuáles son los pendientes. Esta ausencia de trazabilidad dificulta la gestión, el reporte y la toma de decisiones.

---

## 6. ANÁLISIS DE ACTORES DEL NEGOCIO

### 6.1 Identificación de Actores

Los actores del negocio son aquellas entidades (personas, unidades organizativas o sistemas) que participan activamente en el proceso de matrícula, ya sea como ejecutores de actividades, receptores de servicios o proveedores de información y recursos.

**6.1.1 Estudiante**
Es el actor principal y beneficiario del proceso. Inicia y ejecuta la mayor parte de las etapas virtuales del proceso. Su experiencia, satisfacción y eficiencia en la completitud del proceso son los principales indicadores de calidad del servicio.

**6.1.2 Responsable Financiero**
Es el actor que asume las obligaciones económicas del estudiante ante la institución. Participa en la Etapa 3 como sujeto de validación de datos. Su información es crítica para la generación del contrato en la Etapa 6.

**6.1.3 Oficina de Registro y Admisión (ORA)**
Unidad administrativa responsable de la gestión global del proceso de matrícula. Define las reglas del proceso, supervisa su ejecución, gestiona los sistemas y atiende los casos de excepción y resolución de problemas.

**6.1.4 Facultad / Escuela Profesional**
Unidad académica que recibe los documentos físicos en la Etapa 7 y que tiene responsabilidad sobre la validación académica de la selección de cursos del estudiante. Interviene también en la resolución de conflictos de horario y en la gestión de casos especiales.

**6.1.5 Oficina de Gestión Financiera**
Unidad responsable de la verificación de la situación económica del estudiante, la generación del contrato de servicios y el seguimiento del cumplimiento de obligaciones financieras. Interviene principalmente en las Etapas 3 y 6.

**6.1.6 Centro Médico Universitario**
Unidad de salud institucional que interviene en la Etapa 8 para la revisión y certificación del estado de salud de los estudiantes con pendientes médicos. Su participación es condicional y presencial.

**6.1.7 Sistema de Gestión Académica (SGA)**
Actor sistémico que soporta las etapas virtuales del proceso. Es la plataforma a través de la cual el estudiante realiza la aceptación del compromiso de honor, la validación de datos, la selección de cursos y la generación de documentos.

**6.1.8 Sistema de Gestión Financiera (SGF)**
Actor sistémico que gestiona la información del responsable financiero, verifica obligaciones previas y genera el contrato de servicios educativos.

### 6.2 Matriz de Responsabilidades (RACI)

| Actividad | Estudiante | ORA | Facultad | Gest. Financiera | Centro Médico | SGA | SGF |
|---|---|---|---|---|---|---|---|
| Aceptar Compromiso de Honor | R | A | I | I | I | S | - |
| Validar Datos Personales | R | A | I | I | - | S | - |
| Validar Responsable Financiero | R | A | - | C | - | S | S |
| Seleccionar Cursos | R | A | C | - | - | S | - |
| Generar Pre-Matrícula | I | A | C | - | - | R | - |
| Generar Contrato | I | A | - | R | - | S | R |
| Entregar Compromiso (Facultad) | R | A | R | - | - | - | - |
| Revisión Centro Médico | R | A | - | - | R | - | - |

*R: Responsable, A: Aprobador, C: Consultado, I: Informado, S: Soporte sistémico*

---

## 7. ANÁLISIS DE PROCESOS, SUBPROCESOS Y ACTIVIDADES

### 7.1 Descomposición del Proceso de Matrícula

El proceso de matrícula puede descomponerse en tres grandes macroprocesos:

**Macroproceso 1: Habilitación para la Matrícula**
Comprende las etapas de verificación de requisitos previos que el estudiante debe cumplir antes de iniciar formalmente el proceso de selección académica.
- Subproceso 1.1: Verificación de compromiso institucional (Etapa 1)
- Subproceso 1.2: Verificación de identidad y datos personales (Etapa 2)
- Subproceso 1.3: Verificación de responsabilidad financiera (Etapa 3)

**Macroproceso 2: Registro Académico**
Comprende las actividades relacionadas con la selección y formalización de la carga académica del estudiante.
- Subproceso 2.1: Selección de asignaturas (Etapa 4)
- Subproceso 2.2: Generación de pre-matrícula (Etapa 5)
- Subproceso 2.3: Generación y formalización del contrato (Etapa 6)

**Macroproceso 3: Formalización Presencial**
Comprende las actividades que requieren la presencia física del estudiante en la institución.
- Subproceso 3.1: Entrega documental en facultad (Etapa 7)
- Subproceso 3.2: Revisión y certificación médica (Etapa 8, condicional)

### 7.2 Actividades por Subproceso

**Subproceso 1.1 – Verificación de Compromiso Institucional**
- Acceder al portal de matrícula con credenciales institucionales
- Leer el contenido del compromiso de honor
- Confirmar la lectura y aceptación mediante clic o firma digital
- El sistema registra la aceptación con fecha y hora (timestamp)
- El sistema habilita el acceso a la etapa siguiente

**Subproceso 1.2 – Verificación de Identidad y Datos Personales**
- El sistema pre-carga los datos existentes del estudiante
- El estudiante revisa y actualiza los campos requeridos
- El sistema valida el formato y completitud de los datos
- El sistema actualiza el registro del estudiante
- El sistema habilita la etapa siguiente

**Subproceso 1.3 – Verificación de Responsabilidad Financiera**
- El sistema muestra los datos del responsable financiero registrado previamente
- El estudiante confirma o actualiza los datos del responsable
- El sistema verifica la completitud de la información requerida
- Se almacena la información actualizada en el sistema financiero
- El sistema habilita la etapa siguiente

**Subproceso 2.1 – Selección de Asignaturas**
- El sistema muestra el plan de estudios del estudiante
- El sistema filtra las asignaturas disponibles según prerrequisitos y disponibilidad
- El estudiante selecciona las asignaturas deseadas
- El sistema verifica conflictos de horario
- El sistema calcula la carga académica total
- El estudiante confirma la selección
- El sistema reserva las plazas seleccionadas

**Subproceso 2.2 – Generación de Pre-Matrícula**
- El sistema consolida la selección académica confirmada
- El sistema genera el documento de pre-matrícula
- El sistema envía confirmación al estudiante (correo electrónico o notificación)
- La pre-matrícula queda en estado "pendiente de confirmación"

**Subproceso 2.3 – Generación y Formalización del Contrato**
- El sistema financiero recibe los datos de la pre-matrícula
- El sistema calcula el monto total de pensiones según los cursos seleccionados
- El sistema genera el contrato con términos, montos y fechas de pago
- El estudiante (y/o responsable financiero) revisa y acepta el contrato
- El sistema registra la aceptación y formaliza la matrícula en estado "activo"

**Subproceso 3.1 – Entrega Documental en Facultad**
- El estudiante imprime el compromiso de honor
- El estudiante firma el documento
- El estudiante acude físicamente a la secretaría de su facultad
- El personal administrativo verifica el documento y los datos del estudiante
- El personal registra la recepción del documento
- El expediente del estudiante se actualiza manualmente

**Subproceso 3.2 – Revisión y Certificación Médica (Condicional)**
- El sistema identifica a los estudiantes con pendientes médicos del 2018-I
- El sistema notifica al estudiante sobre la obligatoriedad de la revisión
- El estudiante acude al centro médico en el horario establecido
- El personal médico realiza la evaluación correspondiente
- El centro médico registra el resultado y lo comunica a la ORA
- La ORA actualiza el estado de la matrícula del estudiante

---

## 8. PROPUESTA TO-BE DEL PROCESO MEJORADO

### 8.1 Principios de Rediseño

El modelo TO-BE propuesto se fundamenta en los siguientes principios de rediseño, alineados con las mejores prácticas de arquitectura de negocio y gestión de procesos:

- **Digitalización integral**: Eliminación o digitalización de todas las actividades que actualmente requieren soporte físico o presencia física sin valor añadido.
- **Automatización inteligente**: Implementación de mecanismos automáticos de validación, verificación y generación de documentos, reduciendo la intervención manual.
- **Integración sistémica**: Conexión e intercambio de datos en tiempo real entre los sistemas involucrados (académico, financiero, médico, documental).
- **Experiencia centrada en el estudiante**: Simplificación del proceso desde la perspectiva del usuario, reduciendo pasos, tiempos de espera y necesidad de desplazamiento.
- **Trazabilidad completa**: Implementación de un sistema de seguimiento en tiempo real del estado de la matrícula de cada estudiante.
- **Gestión proactiva de excepciones**: Identificación automática y gestión diferenciada de casos especiales (pendientes médicos, deudas financieras, incompletos académicos).

### 8.2 Descripción del Proceso TO-BE

**Etapa 1 TO-BE – Aceptación Digital del Compromiso de Honor**
El estudiante accede al portal de matrícula con autenticación segura (usuario y contraseña institucional, con opción de doble factor de autenticación). El sistema presenta el compromiso de honor en formato digital interactivo. La aceptación se formaliza mediante firma digital o clic confirmado con registro de IP, timestamp y huella de sesión, con plena validez legal. El documento firmado digitalmente queda almacenado en el repositorio documental institucional, eliminando la necesidad de entrega física posterior.

**Etapa 2 TO-BE – Validación Automatizada de Datos Personales**
El sistema pre-carga automáticamente todos los datos personales del estudiante desde el repositorio institucional. El sistema verifica la vigencia y coherencia de los datos (por ejemplo, verifica si el DNI registrado coincide con los datos del RENIEC mediante integración con servicios externos). Solo se solicita al estudiante confirmar o actualizar los campos que han cambiado o que requieren actualización periódica. La validación es instantánea y el proceso avanza automáticamente si los datos son correctos.

**Etapa 3 TO-BE – Validación Integrada del Responsable Financiero**
Esta etapa se fusiona lógicamente con la Etapa 2, o se ejecuta en paralelo. El sistema verifica automáticamente la situación financiera del estudiante: deudas pendientes, historial de pagos y condición de becario o financiamiento. Si el responsable financiero es el mismo del periodo anterior, el sistema lo pre-carga y solicita solo confirmación. Si ha cambiado, se activa el flujo de actualización. La verificación de la capacidad financiera y la generación de la escala de pagos se realizan automáticamente.

**Etapa 4 TO-BE – Selección Asistida de Cursos**
El sistema implementa un motor de recomendación académica que sugiere al estudiante los cursos a matricular según su avance curricular, historial académico, rendimiento previo y carga recomendada. El estudiante puede aceptar la sugerencia o personalizar su selección. El sistema verifica en tiempo real la disponibilidad de plazas, los conflictos de horario y el cumplimiento de prerrequisitos, informando al estudiante de manera inmediata. Se implementa un sistema de lista de espera automatizado para cursos con cupo lleno.

**Etapa 5 TO-BE – Generación Automática de Pre-Matrícula**
Una vez confirmada la selección de cursos, el sistema genera automáticamente el documento de pre-matrícula y lo almacena en el expediente digital del estudiante. Simultáneamente, el sistema notifica por correo electrónico y/o SMS al estudiante y al responsable financiero con el resumen de la pre-matrícula. Se elimina la etapa de confirmación manual por parte de la facultad para los casos estándar; solo los casos con observaciones se derivan a revisión académica automatizada.

**Etapa 6 TO-BE – Generación y Firma Electrónica del Contrato**
El sistema financiero genera automáticamente el contrato de servicios educativos basándose en los datos de la pre-matrícula, la escala de pagos calculada y los parámetros financieros del estudiante. El contrato se presenta al estudiante en formato digital. La firma se realiza electrónicamente mediante el mecanismo de firma digital institucional. El contrato firmado se almacena en el repositorio documental y se envía una copia al correo del estudiante y del responsable financiero. La matrícula queda activada de manera automática al completarse este paso.

**Etapa 7 TO-BE – Eliminación de la Entrega Física (Repositorio Digital)**
Esta etapa se elimina como proceso presencial separado. El compromiso de honor firmado digitalmente en la Etapa 1 queda disponible en el repositorio institucional y puede ser consultado por la facultad en cualquier momento. Se implementa un módulo de gestión documental que permite a las facultades acceder, filtrar y exportar los compromisos de honor de sus estudiantes de manera digital. En caso de que la normativa institucional requiera firma manuscrita, se implementa un flujo de cita previa automatizada para que el estudiante pueda acudir en el momento de menor afluencia, reduciendo las colas.

**Etapa 8 TO-BE – Gestión Automatizada de Pendientes Médicos**
El sistema identifica automáticamente a los estudiantes con pendientes médicos desde el inicio del proceso de matrícula. Se envía notificación anticipada a estos estudiantes antes de que se abra el proceso de matrícula. El sistema integra un módulo de gestión de citas médicas que permite al estudiante programar su revisión en el centro médico según disponibilidad de horarios. El resultado de la revisión médica se registra digitalmente por el centro médico y se sincroniza automáticamente con el sistema de matrícula, actualizando el estado del estudiante sin intervención manual de la ORA.

### 8.3 Innovaciones Adicionales del Modelo TO-BE

- **Panel de control del estudiante**: Interfaz centralizada donde el estudiante puede ver el estado de su matrícula, los pasos completados, los pendientes y los documentos generados.
- **Alertas proactivas**: El sistema envía notificaciones automáticas cuando el estudiante tiene pendientes o cuando se aproximan fechas límite.
- **Soporte en línea**: Integración de un módulo de soporte (chatbot o sistema de tickets) para atender consultas durante el proceso sin necesidad de atención presencial.
- **Reportes en tiempo real para la administración**: Dashboards que muestran el avance del proceso de matrícula en tiempo real, identificando cuellos de botella y estadísticas de completitud.

---

## 9. COMPARACIÓN AS-IS vs TO-BE

### 9.1 Comparación por Dimensiones

| Dimensión | AS-IS | TO-BE |
|---|---|---|
| Modalidad predominante | Híbrida (virtual + presencial) | Predominantemente digital |
| Número de pasos presenciales | 2 (Etapas 7 y 8) | 0 obligatorios (opcionales con cita) |
| Nivel de automatización | Bajo (validaciones manuales) | Alto (validaciones automáticas) |
| Integración de sistemas | Baja (sistemas aislados) | Alta (sistemas integrados) |
| Generación de documentos | Semiautomática | Totalmente automática |
| Firma de documentos | Física (presencial) | Electrónica (digital) |
| Trazabilidad del proceso | Parcial | Completa y en tiempo real |
| Tiempo estimado del proceso | 2-5 días hábiles | 30-90 minutos en línea |
| Atención de casos especiales | Manual | Automatizada y diferenciada |
| Experiencia del estudiante | Fragmentada | Fluida y centralizada |
| Carga del personal administrativo | Alta | Reducida (solo excepciones) |
| Almacenamiento de documentos | Físico + digital (duplicado) | Solo digital |
| Notificaciones al estudiante | Limitadas | Proactivas y multicanal |

### 9.2 Comparación por Etapa

| Etapa | AS-IS | TO-BE | Mejora |
|---|---|---|---|
| 1 - Compromiso de Honor | Aceptación digital simple | Firma digital con validez legal y archivo institucional | Alta |
| 2 - Datos Personales | Ingreso manual del estudiante | Pre-carga automática + validación con RENIEC | Alta |
| 3 - Responsable Financiero | Ingreso manual separado | Pre-carga automática, fusión con verificación financiera | Media |
| 4 - Selección de Cursos | Selección manual sin asistencia | Motor de recomendación + validación en tiempo real | Alta |
| 5 - Pre-Matrícula | Generación y espera de confirmación | Generación instantánea y automática | Media |
| 6 - Contrato | Generación con revisión manual | Generación y firma electrónica automática | Alta |
| 7 - Entrega Facultad | Presencial, documento físico | Eliminada; repositorio digital integrado | Muy Alta |
| 8 - Centro Médico | Presencial sin gestión de citas | Digital con gestión automatizada de citas | Alta |

---

## 10. ANÁLISIS GAP

### 10.1 Definición de Brechas

El análisis de brechas (GAP Analysis) identifica la distancia entre el estado actual (AS-IS) y el estado deseado (TO-BE) en cada dimensión relevante del proceso, estableciendo la magnitud de los cambios requeridos y las áreas de intervención prioritaria.

### 10.2 Brechas Identificadas

**Brecha 1: Firma Digital Institucional**
- Estado actual: No existe mecanismo de firma digital institucional implementado.
- Estado deseado: Sistema de firma electrónica con validez legal integrado al portal de matrícula.
- Impacto: Alto. Bloquea la eliminación de la Etapa 7 presencial.
- Acciones requeridas: Adquisición e implementación de plataforma de firma electrónica; adecuación normativa interna para reconocer la validez de la firma digital.

**Brecha 2: Integración con Sistemas Externos**
- Estado actual: No existe integración con RENIEC u otros sistemas externos de validación de identidad.
- Estado deseado: Integración vía API con RENIEC para validación automática de datos de identificación.
- Impacto: Medio-Alto. Afecta la calidad y velocidad de la validación de datos personales.
- Acciones requeridas: Gestión de acceso a la API de RENIEC; desarrollo de módulo de integración; pruebas de validación.

**Brecha 3: Integración entre Sistemas Internos**
- Estado actual: El SGA y el SGF operan de manera desacoplada; el centro médico gestiona su información en sistemas separados.
- Estado deseado: Arquitectura de integración (ESB o API Gateway) que permita el intercambio de datos en tiempo real entre todos los sistemas.
- Impacto: Muy Alto. Afecta todas las etapas del proceso y es la brecha tecnológica más crítica.
- Acciones requeridas: Diseño de arquitectura de integración; implementación de APIs o middleware de integración; migración y homologación de datos.

**Brecha 4: Gestión Documental Digital**
- Estado actual: Los documentos del proceso se almacenan en soporte físico o en sistemas digitales no integrados.
- Estado deseado: Sistema de gestión documental institucional centralizado, con almacenamiento, búsqueda, acceso controlado y auditoría.
- Impacto: Alto. Afecta especialmente a las Etapas 1, 6 y 7.
- Acciones requeridas: Implementación de plataforma de gestión documental (ECM); migración de documentos históricos; definición de política de retención documental.

**Brecha 5: Motor de Recomendación Académica**
- Estado actual: El estudiante selecciona cursos sin asistencia automatizada.
- Estado deseado: Motor de recomendación basado en el plan de estudios, historial académico y disponibilidad de cursos.
- Impacto: Medio. Mejora la experiencia del estudiante y reduce errores de selección.
- Acciones requeridas: Desarrollo de algoritmo de recomendación; integración con el módulo académico del SGA.

**Brecha 6: Sistema de Gestión de Citas**
- Estado actual: No existe sistema de gestión de citas para las actividades presenciales del proceso.
- Estado deseado: Módulo de agenda digital integrado al portal de matrícula para programar revisiones médicas y otras actividades presenciales opcionales.
- Impacto: Medio. Reduce la congestión presencial y mejora la experiencia del estudiante con pendientes médicos.
- Acciones requeridas: Desarrollo o adquisición de módulo de gestión de citas; integración con el sistema del centro médico.

**Brecha 7: Capacitación y Gestión del Cambio**
- Estado actual: El personal administrativo y los estudiantes están adaptados al proceso actual, con baja adopción de herramientas digitales avanzadas.
- Estado deseado: Personal y estudiantes capacitados y adaptados al nuevo proceso digital, con soporte permanente disponible.
- Impacto: Alto. Sin gestión del cambio adecuada, la implementación tecnológica fracasará operativamente.
- Acciones requeridas: Plan de capacitación para personal; plan de comunicación y onboarding para estudiantes; implementación de soporte en línea.

---

## 11. BENEFICIOS ESPERADOS DEL REDISEÑO

### 11.1 Beneficios para el Estudiante

- **Reducción del tiempo del proceso**: El tiempo total de matrícula pasaría de un promedio de 2 a 5 días hábiles (considerando desplazamientos y esperas) a un tiempo estimado de 30 a 90 minutos en línea, sin necesidad de desplazamiento físico.
- **Disponibilidad continua**: El proceso puede realizarse en cualquier momento y desde cualquier lugar con acceso a internet, eliminando la restricción de horarios de atención presencial.
- **Reducción de incertidumbre**: El panel de control del estudiante y las notificaciones proactivas eliminan la incertidumbre sobre el estado de la matrícula y los pasos pendientes.
- **Mejor experiencia de usuario**: La interfaz simplificada, la pre-carga de datos y el motor de recomendación reducen el esfuerzo cognitivo y la posibilidad de errores en el proceso.

### 11.2 Beneficios para la Institución

- **Reducción de costos operativos**: La automatización reduce la necesidad de personal dedicado exclusivamente a la gestión manual del proceso de matrícula, permitiendo reasignarlo a actividades de mayor valor.
- **Mejora de la calidad de los datos**: La validación automática y la integración de sistemas garantizan mayor consistencia, actualidad y confiabilidad de los datos institucionales.
- **Reducción de riesgos documentales**: La eliminación del soporte físico reduce el riesgo de pérdida, deterioro o acceso no autorizado a documentos sensibles.
- **Capacidad de análisis y reportes**: Los datos generados automáticamente permiten análisis en tiempo real del proceso, identificación de tendencias y toma de decisiones basada en evidencia.
- **Escalabilidad**: El proceso digitalizado puede escalar para absorber incrementos en el número de estudiantes sin incremento proporcional en recursos humanos o físicos.
- **Cumplimiento normativo**: La trazabilidad completa y el archivo digital facilitan el cumplimiento de requisitos de SUNEDU y otros organismos reguladores.

### 11.3 Beneficios Estratégicos

- **Posicionamiento institucional**: La modernización del proceso de matrícula mejora la imagen y reputación de la UPEU como institución innovadora y orientada al estudiante.
- **Alineación con la transformación digital**: El rediseño del proceso es coherente con las tendencias globales de transformación digital en la educación superior.
- **Base para la Arquitectura Empresarial**: El proceso rediseñado y digitalizado proporciona una base sólida para el desarrollo de las fases subsiguientes del ADM (Arquitectura de Datos, Aplicaciones y Tecnología), avanzando hacia una arquitectura empresarial integrada y coherente para la UPEU.

---

## 12. CONCLUSIÓN DE LA FASE B

La Fase B de la Arquitectura de Negocio, aplicada al proceso de matrícula de la Universidad Peruana Unión, ha permitido obtener una comprensión profunda y estructurada de uno de los procesos más críticos de la institución. A través del análisis AS-IS, se han identificado con precisión las deficiencias estructurales, operativas y sistémicas que limitan la eficiencia del proceso actual, generando costos innecesarios, experiencias fragmentadas para el estudiante y carga operativa excesiva para el personal administrativo.

La propuesta TO-BE presenta un proceso rediseñado bajo principios de digitalización integral, automatización inteligente, integración sistémica y experiencia centrada en el estudiante. Este modelo no solo resuelve las deficiencias identificadas, sino que posiciona a la UPEU hacia un modelo de gestión académico-administrativa moderno, eficiente y coherente con las mejores prácticas del sector educativo superior.

El análisis de brechas ha permitido identificar con claridad los cambios tecnológicos, normativos y humanos necesarios para transitar del estado actual al estado deseado, estableciendo así la agenda de trabajo para las fases subsiguientes del TOGAF ADM. Las brechas identificadas, si bien representan inversiones significativas en tecnología, gestión del cambio y desarrollo de capacidades, tienen un retorno esperado alto en términos de eficiencia operativa, calidad del servicio y posicionamiento institucional.

En conclusión, la Fase B establece los fundamentos de negocio sobre los cuales se construirán las arquitecturas de datos, aplicaciones y tecnología que, en conjunto, conformarán la arquitectura empresarial integrada de la Universidad Peruana Unión, alineada con su misión institucional y sus objetivos estratégicos de largo plazo.

---

*Documento elaborado en el marco del Proyecto de Arquitectura Empresarial UPEU, siguiendo el marco de referencia TOGAF ADM — The Open Group Architecture Framework, Architecture Development Method.*

*Versión 1.0 | Fase B: Arquitectura de Negocio | Proceso de Matrícula UPEU*
