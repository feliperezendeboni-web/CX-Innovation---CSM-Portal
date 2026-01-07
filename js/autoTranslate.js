// Auto-translation mapping for section titles
window.sectionTitles = {
    pt: {
        'tasks': 'Tarefas',
        'support': 'Casos de Suporte Escalados',
        'initiatives': 'Iniciativas',
        'opportunities': 'Oportunidades',
        'engagement': 'Engajamento Parceiro',
        'risks': 'Riscos',
        'entitlement': 'Entitlement - Horas/Tokens CX'
    },
    en: {
        'tasks': 'Tasks',
        'support': 'Escalated Support Cases',
        'initiatives': 'Initiatives',
        'opportunities': 'Opportunities',
        'engagement': 'Partner Engagement',
        'risks': 'Risks',
        'entitlement': 'Entitlement - CX Hours/Tokens'
    },
    es: {
        'tasks': 'Tareas',
        'support': 'Casos de Soporte Escalados',
        'initiatives': 'Iniciativas',
        'opportunities': 'Oportunidades',
        'engagement': 'Compromiso del Socio',
        'risks': 'Riesgos',
        'entitlement': 'Entitlement - Horas/Tokens CX'
    }
};

// Get translated section title
window.getSectionTitle = function (sectionKey) {
    const lang = window.currentLanguage || 'pt';
    return window.sectionTitles[lang][sectionKey] || sectionKey;
};

