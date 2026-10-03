/* =========================================================
   SITE WEB — MAIN SCRIPT
   Supabase + Languages + Navigation + Orders
   ========================================================= */

const SUPABASE_URL =
  "https://zpwxmpznlqprzcumuvkj.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_MlvybKumgpht1Q9blEIByw_I1yCyW30";

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  ar: {

    home: "الرئيسية",
    about: "من أنا",
    services: "الخدمات",
    projects: "المشاريع",
    contact: "تواصل",
    more: "المزيد",
    whatsapp: "WhatsApp",

    orderWebsite: "اطلب موقعك",
    orderNow: "اطلب موقعك الآن",
    whatsappContact: "تواصل عبر WhatsApp",

    statOne: "تصميم احترافي",
    statTwo: "متجاوب",
    statThree: "رابط خاص",

    servicesTitle: "الخدمات",
    servicesDescription:
      "خدمات رقمية قابلة للتخصيص حسب مشروعك.",

    projectsTitle: "المشاريع",
    projectsDescription:
      "نماذج من الأعمال والمواقع.",

    ctaTitle:
      "عندك فكرة لموقع؟",

    ctaText:
      "أرسل التفاصيل وسأشوف معك أفضل طريقة لتنفيذها.",

    startNow:
      "ابدأ الآن",

    contactTitle:
      "تواصل معي",

    contactHeading:
      "لنبني شيئًا مميزًا.",

    name:
      "الاسم",

    phone:
      "رقم الهاتف",

    message:
      "الرسالة",

    namePlaceholder:
      "اسمك",

    messagePlaceholder:
      "اكتب رسالتك...",

    sendMessage:
      "إرسال الرسالة",

    rights:
      "جميع الحقوق محفوظة.",

    orderTitle:
      "اطلب موقعك",

    orderDescription:
      "أرسل معلومات مشروعك وسأتواصل معك.",

    yourInformation:
      "معلوماتك",

    fullName:
      "الاسم الكامل *",

    fullNamePlaceholder:
      "الاسم الكامل",

    phoneRequired:
      "رقم الهاتف *",

    projectInformation:
      "معلومات المشروع",

    projectName:
      "اسم المشروع",

    projectNamePlaceholder:
      "اسم المشروع",

    activity:
      "نوع النشاط",

    activityPlaceholder:
      "ملابس، مطعم، خدمات...",

    websiteType:
      "نوع الموقع",

    choose:
      "اختر",

    ecommerce:
      "متجر إلكتروني",

    customWebsite:
      "موقع مخصص",

    websiteIdea:
      "فكرة الموقع *",

    ideaPlaceholder:
      "اشرح فكرتك بالتفصيل...",

    websiteDetails:
      "تفاصيل الموقع",

    pages:
      "الصفحات المطلوبة",

    pagesPlaceholder:
      "الرئيسية، المنتجات، من نحن...",

    features:
      "المزايا المطلوبة",

    featuresPlaceholder:
      "WhatsApp، Admin، طلبات، منتجات...",

    budget:
      "الميزانية",

    budget1:
      "أقل من 5000 DA",

    budget4:
      "أكثر من 20000 DA",

    dontKnow:
      "لا أعرف",

    deadline:
      "المدة",

    deadlinePlaceholder:
      "مثلاً: أسبوع",

    reference:
      "موقع مرجعي",

    notes:
      "ملاحظات",

    notesPlaceholder:
      "أي تفاصيل إضافية...",

    sendOrder:
      "إرسال الطلب",

    loading:
      "جاري التحميل...",

    noServices:
      "لا توجد خدمات مضافة حاليًا.",

    noProjects:
      "لا توجد مشاريع مضافة حاليًا.",

    viewProject:
      "مشاهدة المشروع ↗",

    sending:
      "جاري الإرسال...",

    sendingOrder:
      "جاري إرسال الطلب...",

    messageSuccess:
      "تم إرسال الرسالة بنجاح.",

    messageError:
      "حدث خطأ أثناء الإرسال.",

    orderSuccess:
      "تم إرسال طلبك بنجاح!",

    orderError:
      "حدث خطأ أثناء إرسال الطلب."

  },


  en: {

    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    more: "More",
    whatsapp: "WhatsApp",

    orderWebsite: "Order a Website",
    orderNow: "Order Your Website",
    whatsappContact: "Contact via WhatsApp",

    statOne: "Professional Design",
    statTwo: "Responsive",
    statThree: "Custom Link",

    servicesTitle: "Services",
    servicesDescription:
      "Digital services customized for your project.",

    projectsTitle: "Projects",
    projectsDescription:
      "Selected websites and digital projects.",

    ctaTitle:
      "Have a website idea?",

    ctaText:
      "Send the details and let's find the best way to build it.",

    startNow:
      "Start Now",

    contactTitle:
      "Get in Touch",

    contactHeading:
      "Let's build something remarkable.",

    name:
      "Name",

    phone:
      "Phone",

    message:
      "Message",

    namePlaceholder:
      "Your name",

    messagePlaceholder:
      "Write your message...",

    sendMessage:
      "Send Message",

    rights:
      "All rights reserved.",

    orderTitle:
      "Order Your Website",

    orderDescription:
      "Send your project information and I'll get back to you.",

    yourInformation:
      "Your Information",

    fullName:
      "Full Name *",

    fullNamePlaceholder:
      "Full name",

    phoneRequired:
      "Phone Number *",

    projectInformation:
      "Project Information",

    projectName:
      "Project Name",

    projectNamePlaceholder:
      "Project name",

    activity:
      "Business Type",

    activityPlaceholder:
      "Clothing, restaurant, services...",

    websiteType:
      "Website Type",

    choose:
      "Choose",

    ecommerce:
      "E-commerce",

    customWebsite:
      "Custom Website",

    websiteIdea:
      "Website Idea *",

    ideaPlaceholder:
      "Explain your idea in detail...",

    websiteDetails:
      "Website Details",

    pages:
      "Required Pages",

    pagesPlaceholder:
      "Home, products, about us...",

    features:
      "Required Features",

    featuresPlaceholder:
      "WhatsApp, Admin, Orders, Products...",

    budget:
      "Budget",

    budget1:
      "Less than 5000 DA",

    budget4:
      "More than 20000 DA",

    dontKnow:
      "I don't know",

    deadline:
      "Deadline",

    deadlinePlaceholder:
      "Example: One week",

    reference:
      "Reference Website",

    notes:
      "Notes",

    notesPlaceholder:
      "Any additional details...",

    sendOrder:
      "Send Request",

    loading:
      "Loading...",

    noServices:
      "No services available yet.",

    noProjects:
      "No projects available yet.",

    viewProject:
      "View Project ↗",

    sending:
      "Sending...",

    sendingOrder:
      "Sending request...",

    messageSuccess:
      "Message sent successfully.",

    messageError:
      "Something went wrong while sending.",

    orderSuccess:
      "Your request has been sent successfully!",

    orderError:
      "Something went wrong while sending your request."

  },


  fr: {

    home: "Accueil",
    about: "À propos",
    services: "Services",
    projects: "Projets",
    contact: "Contact",
    more: "Plus",
    whatsapp: "WhatsApp",

    orderWebsite: "Commander un site",
    orderNow: "Commander votre site",
    whatsappContact: "Contacter via WhatsApp",

    statOne: "Design professionnel",
    statTwo: "Responsive",
    statThree: "Lien personnalisé",

    servicesTitle: "Services",
    servicesDescription:
      "Des services digitaux adaptés à votre projet.",

    projectsTitle: "Projets",
    projectsDescription:
      "Une sélection de sites et projets digitaux.",

    ctaTitle:
      "Vous avez une idée de site ?",

    ctaText:
      "Envoyez les détails et trouvons ensemble la meilleure solution.",

    startNow:
      "Commencer",

    contactTitle:
      "Me contacter",

    contactHeading:
      "Créons quelque chose de remarquable.",

    name:
      "Nom",

    phone:
      "Téléphone",

    message:
      "Message",

    namePlaceholder:
      "Votre nom",

    messagePlaceholder:
      "Écrivez votre message...",

    sendMessage:
      "Envoyer le message",

    rights:
      "Tous droits réservés.",

    orderTitle:
      "Commander votre site",

    orderDescription:
      "Envoyez les informations de votre projet et je vous contacterai.",

    yourInformation:
      "Vos informations",

    fullName:
      "Nom complet *",

    fullNamePlaceholder:
      "Nom complet",

    phoneRequired:
      "Numéro de téléphone *",

    projectInformation:
      "Informations du projet",

    projectName:
      "Nom du projet",

    projectNamePlaceholder:
      "Nom du projet",

    activity:
      "Type d'activité",

    activityPlaceholder:
      "Vêtements, restaurant, services...",

    websiteType:
      "Type de site",

    choose:
      "Choisir",

    ecommerce:
      "Boutique en ligne",

    customWebsite:
      "Site personnalisé",

    websiteIdea:
      "Idée du site *",

    ideaPlaceholder:
      "Expliquez votre idée en détail...",

    websiteDetails:
      "Détails du site",

    pages:
      "Pages souhaitées",

    pagesPlaceholder:
      "Accueil, produits, à propos...",

    features:
      "Fonctionnalités souhaitées",

    featuresPlaceholder:
      "WhatsApp, Admin, commandes, produits...",

    budget:
      "Budget",

    budget1:
      "Moins de 5000 DA",

    budget4:
      "Plus de 20000 DA",

    dontKnow:
      "Je ne sais pas",

    deadline:
      "Délai",

    deadlinePlaceholder:
      "Exemple : une semaine",

    reference:
      "Site de référence",

    notes:
      "Notes",

    notesPlaceholder:
      "Informations supplémentaires...",

    sendOrder:
      "Envoyer la demande",

    loading:
      "Chargement...",

    noServices:
      "Aucun service disponible pour le moment.",

    noProjects:
      "Aucun projet disponible pour le moment.",

    viewProject:
      "Voir le projet ↗",

    sending:
      "Envoi...",

    sendingOrder:
      "Envoi de la demande...",

    messageSuccess:
      "Message envoyé avec succès.",

    messageError:
      "Une erreur est survenue.",

    orderSuccess:
      "Votre demande a été envoyée avec succès !",

    orderError:
      "Une erreur est survenue lors de l'envoi."

  }

};


