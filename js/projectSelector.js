window.renderProjectSelector = function (container) {
    container.innerHTML = '';

    const currentLang = localStorage.getItem('dashboard_language') || 'pt';

    // --- Localization Dictionary ---
    const i18n = {
        pt: {
            customerExperience: "Experiência do Cliente",
            myProjects: "Meus Projetos",
            selectProject: "Selecione um projeto para continuar ou crie um novo para começar",
            newProject: "Novo Projeto",
            projectValues: "Valores do Projeto",
            updated: "Atualizado em",
            archivedProjects: "Projetos Arquivados",
            rename: "Renomear",
            archive: "Arquivar",
            unarchive: "Desarquivar",
            delete: "Excluir",
            confirmDelete: "Tem certeza que deseja excluir o projeto",
            confirmUnarchive: "Deseja desarquivar este projeto para abri-lo?",
            createModalTitle: "Novo Projeto",
            renameModalTitle: "Renomear Projeto",
            placeholderProjectName: "Nome do Projeto",
            cancel: "Cancelar",
            create: "Criar",
            save: "Salvar",
            designedBy: "Desenvolvido por",
            // Context Section
            contextTitle: "Workspace do Projeto",
            contextBody: `
                <p>Este espaço foi criado para servir como um workspace central e compartilhado de CX por conta, garantindo continuidade, alinhamento e clareza entre as equipes.</p>
                <p>Ele consolida saúde, riscos, adoção, entitlements, planos de sucesso e próximas ações, reduzindo a documentação fragmentada e a necessidade de recriar apresentações, planilhas e rastreadores paralelos.</p>
                <p>Mais do que uma visão de relatório, este workspace preserva o contexto da Experiência do Cliente — decisões, prioridades e perspectiva do cliente — permitindo uma transferência de conhecimento transparente entre CSMs, AEs, TAMs e SEs, especialmente durante transições de contas.</p>
                <p style="margin-top: 10px; font-style: italic; opacity: 0.9;">Isso não substitui o Salesforce, Gainsight ou sistemas de suporte.<br>
                É uma camada complementar de CX, projetada para padronizar a visibilidade de CX em contas pagas e apoiar conversas ao vivo e colaborativas com equipes internas e clientes.</p>
            `
        },
        en: {
            customerExperience: "Customer Experience",
            myProjects: "My Projects",
            selectProject: "Select a project to continue or create a new one to start",
            newProject: "New Project",
            projectValues: "Project Values",
            updated: "Updated on",
            archivedProjects: "Archived Projects",
            rename: "Rename",
            archive: "Archive",
            unarchive: "Unarchive",
            delete: "Delete",
            confirmDelete: "Are you sure you want to delete project",
            confirmUnarchive: "Do you want to unarchive this project to open it?",
            createModalTitle: "New Project",
            renameModalTitle: "Rename Project",
            placeholderProjectName: "Project Name",
            cancel: "Cancel",
            create: "Create",
            save: "Save",
            designedBy: "Designed by",
            // Context Section
            contextTitle: "Project Workspace",
            contextBody: `
                <p>This space was created to serve as a central and shared CX workspace per account, ensuring continuity, alignment, and clarity across teams.</p>
                <p>It consolidates health, risks, adoption, entitlements, success plans, and next actions, reducing fragmented documentation and the need to recreate presentations, spreadsheets, and parallel trackers.</p>
                <p>More than a reporting view, this workspace preserves Customer Experience context — decisions, priorities, and customer perspective — enabling transparent knowledge transfer between CSMs, AEs, TAMs, and SEs, especially during account transitions.</p>
                <p style="margin-top: 10px; font-style: italic; opacity: 0.9;">This is not a replacement for Salesforce, Gainsight, or support systems.<br>
                It is a complementary CX layer, designed to standardize CX visibility across paid accounts and support live, collaborative conversations with internal teams and customers.</p>
            `
        },
        es: {
            customerExperience: "Experiencia del Cliente",
            myProjects: "Mis Proyectos",
            selectProject: "Seleccione un proyecto para continuar o cree uno nuevo para comenzar",
            newProject: "Nuevo Proyecto",
            projectValues: "Valores del Proyecto",
            updated: "Actualizado en",
            archivedProjects: "Proyectos Archivados",
            rename: "Renombrar",
            archive: "Archivar",
            unarchive: "Desarchivar",
            delete: "Eliminar",
            confirmDelete: "¿Está seguro de que desea eliminar el proyecto",
            confirmUnarchive: "¿Desea desarchivar este proyecto para abrirlo?",
            createModalTitle: "Nuevo Proyecto",
            renameModalTitle: "Renombrar Proyecto",
            placeholderProjectName: "Nombre del Proyecto",
            cancel: "Cancelar",
            create: "Crear",
            save: "Guardar",
            designedBy: "Desarrollado por",
            // Context Section
            contextTitle: "Espacio de Trabajo del Proyecto",
            contextBody: `
                <p>Este espacio fue creado para servir como un espacio de trabajo central y compartido de CX por cuenta, asegurando continuidad, alineación y claridad entre los equipos.</p>
                <p>Consolida la salud, los riesgos, la adopción, los derechos (entitlements), los planes de éxito y las próximas acciones, reduciendo la documentación fragmentada y la necesidad de recrear presentaciones, hojas de cálculo y rastreadores paralelos.</p>
                <p>Más que una vista de informes, este espacio de trabajo preserva el contexto de la Experiencia del Cliente — decisiones, prioridades y perspectiva del cliente — permitiendo una transferencia de conocimiento transparente entre CSMs, AEs, TAMs y SEs, especialmente durante las transiciones de cuentas.</p>
                <p style="margin-top: 10px; font-style: italic; opacity: 0.9;">Esto no reemplaza a Salesforce, Gainsight o sistemas de soporte.<br>
                Es una capa complementaria de CX, diseñada para estandarizar la visibilidad de CX en cuentas pagas y apoyar conversaciones en vivo y colaborativas con equipos internos y clientes.</p>
            `
        }
    };

    const t = i18n[currentLang] || i18n.pt;

    // Create styles for selector
    const style = document.createElement('style');
    style.textContent = `
        .project-selector-container {
            max-width: 900px;
            margin: 20px auto;
            text-align: center;
            min-height: 80vh; /* Ensure content pushes footer down */
        }
        .selector-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px;
            margin-bottom: 20px;
        }
        .selector-logo img {
            height: 60px;
        }
        .selector-lang {
            display: flex;
            gap: 10px;
        }
        .project-header {
            margin-bottom: 40px;
        }
        .cx-subtitle {
            color: var(--status-blue);
            font-size: 1.1rem; /* Slightly smaller for header alignment */
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
            text-align: center;
        }
        .project-header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: var(--text-white);
        }
        .project-header p {
            color: rgba(255,255,255,0.7);
        }
        .projects-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 50px;
        }
        .project-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 24px;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 200px;
        }
        .project-card:hover {
            background: rgba(255,255,255,0.1);
            transform: translateY(-4px);
            border-color: var(--table-header-bg);
        }
        .project-card.create-new {
            border: 2px dashed rgba(255,255,255,0.2);
            background: transparent;
        }
        .project-card.create-new:hover {
            border-color: var(--status-green);
            background: rgba(46, 204, 64, 0.05);
        }
        .project-name {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text-white);
        }
        .project-date {
            font-size: 0.85rem;
            color: rgba(255,255,255,0.5);
            margin-bottom: 25px; /* Space for buttons */
        }
        .card-actions {
            position: absolute;
            bottom: 15px;
            right: 15px;
            display: flex;
            gap: 8px;
            opacity: 0.6;
            transition: opacity 0.2s;
        }
        .project-card:hover .card-actions {
            opacity: 1;
        }
        .btn-card-action {
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            cursor: pointer;
            font-size: 0.9rem;
            padding: 6px;
            border-radius: 4px;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .btn-card-action:hover {
            background: var(--table-header-bg);
            transform: scale(1.1);
        }
        .btn-card-action.delete:hover {
            background: #ff4136;
        }
        .btn-card-action.archive:hover {
            background: #ff851b;
        }
        
        /* Modal Styles */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .modal-content {
            background: var(--bg-dark);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 12px;
            padding: 30px;
            width: 400px;
            max-width: 90%;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        
        .project-context {
            background: rgba(0, 116, 217, 0.1); /* Subtle blue tint */
            border-left: 4px solid var(--table-header-bg);
            padding: 15px 25px;
            margin: 0 auto 40px auto;
            max-width: 800px;
            text-align: left;
            border-radius: 4px;
            color: rgba(255,255,255,0.9);
            font-size: 0.95rem;
            line-height: 1.5;
        }
        .project-context strong {
            color: white;
            display: inline-block;
            margin-bottom: 4px;
        }

        .modal-title {
            font-size: 1.5rem;
            margin-bottom: 20px;
        }
        .form-input {
            width: 100%;
            padding: 10px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 6px;
            color: white;
            margin-bottom: 20px;
            font-size: 1rem;
        }
        .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
        .btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            font-weight: 600;
        }
        .btn-primary {
            background: var(--table-header-bg);
            color: white;
        }
        .btn-secondary {
            background: rgba(255,255,255,0.1);
            color: white;
        }
        
        .archived-section {
            margin-top: 40px;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 40px;
            text-align: left;
        }
        .archived-title {
            color: rgba(255,255,255,0.5);
            margin-bottom: 20px;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }
        
        /* Footer */
        .project-footer {
            margin-top: 60px;
            padding: 20px;
            text-align: center;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.5);
            font-size: 0.9rem;
        }
        .project-footer img {
            height: 30px;
            vertical-align: middle;
            margin-right: 10px;
            opacity: 0.8;
        }
    `;
    container.appendChild(style);

    const wrapper = document.createElement('div');
    wrapper.className = 'project-selector-container';

    // --- Top Bar (Logo + Lang) ---
    const topBar = document.createElement('div');
    topBar.className = 'selector-header';

    // 1. Alteryx Logo
    const logoDiv = document.createElement('div');
    logoDiv.className = 'selector-logo';
    logoDiv.innerHTML = '<img src="images/alteryx_logo_v3.jpg" alt="Alteryx">';
    topBar.appendChild(logoDiv);

    // 2. Customer Experience Title (Middle)
    const cxDiv = document.createElement('div');
    cxDiv.className = 'cx-subtitle';
    cxDiv.textContent = t.customerExperience;
    topBar.appendChild(cxDiv);

    // 3. Language Selector (Right)
    const langDiv = document.createElement('div');
    langDiv.className = 'selector-lang';

    ['pt', 'en', 'es'].forEach(lang => {
        const btn = document.createElement('button');
        btn.textContent = lang.toUpperCase();

        btn.style.cssText = `
            background: ${currentLang === lang ? 'var(--table-header-bg)' : 'rgba(255,255,255,0.1)'};
            color: white;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
        `;

        btn.onclick = () => {
            localStorage.setItem('dashboard_language', lang);
            window.location.reload();
        };

        langDiv.appendChild(btn);
    });

    topBar.appendChild(langDiv);
    wrapper.appendChild(topBar);


    // --- Header ---
    const header = document.createElement('div');
    header.className = 'project-header';
    header.innerHTML = `
        <h1>${t.myProjects}</h1>
        <p>${t.selectProject}</p>
    `;
    wrapper.appendChild(header);

    // --- Context Text ---
    const contextDiv = document.createElement('div');
    contextDiv.className = 'project-context';
    contextDiv.innerHTML = `
        <strong>${t.contextTitle}</strong><br>
        ${t.contextBody}
    `;
    wrapper.appendChild(contextDiv);

    // --- Projects Lists ---
    const projects = window.ProjectManager.getProjects();
    // Sort by last modified desc
    projects.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

    const activeProjects = projects.filter(p => !p.archived);
    const archivedProjects = projects.filter(p => p.archived);

    // active list
    const list = document.createElement('div');
    list.className = 'projects-list';

    // "Create New" Card
    const createCard = document.createElement('div');
    createCard.className = 'project-card create-new';
    createCard.innerHTML = `
        <span style="font-size: 2rem; margin-bottom: 10px;">+</span>
        <span class="project-name">${t.newProject}</span>
    `;
    createCard.onclick = () => showCreateModal();
    list.appendChild(createCard);

    // Render Function
    const renderProjectCard = (p, isArchived) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        if (isArchived) card.style.opacity = '0.7';

        const dateStr = new Date(p.lastModified).toLocaleDateString(currentLang === 'pt' ? 'pt-BR' : 'en-US');

        card.innerHTML = `
            <div class="project-name">${p.name}</div>
            <div class="project-date">${t.updated}: ${dateStr}</div>
            <div class="card-actions">
                 <button class="btn-card-action" title="${t.rename}" data-action="rename">✏️</button>
                 <button class="btn-card-action archive" title="${isArchived ? t.unarchive : t.archive}" data-action="archive">${isArchived ? '📂' : '📦'}</button>
                 <button class="btn-card-action delete" title="${t.delete}" data-action="delete">🗑️</button>
            </div>
        `;

        // Click on card opens project (unless clicking actions)
        card.onclick = (e) => {
            if (e.target.closest('.card-actions')) return;

            if (isArchived) {
                if (confirm(t.confirmUnarchive)) {
                    window.ProjectManager.toggleArchiveProject(p.id);
                    window.renderProjectSelector(container);
                }
                return;
            }

            window.ProjectManager.setCurrentProjectId(p.id);
            location.reload();
        };

        // Action Handlers
        const actions = card.querySelector('.card-actions');

        // Rename
        actions.querySelector('[data-action="rename"]').onclick = (e) => {
            e.stopPropagation();
            showRenameModal(p);
        };

        // Archive
        actions.querySelector('[data-action="archive"]').onclick = (e) => {
            e.stopPropagation();
            window.ProjectManager.toggleArchiveProject(p.id);
            window.renderProjectSelector(container);
        };

        // Delete
        actions.querySelector('[data-action="delete"]').onclick = (e) => {
            e.stopPropagation();
            if (confirm(`${t.confirmDelete} "${p.name}"?`)) {
                window.ProjectManager.deleteProject(p.id);
                window.renderProjectSelector(container);
            }
        };

        return card;
    };

    activeProjects.forEach(p => list.appendChild(renderProjectCard(p, false)));
    wrapper.appendChild(list);

    // --- Archived Section ---
    if (archivedProjects.length > 0) {
        const archivedSection = document.createElement('div');
        archivedSection.className = 'archived-section';

        const archivedTitle = document.createElement('div');
        archivedTitle.className = 'archived-title';
        archivedTitle.innerHTML = `<span>▶</span> ${t.archivedProjects} (${archivedProjects.length})`;

        const archivedList = document.createElement('div');
        archivedList.className = 'projects-list';
        archivedList.style.display = 'none'; // Hidden by default

        archivedProjects.forEach(p => archivedList.appendChild(renderProjectCard(p, true)));

        archivedTitle.onclick = () => {
            const isHidden = archivedList.style.display === 'none';
            archivedList.style.display = isHidden ? 'grid' : 'none';
            archivedTitle.querySelector('span').textContent = isHidden ? '▼' : '▶';
        };

        archivedSection.appendChild(archivedTitle);
        archivedSection.appendChild(archivedList);
        wrapper.appendChild(archivedSection);
    }

    // --- Footer ---
    const footer = document.createElement('footer');
    footer.className = 'project-footer';
    // Use saved suzano logo or default if available, but for selector maybe just default?
    // Main page footer uses default suzano logo mostly.
    footer.innerHTML = `
        <span>${t.designedBy} Felipe Boni</span>
    `;
    wrapper.appendChild(footer);

    container.appendChild(wrapper);

    // --- Modals ---
    function showCreateModal() {
        removeExistingModal();
        const modal = createBaseModal(t.createModalTitle, t.create);
        document.body.appendChild(modal);

        const input = modal.querySelector('input');
        const btnConfirm = modal.querySelector('#btn-confirm');

        input.focus();

        btnConfirm.onclick = () => {
            const name = input.value.trim();
            if (name) {
                const id = window.ProjectManager.createProject(name);
                window.ProjectManager.setCurrentProjectId(id);
                location.reload();
            }
        };

        input.onkeypress = (e) => { if (e.key === 'Enter') btnConfirm.click(); };
    }

    function showRenameModal(project) {
        removeExistingModal();
        const modal = createBaseModal(t.renameModalTitle, t.save);
        document.body.appendChild(modal);

        const input = modal.querySelector('input');
        input.value = project.name;
        const btnConfirm = modal.querySelector('#btn-confirm');

        input.focus();

        btnConfirm.onclick = () => {
            const name = input.value.trim();
            if (name) {
                window.ProjectManager.renameProject(project.id, name);
                window.renderProjectSelector(container);
                modal.remove();
            }
        };

        input.onkeypress = (e) => { if (e.key === 'Enter') btnConfirm.click(); };
    }

    function removeExistingModal() {
        const existing = document.querySelector('.modal');
        if (existing) existing.remove();
    }

    function createBaseModal(title, actionBtnText) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3 class="modal-title">${title}</h3>
                <input type="text" class="form-input" placeholder="${t.placeholderProjectName}">
                <div class="modal-actions">
                    <button class="btn btn-secondary" id="btn-cancel">${t.cancel}</button>
                    <button class="btn btn-primary" id="btn-confirm">${actionBtnText}</button>
                </div>
            </div>
        `;

        modal.querySelector('#btn-cancel').onclick = () => modal.remove();
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
        return modal;
    }
};