// UI Text translations
window.uiTexts = {
    pt: {
        // Buttons
        'saveChanges': 'Salvar Alterações',
        'exportPPT': 'Exportar PPT',
        'exporting': 'Gerando PPT...',
        'printReport': 'Imprimir em PDF',
        'actions': 'Ações',
        'addNewRow': 'Adicionar nova linha',
        'archive': 'Inibir (Arquivar no Backlog)',
        'unarchive': 'Restaurar (Desarquivar)',
        'deletePermanently': 'Excluir Permanentemente',
        'showBacklog': 'Mostrar Backlog',
        'hideBacklog': 'Ocultar Backlog',
        'minimizeSection': 'Minimizar seção',
        'maximizeSection': 'Maximizar seção',

        // Tabs
        'statusIndicators': 'Indicadores de Status',
        'overview': 'Overview',
        'successPlan': 'Success Plan',

        // Indicators
        'healthScore': 'Status Geral (Health Score):',
        'adoptionLevel': 'Nível de Adoção:',
        'licenseUtilization': 'Aproveitamento das Licenças:',
        'supportCases': 'Casos de Suporte:',
        'executiveEngagement': 'Engajamento Executivo:',
        'entitlementUsage': 'Utilização dos Entitlements:',

        // Health Score Options
        'healthy': 'Saudável',
        'attention': 'Atenção',
        'risk': 'Em Risco',

        // Adoption Options
        'high': 'Alto',
        'medium': 'Médio',
        'low': 'Baixo',

        // Support Options
        'underControl': 'Sob controle',
        'critical': 'Crítico',

        // Engagement Options
        'yes': 'Sim',
        'partial': 'Parcial',
        'no': 'Não',

        // Success Plan
        'successPlanTitle': 'Success Plan',
        'strategicPlanning': 'Planejamento estratégico para garantir o sucesso contínuo do cliente',
        'successMetrics': 'Métricas de Sucesso',
        'adoptionRate': 'TAXA DE ADOÇÃO',
        'npsScore': 'NPS SCORE',
        'activeUsers': 'USUÁRIOS ATIVOS',
        'workflowsCreated': 'WORKFLOWS CRIADOS',
        'vsPreviousMonth': 'vs mês anterior',
        'strategicGoals': 'Objetivos Estratégicos',
        'addGoal': 'Adicionar Objetivo',
        'milestones': 'Marcos Importantes (Milestones)',
        'addMilestone': 'Adicionar Milestone',
        'actionPlan': 'Plano de Ação',
        'next30Days': 'Próximos 30 dias:',
        'next60Days': 'Próximos 60 dias:',
        'next90Days': 'Próximos 90 dias:',

        // Logbook
        'logbook': 'Diario de a Bordo',
        'addLog': 'Agregar Entrada',
        'logDate': 'Fecha',
        'logTitle': 'Asunto/Título',
        'logNotes': 'Notas/Observaciones',

        // Logbook
        'logbook': 'Diário de Bordo',
        'addLog': 'Adicionar Registro',
        'logDate': 'Data',
        'logTitle': 'Assunto/Título',
        'logNotes': 'Observações/Anotações',

        // Status Labels
        'completed': 'Concluído',
        'inProgress': 'Em Andamento',
        'planned': 'Planejado',
        'onHold': 'On Hold',
        'recurring': 'Recorrente Semanal',
        'shared': 'Compartilhado',

        // Executive Summary
        // Executive Summary
        'execSummaryTitle': 'Resumo Executivo – Estratégia',
        'mission': 'Missão',
        'purpose': 'Propósito',
        'vision': 'Visão',
        'guidingPrinciples': 'NORTEADORES',
        'strategicDrivers': 'DIRECIONADORES ESTRATÉGICOS',
        'businessCapabilities': 'HABILITADORES DE NEGÓCIO', // Changed from generic Enablers to match context
        'ambition': 'AMBIÇÃO',
        'execPriorities': 'PRIORIDADES EXECUÇÃO DIRETORIA',

        // Entitlement Labels
        'totalHoursTokens': 'Total Horas/Tokens:',
        'balance': 'Saldo:',
        'percentUsed': 'Utilizado',

        // Detailed Roadmap
        'tacticalRoadmap': 'Roadmap Tático de Sucesso',
        'tactic': 'Tática / Ação',
        'category': 'Categoria',
        'estHours': 'Horas/Tokens Est.',
        'plannedMonth': 'Mês Planejado',
        'involvement': 'Envolvimento',
        'alteryx': 'Alteryx',
        'client': 'Cliente',
        'both': 'Ambos',
        'plannedTotal': 'Total Planejado:',
        'availablePool': 'Total Disponível:',
        'plannedUtilization': 'Utilização Planejada',
        'statusDistribution': 'Distribuição por Status',
        'hoursByStatus': 'Consumo de Horas/Tokens por Status',
        'hours': 'Horas',
        'notPlanned': 'Não Planejado',
        'notApproved': 'Não Aprovado',
        'cancelled': 'Cancelado',

        // Messages
        'confirmDelete': 'Deseja realmente excluir esta linha permanentemente? Esta ação não pode ser desfeita.',
        'dataSaved': 'Dados salvos com sucesso!',
        'opportunity': 'Oportunidade',
        'partner': 'Parceiro',
        'contact': 'Contato',
        'comment': 'Comentário',
        'status': 'Status',
        'designedBy': 'Desenvolvido por',
        'N. Caso': 'N. Caso',
        'Descrição': 'Descrição'
    },
    en: {
        // Buttons
        'saveChanges': 'Save Changes',
        'exportPPT': 'Export to PPT',
        'exporting': 'Generating PPT...',
        'printReport': 'Print to PDF',
        'actions': 'Actions',
        'Responsável': 'Owner', // Explicit Header Translation
        'addNewRow': 'Add new row',
        'archive': 'Archive to Backlog',
        'unarchive': 'Restore (Unarchive)',
        'deletePermanently': 'Delete Permanently',
        'showBacklog': 'Show Backlog',
        'hideBacklog': 'Hide Backlog',
        'minimizeSection': 'Minimize section',
        'maximizeSection': 'Maximize section',

        // Tabs
        'statusIndicators': 'Status Indicators',
        'overview': 'Overview',
        'successPlan': 'Success Plan',

        // Indicators
        'healthScore': 'Overall Health Score:',
        'adoptionLevel': 'Adoption Level:',
        'licenseUtilization': 'License Utilization:',
        'supportCases': 'Support Cases:',
        'executiveEngagement': 'Executive Engagement:',
        'entitlementUsage': 'Entitlement Usage:',

        // Health Score Options
        'healthy': 'Healthy',
        'attention': 'Attention',
        'risk': 'At Risk',

        // Adoption Options
        'high': 'High',
        'medium': 'Medium',
        'low': 'Low',

        // Support Options
        'underControl': 'Under Control',
        'critical': 'Critical',

        // Engagement Options
        'yes': 'Yes',
        'partial': 'Partial',
        'no': 'No',

        // Success Plan
        'successPlanTitle': 'Success Plan',
        'strategicPlanning': 'Strategic planning to ensure continued customer success',
        'successMetrics': 'Success Metrics',
        'adoptionRate': 'ADOPTION RATE',
        'npsScore': 'NPS SCORE',
        'activeUsers': 'ACTIVE USERS',
        'workflowsCreated': 'WORKFLOWS CREATED',
        'vsPreviousMonth': 'vs previous month',
        'strategicGoals': 'Strategic Goals',
        'addGoal': 'Add Goal',
        'milestones': 'Important Milestones',
        'addMilestone': 'Add Milestone',
        'actionPlan': 'Action Plan',
        'next30Days': 'Next 30 days:',
        'next60Days': 'Next 60 days:',
        'next90Days': 'Next 90 days:',

        // Logbook
        'logbook': 'Logbook',
        'addLog': 'Add Entry',
        'logDate': 'Date',
        'logTitle': 'Subject/Title',
        'logNotes': 'Notes/Observations',

        // Status Labels
        'completed': 'Completed',
        'inProgress': 'In Progress',
        'planned': 'Planned',
        'onHold': 'On Hold',
        'recurring': 'Weekly Recurring',
        'shared': 'Shared',

        // Executive Summary
        // Executive Summary
        'execSummaryTitle': 'Executive Summary – Strategy',
        'mission': 'Mission',
        'purpose': 'Purpose',
        'vision': 'Vision',
        'guidingPrinciples': 'GUIDING PRINCIPLES',
        'strategicDrivers': 'STRATEGIC DRIVERS',
        'businessCapabilities': 'BUSINESS CAPABILITIES',
        'ambition': 'AMBITION',
        'execPriorities': 'EXECUTIVE PRIORITIES',

        // Entitlement Labels
        'totalHoursTokens': 'Total Hours/Tokens:',
        'balance': 'Balance:',
        'percentUsed': 'Used',

        // Detailed Roadmap
        'tacticalRoadmap': 'Tactical Success Roadmap',
        'tactic': 'Tactic / Action',
        'category': 'Category',
        'estHours': 'Est. Hours/Tokens',
        'plannedMonth': 'Planned Month',
        'involvement': 'Involvement',
        'alteryx': 'Alteryx',
        'client': 'Client',
        'both': 'Both',
        'plannedTotal': 'Total Planned:',
        'availablePool': 'Total Available:',
        'plannedUtilization': 'Planned Utilization',
        'statusDistribution': 'Status Distribution',
        'hoursByStatus': 'Hours/Tokens Consumption by Status',
        'hours': 'Hours',
        'notPlanned': 'Not Planned',
        'notApproved': 'Not Approved',
        'cancelled': 'Cancelled',

        // Messages
        'confirmDelete': 'Do you really want to permanently delete this row? This action cannot be undone.',
        'dataSaved': 'Data saved successfully!',
        'opportunity': 'Opportunity',
        'partner': 'Partner',
        'contact': 'Contact',
        'comment': 'Comment',
        'status': 'Status',
        'designedBy': 'Designed by',
        'N. Caso': 'Case #',
        'Descrição': 'Description'
    },
    es: {
        // Buttons
        'saveChanges': 'Guardar Cambios',
        'exportPPT': 'Exportar a PPT',
        'exporting': 'Generando PPT...',
        'printReport': 'Imprimir en PDF',
        'actions': 'Acciones',
        'addNewRow': 'Agregar nueva fila',
        'archive': 'Archivar en Backlog',
        'unarchive': 'Restaurar (Desarchivar)',
        'deletePermanently': 'Eliminar Permanentemente',
        'showBacklog': 'Mostrar Backlog',
        'hideBacklog': 'Ocultar Backlog',
        'minimizeSection': 'Minimizar sección',
        'maximizeSection': 'Maximizar sección',

        // Tabs
        'statusIndicators': 'Indicadores de Estado',
        'overview': 'Resumen',
        'successPlan': 'Plan de Éxito',

        // Indicators
        'healthScore': 'Estado General (Health Score):',
        'adoptionLevel': 'Nivel de Adopción:',
        'licenseUtilization': 'Aprovechamiento de Licencias:',
        'supportCases': 'Casos de Soporte:',
        'executiveEngagement': 'Compromiso Ejecutivo:',
        'entitlementUsage': 'Uso de Entitlements:',

        // Health Score Options
        'healthy': 'Saludable',
        'attention': 'Atención',
        'risk': 'En Riesgo',

        // Adoption Options
        'high': 'Alto',
        'medium': 'Medio',
        'low': 'Bajo',

        // Support Options
        'underControl': 'Bajo Control',
        'critical': 'Crítico',

        // Engagement Options
        'yes': 'Sí',
        'partial': 'Parcial',
        'no': 'No',

        // Success Plan
        'successPlanTitle': 'Plan de Éxito',
        'strategicPlanning': 'Planificación estratégica para garantizar el éxito continuo del cliente',
        'successMetrics': 'Métricas de Éxito',
        'adoptionRate': 'TASA DE ADOPCIÓN',
        'npsScore': 'PUNTUACIÓN NPS',
        'activeUsers': 'USUARIOS ACTIVOS',
        'workflowsCreated': 'WORKFLOWS CREADOS',
        'vsPreviousMonth': 'vs mes anterior',
        'strategicGoals': 'Objetivos Estratégicos',
        'addGoal': 'Agregar Objetivo',
        'milestones': 'Hitos Importantes',
        'addMilestone': 'Agregar Hito',
        'actionPlan': 'Plan de Acción',
        'next30Days': 'Próximos 30 días:',
        'next60Days': 'Próximos 60 días:',
        'next90Days': 'Próximos 90 días:',

        // Status Labels
        'completed': 'Completado',
        'inProgress': 'En Progreso',
        'planned': 'Planificado',
        'onHold': 'En Espera',
        'recurring': 'Recurrente Semanal',
        'shared': 'Compartido',

        // Executive Summary
        // Executive Summary
        'execSummaryTitle': 'Resumen Ejecutivo – Estrategia',
        'mission': 'Misión',
        'purpose': 'Propósito',
        'vision': 'Visión',
        'guidingPrinciples': 'PRINCIPIOS REXCTORES',
        'strategicDrivers': 'IMPULSORES ESTRATÉGICOS',
        'businessCapabilities': 'CAPACIDADES DE NEGOCIO',
        'ambition': 'AMBICIÓN',
        'execPriorities': 'PRIORIDADES EJECUTIVAS',

        // Entitlement Labels
        'totalHoursTokens': 'Total de Horas/Tokens:',
        'balance': 'Saldo:',
        'percentUsed': 'Utilizado',

        // Detailed Roadmap
        'tacticalRoadmap': 'Hoja de Ruta Táctica de Éxito',
        'tactic': 'Táctica / Acción',
        'category': 'Categoría',
        'estHours': 'Horas/Tokens Est.',
        'plannedMonth': 'Mes Planificado',
        'involvement': 'Involucramiento',
        'alteryx': 'Alteryx',
        'client': 'Cliente',
        'both': 'Ambos',
        'plannedTotal': 'Total Planificado:',
        'availablePool': 'Total Disponible:',
        'plannedUtilization': 'Utilización Planificada',
        'statusDistribution': 'Distribución por Estado',
        'hoursByStatus': 'Consumo de Horas/Tokens por Estado',
        'hours': 'Horas',
        'notPlanned': 'No Planificado',
        'notApproved': 'No Aprobado',
        'cancelled': 'Cancelado',

        // Messages
        'confirmDelete': '¿Realmente desea eliminar esta fila permanentemente? Esta acción no se puede deshacer.',
        'dataSaved': '¡Datos guardados con éxito!',
        'opportunity': 'Oportunidad',
        'partner': 'Socio',
        'contact': 'Contacto',
        'comment': 'Comentario',
        'status': 'Estado',
        'designedBy': 'Diseñado por',
        'N. Caso': 'N. Caso',
        'Descrição': 'Descripción'
    }
};

