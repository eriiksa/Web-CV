document.addEventListener("DOMContentLoaded", function () {
    i18next.init({
        lng: "pt-br", // Idioma inicial 
        resources: {
            en: {
                translation: {
                    // --- CABEÇALHO E CONTATO ---
                    "titulo": "Junior Software Developer",
                    "pdf": "<img src=\"Imagens/pdf.png\" alt=\"pdf_logo\" class=\"pdf_logo\"> <span class=\"pdf_texto\">Download CV as PDF</span>",
                    "contato": "Contact Information:",
                    "telefone": "Cellphone: (+55) 81 98541-4017",
                    "endereco": "Address: Candeias, Jaboatão dos Guararapes - Pernambuco, Brazil",
                    
                    // --- RESUMO ---
                    "resumo": "Summary",
                    "resumo_texto": "Software Engineering student with experience in optimizing and automating processes. My focus is to simplify manual work routines, improving the productivity and well-being of my teammates.",

                    // --- EXPERIÊNCIA ---
                    "experiencia": "Professional Experience",
                    "empresa": "Company:",
                    
                    // Cargo Recente
                    "cargo_recente": "Junior Customer Service Representative (September 2025 - Present)",
                    "app_automacao": "Development of an app using Python, Selenium, and Tesseract OCR to automate queries, downloads, and document reading in internal FedEx systems, making the process fully autonomous and simplified for the team.",
                    "contato_cliente_recente": "Direct contact with the client via emails, protocols, and calls, aiming to solve their problems with any deliveries they have made.",
                    "resolucao_problemas_recente": "Problem-solving with the client and the team, seeking to optimize processes and keep the client satisfied.",
                    "planilhas_excel": "Elaboration of performance spreadsheets; Automation of existing reports, using Excel formulas (VLOOKUP, XLOOKUP, COUNT.IF ....).",
                    "dashboards": "Creation of dashboards that are used in presentations for the direct client.",
                    
                    // Cargo Anterior
                    "jovem_aprendiz_admin": "Trainee - Administrative Assistant (July 2024 - August 2025)",
                    "otimizacao_python": "Optimization of document queries in the company's web systems, using Python and Selenium WebDriver, reducing search time by 53%.",
                    "rncs_anterior": "Performed the opening, closing, and updating of Non-Compliance Reports (RNCs), in order to register problems that occurred with client shipments.",
                    "controle_documentos": "Control, digitization, and upload of invoices and various documents.",
                    "suporte_ti": "Provided IT support to various teams in the work environment.",
                    "manutencao_planilhas": "Elaboration and maintenance of spreadsheets for document control such as RNCs, indemnities, and drivers' licenses.",

                    // --- HABILIDADES ---
                    "habilidades": "Skills",
                    "resolucao_problemas": "Problem Solving",
                    "automacao_processos": "Process Automation",
                    "atendimento_cliente_comp": "Customer Service",
                    "proatividade": "Proactivity",
                    "rapida_adaptacao": "Quick Adaptation",
                    "aprendizado_continuo": "Continuous Learning",
                    "ingles_c2": "English (C2 Level - Proficient)",
                    "portugues_nativo": "Portuguese (Native)",

                    // --- FORMAÇÃO ---
                    "formacao": "Education",
                    "ensino_superior": "Software Engineering – Cruzeiro do Sul (2025.1 - 2028.2)",
                    "ensino_medio": "High School Diploma – Colégio Elo (2018 - 2020)",
                    
                    // --- CURSOS ---
                    "cursos": "Courses",
                    "logica": "Programming Logic with Python – USP",
                    "fundamentos_python": "Python Fundamentals | Digital Innovation One",
                    "ifood": "Potência Tech iFood (Python for Data Science) – Digital Innovation One",
                    "desenvolvimento_web": "Web Development using JavaScript, HTML and CSS - Curso em Video",
                    "js_developer": "JavaScript Developer Formation | Digital Innovation One",
                    "excel": "Excel from basic to advanced - Hashtag Treinamentos",
                    "cert_ingles": "English Certification - C2 Level"
                }
            },
        }
    });
    // Armazena o texto original em uma variável
    function guardarTexto() {
        document.querySelectorAll("[data-translate]").forEach(el => {
            if (!el.dataset.originalText) {
                el.dataset.originalText = el.innerHTML; // Salva o texto original
            }
        });
    }

    function atualizarTextos() {
        document.querySelectorAll("[data-translate]").forEach(el => {
            if (i18next.language.startsWith("pt")) {
                // Reverte para o texto original em português
                el.innerHTML = el.dataset.originalText;
            } else {
                // Traduz para o inglês
                el.innerHTML = i18next.t(el.dataset.translate);
            }
        });
    }

    // Altera o idioma e atualiza os textos
    function mudar_idioma() {
        const flag = document.getElementById("flag");
        const novoIdioma = i18next.language.startsWith("pt") ? "en" : "pt";

        i18next.changeLanguage(novoIdioma, function () {
            atualizarTextos();

            // Atualiza a bandeira 
            flag.src = novoIdioma === "en" ? "Imagens/usa_flag.png" : "Imagens/brasil_flag.png";
            flag.alt = novoIdioma === "en" ? "eua" : "brasil";
        });
    }

    // Armazena o texto original quando a página carrega
    guardarTexto();

    document.querySelector(".bandeira-container").addEventListener("click", mudar_idioma);
});