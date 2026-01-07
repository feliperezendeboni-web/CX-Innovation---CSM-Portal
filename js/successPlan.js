// Success Plan Tab Content
window.renderSuccessPlan = function () {
    const container = document.createElement('div');
    container.className = 'success-plan-container';
    container.style.padding = '20px';

    // Success Plan Header Container
    const headerContainer = document.createElement('div');
    headerContainer.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 30px;
    `;

    // Title and Description
    const titleBlock = document.createElement('div');
    titleBlock.innerHTML = `
        <h2 style="color: var(--primary-color); margin-bottom: 10px;">${window.getUIText ? window.getUIText('successPlanTitle') : 'Success Plan'}</h2>
        <p style="color: rgba(255,255,255,0.7);">
            ${window.getUIText ? window.getUIText('strategicPlanning') : 'Planejamento estratégico para garantir o sucesso contínuo do cliente'}
        </p>
    `;
    headerContainer.appendChild(titleBlock);

    // Action Buttons (Save & Print)
    const buttonsBlock = document.createElement('div');
    buttonsBlock.style.cssText = `
        display: flex;
        gap: 10px;
    `;

    const btnPrint = document.createElement('button');
    btnPrint.className = 'btn-print';
    btnPrint.textContent = window.getUIText ? window.getUIText('printReport') : 'Imprimir em PDF';
    btnPrint.onclick = () => window.print();

    // Save Button Removed (Auto-Save)
    buttonsBlock.appendChild(btnPrint);
    headerContainer.appendChild(buttonsBlock);

    container.appendChild(headerContainer);

    // Success Metrics Section - Dynamic
    const metricsSection = document.createElement('div');
    metricsSection.className = 'data-section';

    // Header with Add Button
    const metricsHeader = document.createElement('div');
    metricsHeader.style.display = 'flex';
    metricsHeader.style.justifyContent = 'space-between';
    metricsHeader.style.alignItems = 'center';
    metricsHeader.style.marginBottom = '15px';

    const metricsTitle = document.createElement('h3');
    metricsTitle.className = 'section-title';
    metricsTitle.style.marginBottom = '0';
    metricsTitle.textContent = window.getUIText ? window.getUIText('successMetrics') : 'Métricas de Sucesso';

    const btnAddMetric = document.createElement('button');
    btnAddMetric.textContent = '+';
    btnAddMetric.className = 'btn-add-row'; // Reuse existing class
    btnAddMetric.style.padding = '2px 8px';
    btnAddMetric.style.fontSize = '1.2rem';
    btnAddMetric.title = "Adicionar métrica";
    btnAddMetric.onclick = () => {
        if (!window.dashboardData.successMetrics) window.dashboardData.successMetrics = [];
        window.dashboardData.successMetrics.push({
            id: Date.now(),
            label: 'Nova Métrica',
            value: '0',
            trend: '0% vs anterior'
        });
        if (window.saveData) window.saveData();
        renderMetricsGrid(); // Refresh
    };

    metricsHeader.appendChild(metricsTitle);
    metricsHeader.appendChild(btnAddMetric);
    metricsSection.appendChild(metricsHeader);

    // Grid Container
    const metricsGrid = document.createElement('div');
    metricsGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;';

    const renderMetricsGrid = () => {
        metricsGrid.innerHTML = '';
        // Initialize if empty (fallback)
        if (!window.dashboardData.successMetrics) {
            window.dashboardData.successMetrics = [
                { id: 1, label: 'ADOPTION RATE', value: '75%', trend: '↑ 5% vs prev month' },
                { id: 2, label: 'NPS SCORE', value: '8.5', trend: '↑ 0.5 vs prev month' },
                { id: 3, label: 'ACTIVE USERS', value: '120', trend: '↑ 15 vs prev month' }
            ];
        }

        const metrics = window.dashboardData.successMetrics;

        metrics.forEach((metric, index) => {
            const card = document.createElement('div');
            card.className = 'metric-card';
            card.style.position = 'relative';

            // Delete Button (visible on hover)
            const btnDelete = document.createElement('span');
            btnDelete.innerHTML = '&times;';
            btnDelete.title = "Excluir métrica";
            btnDelete.style.cssText = 'position: absolute; top: 5px; right: 10px; cursor: pointer; color: rgba(255,255,255,0.2); font-size: 1.5rem; line-height: 1; transition: color 0.2s;';
            btnDelete.onclick = (e) => {
                e.stopPropagation();
                if (confirm('Excluir esta métrica?')) {
                    metrics.splice(index, 1);
                    if (window.saveData) window.saveData();
                    renderMetricsGrid();
                }
            };
            btnDelete.onmouseover = () => btnDelete.style.color = '#ff4d4d';
            btnDelete.onmouseout = () => btnDelete.style.color = 'rgba(255,255,255,0.2)';
            card.appendChild(btnDelete);

            // Label
            const labelDiv = document.createElement('div');
            labelDiv.className = 'metric-label';
            labelDiv.contentEditable = 'true';
            labelDiv.textContent = metric.label;
            labelDiv.onblur = () => {
                metric.label = labelDiv.textContent;
                if (window.saveData) window.saveData();
            };
            card.appendChild(labelDiv);

            // Value
            const valueDiv = document.createElement('div');
            valueDiv.className = 'metric-value';
            valueDiv.contentEditable = 'true';
            valueDiv.textContent = metric.value;
            valueDiv.onblur = () => {
                metric.value = valueDiv.textContent;
                if (window.saveData) window.saveData();
            };
            card.appendChild(valueDiv);

            // Trend
            const trendDiv = document.createElement('div');
            trendDiv.className = 'metric-trend';
            trendDiv.contentEditable = 'true';
            trendDiv.textContent = metric.trend;
            trendDiv.onblur = () => {
                metric.trend = trendDiv.textContent;
                if (window.saveData) window.saveData();
            };
            card.appendChild(trendDiv);

            metricsGrid.appendChild(card);
        });
    };

    renderMetricsGrid();
    metricsSection.appendChild(metricsGrid);
    container.appendChild(metricsSection);



    // Executive Summary Section
    const execSummarySection = document.createElement('div');
    execSummarySection.className = 'data-section';
    execSummarySection.style.marginBottom = '30px';

    // Header
    const execHeader = document.createElement('h3');
    execHeader.className = 'section-title';
    execHeader.style.borderLeft = '5px solid #ff6600'; // Match orange Theme from image
    execHeader.style.paddingLeft = '10px';

    // Create text node for title (translated)
    const titleText = document.createTextNode((window.getUIText ? window.getUIText('execSummaryTitle') : 'Resumo Executivo – Estratégia') + ' ');
    execHeader.appendChild(titleText);

    // Create editable span for period
    const periodSpan = document.createElement('span');
    periodSpan.contentEditable = 'true';
    periodSpan.textContent = window.dashboardData.executiveSummary.period || "2024-2028";
    periodSpan.style.cssText = 'border-bottom: 1px dashed rgba(255,255,255,0.3); color: inherit; transition: border-color 0.3s;';
    periodSpan.onblur = (e) => {
        window.dashboardData.executiveSummary.period = e.target.innerText;
        if (window.saveData) window.saveData();
    };
    periodSpan.onfocus = () => {
        periodSpan.style.borderBottomColor = '#ff6600';
        periodSpan.style.outline = 'none';
    };

    execHeader.appendChild(periodSpan);
    execSummarySection.appendChild(execHeader);

    // Guiding Principles (Norteadores) - Static Structure (Fields are editable)
    const guidingDiv = document.createElement('div');
    guidingDiv.style.marginBottom = '20px';
    guidingDiv.innerHTML = `<h4 style="color:white; border-bottom: 2px solid #ff6600; padding-bottom:5px; margin-bottom:10px;">${window.getUIText('guidingPrinciples')}</h4>`;

    const principlesContainer = document.createElement('div');
    principlesContainer.style.cssText = 'display: grid; grid-template-columns: 100px 1fr; gap: 10px; font-size: 0.9rem; align-items: center;';

    ['mission', 'purpose', 'vision'].forEach(key => {
        const label = document.createElement('div');
        label.style.fontWeight = 'bold';
        label.style.color = '#00ffcc'; // Evaluation text color
        label.textContent = window.getUIText(key) + ':';

        const content = document.createElement('div');
        content.contentEditable = 'true';
        content.textContent = window.dashboardData.executiveSummary[key];
        content.style.cssText = 'background: rgba(255,255,255,0.05); padding: 5px; border-radius: 4px;';
        content.onblur = (e) => {
            window.dashboardData.executiveSummary[key] = e.target.innerText;
            if (window.saveData) window.saveData();
        };

        principlesContainer.appendChild(label);
        principlesContainer.appendChild(content);
    });
    guidingDiv.appendChild(principlesContainer);
    execSummarySection.appendChild(guidingDiv);

    // Helper to create Header with Add Button
    const createHeaderWithAdd = (text, onClickAdd) => {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #ff6600; padding-bottom:5px; margin-bottom:10px; margin-top:20px;';

        const h4 = document.createElement('h4');
        h4.style.cssText = 'color:white; margin:0; text-align:left;';
        h4.textContent = text;

        const addBtn = document.createElement('button');
        addBtn.innerHTML = '+';
        addBtn.title = 'Adicionar item';
        addBtn.style.cssText = 'background: #ff6600; color: white; border: none; border-radius: 4px; width: 24px; height: 24px; cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: center;';
        addBtn.onclick = onClickAdd;

        wrapper.appendChild(h4);
        wrapper.appendChild(addBtn);
        return wrapper;
    };


    // 1. Strategic Drivers Container
    const driversContainer = document.createElement('div');
    driversContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; text-align: center; margin-bottom: 20px;';

    const renderDriversBlock = () => {
        driversContainer.innerHTML = '';
        const header = createHeaderWithAdd(window.getUIText('strategicDrivers'), () => {
            window.dashboardData.executiveSummary.drivers.push({ title: "Novo Direcionador", kpi: "KPI" });
            if (window.saveData) window.saveData();
            renderDriversBlock();
        });
        driversContainer.appendChild(header);

        window.dashboardData.executiveSummary.drivers.forEach((driver, idx) => {
            const cell = document.createElement('div');
            cell.style.cssText = 'position: relative; border: 1px solid rgba(255,255,255,0.2); padding: 10px; border-radius: 4px; background: rgba(0,0,0,0.2); min-height: 80px; display: flex; flex-direction: column; justify-content: center;';

            const delBtn = document.createElement('span');
            delBtn.innerHTML = '×';
            delBtn.style.cssText = 'position: absolute; top: 2px; right: 5px; cursor: pointer; color: #ff4d4d; font-size: 1.2rem; font-weight:bold; opacity:0; transition:opacity 0.2s;';
            cell.onmouseenter = () => delBtn.style.opacity = '1';
            cell.onmouseleave = () => delBtn.style.opacity = '0';
            delBtn.onclick = () => {
                if (confirm('Excluir este item?')) {
                    window.dashboardData.executiveSummary.drivers.splice(idx, 1);
                    if (window.saveData) window.saveData();
                    renderDriversBlock();
                }
            };

            const title = document.createElement('div');
            title.contentEditable = 'true';
            title.style.fontWeight = 'bold';
            title.style.marginBottom = '5px';
            title.textContent = driver.title;
            title.onblur = (e) => {
                window.dashboardData.executiveSummary.drivers[idx].title = e.target.innerText;
                if (window.saveData) window.saveData();
            };

            const kpi = document.createElement('div');
            kpi.contentEditable = 'true';
            kpi.style.fontSize = '0.8rem';
            kpi.style.color = '#aaa';
            kpi.textContent = driver.kpi;
            kpi.onblur = (e) => {
                window.dashboardData.executiveSummary.drivers[idx].kpi = e.target.innerText;
                if (window.saveData) window.saveData();
            };

            cell.appendChild(delBtn);
            cell.appendChild(title);
            cell.appendChild(kpi);
            driversContainer.appendChild(cell);
        });
    };
    renderDriversBlock();
    execSummarySection.appendChild(driversContainer);


    // 2. Enablers Container
    const enablersContainer = document.createElement('div');
    enablersContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; text-align: center; margin-bottom: 20px;';

    const renderEnablersBlock = () => {
        enablersContainer.innerHTML = '';
        const header = createHeaderWithAdd(window.getUIText('businessCapabilities'), () => {
            window.dashboardData.executiveSummary.enablers.push("Nova Capacidade");
            if (window.saveData) window.saveData();
            renderEnablersBlock();
        });
        enablersContainer.appendChild(header);

        window.dashboardData.executiveSummary.enablers.forEach((text, idx) => {
            const cell = document.createElement('div');
            cell.contentEditable = 'true';
            cell.style.cssText = 'position: relative; border: 1px solid rgba(255,255,255,0.2); padding: 10px; border-radius: 4px; background: rgba(0,0,0,0.2); font-size: 0.85rem; min-height: 60px; display: flex; align-items: center; justify-content: center;';
            cell.textContent = text;

            const delBtn = document.createElement('span');
            delBtn.innerHTML = '×';
            delBtn.contentEditable = 'false';
            delBtn.style.cssText = 'position: absolute; top: 0px; right: 5px; cursor: pointer; color: #ff4d4d; font-size: 1.2rem; font-weight:bold; opacity:0; transition:opacity 0.2s; z-index:10;';

            cell.onmouseenter = () => delBtn.style.opacity = '1';
            cell.onmouseleave = () => delBtn.style.opacity = '0';
            delBtn.onclick = (e) => {
                e.stopPropagation();
                if (confirm('Excluir este item?')) {
                    window.dashboardData.executiveSummary.enablers.splice(idx, 1);
                    if (window.saveData) window.saveData();
                    renderEnablersBlock();
                }
            };

            cell.onblur = (e) => {
                window.dashboardData.executiveSummary.enablers[idx] = e.target.innerText.replace('×', '').trim();
                if (window.saveData) window.saveData();
            };

            cell.appendChild(delBtn);
            enablersContainer.appendChild(cell);
        });
    };
    renderEnablersBlock();
    execSummarySection.appendChild(enablersContainer);


    // 3. Ambition Section
    const ambitionContainer = document.createElement('div');
    ambitionContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; text-align: center; margin-bottom: 20px;';

    const renderAmbitionBlock = () => {
        ambitionContainer.innerHTML = '';
        const header = createHeaderWithAdd(window.getUIText('ambition'), () => {
            window.dashboardData.executiveSummary.ambition.push("Nova Ambição");
            if (window.saveData) window.saveData();
            renderAmbitionBlock();
        });
        ambitionContainer.appendChild(header);

        const ambitionColors = ['#00C853', '#00B0FF', '#D50000'];
        window.dashboardData.executiveSummary.ambition.forEach((text, idx) => {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = `position: relative; border: 1px solid ${ambitionColors[idx % 3]}; color: ${ambitionColors[idx % 3]}; border-radius: 4px; font-weight: bold; min-height: 50px; display:flex; align-items:center; justify-content:center;`;

            const cell = document.createElement('div');
            cell.contentEditable = 'true';
            cell.style.cssText = 'padding: 10px; width: 100%; height: 100%; display:flex; align-items:center; justify-content:center; outline:none;';
            cell.textContent = text;
            cell.onblur = (e) => {
                window.dashboardData.executiveSummary.ambition[idx] = e.target.innerText;
                if (window.saveData) window.saveData();
            };

            const delBtn = document.createElement('span');
            delBtn.innerHTML = '×';
            delBtn.style.cssText = 'position: absolute; top: 0px; right: 5px; cursor: pointer; color: inherit; font-size: 1.2rem; font-weight:bold; opacity:0; transition:opacity 0.2s;';
            wrapper.onmouseenter = () => delBtn.style.opacity = '1';
            wrapper.onmouseleave = () => delBtn.style.opacity = '0';
            delBtn.onclick = () => {
                if (confirm('Excluir?')) {
                    window.dashboardData.executiveSummary.ambition.splice(idx, 1);
                    if (window.saveData) window.saveData();
                    renderAmbitionBlock();
                }
            };

            wrapper.appendChild(cell);
            wrapper.appendChild(delBtn);
            ambitionContainer.appendChild(wrapper);
        });
    };
    renderAmbitionBlock();
    execSummarySection.appendChild(ambitionContainer);


    // 4. Executive Priorities
    const prioritiesContainer = document.createElement('div');
    prioritiesContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; text-align: center; margin-bottom: 20px;';

    const renderPrioritiesBlock = () => {
        prioritiesContainer.innerHTML = '';
        const header = createHeaderWithAdd(window.getUIText('execPriorities'), () => {
            window.dashboardData.executiveSummary.priorities.push({ title: "Prioridade / Iniciativa", desc: "Meta / Valor" });
            if (window.saveData) window.saveData();
            renderPrioritiesBlock();
        });
        prioritiesContainer.appendChild(header);

        window.dashboardData.executiveSummary.priorities.forEach((item, idx) => {
            const cell = document.createElement('div');
            cell.style.cssText = 'position: relative; border: 1px solid rgba(255,255,255,0.2); padding: 10px; border-radius: 4px; background: rgba(0,0,0,0.2); min-height: 80px; display: flex; flex-direction: column; justify-content: center;';

            const delBtn = document.createElement('span');
            delBtn.innerHTML = '×';
            delBtn.style.cssText = 'position: absolute; top: 0px; right: 5px; cursor: pointer; color: #ff4d4d; font-size: 1.2rem; font-weight:bold; opacity:0; transition:opacity 0.2s;';
            cell.onmouseenter = () => delBtn.style.opacity = '1';
            cell.onmouseleave = () => delBtn.style.opacity = '0';
            delBtn.onclick = () => {
                if (confirm('Excluir este item?')) {
                    window.dashboardData.executiveSummary.priorities.splice(idx, 1);
                    if (window.saveData) window.saveData();
                    renderPrioritiesBlock();
                }
            };

            const title = document.createElement('div');
            title.contentEditable = 'true';
            title.style.fontWeight = 'bold';
            title.style.fontSize = '0.9rem';
            title.style.marginBottom = '5px';
            title.textContent = item.title;
            title.onblur = (e) => {
                window.dashboardData.executiveSummary.priorities[idx].title = e.target.innerText;
                if (window.saveData) window.saveData();
            };

            const desc = document.createElement('div');
            desc.contentEditable = 'true';
            desc.style.fontSize = '0.9rem';
            desc.style.color = '#ff6600'; // Orange highlight
            desc.textContent = item.desc;
            desc.onblur = (e) => {
                window.dashboardData.executiveSummary.priorities[idx].desc = e.target.innerText;
                if (window.saveData) window.saveData();
            };

            cell.appendChild(delBtn);
            cell.appendChild(title);
            cell.appendChild(desc);
            prioritiesContainer.appendChild(cell);
        });
    };
    renderPrioritiesBlock();
    execSummarySection.appendChild(prioritiesContainer);

    container.appendChild(execSummarySection);


    // Success Milestones Section - Dynamic and Editable
    const milestonesSection = document.createElement('div');
    milestonesSection.className = 'data-section';

    const milestonesSectionTitle = document.createElement('h3');
    milestonesSectionTitle.className = 'section-title';
    milestonesSectionTitle.textContent = window.getUIText ? window.getUIText('milestones') : 'Marcos Importantes (Milestones)';
    milestonesSection.appendChild(milestonesSectionTitle);

    // Add Milestone Button
    const addMilestoneBtn = document.createElement('button');
    addMilestoneBtn.className = 'btn-add-milestone';
    addMilestoneBtn.innerHTML = '+ ' + (window.getUIText ? window.getUIText('addMilestone') : 'Adicionar Milestone');
    addMilestoneBtn.style.cssText = `
        padding: 8px 16px;
        background: var(--table-header-bg);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        margin-bottom: 20px;
        transition: all 0.3s ease;
    `;
    addMilestoneBtn.onmouseover = () => {
        addMilestoneBtn.style.background = '#0056b3';
        addMilestoneBtn.style.transform = 'translateY(-2px)';
    };
    addMilestoneBtn.onmouseout = () => {
        addMilestoneBtn.style.background = 'var(--table-header-bg)';
        addMilestoneBtn.style.transform = 'translateY(0)';
    };

    milestonesSection.appendChild(addMilestoneBtn);

    const timeline = document.createElement('div');
    timeline.className = 'timeline';
    milestonesSection.appendChild(timeline);

    // Function to get status label
    const getStatusLabel = (status) => {
        const labels = {
            'completed': 'Concluído',
            'active': 'Em Andamento',
            'planned': 'Planejado'
        };
        return labels[status] || 'Planejado';
    };

    // Function to render milestones
    const renderMilestones = () => {
        timeline.innerHTML = '';
        const milestones = window.dashboardData.milestones.items;

        milestones.forEach((milestone, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${milestone.status}`;

            const marker = document.createElement('div');
            marker.className = 'timeline-marker';
            timelineItem.appendChild(marker);

            const content = document.createElement('div');
            content.className = 'timeline-content';
            content.style.position = 'relative';

            // Header with title and controls
            const header = document.createElement('div');
            header.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 8px;
            `;

            // Title input
            const titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.value = milestone.title;
            titleInput.className = 'milestone-title-input';
            titleInput.style.cssText = `
                background: transparent;
                border: none;
                color: var(--text-white);
                font-size: 1.1rem;
                font-weight: 600;
                font-family: inherit;
                width: 100%;
                padding: 4px;
                border-radius: 4px;
                transition: all 0.3s ease;
            `;
            titleInput.onfocus = () => {
                titleInput.style.background = 'rgba(255, 255, 255, 0.05)';
                titleInput.style.outline = '2px solid var(--table-header-bg)';
            };
            titleInput.onblur = () => {
                titleInput.style.background = 'transparent';
                titleInput.style.outline = 'none';
            };
            titleInput.oninput = (e) => {
                window.dashboardData.milestones.items[index].title = e.target.value;
                saveMilestonesData();
            };

            // Controls container
            const controls = document.createElement('div');
            controls.style.cssText = `
                display: flex;
                gap: 8px;
                align-items: center;
                margin-left: 8px;
            `;

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '🗑️';
            deleteBtn.className = 'btn-delete-milestone';
            deleteBtn.style.cssText = `
                background: none;
                border: none;
                cursor: pointer;
                font-size: 1.1rem;
                padding: 4px;
                border-radius: 4px;
                transition: all 0.2s;
                opacity: 0.6;
            `;
            deleteBtn.onmouseover = () => {
                deleteBtn.style.background = '#ff4136';
                deleteBtn.style.opacity = '1';
            };
            deleteBtn.onmouseout = () => {
                deleteBtn.style.background = 'none';
                deleteBtn.style.opacity = '0.6';
            };
            deleteBtn.onclick = () => {
                if (confirm(`Deseja remover o milestone "${milestone.title}"?`)) {
                    window.dashboardData.milestones.items.splice(index, 1);
                    saveMilestonesData();
                    renderMilestones();
                }
            };

            controls.appendChild(deleteBtn);
            header.appendChild(titleInput);
            header.appendChild(controls);
            content.appendChild(header);

            // Date and Status container
            const infoContainer = document.createElement('div');
            infoContainer.style.cssText = `
                display: flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
            `;

            // Date input
            const dateInput = document.createElement('input');
            dateInput.type = 'text';
            dateInput.value = milestone.date;
            dateInput.placeholder = 'Ex: Janeiro 2026';
            dateInput.className = 'milestone-date-input';
            dateInput.style.cssText = `
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 4px;
                color: rgba(255, 255, 255, 0.7);
                font-size: 0.9rem;
                font-family: inherit;
                padding: 4px 8px;
                transition: all 0.3s ease;
            `;
            dateInput.onfocus = () => {
                dateInput.style.background = 'rgba(255, 255, 255, 0.08)';
                dateInput.style.borderColor = 'var(--table-header-bg)';
                dateInput.style.outline = 'none';
            };
            dateInput.onblur = () => {
                dateInput.style.background = 'rgba(255, 255, 255, 0.05)';
                dateInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            };
            dateInput.oninput = (e) => {
                window.dashboardData.milestones.items[index].date = e.target.value;
                saveMilestonesData();
            };

            // Status selector
            const statusSelect = document.createElement('select');
            statusSelect.className = 'milestone-status-select';
            statusSelect.innerHTML = `
                <option value="planned" ${(milestone.status === 'planned' || milestone.status === 'Planejado' || milestone.status === 'Planned' || milestone.status === 'Planificado') ? 'selected' : ''}>${window.getUIText ? window.getUIText('planned') : 'Planejado'}</option>
                <option value="active" ${(milestone.status === 'active' || milestone.status === 'Em Andamento' || milestone.status === 'In Progress' || milestone.status === 'En Progreso') ? 'selected' : ''}>${window.getUIText ? window.getUIText('inProgress') : 'Em Andamento'}</option>
                <option value="completed" ${(milestone.status === 'completed' || milestone.status === 'Concluído' || milestone.status === 'Completed' || milestone.status === 'Completado') ? 'selected' : ''}>${window.getUIText ? window.getUIText('completed') : 'Concluído'}</option>
                <option value="notPlanned" ${(milestone.status === 'notPlanned' || milestone.status === 'Não Planejado' || milestone.status === 'Not Planned') ? 'selected' : ''}>${window.getUIText ? window.getUIText('notPlanned') : 'Não Planejado'}</option>
                <option value="notApproved" ${(milestone.status === 'notApproved' || milestone.status === 'Não Aprovado' || milestone.status === 'Not Approved') ? 'selected' : ''}>${window.getUIText ? window.getUIText('notApproved') : 'Não Aprovado'}</option>
                <option value="cancelled" ${(milestone.status === 'cancelled' || milestone.status === 'Cancelado' || milestone.status === 'Cancelled') ? 'selected' : ''}>${window.getUIText ? window.getUIText('cancelled') : 'Cancelado'}</option>
            `;
            statusSelect.style.cssText = `
                background: #1a3a52;
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 4px;
                color: #ffffff;
                font-size: 0.9rem;
                font-family: inherit;
                padding: 4px 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
            `;
            statusSelect.onfocus = () => {
                statusSelect.style.background = '#2a4a62';
                statusSelect.style.borderColor = 'var(--table-header-bg)';
                statusSelect.style.outline = 'none';
            };
            statusSelect.onblur = () => {
                statusSelect.style.background = '#1a3a52';
                statusSelect.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            };
            statusSelect.onchange = (e) => {
                window.dashboardData.milestones.items[index].status = e.target.value;
                saveMilestonesData();
                renderMilestones(); // Re-render to update visual status
            };

            infoContainer.appendChild(dateInput);
            infoContainer.appendChild(statusSelect);
            content.appendChild(infoContainer);

            timelineItem.appendChild(content);
            timeline.appendChild(timelineItem);
        });
    };

    // Add Milestone Handler
    addMilestoneBtn.onclick = () => {
        window.dashboardData.milestones.items.push({
            title: "Novo Milestone",
            date: "",
            status: "planned"
        });
        saveMilestonesData();
        renderMilestones();
    };

    // Save function
    const saveMilestonesData = () => {
        localStorage.setItem('suzano_report_data', JSON.stringify(window.dashboardData));
    };

    // Initial render
    renderMilestones();

    container.appendChild(milestonesSection);


    // Tactical Roadmap Section (Replaces Action Plan)
    const roadmapSection = document.createElement('div');
    roadmapSection.className = 'data-section';
    roadmapSection.style.position = 'relative';

    const roadmapHeaderContainer = document.createElement('div');
    roadmapHeaderContainer.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    `;

    const roadmapTitle = document.createElement('h3');
    roadmapTitle.className = 'section-title';
    roadmapTitle.style.margin = '0';
    roadmapTitle.textContent = window.getUIText ? window.getUIText('tacticalRoadmap') : 'Roadmap Tático de Sucesso';

    const roadmapControls = document.createElement('div');
    roadmapControls.style.display = 'flex';
    roadmapControls.style.gap = '10px';

    const showBacklogBtn = document.createElement('button');
    showBacklogBtn.className = 'btn-tab'; // Reuse tab button style for consistency
    showBacklogBtn.style.padding = '6px 12px';
    showBacklogBtn.style.fontSize = '0.85rem';
    let showBacklog = false;
    showBacklogBtn.textContent = window.getUIText ? (showBacklog ? window.getUIText('hideBacklog') : window.getUIText('showBacklog')) : 'Mostrar Backlog';

    const addRowBtn = document.createElement('button');
    addRowBtn.className = 'btn-add-goal';
    addRowBtn.innerHTML = '+ ' + (window.getUIText ? window.getUIText('addNewRow') : 'Adicionar linha');
    addRowBtn.style.cssText = `
        padding: 6px 12px;
        background: var(--table-header-bg);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.85rem;
    `;

    roadmapControls.appendChild(showBacklogBtn);
    roadmapControls.appendChild(addRowBtn);
    roadmapHeaderContainer.appendChild(roadmapTitle);
    roadmapHeaderContainer.appendChild(roadmapControls);
    roadmapSection.appendChild(roadmapHeaderContainer);

    // Reuse the renderTable logic or create a specific one for Success Plan
    const roadmapTableContainer = document.createElement('div');
    roadmapSection.appendChild(roadmapTableContainer);

    const renderTacticalTable = () => {
        roadmapTableContainer.innerHTML = '';
        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'table-responsive';

        const table = document.createElement('table');
        table.className = 'status-table tactical-table';

        // Header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const headers = [
            window.getUIText ? window.getUIText('tactic') : 'Tática / Ação',
            window.getUIText ? window.getUIText('category') : 'Categoria',
            window.getUIText ? window.getUIText('involvement') : 'Envolvimento',
            window.getUIText ? window.getUIText('estHours') : 'Horas/Tokens Est.',
            window.getUIText ? window.getUIText('plannedMonth') : 'Mês Planejado',
            window.getUIText ? window.getUIText('status') : 'Status',
            window.getUIText ? window.getUIText('actions') : 'Ações'
        ];

        headers.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Body
        const tbody = document.createElement('tbody');
        const rows = window.dashboardData.tacticalRoadmap.rows;

        let subtotalPlanned = 0;

        rows.forEach((row, rowIndex) => {
            if (!showBacklog && row.archived) return;
            if (showBacklog && !row.archived) return;

            const tr = document.createElement('tr');
            if (row.archived) tr.style.opacity = '0.6';

            // Tactic cell
            const tdTactic = document.createElement('td');
            tdTactic.contentEditable = 'true';
            tdTactic.textContent = row.tactic;
            tdTactic.onblur = (e) => {
                window.dashboardData.tacticalRoadmap.rows[rowIndex].tactic = e.target.textContent;
                saveMilestonesData();
            };
            tr.appendChild(tdTactic);


            // Category cell
            const tdCat = document.createElement('td');
            tdCat.contentEditable = 'true';
            tdCat.textContent = row.category;
            tdCat.onblur = (e) => {
                window.dashboardData.tacticalRoadmap.rows[rowIndex].category = e.target.textContent;
                saveMilestonesData();
            };
            tr.appendChild(tdCat);

            // Involvement cell
            const tdInv = document.createElement('td');
            const invSelect = document.createElement('select');
            invSelect.className = 'milestone-status-select'; // Reuse styling
            invSelect.innerHTML = `
                <option value="Alteryx" ${row.involvement === 'Alteryx' ? 'selected' : ''}>${window.getUIText ? window.getUIText('alteryx') : 'Alteryx'}</option>
                <option value="Cliente" ${row.involvement === 'Cliente' ? 'selected' : ''}>${window.getUIText ? window.getUIText('client') : 'Cliente'}</option>
                <option value="Ambos" ${row.involvement === 'Ambos' ? 'selected' : ''}>${window.getUIText ? window.getUIText('both') : 'Ambos'}</option>
            `;
            invSelect.onchange = (e) => {
                window.dashboardData.tacticalRoadmap.rows[rowIndex].involvement = e.target.value;
                saveMilestonesData();
            };
            tdInv.appendChild(invSelect);
            tr.appendChild(tdInv);



            // Hours cell
            const tdHours = document.createElement('td');
            tdHours.contentEditable = 'true';
            tdHours.textContent = row.estHours;
            tdHours.style.textAlign = 'center';
            tdHours.onblur = (e) => {
                const val = parseFloat(e.target.textContent) || 0;
                window.dashboardData.tacticalRoadmap.rows[rowIndex].estHours = val.toString();
                saveMilestonesData();
                renderConsolidation(); // Update consolidation
            };
            tr.appendChild(tdHours);

            if (!row.archived) {
                subtotalPlanned += parseFloat(row.estHours) || 0;
            }

            // Month cell
            const tdMonth = document.createElement('td');
            tdMonth.contentEditable = 'true';
            tdMonth.textContent = row.plannedMonth;
            tdMonth.onblur = (e) => {
                window.dashboardData.tacticalRoadmap.rows[rowIndex].plannedMonth = e.target.textContent;
                saveMilestonesData();
            };
            tr.appendChild(tdMonth);

            // Status cell
            const tdStatus = document.createElement('td');
            const statusSelect = document.createElement('select');
            statusSelect.className = 'milestone-status-select';
            statusSelect.innerHTML = `
                <option value="planned" ${(row.status === 'planned' || row.status === 'Planejado' || row.status === 'Planned' || row.status === 'Planificado') ? 'selected' : ''}>${window.getUIText ? window.getUIText('planned') : 'Planejado'}</option>
                <option value="active" ${(row.status === 'active' || row.status === 'Em Andamento' || row.status === 'In Progress' || row.status === 'En Progreso') ? 'selected' : ''}>${window.getUIText ? window.getUIText('inProgress') : 'Em Andamento'}</option>
                <option value="completed" ${(row.status === 'completed' || row.status === 'Concluído' || row.status === 'Completed' || row.status === 'Completado') ? 'selected' : ''}>${window.getUIText ? window.getUIText('completed') : 'Concluído'}</option>
                <option value="notPlanned" ${(row.status === 'notPlanned' || row.status === 'Não Planejado' || row.status === 'Not Planned') ? 'selected' : ''}>${window.getUIText ? window.getUIText('notPlanned') : 'Não Planejado'}</option>
                <option value="notApproved" ${(row.status === 'notApproved' || row.status === 'Não Aprovado' || row.status === 'Not Approved') ? 'selected' : ''}>${window.getUIText ? window.getUIText('notApproved') : 'Não Aprovado'}</option>
                <option value="cancelled" ${(row.status === 'cancelled' || row.status === 'Cancelado' || row.status === 'Cancelled') ? 'selected' : ''}>${window.getUIText ? window.getUIText('cancelled') : 'Cancelado'}</option>
            `;
            // USER REQUEST: Status is read-only in Success Plan tab. Edited only in Overview.
            statusSelect.disabled = true;
            statusSelect.style.opacity = '0.7';
            statusSelect.style.cursor = 'not-allowed';
            statusSelect.title = "Status must be updated in Overview tab";
            statusSelect.onchange = (e) => {
                window.dashboardData.tacticalRoadmap.rows[rowIndex].status = e.target.value;
                saveMilestonesData();
                renderConsolidation(); // Update charts and balance
            };
            tdStatus.appendChild(statusSelect);
            tr.appendChild(tdStatus);

            // Actions cell
            const tdActions = document.createElement('td');
            tdActions.style.textAlign = 'center';
            tdActions.style.whiteSpace = 'nowrap';

            const archiveBtn = document.createElement('button');
            archiveBtn.innerHTML = row.archived ? '🔄' : '📥';
            archiveBtn.title = row.archived ? (window.getUIText ? window.getUIText('unarchive') : 'Restaurar') : (window.getUIText ? window.getUIText('archive') : 'Arquivar');
            archiveBtn.style.cssText = 'background:none; border:none; cursor:pointer; font-size:1.1rem; padding:4px;';
            archiveBtn.onclick = () => {
                window.dashboardData.tacticalRoadmap.rows[rowIndex].archived = !row.archived;
                saveMilestonesData();
                renderTacticalTable();
                renderConsolidation();
            };

            const delBtn = document.createElement('button');
            delBtn.innerHTML = '🗑️';
            delBtn.title = window.getUIText ? window.getUIText('deletePermanently') : 'Excluir';
            delBtn.style.cssText = 'background:none; border:none; cursor:pointer; font-size:1.1rem; padding:4px;';
            delBtn.onclick = () => {
                if (confirm(window.getUIText ? window.getUIText('confirmDelete') : 'Deseja excluir?')) {
                    window.dashboardData.tacticalRoadmap.rows.splice(rowIndex, 1);
                    saveMilestonesData();
                    renderTacticalTable();
                    renderConsolidation();
                }
            };

            tdActions.appendChild(archiveBtn);
            tdActions.appendChild(delBtn);
            tr.appendChild(tdActions);

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        tableWrapper.appendChild(table);
        roadmapTableContainer.appendChild(tableWrapper);
    };

    // Consolidation Summary Section
    const consolidationContainer = document.createElement('div');
    roadmapSection.appendChild(consolidationContainer);

    // Charts Container
    const chartsContainer = document.createElement('div');
    chartsContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 20px;
        margin-top: 30px;
    `;
    roadmapSection.appendChild(chartsContainer);

    // Chart Canvases
    const createChartWrapper = (titleKey, defaultTitle) => {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; align-items: center; min-height: 350px;';

        const title = document.createElement('h4');
        title.style.cssText = 'color: rgba(255,255,255,0.9); margin-top: 0; margin-bottom: 15px; width: 100%; text-align: left; font-weight: 500; font-size: 0.95rem;';
        title.textContent = window.getUIText ? window.getUIText(titleKey) : defaultTitle;

        const canvasContainer = document.createElement('div');
        canvasContainer.style.cssText = 'position: relative; height: 250px; width: 100%; display: flex; justify-content: center;';

        const canvas = document.createElement('canvas');
        canvasContainer.appendChild(canvas);
        wrapper.appendChild(title);
        wrapper.appendChild(canvasContainer);
        return { wrapper, canvas };
    };

    const statusChartObj = createChartWrapper('statusDistribution', 'Distribuição por Status');
    const hoursChartObj = createChartWrapper('hoursByStatus', 'Horas/Tokens por Status');

    chartsContainer.appendChild(statusChartObj.wrapper);
    chartsContainer.appendChild(hoursChartObj.wrapper);

    let statusChartInstance = null;
    let hoursChartInstance = null;

    const renderCharts = () => {
        if (typeof Chart === 'undefined') return;

        const rows = window.dashboardData.tacticalRoadmap.rows.filter(r => !r.archived);

        // Data Processing
        const labels = [
            window.getUIText ? window.getUIText('planned') : 'Planejado',
            window.getUIText ? window.getUIText('inProgress') : 'Em Andamento',
            window.getUIText ? window.getUIText('completed') : 'Concluído',
            window.getUIText ? window.getUIText('cancelled') : 'Cancelado/Outros'
        ];

        // Map internal values to index 0, 1, 2, 3
        const getIndex = (s) => {
            s = (s || '').toLowerCase();
            if (s.includes('conclu') || s === 'completed') return 2;
            if (s.includes('anda') || s.includes('active') || s.includes('prog')) return 1;
            if (s.includes('cancel') || s.includes('approv') || s.includes('aprov') || (s.includes('not') && s.includes('plan')) || s.includes('não plan')) return 3;
            return 0; // Default to planned
        };

        const counts = [0, 0, 0, 0];
        const hours = [0, 0, 0, 0];

        rows.forEach(r => {
            const idx = getIndex(r.status);
            counts[idx]++;
            // Only add hours if not cancelled/rejected (index 3)
            // Or should we show the hours burned/allocated even if cancelled?
            // Usually cancelled = 0 impact on plan usage, but here we show distribution.
            // Let's hide hours for cancelled to avoid summing them up in the chart bar for now, or match consolidation logic.
            // If consolidation logic subtracts them, chart should probably reflect that or show them separately.
            // User request is simple: consider status.
            hours[idx] += parseFloat(r.estHours) || 0;
        });

        const colors = ['#2196F3', '#FFC107', '#4CAF50', '#F44336']; // Blue, Amber, Green, Red
        const bgColors = colors.map(c => c + 'aa'); // Transparent
        const borderColors = colors;

        // Register DataLabels Plugin (if loaded)
        if (typeof ChartDataLabels !== 'undefined') {
            Chart.register(ChartDataLabels);
        }

        // Common Chart Options
        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: 'rgba(255,255,255,0.7)', padding: 20, usePointStyle: true }
                },
                datalabels: {
                    color: '#ffffff',
                    font: {
                        weight: 'bold',
                        size: 13
                    },
                    textShadowColor: 'rgba(0,0,0,0.5)',
                    textShadowBlur: 4,
                    display: function (context) {
                        return context.dataset.data[context.dataIndex] > 0; // Hide if 0
                    }
                }
            }
        };

        // 1. Status Distribution (Doughnut)
        if (statusChartInstance) statusChartInstance.destroy();
        statusChartInstance = new Chart(statusChartObj.canvas, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: counts,
                    backgroundColor: bgColors,
                    borderColor: 'rgba(0,0,0,0.2)',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                cutout: '60%'
            }
        });

        // 2. Hours by Status (Bar)
        if (hoursChartInstance) hoursChartInstance.destroy();
        hoursChartInstance = new Chart(hoursChartObj.canvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: window.getUIText ? window.getUIText('hours') : 'Horas/Tokens',
                    data: hours,
                    backgroundColor: bgColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        ticks: { color: 'rgba(255,255,255,0.6)' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: 'rgba(255,255,255,0.6)' }
                    }
                },
                plugins: {
                    legend: { display: false }, // Hide legend for single dataset bar
                    datalabels: {
                        color: '#ffffff',
                        anchor: 'end',
                        align: 'top',
                        font: { weight: 'bold' },
                        formatter: function (value) {
                            return Math.round(value);
                        }
                    }
                }
            }
        });
    };

    const renderConsolidation = () => {
        consolidationContainer.innerHTML = '';

        const totalPool = window.dashboardData.initiatives.totalHoursPool || 80;
        const totalPlanned = window.dashboardData.tacticalRoadmap.rows
            .filter(r => !r.archived)
            .filter(r => {
                const s = (r.status || '').toLowerCase();
                // Exclude cancelled, not approved, not planned (if desired) from Total Utilized
                // If 'Not Planned' means 'Backlog', maybe exclude. If 'Cancelled', definitely exclude.
                // If 'Not Approved', exclude.
                if (s.includes('cancel') || s.includes('approv') || s.includes('aprov')) return false;
                // Included 'Not Planned' (Backlog) items for simulation purposes per user request.
                return true;
            })
            .reduce((sum, r) => sum + (parseFloat(r.estHours) || 0), 0);

        const balance = totalPool - totalPlanned;
        const percent = Math.min((totalPlanned / totalPool) * 100, 100).toFixed(1);

        const summary = document.createElement('div');
        summary.className = 'entitlement-container';
        summary.style.marginTop = '20px';
        summary.style.background = 'rgba(255, 255, 255, 0.03)';
        summary.style.padding = '15px';
        summary.style.borderRadius = '8px';
        summary.style.border = '1px solid rgba(255, 255, 255, 0.1)';

        summary.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: 600; align-items: center;">
                <div style="display: flex; align-items: center; gap: 8px;">
                     <span style="color: rgba(255,255,255,0.7);">${window.getUIText('availablePool')}</span>
                     <input type="number" class="input-total-pool" value="${totalPool}" style="width: 80px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 4px; padding: 2px 5px; font-weight: bold;">
                </div>
                <span style="color: rgba(255,255,255,0.7);">${window.getUIText('plannedTotal')} <span style="color: white; font-weight: bold; margin-left: 5px;">${totalPlanned}</span></span>
                <span style="color: rgba(255,255,255,0.7);">${window.getUIText('balance')} <span style="color: ${balance >= 0 ? '#4CAF50' : '#FF5252'}; font-weight: bold; margin-left: 5px;">${balance.toFixed(1)}</span></span>
            </div>
            <div class="progress-container" style="height: 12px; background: rgba(255,255,255,0.1); border-radius: 6px; overflow: hidden; position: relative;">
                <div class="progress-bar" style="width: ${percent}%; height: 100%; background: ${totalPlanned > totalPool ? 'var(--status-risk)' : 'var(--status-healthy)'}; transition: width 0.5s ease;"></div>
            </div>
            <div style="text-align: right; margin-top: 5px; font-size: 0.85rem; color: rgba(255,255,255,0.7);">
                ${percent}% ${window.getUIText('plannedUtilization')}
            </div>
        `;

        // Bind Input Event
        const inputPool = summary.querySelector('.input-total-pool');
        if (inputPool) {
            inputPool.onchange = (e) => {
                const val = parseFloat(e.target.value);
                if (!isNaN(val) && val >= 0) {
                    window.dashboardData.initiatives.totalHoursPool = val;
                    saveMilestonesData(); // Assuming this calls global saveData or persists
                    renderConsolidation(); // Update UI immediately
                }
            };
        }

        consolidationContainer.appendChild(summary);

        // Update charts whenever consolidation updates (which is whenever data changes)
        renderCharts();
    };

    addRowBtn.onclick = () => {
        window.dashboardData.tacticalRoadmap.rows.push({
            tactic: "Nova Tática",
            category: "-",
            involvement: "Ambos",
            estHours: "0",
            plannedMonth: "-",
            status: "notPlanned",
            archived: false
        });
        saveMilestonesData();
        renderTacticalTable();
        renderConsolidation();
    };

    showBacklogBtn.onclick = () => {
        showBacklog = !showBacklog;
        showBacklogBtn.textContent = window.getUIText ? (showBacklog ? window.getUIText('hideBacklog') : window.getUIText('showBacklog')) : 'Backlog';
        showBacklogBtn.style.background = showBacklog ? 'var(--table-header-bg)' : '';
        renderTacticalTable();
    };

    renderTacticalTable();
    renderConsolidation();
    container.appendChild(roadmapSection);

    return container;
};