// Get translated UI text
window.getUIText = function (key) {
    const lang = window.currentLanguage || 'pt';
    return window.uiTexts[lang][key] || key;
};

// Translate status badges in table content
window.translateStatus = function (statusText) {
    if (!statusText) return statusText;

    const lang = window.currentLanguage || 'pt';
    const text = statusText.toLowerCase().trim();

    // Status mappings
    const statusMap = {
        // Completed variations
        'concluído': { en: 'Completed', es: 'Completado' },
        'completed': { pt: 'Concluído', es: 'Completado' },
        'completado': { pt: 'Concluído', en: 'Completed' },

        // In Progress variations
        'em andamento': { en: 'In Progress', es: 'En Progreso' },
        'andamento': { en: 'In Progress', es: 'En Progreso' },
        'in progress': { pt: 'Em Andamento', es: 'En Progreso' },
        'en progreso': { pt: 'Em Andamento', en: 'In Progress' },

        // Planned variations
        'planejado': { en: 'Planned', es: 'Planificado' },
        'planned': { pt: 'Planejado', es: 'Planificado' },
        'planificado': { pt: 'Planejado', en: 'Planned' },

        // On Hold
        'on hold': { pt: 'On Hold', es: 'En Espera' },
        'en espera': { pt: 'On Hold', en: 'On Hold' },

        // Recurring
        'recorrente semanal': { en: 'Weekly Recurring', es: 'Recurrente Semanal' },
        'weekly recurring': { pt: 'Recorrente Semanal', es: 'Recurrente Semanal' },
        'recurrente semanal': { pt: 'Recorrente Semanal', en: 'Weekly Recurring' },

        // Shared
        'compartilhado': { en: 'Shared', es: 'Compartido' },
        'shared': { pt: 'Compartilhado', es: 'Compartido' },
        'compartido': { pt: 'Compartilhado', en: 'Shared' },

        // New Statuses
        'cancelado': { en: 'Cancelled', es: 'Cancelado' },
        'cancelled': { pt: 'Cancelado', es: 'Cancelado' },

        'não planejado': { en: 'Not Planned', es: 'No Planificado' },
        'nao planejado': { en: 'Not Planned', es: 'No Planificado' },
        'not planned': { pt: 'Não Planejado', es: 'No Planificado' },
        'no planificado': { pt: 'Não Planejado', en: 'Not Planned' },

        'não aprovado': { en: 'Not Approved', es: 'No Aprobado' },
        'nao aprovado': { en: 'Not Approved', es: 'No Aprobado' },
        'not approved': { pt: 'Não Aprovado', es: 'No Aprobado' },
        'no aprobado': { pt: 'Não Aprovado', en: 'Not Approved' }
    };

    // Find matching status
    for (const [key, translations] of Object.entries(statusMap)) {
        if (text.includes(key)) {
            return translations[lang] || statusText;
        }
    }

    return statusText;
};

