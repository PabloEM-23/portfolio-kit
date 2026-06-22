/* ============================================================================
 *  CONFIGURACIÓN — editá SOLO este archivo para hacer el sitio tuyo.
 *  (El contenido del CV —experiencia, skills, etc.— está en el objeto DATA
 *   dentro de CV-interactivo.html; ver la guía "Hacé tu propia versión" en el README.)
 * ========================================================================== */
window.SITE = {
  // --- Identidad ---
  firstName: "Pablo",
  lastName: "Mazzeo",
  initials: "PM", // se usa en el favicon/título

  // --- Rol (subtítulo del landing), bilingüe ---
  roleES: "Senior Oracle PL/SQL Developer · Database Engineer",
  roleEN: "Senior Oracle PL/SQL Developer · Database Engineer",

  // --- "Ancla" cuantitativa bajo el nombre, bilingüe (dejá "" para ocultarla) ---
  anchorES: "+15 años de experiencia",
  anchorEN: "15+ years of experience",

  // --- Contacto y links ---
  email: "pablo23.1990@gmail.com",
  linkedin: "https://www.linkedin.com/in/pablo-elias-mazzeo-62575b92/",
  featured: "https://www.linkedin.com/in/pablo-elias-mazzeo-62575b92/", // botón "Referencias"
  siteUrl: "https://portfolio-pablomazzeo.pages.dev", // ⚠️ actualizá con tu dominio real

  // --- vCard (lo que se guarda en los contactos) ---
  vcardTitle: "Senior Oracle PL/SQL Developer", // tu puesto

  // --- Saludo del mini-chat, bilingüe ---
  chatGreetES: "¡Hola! Soy Pablo 👋 ¿Qué querés saber sobre mi perfil?",
  chatGreetEN: "Hi! I'm Pablo 👋 What would you like to know about me?",

  // --- Nombre base para el archivo de CV descargable (sin espacios) ---
  fileBase: "CV-PabloMazzeo",

  // --- Crédito al template en el footer; podés ponerlo en false ---
  showCredit: true,

  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