/* =========================================================
   HELPERS
   ========================================================= */

function t(key) {

  const lang =
    localStorage.getItem("site_language") || "ar";

  return (
    translations[lang]?.[key] ||
    translations.ar[key] ||
    key
  );

}


function escapeHTML(value) {

  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function whatsappURL(phone) {

  let value =
    String(phone || "")
      .replace(/\D/g, "");

  if (value.startsWith("0")) {
    value =
      "213" +
      value.slice(1);
  }

  if (!value.startsWith("213")) {
    value =
      "213" +
      value;
  }

  return `https://wa.me/${value}`;

}


function result(
  element,
  text,
  type = ""
) {

  element.textContent = text;

  element.className =
    `result ${type}`;

}


/* =========================================================
   ELEMENTS
   ========================================================= */

const brandText =
  document.getElementById("brandText");

const brandLogo =
  document.getElementById("brandLogo");

const footerName =
  document.getElementById("footerName");

const heroTitle =
  document.getElementById("heroTitle");

const heroDescription =
  document.getElementById("heroDescription");

const aboutTitle =
  document.getElementById("aboutTitle");

const aboutName =
  document.getElementById("aboutName");

const aboutText =
  document.getElementById("aboutText");

const aboutWhatsapp =
  document.getElementById("aboutWhatsapp");

const aboutEmail =
  document.getElementById("aboutEmail");

const profileImage =
  document.getElementById("profileImage");

const headerWhatsapp =
  document.getElementById("headerWhatsapp");

const mobileWhatsapp =
  document.getElementById("mobileWhatsapp");

const heroWhatsapp =
  document.getElementById("heroWhatsapp");

const contactWhatsapp =
  document.getElementById("contactWhatsapp");

const contactEmail =
  document.getElementById("contactEmail");

const contactInstagram =
  document.getElementById("contactInstagram");

const servicesGrid =
  document.getElementById("servicesGrid");

const projectsGrid =
  document.getElementById("projectsGrid");

const menuBtn =
  document.getElementById("menuBtn");

const mobileMenu =
  document.getElementById("mobileMenu");

const moreBtn =
  document.getElementById("moreBtn");

const moreMenu =
  document.getElementById("moreMenu");

const orderModal =
  document.getElementById("orderModal");


/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */

function applyLanguage(lang) {

  if (!translations[lang]) {
    lang = "ar";
  }

  localStorage.setItem(
    "site_language",
    lang
  );

  document.documentElement.lang =
    lang;

  document.documentElement.dir =
    lang === "ar"
      ? "rtl"
      : "ltr";


  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.dataset.i18n;

      if (
        translations[lang] &&
        translations[lang][key]
      ) {

        element.textContent =
          translations[lang][key];

      }

    });


  document
    .querySelectorAll("[data-placeholder]")
    .forEach((element) => {

      const key =
        element.dataset.placeholder;

      if (
        translations[lang] &&
        translations[lang][key]
      ) {

        element.placeholder =
          translations[lang][key];

      }

    });


  document
    .querySelectorAll(".language-btn")
    .forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );

    });


  document
    .querySelectorAll("#orderWebsiteType option[data-i18n]")
    .forEach((option) => {

      const key =
        option.dataset.i18n;

      if (
        translations[lang] &&
        translations[lang][key]
      ) {

        option.textContent =
          translations[lang][key];

      }

    });


  document
    .querySelectorAll("#orderBudget option[data-i18n]")
    .forEach((option) => {

      const key =
        option.dataset.i18n;

      if (
        translations[lang] &&
        translations[lang][key]
      ) {

        option.textContent =
          translations[lang][key];

      }

    });


  if (servicesGrid.dataset.loaded === "true") {
    loadServices();
  }

  if (projectsGrid.dataset.loaded === "true") {
    loadProjects();
  }

}