// Table Header Translations
window.tableHeaders = {
    pt: {
        // Common headers
        'task': 'Tarefa',
        'responsible': 'Responsável',
        'startDate': 'Data Início',
        'endDate': 'Data Fim',
        'status': 'Status',
        'category': 'Categoria',
        'risk': 'Risco',
        'impact': 'Impacto',
        'mitigation': 'Mitigação',
        'opportunity': 'Oportunidade',
        'value': 'Valor',
        'probability': 'Probabilidade',
        'contact': 'Contato',
        'lastInteraction': 'Última Interação',
        'nextSteps': 'Próximos Passos',
        'hoursNeeded': 'Horas/Tokens Necessários',
        'hoursUsed': 'Horas/Tokens Utilizados',
        'balance': 'Saldo'
    },
    en: {
        // Common headers
        'task': 'Task',
        'responsible': 'Owner',
        'startDate': 'Start Date',
        'endDate': 'End Date',
        'status': 'Status',
        'category': 'Category',
        'risk': 'Risk',
        'impact': 'Impact',
        'mitigation': 'Mitigation',
        'opportunity': 'Opportunity',
        'value': 'Value',
        'probability': 'Probability',
        'contact': 'Contact',
        'lastInteraction': 'Last Interaction',
        'nextSteps': 'Next Steps',
        'hoursNeeded': 'Hours/Tokens Needed',
        'hoursUsed': 'Hours/Tokens Used',
        'balance': 'Balance'
    },
    es: {
        // Common headers
        'task': 'Tarea',
        'responsible': 'Responsable',
        'startDate': 'Fecha Inicio',
        'endDate': 'Fecha Fin',
        'status': 'Estado',
        'category': 'Categoría',
        'risk': 'Riesgo',
        'impact': 'Impacto',
        'mitigation': 'Mitigación',
        'opportunity': 'Oportunidad',
        'value': 'Valor',
        'probability': 'Probabilidad',
        'contact': 'Contacto',
        'lastInteraction': 'Última Interacción',
        'nextSteps': 'Próximos Pasos',
        'hoursNeeded': 'Horas/Tokens Necesarios',
        'hoursUsed': 'Horas/Tokens Utilizados',
        'balance': 'Saldo'
    }
};

