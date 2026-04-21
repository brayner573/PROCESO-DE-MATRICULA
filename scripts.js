/**
 * script.js — Proceso de Matrícula UPEU
 * Arquitectura de Negocio · TOGAF ADM Fase B
 *
 * Funcionalidades:
 *  - Interacción con tarjetas de pasos del proceso
 *  - Panel de detalle lateral (inline)
 *  - Modal de detalle completo
 *  - Resaltado del paso activo
 *  - Navegación suave entre secciones
 *  - Animaciones de entrada al hacer scroll
 */

/* ══════════════════════════════════════════════════
   1. SELECCIÓN DE ELEMENTOS DEL DOM
══════════════════════════════════════════════════ */

/** Todas las tarjetas de pasos del proceso */
const stepCards = document.querySelectorAll('.step-card');

/** Panel de detalle que aparece debajo del diagrama de flujo */
const detailPanel    = document.getElementById('stepDetailPanel');
const panelTitle     = document.getElementById('panelTitle');
const panelDesc      = document.getElementById('panelDesc');
const panelActor     = document.getElementById('panelActor');
const panelStepNum   = document.getElementById('panelStepNum');
const panelModalType = document.getElementById('panelModalType');
const panelClose     = document.getElementById('panelClose');

/** Modal de detalle completo (overlay) */
const modalOverlay   = document.getElementById('modalOverlay');
const modalTag       = document.getElementById('modalTag');
const modalNum       = document.getElementById('modalNum');
const modalTitle     = document.getElementById('modalTitle');
const modalDesc      = document.getElementById('modalDesc');
const modalActor     = document.getElementById('modalActor');
const modalCloseBtn  = document.getElementById('modalCloseBtn');

/* ══════════════════════════════════════════════════
   2. ESTADO DE LA APLICACIÓN
══════════════════════════════════════════════════ */

/** Índice del paso actualmente seleccionado (null = ninguno) */
let activeStep = null;

/* ══════════════════════════════════════════════════
   3. MANEJO DE TARJETAS DE PASOS
══════════════════════════════════════════════════ */

/**
 * Aplica o quita la clase "active" de las tarjetas.
 * @param {string|null} stepNum - Número del paso activo, o null para desactivar.
 */
