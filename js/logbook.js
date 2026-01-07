// Logbook Tab Content
window.renderLogbook = function () {
    const container = document.createElement('div');
    container.className = 'logbook-container';
    container.style.padding = '20px';

    // Header
    const header = document.createElement('div');
    header.style.marginBottom = '30px';
    const title = document.createElement('h2');
    title.style.color = 'var(--primary-color)';
    title.textContent = window.getUIText ? window.getUIText('logbook') : 'Diário de Bordo';
    header.appendChild(title);
    container.appendChild(header);

    // Initial Data Check
    if (!window.dashboardData.logbook) {
        window.dashboardData.logbook = { entries: [] };
    }

    // Add Entry Section
    const addSection = document.createElement('div');
    addSection.className = 'data-section';
    addSection.style.marginBottom = '30px';
    addSection.style.padding = '20px';
    addSection.style.background = 'rgba(255, 255, 255, 0.03)';
    addSection.style.borderRadius = '8px';

    const addTitle = document.createElement('h3');
    addTitle.className = 'section-title';
    addTitle.textContent = window.getUIText ? window.getUIText('addLog') : 'Adicionar Registro';
    addSection.appendChild(addTitle);

    const form = document.createElement('div');
    form.style.display = 'grid';
    form.style.gap = '15px';
    form.style.gridTemplateColumns = '1fr 1fr';

    // Date Input
    const dateGroup = document.createElement('div');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = window.getUIText ? window.getUIText('logDate') : 'Data';
    dateLabel.style.display = 'block';
    dateLabel.style.marginBottom = '5px';
    dateLabel.style.color = 'rgba(255,255,255,0.7)';
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.style.width = '100%';
    dateInput.style.padding = '8px';
    dateInput.style.background = 'rgba(255,255,255,0.1)';
    dateInput.style.border = '1px solid rgba(255,255,255,0.2)';
    dateInput.style.color = '#fff';
    dateInput.style.borderRadius = '4px';
    // Default to today
    dateInput.valueAsDate = new Date();
    dateGroup.appendChild(dateLabel);
    dateGroup.appendChild(dateInput);

    // Title Input
    const titleGroup = document.createElement('div');
    const titleLabel = document.createElement('label');
    titleLabel.textContent = window.getUIText ? window.getUIText('logTitle') : 'Assunto';
    titleLabel.style.display = 'block';
    titleLabel.style.marginBottom = '5px';
    titleLabel.style.color = 'rgba(255,255,255,0.7)';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.style.width = '100%';
    titleInput.style.padding = '8px';
    titleInput.style.background = 'rgba(255,255,255,0.1)';
    titleInput.style.border = '1px solid rgba(255,255,255,0.2)';
    titleInput.style.color = '#fff';
    titleInput.style.borderRadius = '4px';
    titleGroup.appendChild(titleLabel);
    titleGroup.appendChild(titleInput);

    // Notes Input (Textarea)
    const notesGroup = document.createElement('div');
    notesGroup.style.gridColumn = '1 / -1';
    const notesLabel = document.createElement('label');
    notesLabel.textContent = window.getUIText ? window.getUIText('logNotes') : 'Observações';
    notesLabel.style.display = 'block';
    notesLabel.style.marginBottom = '5px';
    notesLabel.style.color = 'rgba(255,255,255,0.7)';
    const notesInput = document.createElement('textarea');
    notesInput.style.width = '100%';
    notesInput.style.minHeight = '100px';
    notesInput.style.padding = '8px';
    notesInput.style.background = 'rgba(255,255,255,0.1)';
    notesInput.style.border = '1px solid rgba(255,255,255,0.2)';
    notesInput.style.color = '#fff';
    notesInput.style.borderRadius = '4px';
    notesInput.style.resize = 'vertical';
    notesGroup.appendChild(notesLabel);
    notesGroup.appendChild(notesInput);

    // Add Button
    const btnAdd = document.createElement('button');
    btnAdd.textContent = '+ ' + (window.getUIText ? window.getUIText('addLog') : 'Adicionar');
    btnAdd.className = 'btn-primary';
    btnAdd.style.gridColumn = '1 / -1';
    btnAdd.style.justifySelf = 'start';
    btnAdd.style.padding = '8px 24px';
    btnAdd.style.marginTop = '10px';
    btnAdd.onclick = () => {
        if (!dateInput.value || !titleInput.value) {
            alert('Por favor, preencha data e título.');
            return;
        }
        const newEntry = {
            id: Date.now(),
            date: dateInput.value,
            title: titleInput.value,
            content: notesInput.value
        };
        window.dashboardData.logbook.entries.push(newEntry);
        window.saveData();
        titleInput.value = '';
        notesInput.value = '';
        renderEntries();
    };

    form.appendChild(dateGroup);
    form.appendChild(titleGroup);
    form.appendChild(notesGroup);
    form.appendChild(btnAdd);
    addSection.appendChild(form);
    container.appendChild(addSection);

    // Timeout (Log Entries) Section
    const timelineSection = document.createElement('div');
    timelineSection.className = 'logbook-timeline';
    timelineSection.style.position = 'relative';
    timelineSection.style.paddingLeft = '30px';
    timelineSection.style.borderLeft = '2px solid rgba(33, 150, 243, 0.3)'; // Blue vertical line

    const renderEntries = () => {
        timelineSection.innerHTML = '';
        // Sort by date desc
        const entries = [...window.dashboardData.logbook.entries].sort((a, b) => new Date(b.date) - new Date(a.date));

        if (entries.length === 0) {
            timelineSection.textContent = 'Nenhum registro encontrado.';
            timelineSection.style.color = 'rgba(255,255,255,0.5)';
            return;
        }

        entries.forEach((entry, index) => {
            const item = document.createElement('div');
            item.className = 'log-item';
            item.style.marginBottom = '30px';
            item.style.position = 'relative';

            // Dot on timeline
            const dot = document.createElement('div');
            dot.style.position = 'absolute';
            dot.style.left = '-37px'; // Adjust based on padding/border
            dot.style.top = '10px';
            dot.style.width = '12px';
            dot.style.height = '12px';
            dot.style.borderRadius = '50%';
            dot.style.background = '#2196F3'; // Blue
            dot.style.border = '2px solid #0f172a'; // Match bg
            dot.style.boxShadow = '0 0 0 2px rgba(33, 150, 243, 0.3)';
            item.appendChild(dot);

            // Card
            const card = document.createElement('div');
            card.style.background = 'rgba(255,255,255,0.03)';
            card.style.border = '1px solid rgba(255,255,255,0.1)';
            card.style.borderRadius = '8px';
            card.style.padding = '15px';
            card.style.position = 'relative';

            // Delete Btn
            const btnDel = document.createElement('button');
            btnDel.innerHTML = '🗑️';
            btnDel.style.position = 'absolute';
            btnDel.style.top = '10px';
            btnDel.style.right = '10px';
            btnDel.style.background = 'none';
            btnDel.style.border = 'none';
            btnDel.style.cursor = 'pointer';
            btnDel.style.opacity = '0.6';
            btnDel.title = window.getUIText ? window.getUIText('delete') : 'Excluir';
            btnDel.onclick = () => {
                if (confirm(window.getUIText ? window.getUIText('confirmDelete') : 'Excluir?')) {
                    // Find index in original data
                    const originalIndex = window.dashboardData.logbook.entries.findIndex(e => e.id === entry.id);
                    if (originalIndex !== -1) {
                        window.dashboardData.logbook.entries.splice(originalIndex, 1);
                        window.saveData();
                        renderEntries();
                    }
                }
            };
            card.appendChild(btnDel);

            // Date Display
            const dateDisplay = document.createElement('div');
            // Format date locale
            try {
                const dateObj = new Date(entry.date + 'T12:00:00'); // Valid noon time to avoid timezone shifts
                dateDisplay.textContent = dateObj.toLocaleDateString(window.currentLanguage === 'pt' ? 'pt-BR' : window.currentLanguage === 'es' ? 'es-ES' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });
            } catch (e) {
                dateDisplay.textContent = entry.date;
            }
            dateDisplay.style.fontSize = '0.85rem';
            dateDisplay.style.color = '#2196F3';
            dateDisplay.style.fontWeight = 'bold';
            dateDisplay.style.marginBottom = '5px';
            card.appendChild(dateDisplay);

            // Title (Editable)
            const titleEl = document.createElement('h4');
            titleEl.textContent = entry.title;
            titleEl.contentEditable = 'true';
            titleEl.style.margin = '0 0 10px 0';
            titleEl.style.color = 'white';
            titleEl.onblur = (e) => {
                const originalIndex = window.dashboardData.logbook.entries.findIndex(e => e.id === entry.id);
                if (originalIndex !== -1) {
                    window.dashboardData.logbook.entries[originalIndex].title = e.target.textContent;
                    window.saveData();
                }
            };
            card.appendChild(titleEl);

            // Content (Editable)
            const contentEl = document.createElement('div');
            contentEl.textContent = entry.content;
            contentEl.contentEditable = 'true';
            contentEl.style.color = 'rgba(255,255,255,0.8)';
            contentEl.style.whiteSpace = 'pre-wrap';
            contentEl.style.fontSize = '0.95rem';
            contentEl.style.lineHeight = '1.5';
            contentEl.onblur = (e) => {
                const originalIndex = window.dashboardData.logbook.entries.findIndex(e => e.id === entry.id);
                if (originalIndex !== -1) {
                    window.dashboardData.logbook.entries[originalIndex].content = e.target.textContent;
                    window.saveData();
                }
            };
            card.appendChild(contentEl);

            item.appendChild(card);
            timelineSection.appendChild(item);
        });
    };

    renderEntries();
    container.appendChild(timelineSection);

    return container;
};