// Get default headers for a section based on current language
window.getDefaultHeaders = function (sectionKey) {
    const lang = window.currentLanguage || 'pt';

    // Default header mappings by section
    const sectionHeaderKeys = {
        'tasks': ['task', 'responsible', 'startDate', 'endDate', 'status'],
        'support': ['task', 'responsible', 'startDate', 'endDate', 'status'],
        'initiatives': ['name', 'hoursNeeded', 'status'], // Fixed initiatives key
        'opportunities': ['opportunity', 'contact', 'comment', 'status'],
        'engagement': ['engagement', 'contact', 'comment', 'status'], // Updated to match data.js structure
        'risks': ['risk', 'category', 'impact', 'mitigation', 'status'],
        'entitlement': ['name', 'hoursNeeded', 'status'] // Fixed entitlement key
    };

    const headerKeys = sectionHeaderKeys[sectionKey] || [];
    return headerKeys.map(key => window.tableHeaders[lang][key] || key);
};

// Global Translation Helper
window.t = function (key) {
    if (!key) return '';
    const lang = window.currentLanguage || 'pt'; // Default to PT

    // 1. Try Translations (from translations.js)
    if (window.translations && window.translations[lang] && window.translations[lang][key]) {
        return window.translations[lang][key];
    }

    // 2. Try UI Texts (from autoTranslate.js)
    if (window.uiTexts && window.uiTexts[lang] && window.uiTexts[lang][key]) {
        return window.uiTexts[lang][key];
    }

    // 3. Try to use key as index for Translations (Reverse lookup for Headers)
    // Example: key='Tarefas', lang='en'. translations['en']['Tarefas'] = 'Tasks'
    if (window.translations && window.translations[lang] && window.translations[lang][key]) {
        return window.translations[lang][key];
    }

    return key;
};

