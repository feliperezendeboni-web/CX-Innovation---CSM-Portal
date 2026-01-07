window.ProjectManager = {
    PROJECTS_KEY: 'suzano_projects_index',
    LEGACY_KEY: 'suzano_report_data',
    STORAGE_PREFIX: 'suzano_project_',

    // Get list of all projects
    getProjects: function () {
        try {
            const raw = localStorage.getItem(this.PROJECTS_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.error("Error reading projects list", e);
            return [];
        }
    },

    // Save list of projects
    saveProjectsIndex: function (projects) {
        localStorage.setItem(this.PROJECTS_KEY, JSON.stringify(projects));
    },

    // Create a new project
    createProject: function (name) {
        const projects = this.getProjects();
        const newId = this.STORAGE_PREFIX + Date.now();
        const newProject = {
            id: newId,
            name: name,
            createdAt: new Date().toISOString(),
            lastModified: new Date().toISOString(),
            archived: false
        };
        projects.push(newProject);
        this.saveProjectsIndex(projects);

        // Initialize project data with default structure
        // We use window.initialDashboardData if available, otherwise fallback
        const baseData = window.initialDashboardData || window.dashboardData;

        // Deep clone
        const cleanData = JSON.parse(JSON.stringify(baseData));

        // 1. Reset Header info
        cleanData.headerOwner = "";

        // 2. Reset Tables (Rows) EXCEPT headers/columns definitions
        // List of sections that have a 'rows' array
        const tableSections = ['tasks', 'risks', 'support', 'initiatives', 'opportunities', 'engagement', 'tacticalRoadmap'];

        tableSections.forEach(section => {
            if (cleanData[section] && Array.isArray(cleanData[section].rows)) {
                cleanData[section].rows = [];
            }
        });

        // 3. Reset Specific Complex Sections
        if (cleanData.logbook) cleanData.logbook.entries = [];

        if (cleanData.strategicGoals) cleanData.strategicGoals.cards = [];

        if (cleanData.milestones) cleanData.milestones.items = [];

        if (cleanData.successMetrics) {
            // Keep structure or empty? User said "zeradas". 
            // Usually nice to have one empty row or just empty array.
            // Let's empty it, the UI has an "Add" button.
            cleanData.successMetrics = [];
        }

        // 4. Reset Indicators (nulls)
        const indicators = ['healthScore', 'adoptionLevel', 'licenseLevel', 'supportStatus', 'execEngagement', 'entitlementUsage'];
        indicators.forEach(key => cleanData[key] = null);

        // 5. Reset Executive Summary values (keep keys)
        if (cleanData.executiveSummary) {
            cleanData.executiveSummary.period = "";
            cleanData.executiveSummary.mission = "";
            cleanData.executiveSummary.purpose = "";
            cleanData.executiveSummary.vision = "";
            cleanData.executiveSummary.drivers = [];
            cleanData.executiveSummary.enablers = [];
            cleanData.executiveSummary.ambition = [];
            cleanData.executiveSummary.priorities = [];
        }

        // 6. Reset Custom Logo if present (optional, maybe keep defaults? User said "apenas mantendo o Header". 
        // Header usually implies title/dates/logo structure. 
        // We'll keep the default logo reference but clear custom user upload if any.)
        // 6. Set Default Logo for new projects
        cleanData.customSuzanoLogo = 'images/default_logo.png';

        localStorage.setItem(newId, JSON.stringify(cleanData));
        return newId;
    },

    // ID Management
    renameProject: function (id, newName) {
        const projects = this.getProjects();
        const project = projects.find(p => p.id === id);
        if (project) {
            project.name = newName;
            project.lastModified = new Date().toISOString();
            this.saveProjectsIndex(projects);
        }
    },

    toggleArchiveProject: function (id) {
        const projects = this.getProjects();
        const project = projects.find(p => p.id === id);
        if (project) {
            project.archived = !project.archived;
            this.saveProjectsIndex(projects);
        }
    },

    // Delete a project
    deleteProject: function (id) {
        const projects = this.getProjects();
        const newProjects = projects.filter(p => p.id !== id);
        this.saveProjectsIndex(newProjects);
        localStorage.removeItem(id);

        if (this.getCurrentProjectId() === id) {
            this.setCurrentProjectId(null);
        }
    },

    // Get current active project ID
    getCurrentProjectId: function () {
        return localStorage.getItem('current_project_id');
    },

    // Set current active project ID
    setCurrentProjectId: function (id) {
        if (id) {
            localStorage.setItem('current_project_id', id);
        } else {
            localStorage.removeItem('current_project_id');
        }
    },

    // Get data for a specific project
    getProjectData: function (id) {
        try {
            const raw = localStorage.getItem(id);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            console.error("Error loading project data", e);
            return null;
        }
    },

    // Save data for a specific project
    saveProjectData: function (id, data) {
        if (!id) return;
        localStorage.setItem(id, JSON.stringify(data));

        // Update last modified date in index
        const projects = this.getProjects();
        const project = projects.find(p => p.id === id);
        if (project) {
            project.lastModified = new Date().toISOString();
            this.saveProjectsIndex(projects);
        }
    },

    // Check for legacy data and migrate if needed
    checkForLegacyData: function () {
        const projects = this.getProjects();
        const legacyDataRaw = localStorage.getItem(this.LEGACY_KEY);

        // Only migrate if we have legacy data and NO projects yet (first run of new system)
        if (legacyDataRaw && projects.length === 0) {
            console.log("Migrating legacy data to new project structure...");
            const newId = this.STORAGE_PREFIX + 'legacy';
            const newProject = {
                id: newId,
                name: "Meu Projeto (Importado)",
                createdAt: new Date().toISOString(),
                lastModified: new Date().toISOString()
            };

            projects.push(newProject);
            this.saveProjectsIndex(projects);
            localStorage.setItem(newId, legacyDataRaw);

            // We do NOT delete the legacy key to be safe, but we stop reading it.
            return newId;
        }
        return null;
    }
};