document
  .querySelectorAll(".language-btn")
  .forEach((button) => {

    button.addEventListener(
      "click",
      (event) => {

        event.preventDefault();

        applyLanguage(
          button.dataset.lang
        );

        moreMenu.classList.remove(
          "open"
        );

      }
    );

  });


/* =========================================================
   MOBILE MENU
   ========================================================= */

menuBtn.addEventListener(
  "click",
  () => {

    mobileMenu.classList.toggle(
      "open"
    );

    menuBtn.classList.toggle(
      "active"
    );

  }
);


document
  .querySelectorAll(
    "#mobileMenu a, #mobileMenu button"
  )
  .forEach((item) => {

    item.addEventListener(
      "click",
      () => {

        if (
          !item.classList.contains(
            "language-btn"
          )
        ) {

          mobileMenu.classList.remove(
            "open"
          );

          menuBtn.classList.remove(
            "active"
          );

        }

      }
    );

  });


/* =========================================================
   MORE MENU
   ========================================================= */

moreBtn.addEventListener(
  "click",
  (event) => {

    event.stopPropagation();

    moreMenu.classList.toggle(
      "open"
    );

  }
);


document.addEventListener(
  "click",
  (event) => {

    if (
      !event.target.closest(
        ".more-wrapper"
      )
    ) {

      moreMenu.classList.remove(
        "open"
      );

    }

  }
);