function setActiveStep(stepNum) {
  stepCards.forEach(card => {
    if (card.dataset.step === stepNum) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
  activeStep = stepNum;
}

/**
 * Limpia el estado activo de todos los pasos y cierra el panel.
 */
function clearActiveStep() {
  stepCards.forEach(card => card.classList.remove('active'));
  activeStep = null;
  closePanel();
}

/**
 * Determina el color y etiqueta del badge según la modalidad del paso.
 * @param {string} modalType - Tipo de modalidad del paso.
 * @returns {Object} - Objeto con la clase CSS y el texto del badge.
 */
function getModalityStyle(modalType) {
  const lower = (modalType || '').toLowerCase();
  if (lower.includes('virtual')) {
    return { className: 'badge-virtual-inline', text: '⬡ Etapa Virtual' };
  }
  if (lower.includes('condicional')) {
    return { className: 'badge-condicional-inline', text: '◆ Condicional · Presencial' };
  }
  return { className: 'badge-presencial-inline', text: '◉ Etapa Presencial' };
}

/* ══════════════════════════════════════════════════
   4. PANEL DE DETALLE INLINE
══════════════════════════════════════════════════ */

/**
 * Abre el panel de detalle con la información del paso seleccionado.
 * El panel es visible debajo del diagrama de flujo.
 * @param {HTMLElement} card - La tarjeta del paso seleccionado.
 */
function openPanel(card) {
  const step      = card.dataset.step;
  const title     = card.dataset.title;
  const desc      = card.dataset.desc;
  const actor     = card.dataset.actor;
  const modalType = card.dataset.modalType;

  const modality = getModalityStyle(modalType);

  // Poblar el contenido del panel
  panelStepNum.textContent   = `0${step}`;
  panelTitle.textContent     = title;
  panelDesc.textContent      = desc;
  panelActor.textContent     = actor;
  panelModalType.textContent = modality.text;

  // Mostrar el panel con clase CSS
  detailPanel.classList.add('visible');

  // Desplazarse suavemente al panel si está fuera de la pantalla
  setTimeout(() => {
    detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

/**
 * Cierra el panel de detalle inline.
 */
function closePanel() {
  detailPanel.classList.remove('visible');
}

/* ══════════════════════════════════════════════════
   5. MODAL DE DETALLE COMPLETO
══════════════════════════════════════════════════ */

/**
 * Abre el modal con la información completa del paso.
 * Se activa con doble clic en una tarjeta.
 * @param {HTMLElement} card - La tarjeta del paso.
 */
function openModal(card) {
  const step      = card.dataset.step;
  const title     = card.dataset.title;
  const desc      = card.dataset.desc;
  const actor     = card.dataset.actor;
  const modalType = card.dataset.modalType;

  const modality = getModalityStyle(modalType);

  // Poblar el contenido del modal
  modalTag.textContent   = modality.text;
  modalNum.textContent   = `0${step}`;
  modalTitle.textContent = title;
  modalDesc.textContent  = desc;
  modalActor.textContent = actor;

  // Mostrar el overlay
  modalOverlay.classList.add('open');

  // Bloquear el scroll del body mientras el modal está abierto
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal y restaura el scroll del body.
 */
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════
   6. EVENT LISTENERS — TARJETAS DE PASOS
══════════════════════════════════════════════════ */

stepCards.forEach(card => {

  /**
   * CLIC SIMPLE: Activa la tarjeta y abre el panel de detalle inline.
   * Si la tarjeta ya está activa, se desactiva y el panel se cierra.
   */
  card.addEventListener('click', function (e) {
    e.stopPropagation();
    const step = this.dataset.step;

    if (activeStep === step) {
      // Clic en la tarjeta activa → desactivar
      clearActiveStep();
    } else {
      // Activar nueva tarjeta
      setActiveStep(step);
      openPanel(this);
    }
  });

  /**
   * DOBLE CLIC: Abre el modal con la descripción completa.
   */
  card.addEventListener('dblclick', function (e) {
    e.stopPropagation();
    openModal(this);
  });

  /**
   * TECLADO (Enter / Space): Accesibilidad para usuarios de teclado.
   */
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', card.dataset.title);

  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

/* ══════════════════════════════════════════════════
   7. CERRAR PANEL Y MODAL
══════════════════════════════════════════════════ */

// Botón de cierre del panel inline
panelClose.addEventListener('click', function () {
  clearActiveStep();
});

// Botón de cierre del modal
modalCloseBtn.addEventListener('click', function () {
  closeModal();
});

// Clic fuera del modal (en el overlay) → cerrar
modalOverlay.addEventListener('click', function (e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Clic en cualquier parte del body (fuera de las tarjetas y el panel) → limpiar selección
document.addEventListener('click', function (e) {
  const clickedCard  = e.target.closest('.step-card');
  const clickedPanel = e.target.closest('.step-detail-panel');
  const clickedModal = e.target.closest('.modal-box');

  if (!clickedCard && !clickedPanel && !clickedModal) {
    clearActiveStep();
  }
});

// Tecla Escape → cerrar modal o panel
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (modalOverlay.classList.contains('open')) {
      closeModal();
    } else if (activeStep !== null) {
      clearActiveStep();
    }
  }
});

/* ══════════════════════════════════════════════════
   8. ANIMACIONES DE ENTRADA (INTERSECTION OBSERVER)
══════════════════════════════════════════════════ */

/**
 * Aplica animación de entrada (fade + slide) a elementos cuando
 * entran en el viewport. Evita el "flash" de contenido.
 */
function initScrollAnimations() {
  // Elementos que recibirán animación de entrada
  const animatables = document.querySelectorAll(
    '.step-card, .asis-card, .tobe-item, .benefit-group, .kpi, .critical-item'
  );

  // Establecer estado inicial (invisible, desplazado hacia abajo)
  animatables.forEach((el, index) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
    el.style.transition = `opacity 0.45s ease ${index * 0.04}s, transform 0.45s ease ${index * 0.04}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Elemento visible → animar entrada
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        // Dejar de observar una vez animado
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,   // Activar cuando el 10% del elemento es visible
    rootMargin: '0px 0px -40px 0px' // Margen para activación ligeramente anticipada
  });

  animatables.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════
   9. NAVEGACIÓN SUAVE (SMOOTH SCROLL)
══════════════════════════════════════════════════ */

/**
 * Agrega comportamiento de scroll suave a los enlaces del header.
 * Compensa la altura del header fijo para que el destino no quede oculto.
 */
function initSmoothNav() {
  const navLinks = document.querySelectorAll('.header-nav a[href^="#"]');
  const header   = document.querySelector('.site-header');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);

      if (!target) return;

      const headerHeight = header ? header.offsetHeight : 0;
      const targetTop    = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });
}

/* ══════════════════════════════════════════════════
   10. RESALTADO DE ENLACE ACTIVO EN NAV (SCROLL SPY)
══════════════════════════════════════════════════ */

/**
 * Resalta el enlace del header nav correspondiente a la sección visible.
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header-nav a');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--dorado-light)';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => spyObserver.observe(section));
}

/* ══════════════════════════════════════════════════
   11. TABLA COMPARATIVA — RESALTADO DE FILAS
══════════════════════════════════════════════════ */

/**
 * Resalta filas de la tabla comparativa al pasar el cursor,
 * facilitando la lectura en pantallas pequeñas.
 */
function initTableHighlight() {
  const tableRows = document.querySelectorAll('.comparison-table tbody tr');

  tableRows.forEach(row => {
    row.addEventListener('mouseenter', function () {
      this.style.backgroundColor = 'var(--dorado-pale)';
    });

    row.addEventListener('mouseleave', function () {
      this.style.backgroundColor = '';
    });
  });
}

/* ══════════════════════════════════════════════════
   12. TOOLTIP INFORMATIVO EN PASOS
══════════════════════════════════════════════════ */

/**
 * Muestra un pequeño tooltip con el tipo de modalidad al pasar
 * el cursor sobre las tarjetas de pasos.
 */
function initStepTooltips() {
  stepCards.forEach(card => {
    const tooltip = document.createElement('div');
    tooltip.className = 'step-tooltip';
    tooltip.textContent = card.dataset.modalType;
    tooltip.style.cssText = `
      position: absolute;
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
      background: var(--negro-suave, #1C1412);
      color: white;
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      padding: 0.3rem 0.65rem;
      border-radius: 4px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 10;
      font-family: 'Source Sans 3', sans-serif;
    `;

    // El card debe tener position: relative (ya lo tiene por CSS)
    card.appendChild(tooltip);

    card.addEventListener('mouseenter', () => {
      tooltip.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });
  });
}

/* ══════════════════════════════════════════════════
   13. INICIALIZACIÓN
══════════════════════════════════════════════════ */

/**
 * Punto de entrada principal. Se ejecuta cuando el DOM está listo.
 */
document.addEventListener('DOMContentLoaded', function () {
  initScrollAnimations();
  initSmoothNav();
  initScrollSpy();
  initTableHighlight();
  initStepTooltips();

  console.log(
    '%c UPEU · Proceso de Matrícula ',
    'background:#7B1728;color:#FDF3D6;font-size:13px;font-weight:bold;padding:4px 8px;border-radius:4px;'
  );
  console.log(
    '%c Arquitectura de Negocio · TOGAF ADM Fase B · v1.0 ',
    'background:#C8971E;color:#1C1412;font-size:11px;padding:2px 8px;border-radius:4px;'
  );
});