/* =========================================================
   SETTINGS
   ========================================================= */

async function loadSettings() {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("site_settings")
      .select("*")
      .limit(1)
      .maybeSingle();


  if (error) {

    console.error(
      "settings",
      error
    );

    return;

  }


  if (!data) {
    return;
  }


  const siteName =
    data.site_name ||
    "SITE WEB";


  brandText.textContent =
    siteName;

  footerName.textContent =
    siteName;

  document.title =
    siteName;


  heroTitle.textContent =
    data.hero_title ||
    t("orderNow");

  heroDescription.textContent =
    data.hero_description ||
    "";


  aboutTitle.textContent =
    data.about_title ||
    t("about");

  aboutName.textContent =
    data.owner_name ||
    "";

  aboutText.textContent =
    data.about_text ||
    "";


  const whatsapp =
    data.whatsapp ||
    "";

  const email =
    data.email ||
    "";

  const instagram =
    data.instagram_url ||
    "";


  if (data.logo_url) {

    brandLogo.src =
      data.logo_url;

    brandLogo.classList.remove(
      "hidden"
    );

  } else {

    brandLogo.classList.add(
      "hidden"
    );

  }


  const wa =
    whatsapp
      ? whatsappURL(whatsapp)
      : "#";


  headerWhatsapp.href =
    wa;

  mobileWhatsapp.href =
    wa;

  heroWhatsapp.href =
    wa;

  contactWhatsapp.href =
    wa;


  aboutWhatsapp.textContent =
    whatsapp;

  contactWhatsapp.textContent =
    whatsapp ||
    "WhatsApp";


  aboutEmail.textContent =
    email;

  contactEmail.textContent =
    email ||
    "Email";

  contactEmail.href =
    email
      ? `mailto:${email}`
      : "#";


  contactInstagram.textContent =
    instagram
      ? "Instagram ↗"
      : "Instagram";

  contactInstagram.href =
    instagram ||
    "#";


  if (data.profile_image_url) {

    profileImage.src =
      data.profile_image_url;

    profileImage.style.display =
      "block";

  } else {

    profileImage.style.display =
      "none";

  }


  document.documentElement.style
    .setProperty(
      "--primary",
      data.primary_color ||
      "#8b5cf6"
    );

  document.documentElement.style
    .setProperty(
      "--secondary",
      data.secondary_color ||
      "#22d3ee"
    );


  document.getElementById(
    "about"
  ).style.display =
    data.show_about === false
      ? "none"
      : "";


  document.getElementById(
    "services"
  ).style.display =
    data.show_services === false
      ? "none"
      : "";


  document.getElementById(
    "projects"
  ).style.display =
    data.show_portfolio === false
      ? "none"
      : "";


  document.getElementById(
    "contact"
  ).style.display =
    data.show_contact === false
      ? "none"
      : "";

}


/* =========================================================
   SERVICES
   ========================================================= */

async function loadServices() {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("services")
      .select("*")
      .eq(
        "is_visible",
        true
      )
      .order(
        "sort_order",
        {
          ascending: true
        }
      )
      .order(
        "created_at",
        {
          ascending: false
        }
      );


  if (error) {

    console.error(
      "services",
      error
    );

    servicesGrid.innerHTML =
      `<div class="empty">${t("messageError")}</div>`;

    return;

  }


  servicesGrid.dataset.loaded =
    "true";


  if (
    !data ||
    data.length === 0
  ) {

    servicesGrid.innerHTML =
      `
        <div class="empty">
          ${escapeHTML(
            t("noServices")
          )}
        </div>
      `;

    return;

  }


  servicesGrid.innerHTML =
    data
      .map((item, index) => {

        const image =
          item.image_url
            ? `
              <img
                class="service-image"
                src="${escapeHTML(
                  item.image_url
                )}"
                alt="${escapeHTML(
                  item.title
                )}"
              >
            `
            : "";


        return `
          <article
            class="service-card"
            style="--delay:${index * 80}ms"
          >

            ${image}

            <div class="service-number">
              0${index + 1}
            </div>

            <div class="service-icon">
              ${escapeHTML(
                item.icon || "✦"
              )}
            </div>

            <h3>
              ${escapeHTML(
                item.title || ""
              )}
            </h3>

            <p>
              ${escapeHTML(
                item.description || ""
              )}
            </p>

            ${
              item.price
                ? `
                  <div class="service-price">
                    ${escapeHTML(
                      item.price
                    )}
                  </div>
                `
                : ""
            }

            <div class="service-arrow">
              ↗
            </div>

          </article>
        `;

      })
      .join("");

}


/* =========================================================
   PROJECTS
   ========================================================= */

async function loadProjects() {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("projects")
      .select("*")
      .eq(
        "is_visible",
        true
      )
      .order(
        "sort_order",
        {
          ascending: true
        }
      )
      .order(
        "created_at",
        {
          ascending: false
        }
      );


  if (error) {

    console.error(
      "projects",
      error
    );

    projectsGrid.innerHTML =
      `<div class="empty">${t("messageError")}</div>`;

    return;

  }


  projectsGrid.dataset.loaded =
    "true";


  if (
    !data ||
    data.length === 0
  ) {

    projectsGrid.innerHTML =
      `
        <div class="empty">
          ${escapeHTML(
            t("noProjects")
          )}
        </div>
      `;

    return;

  }


  projectsGrid.innerHTML =
    data
      .map((item, index) => {

        return `
          <article
            class="project-card"
            style="--delay:${index * 100}ms"
          >

            <div class="project-media">

              ${
                item.image_url
                  ? `
                    <img
                      src="${escapeHTML(
                        item.image_url
                      )}"
                      alt="${escapeHTML(
                        item.title
                      )}"
                    >
                  `
                  : `
                    <div class="project-placeholder">
                      SITE WEB
                    </div>
                  `
              }

            </div>


            <div class="project-shade"></div>


            <div class="project-content">

              ${
                item.category
                  ? `
                    <div class="project-category">
                      ${escapeHTML(
                        item.category
                      )}
                    </div>
                  `
                  : ""
              }

              <h3>
                ${escapeHTML(
                  item.title || ""
                )}
              </h3>

              <p>
                ${escapeHTML(
                  item.description || ""
                )}
              </p>

              ${
                item.project_url
                  ? `
                    <a
                      class="project-link"
                      href="${escapeHTML(
                        item.project_url
                      )}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ${escapeHTML(
                        t("viewProject")
                      )}
                    </a>
                  `
                  : ""
              }

            </div>

          </article>
        `;

      })
      .join("");

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

document
  .getElementById("contactForm")
  .addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();


      const button =
        document.getElementById(
          "contactSubmit"
        );

      const output =
        document.getElementById(
          "contactResult"
        );


      button.disabled = true;

      button.querySelector("span").textContent =
        t("sending");


      const payload = {

        name:
          document
            .getElementById(
              "clientName"
            )
            .value
            .trim(),

        phone:
          document
            .getElementById(
              "clientPhone"
            )
            .value
            .trim(),

        email:
          document
            .getElementById(
              "clientEmail"
            )
            .value
            .trim(),

        message:
          document
            .getElementById(
              "clientMessage"
            )
            .value
            .trim(),

        status:
          "new"

      };


      const {
        error
      } =
        await supabaseClient
          .from("messages")
          .insert([
            payload
          ]);


      button.disabled = false;

      button.querySelector("span").textContent =
        t("sendMessage");


      if (error) {

        console.error(error);

        result(
          output,
          t("messageError"),
          "error"
        );

        return;

      }


      result(
        output,
        `✓ ${t("messageSuccess")}`,
        "success"
      );


      event.target.reset();

    }
  );


/* =========================================================
   ORDER MODAL
   ========================================================= */

/* FORCE CLOSED ON LOAD */

orderModal.classList.add(
  "hidden"
);

orderModal.setAttribute(
  "aria-hidden",
  "true"
);

document.body.classList.remove(
  "locked"
);


/* OPEN */

document
  .querySelectorAll(".order-open")
  .forEach((button) => {

    button.addEventListener(
      "click",
      (event) => {

        event.preventDefault();

        orderModal.classList.remove(
          "hidden"
        );

        orderModal.setAttribute(
          "aria-hidden",
          "false"
        );

        document.body.classList.add(
          "locked"
        );

        mobileMenu.classList.remove(
          "open"
        );

        menuBtn.classList.remove(
          "active"
        );

        moreMenu.classList.remove(
          "open"
        );

      }
    );

  });


/* CLOSE */

function closeOrderModal() {

  orderModal.classList.add(
    "hidden"
  );

  orderModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "locked"
  );

}


document
  .getElementById(
    "closeOrderModal"
  )
  .addEventListener(
    "click",
    closeOrderModal
  );


/* CLOSE BY CLICKING BACKGROUND */

orderModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target === orderModal
    ) {

      closeOrderModal();

    }

  }
);


/* CLOSE WITH ESC */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      !orderModal.classList.contains(
        "hidden"
      )
    ) {

      closeOrderModal();

    }

  }
);


/* =========================================================
   ORDER FORM
   ========================================================= */

document
  .getElementById(
    "orderForm"
  )
  .addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();


      const button =
        document.getElementById(
          "orderSubmit"
        );

      const output =
        document.getElementById(
          "orderResult"
        );


      button.disabled = true;

      button.querySelector("span").textContent =
        t("sendingOrder");


      const payload = {

        full_name:
          document.getElementById(
            "orderName"
          ).value.trim(),

        phone:
          document.getElementById(
            "orderPhone"
          ).value.trim(),

        email:
          document.getElementById(
            "orderEmail"
          ).value.trim(),

        business_name:
          document.getElementById(
            "orderBusiness"
          ).value.trim(),

        business_type:
          document.getElementById(
            "orderBusinessType"
          ).value.trim(),

        website_type:
          document.getElementById(
            "orderWebsiteType"
          ).value,

        idea:
          document.getElementById(
            "orderIdea"
          ).value.trim(),

        pages:
          document.getElementById(
            "orderPages"
          ).value.trim(),

        features:
          document.getElementById(
            "orderFeatures"
          ).value.trim(),

        budget:
          document.getElementById(
            "orderBudget"
          ).value,

        deadline:
          document.getElementById(
            "orderDeadline"
          ).value.trim(),

        instagram:
          document.getElementById(
            "orderInstagram"
          ).value.trim(),

        reference_url:
          document.getElementById(
            "orderReference"
          ).value.trim(),

        notes:
          document.getElementById(
            "orderNotes"
          ).value.trim(),

        status:
          "new"

      };


      const {
        error
      } =
        await supabaseClient
          .from("orders")
          .insert([
            payload
          ]);


      button.disabled = false;

      button.querySelector("span").textContent =
        t("sendOrder");


      if (error) {

        console.error(error);

        result(
          output,
          t("orderError"),
          "error"
        );

        return;

      }


      result(
        output,
        `✓ ${t("orderSuccess")}`,
        "success"
      );


      event.target.reset();

    }
  );


/* =========================================================
   START
   ========================================================= */

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();


/* DEFAULT LANGUAGE */

applyLanguage(
  localStorage.getItem(
    "site_language"
  ) || "ar"
);


/* LOAD DATA */

Promise.all([
  loadSettings(),
  loadServices(),
  loadProjects()
]);
