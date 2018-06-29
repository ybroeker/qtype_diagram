/**
 * Code for the minimal UI theme.
 */
EditorUi.initMinimalTheme = function()
{
    var iw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    try
    {
       var style = document.createElement('style')
       style.type = 'text/css';
       style.innerHTML = '* { -webkit-font-smoothing: antialiased; }' +
       	   'html body .mxWindow button.geBtn { font-size:12px !important; margin-left: 0;}' +
           'html body div.diagramContainer button, html body button.geBtn { font-size:14px; font-weight:700;border-radius: 5px; }' +
           '.geDialog input, .geToolbarContainer input, .mxWindow input {padding:2px !important;display:inline-block !important; }' +
           'div.geDialog { border-radius: 5px; }' +
           'html body div.geDialog button.geBigButton { color: #fff !important; }' +
           '.mxWindow button, .geDialog select, .mxWindow select { display:inline-block; }' +
           '.mxWindow .geColorBtn, .geDialog .geColorBtn { background: none !important; }' +
           'html body div.diagramContainer button, html body .mxWindow button, html body .geDialog button { min-width: 0px; border-radius: 5px; color: #353535 !important; border-color: rgb(216, 216, 216); }' +
           'div.diagramContainer button.geBtn, .mxWindow button.geBtn, .geDialog button.geBtn { min-width:72px; font-weight: normal; background: none; }' +
           'div.diagramContainer button.geBtn:hover, .mxWindow button.geBtn:hover, .geDialog button.geBtn:hover { box-shadow: none; border-color: rgb(216, 216, 216); }' +
           'div.diagramContainer button.gePrimaryBtn, .mxWindow button.gePrimaryBtn, .geDialog button.gePrimaryBtn, html body .gePrimaryBtn { background: #29b6f2; color: #fff !important; border: none; box-shadow: none; }' +
           'html body .gePrimaryBtn:hover { background: #29b6f2; border: none; box-shadow: inherit; }' +
           'html body button.gePrimaryBtn:hover { background: #29b6f2; border: none; }' +
           '.geBtn button { min-width:72px !important; }' +
           'div.geToolbarContainer a.geButton { margin:2px; padding: 0 2px 4px 2px; } ' +
           '.geDialog, .mxWindow td.mxWindowPane *, div.geSprite, td.mxWindowTitle, .geDiagramContainer { box-sizing:content-box; }' +
           '.mxWindow div button.geStyleButton { box-sizing: border-box; }' +
           'table.mxWindow td.mxWindowPane button.geColorBtn { padding:0px; box-sizing: border-box; }' +
           'td.mxWindowPane .geSidebarContainer button { padding:2px 0 2px 0; box-sizing: border-box; }' +
           // Make geItem look like a button
           'html body .geMenuItem { font-size:14px; text-decoration: none; font-weight: normal; padding: 6px 10px 6px 10px; border: none; border-radius: 5px; color: #353535; box-shadow: inset 0 0 0 1px rgba(0,0,0,.11), inset 0 -1px 0 0 rgba(0,0,0,.08), 0 1px 2px 0 rgba(0,0,0,.04); }' +
           'a.geMenuItem:active { opacity: 0.4; }' +
           // Styling for Minimal
           '.geToolbarContainer { background:#fff !important; }' +
           'div.mxWindow .geSidebarContainer .geTitle { background-color:#fdfdfd; }' +
           'div.mxWindow .geSidebarContainer .geTitle:hover { background-color:#fafafa; }' +
           'div.geSidebar { background-color: #fff !important;}' +
           'div.mxWindow td.mxWindowPane button { background-image: none; float: none; }' +
           'td.mxWindowTitle { height: 22px !important; background: none !important; font-size: 13px !important; text-align:center !important; border-bottom:1px solid lightgray; }' +
           'div.mxWindow, div.mxWindowTitle { background-image: none !important; background-color:#fff !important; }' +
           'div.mxWindow { border-radius:5px; box-shadow: 0px 0px 2px #C0C0C0 !important;}' +
           'div.mxWindow * { font-family: inherit !important; }' +
           // Minimal Style UI
           'html div.geVerticalHandle { position:absolute;bottom:0px;left:50%;cursor:row-resize;width:11px;height:11px;background:white;margin-bottom:-6px; margin-left:-6px; border: none; border-radius: 6px; box-shadow: inset 0 0 0 1px rgba(0,0,0,.11), inset 0 -1px 0 0 rgba(0,0,0,.08), 0 1px 2px 0 rgba(0,0,0,.04); }' +
           'html div.geInactivePage { background: rgb(249, 249, 249) !important; color:lightgray !important; } ' +
           'html div.geActivePage { background: white !important;color: #353535 !important; } ' +
           'html div.mxRubberband { border:1px solid; border-color: #29b6f2 !important; background:rgba(41,182,242,0.5) !important; } ' +
           'html body div.mxPopupMenu { border-radius:5px; border:1px solid #c0c0c0; padding:5px 0 5px 0; box-shadow: 0px 4px 17px -4px rgba(96,96,96,1); } ' +
           'html table.mxPopupMenu td.mxPopupMenuItem { color: #353535; font-size: 14px; padding-top: 4px; padding-bottom: 4px; }' +
           'html table.mxPopupMenu tr.mxPopupMenuItemHover { background-color: #29b6f2; }' +
           'html tr.mxPopupMenuItemHover td.mxPopupMenuItem, html tr.mxPopupMenuItemHover td.mxPopupMenuItem span { color: #fff !important; }' +
           'html tr.mxPopupMenuItem, html td.mxPopupMenuItem { transition-property: none !important; }' +
           'html table.mxPopupMenu hr { height: 2px; background-color: rgba(0,0,0,.07); margin: 5px 0; }';
       document.getElementsByTagName('head')[0].appendChild(style);
    }
    catch (e)
    {
       // ignore
    }
    
	/**
	 * 
	 */
	var WrapperWindow = function(editorUi, title, x, y, w, h, fn)
	{
	    var graph = editorUi.editor.graph;
	    
	    var div = document.createElement('div');
	    div.className = 'geSidebarContainer';
	    div.style.position = 'absolute';
	    div.style.width = '100%';
	    div.style.height = '100%';
	    div.style.border = '1px solid whiteSmoke';
	    div.style.overflowX = 'hidden';
	    div.style.overflowY = 'auto';
	    
	    fn(div);

	    this.window = new mxWindow(title, div, x, y, w, h, true, true);
	    this.window.destroyOnClose = false;
	    this.window.setMaximizable(false);
	    this.window.setResizable(true);
	    this.window.setClosable(true);
	    this.window.setVisible(true);
	    
	    this.window.setLocation = function(x, y)
	    {
	    	var iiw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	        var ih = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	        
	        x = Math.max(0, Math.min(x, iiw - this.table.clientWidth));
	        y = Math.max(0, Math.min(y, ih - this.table.clientHeight - 48));

	        if (this.getX() != x || this.getY() != y)
	        {
	            mxWindow.prototype.setLocation.apply(this, arguments);
	        }
	    };
	};

	function toggleFormat(ui)
	{
		var graph = ui.editor.graph;
	    graph.popupMenuHandler.hideMenu();
	    
	    if (ui.formatWindow == null)
	    {
	        ui.formatWindow = new WrapperWindow(ui, mxResources.get('format'),
	           Math.max(0, ui.diagramContainer.clientWidth - ui.formatWidth - 12), 56,
	           ui.formatWidth, 546, function(container)
	        {
	            var format = ui.createFormat(container);
	            format.init();
	            
	            return format;
	        });
	        ui.formatWindow.window.addListener('show', function()
	        {
	            ui.fireEvent(new mxEventObject('format'));
	        });
	        ui.formatWindow.window.addListener('format', function()
	        {
	            ui.fireEvent(new mxEventObject('format'));
	        });
	        ui.formatWindow.window.minimumSize = new mxRectangle(0, 0, ui.formatWidth, 80);
	        ui.formatWindow.window.setVisible(true);
	        ui.formatWindow.window.fit();
	        ui.fireEvent(new mxEventObject('sidebar'));
	    }
	    else
	    {
	        ui.formatWindow.window.setVisible(!ui.formatWindow.window.isVisible());

	        if (ui.formatWindow.window.isVisible())
	        {
	            ui.formatWindow.window.fit();
	        }
	    }

	    var offset = mxUtils.getOffset(ui.container);
	    ui.formatWindow.window.div.style.top = Math.max(parseInt(ui.formatWindow.window.div.style.top), offset.y) + 'px';
	};

	function toggleShapes(ui)
	{
		var graph = ui.editor.graph;
	    graph.popupMenuHandler.hideMenu();
	    var rect = new mxRectangle();

	    if (ui.sidebarWindow == null)
	    {
	        var w = Math.min(graph.container.clientWidth - 10, 300);
	        
	        ui.sidebarWindow = new WrapperWindow(ui, mxResources.get('shapes'), 10, 56,
	           w - 6, Math.min(600, graph.container.clientHeight - 30),
	           function(container)
	        {
	            var div = document.createElement('div');
	            div.style.cssText = 'position:absolute;left:0;right:0;border-top:1px solid lightgray;' +
	                'height:24px;bottom:31px;text-align:center;cursor:pointer;padding:6px 0 0 0;';
	            div.className = 'geTitle';
	            mxUtils.write(div, mxResources.get('moreShapes'));
	            container.appendChild(div);
	            
	            mxEvent.addListener(div, 'click', function()
	            {
	                ui.actions.get('shapes').funct();
	            });

	            var menuObj = new Menubar(ui, container);
	            
	            function addMenu(id, label)
	            {
	                var menu = ui.menus.get(id);
	                
	                var elt = menuObj.addMenu(label, mxUtils.bind(this, function()
	                {
	                    // Allows extensions of menu.functid
	                    menu.funct.apply(this, arguments);
	                }));

	                elt.style.cssText = 'position:absolute;border-top:1px solid lightgray;width:50%;' +
	                	'height:24px;bottom:0px;text-align:center;cursor:pointer;padding:6px 0 0 0;';
	                elt.className = 'geTitle';
		            container.appendChild(elt);
	                
	                return elt;
	            }
	            
				if (urlParams['embed'] != '1' || urlParams['libraries'] == '1')
	            {
					// Defined in native apps together with openLibrary
					if (ui.actions.get('newLibrary') != null)
					{
			            var div = document.createElement('div');
			            div.style.cssText = 'position:absolute;left:0px;width:50%;border-top:1px solid lightgray;' +
			                'height:30px;bottom:0px;text-align:center;cursor:pointer;padding:0px;';
			            div.className = 'geTitle';
			            var span = document.createElement('span');
			            span.style.cssText = 'position:relative;top:6px;';
			            mxUtils.write(span, mxResources.get('newLibrary'));
			            div.appendChild(span);
			            container.appendChild(div);
			            
			            mxEvent.addListener(div, 'click', ui.actions.get('newLibrary').funct);

			            var div = document.createElement('div');
			            div.style.cssText = 'position:absolute;left:50%;width:50%;border-top:1px solid lightgray;' +
			                'height:30px;bottom:0px;text-align:center;cursor:pointer;padding:0px;border-left: 1px solid lightgray;';
			            div.className = 'geTitle';
			            var span = document.createElement('span');
			            span.style.cssText = 'position:relative;top:6px;';
			            mxUtils.write(span, mxResources.get('openLibrary'));
			            div.appendChild(span);
			            container.appendChild(div);
			            
			            mxEvent.addListener(div, 'click', ui.actions.get('openLibrary').funct);
					}
					else
					{
						var elt = addMenu('newLibrary', mxResources.get('newLibrary'));
			            elt.style.left = '0';
			            
			            var elt = addMenu('openLibraryFrom', mxResources.get('openLibraryFrom'));
			            elt.style.borderLeft = '1px solid lightgray';
			            elt.style.left = '50%';
					}
	            }
				else
				{
					div.style.bottom = '0';
				}

	            container.appendChild(ui.sidebar.container);
	            container.style.overflow = 'hidden';
	            
	            return container;
	        });
	        ui.sidebarWindow.window.addListener('show', function()
	        {
	            ui.fireEvent(new mxEventObject('sidebar'));
	        });
	        ui.sidebarWindow.window.addListener('sidebar', function()
	        {
	            ui.fireEvent(new mxEventObject('sidebar'));
	        });
	        ui.sidebarWindow.window.minimumSize = new mxRectangle(0, 0, 90, 90);
	        ui.sidebarWindow.window.setVisible(true);
	        ui.sidebarWindow.window.fit();
	        ui.fireEvent(new mxEventObject('sidebar'));
	        
	        ui.getLocalData('sidebar', function(value)
	        {
	            ui.sidebar.showEntries(value, null, true);
	        });
	        
	        ui.restoreLibraries();
	    }
	    else
	    {
    		ui.sidebarWindow.window.setVisible(!ui.sidebarWindow.window.isVisible());
	        
	        if (ui.sidebarWindow.window.isVisible())
	        {
	            ui.sidebarWindow.window.fit();
	        }
	    }
	    
	    var offset = mxUtils.getOffset(ui.container);
	    ui.sidebarWindow.window.div.style.top = Math.max(parseInt(ui.sidebarWindow.window.div.style.top), offset.y) + 'px';
	};
	
    // Changes colors for some UI elements
    var fill = '#29b6f2';
    var stroke = '#ffffff';
    
    Editor.checkmarkImage = Graph.createSvgImage(22, 18, '<path transform="translate(4 0)" d="M7.181,15.007a1,1,0,0,1-.793-0.391L3.222,10.5A1,1,0,1,1,4.808,9.274L7.132,12.3l6.044-8.86A1,1,0,1,1,14.83,4.569l-6.823,10a1,1,0,0,1-.8.437H7.181Z" fill="' + fill + '"/>').src;
    mxWindow.prototype.closeImage = Graph.createSvgImage(18, 10, '<path d="M 5 1 L 13 9 M 13 1 L 5 9" stroke="#C0C0C0" stroke-width="2"/>').src;
    mxWindow.prototype.minimizeImage = Graph.createSvgImage(14, 10, '<path d="M 3 7 L 7 3 L 11 7" stroke="#C0C0C0" stroke-width="2" fill="#ffffff"/>').src;
    mxWindow.prototype.normalizeImage = Graph.createSvgImage(14, 10, '<path d="M 3 3 L 7 7 L 11 3" stroke="#C0C0C0" stroke-width="2" fill="#ffffff"/>').src;
    mxVertexHandler.prototype.handleImage = Graph.createSvgImage(16, 16, '<circle cx="8" cy="8" r="5" stroke="' + stroke + '" fill="' + fill + '"/>');
    mxEdgeHandler.prototype.handleImage = mxVertexHandler.prototype.handleImage;
    mxEdgeHandler.prototype.terminalHandleImage = Graph.createSvgImage(16, 16, '<circle cx="8" cy="8" r="5" stroke="' + stroke + '" fill="' + fill + '"/><circle cx="8" cy="8" r="3" stroke="' + stroke + '" fill="' + fill + '"/>');
    mxEdgeHandler.prototype.fixedHandleImage = Graph.createSvgImage(16, 16, '<circle cx="8" cy="8" r="5" stroke="' + stroke + '" fill="' + fill + '"/><path d="m 6 6 L 10 10 M 6 10 L 10 6" stroke="' + stroke + '"/>');
    mxConstraintHandler.prototype.pointImage = Graph.createSvgImage(5, 5, '<path d="m 0 0 L 5 5 M 0 5 L 5 0" stroke="' + fill + '"/>');
    HoverIcons.prototype.triangleUp = Graph.createSvgImage(18, 36, '<path d="m 6 36 L 12 36 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" stroke="#fff" fill="' + fill + '"/>');
    HoverIcons.prototype.triangleRight = Graph.createSvgImage(36, 18, '<path d="m 1 6 L 24 6 L 24 1 L 36 9 L 24 18 L 24 12 L 1 12 z" stroke="#fff" fill="' + fill + '"/>');
    HoverIcons.prototype.triangleDown = Graph.createSvgImage(18, 36, '<path d="m 6 1 L 6 24 L 1 24 L 9 36 L 18 24 L 12 24 L 12 1 z" stroke="#fff" fill="' + fill + '"/>');
    HoverIcons.prototype.triangleLeft = Graph.createSvgImage(36, 18, '<path d="m 1 9 L 12 1 L 12 6 L 36 6 L 36 12 L 12 12 L 12 18 z" stroke="#fff" fill="' + fill + '"/>');
    HoverIcons.prototype.roundDrop = Graph.createSvgImage(26, 26, '<circle cx="13" cy="13" r="12" stroke="#fff" fill="' + fill + '"/>');
    HoverIcons.prototype.arrowSpacing = 0;
    mxOutline.prototype.sizerImage = null;

    if (window.Sidebar != null)
    {
        Sidebar.prototype.triangleUp = HoverIcons.prototype.triangleUp;
        Sidebar.prototype.triangleRight = HoverIcons.prototype.triangleRight;
        Sidebar.prototype.triangleDown = HoverIcons.prototype.triangleDown;
        Sidebar.prototype.triangleLeft = HoverIcons.prototype.triangleLeft;
        Sidebar.prototype.refreshTarget = HoverIcons.prototype.refreshTarget;
        Sidebar.prototype.roundDrop = HoverIcons.prototype.roundDrop;
    }
    
    mxConstants.VERTEX_SELECTION_COLOR = '#C0C0C0';
    mxConstants.EDGE_SELECTION_COLOR = '#C0C0C0';
    mxConstants.CONNECT_HANDLE_FILLCOLOR = '#cee7ff';
    
    mxConstants.DEFAULT_VALID_COLOR = fill;
    mxConstants.GUIDE_COLOR = '#C0C0C0';

    mxConstants.HIGHLIGHT_STROKEWIDTH = 5;
    mxConstants.HIGHLIGHT_OPACITY = 35;
    mxConstants.HIGHLIGHT_SIZE = 5;
    mxConstants.OUTLINE_COLOR = '#29b6f2';
    mxConstants.OUTLINE_HANDLE_FILLCOLOR = '#29b6f2';
    mxConstants.OUTLINE_HANDLE_STROKECOLOR = '#fff';
    
    Graph.prototype.svgShadowColor = '#3D4574';
    Graph.prototype.svgShadowOpacity = '0.4';
    Graph.prototype.svgShadowSize = '0.6';
    Graph.prototype.svgShadowBlur = '1.2';
    
    Format.prototype.inactiveTabBackgroundColor = '#f0f0f0';
    mxGraphHandler.prototype.previewColor = '#C0C0C0';
    mxRubberband.prototype.defaultOpacity = 50;
    HoverIcons.prototype.inactiveOpacity = 25;
	EditorUi.prototype.closableScratchpad = false;
	EditorUi.prototype.showCsvImport = false;
    EditorUi.prototype.footerHeight = 0;
	Graph.prototype.editAfterInsert = true;
    
    // Overridden to ignore tabContainer height for diagramContainer
    var editorUiRefresh = EditorUi.prototype.refresh;

    EditorUi.prototype.refresh = function(sizeDidChange)
    {
        editorUiRefresh.apply(this, arguments);
        this.diagramContainer.style.top = '47px';
    	
        if (this.tabContainer != null)
        {
        	// Makes room for view zoom menu
        	this.tabContainer.style.right = '70px';
        }
    };

    /**
     * Sets the XML node for the current diagram.
     */
    Editor.prototype.isChromelessView = function()
    {
    	return false;
    };

    /**
     * Sets the XML node for the current diagram.
     */
    Graph.prototype.isLightboxView = function()
    {
    	return false;
    };
    
    // Hides keyboard shortcuts in menus
    var menusAddShortcut = Menus.prototype.addShortcut; 
    
    Menus.prototype.addShortcut = function(item, action)
    {
        if (action.shortcut != null && iw < 900 && !mxClient.IS_IOS)
        {
            var td = item.firstChild.nextSibling;
            td.setAttribute('title', action.shortcut);
        }
        else
        {
        	menusAddShortcut.apply(this, arguments);
        }
    };

    var appUpdateUserElement = App.prototype.updateUserElement;
    
    App.prototype.updateUserElement = function()
    {
    	appUpdateUserElement.apply(this, arguments);
    	
		if (this.userElement != null)
		{
			var elt = this.userElement;
    		elt.style.cssText = 'display:inline-block;position:relative;margin-right:4px;';
    		elt.className = '';
    		elt.innerHTML = '';
			elt.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTJjMi4yMSAwIDQtMS43OSA0LTRzLTEuNzktNC00LTQtNCAxLjc5LTQgNCAxLjc5IDQgNCA0em0wIDJjLTIuNjcgMC04IDEuMzQtOCA0djJoMTZ2LTJjMC0yLjY2LTUuMzMtNC04LTR6Ii8+PC9zdmc+)';
        	elt.style.backgroundPosition = 'center center';
        	elt.style.backgroundRepeat = 'no-repeat';
        	elt.style.backgroundSize = '24px 24px';
        	elt.style.height = '24px';
        	elt.style.width = '24px';
        	mxUtils.setOpacity(elt, 30);
        	elt.setAttribute('title', mxResources.get('changeUser'));
		}
    };
    
    var appUpdateButtonContainer = App.prototype.updateButtonContainer;
    
    App.prototype.updateButtonContainer = function()
    {
    	appUpdateButtonContainer.apply(this, arguments);
    	
    	if (this.shareButton != null)
		{
    		var elt = this.shareButton;
    		elt.style.cssText = 'display:inline-block;position:relative;box-sizing:border-box;margin-right:4px;cursor:pointer;';
    		elt.className = '';
    		elt.innerHTML = '';
			elt.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTggMTYuMDhjLS43NiAwLTEuNDQuMy0xLjk2Ljc3TDguOTEgMTIuN2MuMDUtLjIzLjA5LS40Ni4wOS0uN3MtLjA0LS40Ny0uMDktLjdsNy4wNS00LjExYy41NC41IDEuMjUuODEgMi4wNC44MSAxLjY2IDAgMy0xLjM0IDMtM3MtMS4zNC0zLTMtMy0zIDEuMzQtMyAzYzAgLjI0LjA0LjQ3LjA5LjdMOC4wNCA5LjgxQzcuNSA5LjMxIDYuNzkgOSA2IDljLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDNjLjc5IDAgMS41LS4zMSAyLjA0LS44MWw3LjEyIDQuMTZjLS4wNS4yMS0uMDguNDMtLjA4LjY1IDAgMS42MSAxLjMxIDIuOTIgMi45MiAyLjkyIDEuNjEgMCAyLjkyLTEuMzEgMi45Mi0yLjkycy0xLjMxLTIuOTItMi45Mi0yLjkyeiIvPjwvc3ZnPg==)';
        	elt.style.backgroundPosition = 'center center';
        	elt.style.backgroundRepeat = 'no-repeat';
        	elt.style.backgroundSize = '24px 24px';
        	elt.style.height = '24px';
        	elt.style.width = '24px';
        	mxUtils.setOpacity(elt, 30);
        	elt.setAttribute('title', mxResources.get('share'));
		}
    };
    
	EditorUi.prototype.addEmbedButtons = function()
	{
		if (this.buttonContainer != null)
		{
			var div = document.createElement('div');
			div.style.display = 'inline-block';
			div.style.position = 'relative';
			div.style.marginTop = '2px';
			
			var button = document.createElement('button');
			mxUtils.write(button, mxResources.get('save'));
			button.setAttribute('title', mxResources.get('save') + ' (' + Editor.ctrlKey + '+S)');
			button.className = (urlParams['saveAndExit'] == '1') ? 'geMenuItem' : 'geMenuItem gePrimaryBtn';
			button.style.fontSize = '14px';
			button.style.padding = '6px';
			button.style.borderRadius = '3px';
			button.style.marginLeft = '8px';
			button.style.cursor = 'pointer';
			
			mxEvent.addListener(button, 'click', mxUtils.bind(this, function()
			{
				this.actions.get('save').funct();
			}));
			
			div.appendChild(button);
			
			if (urlParams['saveAndExit'] == '1')
			{
				button = document.createElement('a');
				mxUtils.write(button, mxResources.get('saveAndExit'));
				button.setAttribute('title', mxResources.get('saveAndExit'));
				button.className = 'geMenuItem gePrimaryBtn';
				button.style.fontSize = '14px';
				button.style.marginLeft = '6px';
				button.style.padding = '6px';
				button.style.cursor = 'pointer';
				
				mxEvent.addListener(button, 'click', mxUtils.bind(this, function()
				{
					this.actions.get('saveAndExit').funct();
				}));
				
				div.appendChild(button);
			}

			button = document.createElement('a');
			mxUtils.write(button, mxResources.get('exit'));
			button.setAttribute('title', mxResources.get('exit'));
			button.className = 'geMenuItem';
			button.style.fontSize = '14px';
			button.style.marginLeft = '6px';
			button.style.padding = '6px';
			button.style.cursor = 'pointer';
			
			mxEvent.addListener(button, 'click', mxUtils.bind(this, function()
			{
				this.actions.get('exit').funct();
			}));
			
			div.appendChild(button);
			this.buttonContainer.appendChild(div);
			this.buttonContainer.style.top = '6px';
		}
	};
	
    // Fixes sidebar tooltips (previews)
    Sidebar.prototype.getTooltipOffset = function()
    {
        var off = mxUtils.getOffset(this.editorUi.sidebarWindow.window.div);
        off.y += 40;
        
        return off;
    };
    
    // Adds context menu items
    var menuCreatePopupMenu = Menus.prototype.createPopupMenu;
    
    Menus.prototype.createPopupMenu = function(menu, cell, evt)
    {
        var graph = this.editorUi.editor.graph;
        menu.smartSeparators = true;
        menuCreatePopupMenu.apply(this, arguments);

        var promptSpacing = mxUtils.bind(this, function(defaultValue, fn)
        {
            var dlg = new FilenameDialog(this.editorUi, defaultValue, mxResources.get('apply'), function(newValue)
            {
                fn(parseFloat(newValue));
            }, mxResources.get('spacing'));
            this.editorUi.showDialog(dlg.container, 300, 80, true, true);
            dlg.init();
        });
        
        if (graph.getSelectionCount() == 1)
        {
            this.addMenuItems(menu, ['editTooltip', '-'], null, evt);

            if (graph.isCellFoldable(graph.getSelectionCell()))
            {
                this.addMenuItems(menu, (graph.isCellCollapsed(cell)) ? ['expand'] : ['collapse'], null, evt);
            }

            this.addMenuItems(menu, ['lockUnlock', 'enterGroup'], null, evt);
            menu.addSeparator();
            this.addSubmenu('layout', menu);
        }
        else if (graph.isSelectionEmpty() && graph.isEnabled())
        {
            menu.addSeparator();
            this.addSubmenu('insert', menu);
            this.addSubmenu('layout', menu);
            menu.addSeparator();
            this.addSubmenu('options', menu);

            this.addMenuItems(menu, ['-', 'exitGroup'], null, evt);
        }
        else if (graph.isEnabled())
        {
            this.addMenuItems(menu, ['-', 'lockUnlock'], null, evt);
        }
    };
    
    // Overridden to toggle window instead
    EditorUi.prototype.toggleFormatPanel = function(forceHide)
    {
        if (this.formatWindow != null)
        {
        	this.formatWindow.window.setVisible((forceHide) ?
               false : !this.formatWindow.window.isVisible());
        }
    };

    /**
     * Adds math switch in format panel.
     */
    var diagramFormatPanelAddOptions =  DiagramFormatPanel.prototype.addOptions;
    
    DiagramFormatPanel.prototype.addOptions = function(div)
    {
        var div = diagramFormatPanelAddOptions.apply(this, arguments);
        
        var ui = this.editorUi;
        var editor = ui.editor;
        var graph = editor.graph;
        
        if (graph.isEnabled())
        {
            // Math
            var option = this.createOption(mxResources.get('mathematicalTypesetting'), function()
            {
                return graph.mathEnabled;
            }, function(checked)
            {
                ui.actions.get('mathematicalTypesetting').funct();
            },
            {
                install: function(apply)
                {
                    this.listener = function()
                    {
                        apply(graph.mathEnabled);
                    };
                    
                    ui.addListener('mathEnabledChanged', this.listener);
                },
                destroy: function()
                {
                    ui.removeListener(this.listener);
                }
            });
            
            option.style.paddingTop = '0px';
            div.appendChild(option);
            
            var help = ui.menus.createHelpLink('https://desk.draw.io/support/solutions/articles/16000032875');
            help.style.position = 'relative';
            help.style.top = '4px';
            option.appendChild(help);
        }

        return div;
    };
    
	// Initializes the user interface
	var editorUiDestroy = EditorUi.prototype.destroy;
	EditorUi.prototype.destroy = function()
	{
        if (this.sidebarWindow != null)
        {
            this.sidebarWindow.window.setVisible(false);
            this.sidebarWindow.window.destroy();
            this.sidebarWindow = null;
        }
        
        if (this.formatWindow != null)
        {
            this.formatWindow.window.setVisible(false);
            this.formatWindow.window.destroy();
            this.formatWindow = null;
        }

        if (this.actions.outlineWindow != null)
        {
            this.actions.outlineWindow.destroy();
            this.actions.outlineWindow = null;
        }

        if (this.actions.layersWindow != null)
        {
            this.actions.layersWindow.destroy();
            this.actions.layersWindow = null;
        }

        if (this.actions.tagsWindow != null)
        {
            this.actions.tagsWindow.window.setVisible(false);
            this.actions.tagsWindow.window.destroy();
            this.actions.tagsWindow = null;
        }

        if (this.actions.findWindow != null)
        {
            this.actions.findWindow.window.setVisible(false);
            this.actions.findWindow.window.destroy();
            this.actions.findWindow = null;
        }
		
		editorUiDestroy.apply(this, arguments);
	};
	
    // Disables centering of graph after iframe resize
	EditorUi.prototype.chromelessWindowResize = function() {};
    
	// Initializes the user interface
	var editorUiInit = EditorUi.prototype.init;
	EditorUi.prototype.init = function()
	{
		editorUiInit.apply(this, arguments);
		
        var ui = this;
        var graph = this.editor.graph;
        var isGraphEnabled = mxUtils.bind(graph, graph.isEnabled);
        
        var div = document.createElement('div');
        div.style.cssText = 'position:absolute;left:0px;right:0px;top:0px;overflow-y:auto;overflow-x:hidden;';
        div.style.bottom = (urlParams['embed'] != '1' || urlParams['libraries'] == '1') ? '63px' : '32px';
        this.sidebar = this.createSidebar(div);
        
        ui.actions.get('insertText').label = mxResources.get('text');
        ui.actions.get('insertText').label = mxResources.get('text');
        ui.actions.get('editDiagram').label = mxResources.get('formatXml') + '...';
        ui.actions.get('insertRectangle').label = mxResources.get('rectangle');
        ui.actions.get('insertEllipse').label = mxResources.get('ellipse');
        ui.actions.get('insertRhombus').label = mxResources.get('rhombus');
        ui.actions.get('insertImage').label = mxResources.get('image') + '...';
        ui.actions.get('insertLink').label = mxResources.get('link') + '...';
        ui.actions.get('createShape').label = mxResources.get('shape') + '...';
        ui.actions.get('outline').label = mxResources.get('outline') + '...';
        ui.actions.get('layers').label = mxResources.get('layers') + '...';
        
        ui.actions.put('importFile', new Action('File...', function()
        {
            graph.popupMenuHandler.hideMenu();
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            
            mxEvent.addListener(input, 'change', function()
            {
                if (input.files != null)
                {
                    // Using null for position will disable crop of input file
                    ui.importFiles(input.files, null, null, ui.maxImageSize);
                }
            });

            input.click();
        }));
        ui.actions.put('importCsv', new Action(mxResources.get('csv') + '...', function()
        {
            graph.popupMenuHandler.hideMenu();
            ui.showImportCsvDialog();
        }));
        ui.actions.put('importText', new Action(mxResources.get('text') + '...', function()
        {
            var dlg = new ParseDialog(ui, 'Insert from Text');
            ui.showDialog(dlg.container, 620, 420, true, false);
            dlg.init();
        }));
        
        ui.actions.put('toggleShapes', new Action(mxResources.get('shapes') + '...', function()
        {
        	toggleShapes(ui);
        }));
        ui.actions.put('toggleFormat', new Action(mxResources.get('format') + '...', function()
        {
        	toggleFormat(ui);
        }));
        var addInsertItem = function(menu, parent, title, method)
        {
            menu.addItem(title, null, mxUtils.bind(this, function()
            {
                var dlg = new CreateGraphDialog(ui, title, method);
                ui.showDialog(dlg.container, 620, 420, true, false);
                // Executed after dialog is added to dom
                dlg.init();
            }), parent);
        };

        ui.menus.put('diagram', new Menu(mxUtils.bind(this, function(menu, parent)
        {
        	ui.menus.addSubmenu('preferences', menu, parent);
			menu.addSeparator(parent);
			
			if (mxClient.IS_CHROMEAPP || EditorUi.isElectronApp)
			{
				ui.menus.addMenuItems(menu, ['new', 'open', '-', 'save', 'saveAs', '-'], parent);
			}
			else if (urlParams['embed'] == '1')
			{
				ui.menus.addMenuItems(menu, ['-', 'save'], parent);

				if (urlParams['saveAndExit'] == '1')
				{
					ui.menus.addMenuItems(menu, ['saveAndExit'], parent);
				}
				
				menu.addSeparator(parent);
			}
			else
			{
	        	ui.menus.addMenuItems(menu, ['new'], parent);
				ui.menus.addSubmenu('openFrom', menu, parent, mxResources.get('open'));
				menu.addSeparator(parent);
				ui.menus.addSubmenu('save', menu, parent);
			}
				
            ui.menus.addSubmenu('exportAs', menu, parent);
			ui.menus.addMenuItems(menu, ['-', 'outline', 'layers', '-', 'find', 'tags', '-'], parent);
			
			// Cannot use print in standalone mode on iOS as we cannot open new windows
			if (!mxClient.IS_IOS || !navigator.standalone)
			{
				ui.menus.addMenuItems(menu, ['-', 'print', '-'], parent);
			}
			
            ui.menus.addSubmenu('help', menu, parent);
            
            if (urlParams['embed'] == '1')
			{
				ui.menus.addMenuItems(menu, ['-', 'exit'], parent);
			}
			else
			{
				ui.menus.addMenuItems(menu, ['-', 'close']);
			}
        })));

		if (isLocalStorage)
		{
			var openFromMenu = ui.menus.get('openFrom');
			var oldFunct = openFromMenu.funct;
			
			openFromMenu.funct = function(menu, parent)
			{
				oldFunct.apply(this, arguments);
				
				menu.addSeparator(parent);
				ui.menus.addSubmenu('openRecent', menu, parent);
			};
		}

        ui.menus.put('save', new Menu(mxUtils.bind(this, function(menu, parent)
        {
			var file = ui.getCurrentFile();
			
			if (file != null && file.constructor == DriveFile)
			{
				ui.menus.addMenuItems(menu, ['share', '-', 'makeCopy', 'moveToFolder'], parent);
			}
			else
			{
				ui.menus.addMenuItems(menu, ['save', 'saveAs', '-', 'rename', 'makeCopy'], parent);
			}

			if (file != null && (file.constructor == DriveFile || file.constructor == DropboxFile))
			{
				ui.menus.addMenuItems(menu, ['-', 'revisionHistory'], parent);
			}
			
			if (file != null && file.constructor == DriveFile)
			{
				ui.menus.addMenuItems(menu, ['createRevision'], parent);
			}
			
			ui.menus.addMenuItems(menu, ['-', 'autosave'], parent);
        })));
        
        ui.menus.put('exportAs', new Menu(mxUtils.bind(this, function(menu, parent)
        {
            ui.menus.addMenuItems(menu, ['exportPng', 'exportJpg', 'exportSvg', '-', 'exportPdf', 'exportVsdx', '-',
                                         'exportHtml', 'exportXml', 'exportUrl', '-'], parent);
            ui.menus.addSubmenu('embed', menu, parent);
            ui.menus.addSubmenu('publish', menu, parent);
        })));
        
        ui.menus.put('preferences', new Menu(mxUtils.bind(this, function(menu, parent)
        {
			if (urlParams['embed'] != '1')
			{
				ui.menus.addSubmenu('theme', menu, parent);
			}
			
			ui.menus.addSubmenu('language', menu, parent);
			menu.addSeparator(parent);
			
            ui.menus.addMenuItems(menu, ['scrollbars', 'tooltips', 'pageScale'], parent);
            
			if (urlParams['embed'] != '1' && isLocalStorage)
			{
				ui.menus.addMenuItems(menu, ['-', 'search', 'scratchpad', '-', 'showStartScreen'], parent);
			}

			if (!ui.isOfflineApp() && urlParams['embed'] != '1')
			{
				ui.menus.addMenuItems(menu, ['-', 'plugins'], parent);
			}
        })));

        ui.menus.put('insertAdvanced', new Menu(mxUtils.bind(this, function(menu, parent)
        {
            ui.menus.addMenuItems(menu, ['importText', 'createShape', '-', 'importCsv', 'editDiagram', '-', 'insertPage'], parent);
        })));
        
        mxResources.parse('insertLayout=' + mxResources.get('layout'));
        mxResources.parse('insertAdvanced=' + mxResources.get('advanced'));
        
        ui.menus.put('insert', new Menu(mxUtils.bind(this, function(menu, parent)
        {
            ui.menus.addMenuItems(menu, ['insertRectangle', 'insertEllipse', 'insertRhombus', '-', 'insertText',
                                         'insertLink', '-', 'insertImage'], parent);
            ui.menus.addSubmenu('importFrom', menu, parent);
            menu.addSeparator(parent);
            ui.menus.addSubmenu('insertLayout', menu, parent);
            ui.menus.addSubmenu('insertAdvanced', menu, parent);
        })));

        var methods = ['horizontalFlow', 'verticalFlow', '-', 'horizontalTree', 'verticalTree',
                       'radialTree', '-', 'organic', 'circle'];
        
        ui.menus.put('insertLayout', new Menu(mxUtils.bind(this, function(menu, parent)
        {
            for (var i = 0; i < methods.length; i++)
            {
                if (methods[i] == '-')
                {
                    menu.addSeparator(parent);
                }
                else
                {
                    addInsertItem(menu, parent, mxResources.get(methods[i]) + '...', methods[i]);
                }
            }
        })));
        
        ui.menus.put('options', new Menu(mxUtils.bind(this, function(menu, parent)
        {
            ui.menus.addMenuItems(menu, ['grid', 'guides', '-', 'connectionArrows', 'connectionPoints', '-',
            	'copyConnect', 'collapseExpand', '-', 'mathematicalTypesetting'], parent);
        })));

        ui.menus.put('embed', new Menu(mxUtils.bind(this, function(menu, parent)
        {
            ui.menus.addMenuItems(menu, ['embedImage', 'embedSvg', '-', 'embedHtml', 'embedIframe'], parent);
        })));

        // Needed for creating elements in Format panel
        ui.toolbar = ui.createToolbar(ui.createDiv('geToolbar'));
        ui.defaultLibraryName = mxResources.get('untitledLibrary');
        
        var menubar = document.createElement('div');
        menubar.style.cssText = 'position:absolute;left:0px;right:0px;top:0px;height:30px;padding:8px;border-bottom:1px solid lightgray;background-color:#ffffff;text-align:left;white-space:nowrap;';
        
        var menuObj = new Menubar(ui, menubar);
        
        function addMenu(id, small, img, opacity)
        {
            var menu = ui.menus.get(id);
            
            var elt = menuObj.addMenu(mxResources.get(id), mxUtils.bind(this, function()
            {
                // Allows extensions of menu.functid
                menu.funct.apply(this, arguments);
            }));
            
            elt.className = 'geMenuItem';
            elt.style.display = 'inline-block';
            elt.style.boxSizing = 'border-box';
            elt.style.top = '6px';
            elt.style.marginRight = '6px';
            elt.style.height = '30px';
            elt.style.paddingTop = '6px';
            elt.style.paddingBottom = '6px';
            elt.setAttribute('title', mxResources.get(id));
            ui.menus.menuCreated(menu, elt, 'geMenuItem');
            
            if (img != null)
            {
            	elt.style.backgroundImage = 'url(' + img + ')';
            	elt.style.backgroundPosition = 'center center';
            	elt.style.backgroundRepeat = 'no-repeat';
            	elt.style.backgroundSize = '24px 24px';
            	elt.style.width = '34px';
            	elt.innerHTML = '';
            	mxUtils.setOpacity(elt, opacity || 40);
            }
            else if (!small)
            {
            	elt.style.backgroundImage = 'url(' + mxWindow.prototype.normalizeImage + ')';
            	elt.style.backgroundPosition = 'right 6px center';
            	elt.style.backgroundRepeat = 'no-repeat';
            	elt.style.paddingRight = '22px';
            } 

            return elt;
        };
        
        function addMenuItem(label, fn, small, tooltip, action, img)
        {
            var btn = document.createElement('a');
            btn.setAttribute('href', 'javascript:void(0)');
            btn.className = 'geMenuItem';
            btn.style.display = 'inline-block';
            btn.style.boxSizing = 'border-box';
            btn.style.height = '30px';
            btn.style.padding = '6px';
            btn.style.position = 'relative';
            btn.style.verticalAlign = 'top';
            btn.style.top = '0px';
            menubar.appendChild(btn);
            
            if (img != null)
            {
            	btn.style.backgroundImage = 'url(' + img + ')';
            	btn.style.backgroundPosition = 'center center';
            	btn.style.backgroundRepeat = 'no-repeat';
            	btn.style.backgroundSize = '24px 24px';
                btn.style.width = '34px';
            }
            else
            {
                mxUtils.write(btn, label);
            }
            
            mxEvent.addListener(btn, 'click', function(evt)
            {
            	if (btn.getAttribute('disabled') != 'disabled')
            	{
            		fn();
            	}
            	
                mxEvent.consume(evt);
            });
            
            if (small == null)
            {
                btn.style.marginRight = '4px';
            }
            
            if (tooltip != null)
            {
                btn.setAttribute('title', tooltip);
            }

            mxUtils.setOpacity(btn, (img != null) ? 40 : 100);
            
            if (action != null)
            {
                function updateState()
                {
                    if (action.isEnabled())
                    {
                        btn.removeAttribute('disabled');
                        mxUtils.setOpacity(btn, (img != null) ? 40 : 100);
                        btn.style.cursor = '';
                    }
                    else
                    {
                        btn.setAttribute('disabled', 'disabled');
                        mxUtils.setOpacity(btn, (img != null) ? 10 : 50);
                        btn.style.cursor = 'default';
                    }
                };
                
                action.addListener('stateChanged', updateState);
                updateState();
            }
            
            return btn;
        };
        
        function createGroup(btns)
        {
            var btnGroup = document.createElement('div');
            btnGroup.className = 'geMenuItem';
            btnGroup.style.display = 'inline-block';
            btnGroup.style.verticalAlign = 'top';
            btnGroup.style.marginRight = '6px';
            btnGroup.style.padding = '0 4px 0 4px';
            btnGroup.style.height = '30px';
            btnGroup.style.position = 'relative';
            btnGroup.style.top = '0px';
            
            for (var i = 0; i < btns.length; i++)
            {
            	if (btns[i] != null)
            	{
            		btns[i].style.margin = '0px';
	                btns[i].style.boxShadow = 'none';
	                btnGroup.appendChild(btns[i]);
            	}
            }

            menubar.appendChild(btnGroup);
            
            return btnGroup;
        };
        
        var small = iw < 900;
 
        if (!small)
        {
        	addMenu('diagram');
        }
        
        createGroup([((small) ? addMenu('diagram', null, IMAGE_PATH + '/drawlogo-gray.svg', 100) : null),
        		addMenuItem(mxResources.get('shapes'), ui.actions.get('toggleShapes').funct, null, mxResources.get('shapes'), ui.actions.get('image'),
        			(small) ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMgMTN2OGg4di04aC04ek0zIDIxaDh2LThIM3Y4ek0zIDN2OGg4VjNIM3ptMTMuNjYtMS4zMUwxMSA3LjM0IDE2LjY2IDEzbDUuNjYtNS42Ni01LjY2LTUuNjV6Ii8+PC9zdmc+' : null),
                     addMenuItem(mxResources.get('format'), ui.actions.get('toggleFormat').funct, null,
                    		 mxResources.get('format') + ' (' + ui.actions.get('formatPanel').shortcut + ')', null,
                    (small) ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgM2MtNC45NyAwLTkgNC4wMy05IDlzNC4wMyA5IDkgOWMuODMgMCAxLjUtLjY3IDEuNS0xLjUgMC0uMzktLjE1LS43NC0uMzktMS4wMS0uMjMtLjI2LS4zOC0uNjEtLjM4LS45OSAwLS44My42Ny0xLjUgMS41LTEuNUgxNmMyLjc2IDAgNS0yLjI0IDUtNSAwLTQuNDItNC4wMy04LTktOHptLTUuNSA5Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVTNS42NyA5IDYuNSA5IDggOS42NyA4IDEwLjUgNy4zMyAxMiA2LjUgMTJ6bTMtNEM4LjY3IDggOCA3LjMzIDggNi41UzguNjcgNSA5LjUgNXMxLjUuNjcgMS41IDEuNVMxMC4zMyA4IDkuNSA4em01IDBjLS44MyAwLTEuNS0uNjctMS41LTEuNVMxMy42NyA1IDE0LjUgNXMxLjUuNjcgMS41IDEuNVMxNS4zMyA4IDE0LjUgOHptMyA0Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVTMTYuNjcgOSAxNy41IDlzMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41eiIvPjwvc3ZnPg==' : null)]);
        var elt = addMenu('insert', true, (small) ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyeiIvPjwvc3ZnPg==' : null, 40);
        createGroup([elt, addMenuItem(mxResources.get('delete'), ui.actions.get('delete').funct, null, mxResources.get('delete'), ui.actions.get('delete'),
        		(small) ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0eiIvPjwvc3ZnPg==' : null)]);
        
        if (iw >= 480)
        {
        	var undoAction = ui.actions.get('undo');
        	var redoAction = ui.actions.get('redo');
        	
	        var undoElt = addMenuItem('', undoAction.funct, null, mxResources.get('undo') + ' (' + undoAction.shortcut + ')', undoAction,
	       		'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIuNSA4Yy0yLjY1IDAtNS4wNS45OS02LjkgMi42TDIgN3Y5aDlsLTMuNjItMy42MmMxLjM5LTEuMTYgMy4xNi0xLjg4IDUuMTItMS44OCAzLjU0IDAgNi41NSAyLjMxIDcuNiA1LjVsMi4zNy0uNzhDMjEuMDggMTEuMDMgMTcuMTUgOCAxMi41IDh6Ii8+PC9zdmc+');
	        var redoElt = addMenuItem('', redoAction.funct, null, mxResources.get('redo') + ' (' + redoAction.shortcut + ')', redoAction,
	       		'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTguNCAxMC42QzE2LjU1IDguOTkgMTQuMTUgOCAxMS41IDhjLTQuNjUgMC04LjU4IDMuMDMtOS45NiA3LjIyTDMuOSAxNmMxLjA1LTMuMTkgNC4wNS01LjUgNy42LTUuNSAxLjk1IDAgMy43My43MiA1LjEyIDEuODhMMTMgMTZoOVY3bC0zLjYgMy42eiIvPjwvc3ZnPg==');
	
	        createGroup([undoElt, redoElt]);

	        if (iw >= 560)
	        {
		        createGroup([addMenuItem('', function()
		        {
		            graph.popupMenuHandler.hideMenu();
		
		        	var scale = graph.view.scale;
		            var tx = graph.view.translate.x;
		            var ty = graph.view.translate.y;
		
		        	ui.actions.get('resetView').funct();
		        	
		            // Toggle scale if nothing has changed
		            if (Math.abs(scale - graph.view.scale) < 0.00001 && tx == graph.view.translate.x && ty == graph.view.translate.y)
		            {
		            	ui.actions.get((graph.pageVisible) ? 'fitPage' : 'fitWindow').funct();
		            }
		        }, true, mxResources.get('fit') + ' (' + Editor.ctrlKey + '+H)', null,
		        	'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyA1djRoMlY1aDRWM0g1Yy0xLjEgMC0yIC45LTIgMnptMiAxMEgzdjRjMCAxLjEuOSAyIDIgMmg0di0ySDV2LTR6bTE0IDRoLTR2Mmg0YzEuMSAwIDItLjkgMi0ydi00aC0ydjR6bTAtMTZoLTR2Mmg0djRoMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg=='),
		        (iw >= 640) ? addMenuItem('', ui.actions.get('zoomIn').funct, true, mxResources.get('zoomIn') + ' (' + Editor.ctrlKey + ' +)', null,
		       		'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHptMi41LTRoLTJ2Mkg5di0ySDdWOWgyVjdoMXYyaDJ2MXoiLz48L3N2Zz4=') : null,
		        (iw >= 640) ? addMenuItem('', ui.actions.get('zoomOut').funct, true, mxResources.get('zoomOut') + ' (' + Editor.ctrlKey + ' -)', null,
		        	'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpNNyA5aDV2MUg3eiIvPjwvc3ZnPg==') : null]);
	        }
        }
        
		ui.statusContainer = ui.createStatusContainer();
		ui.statusContainer.style.position = 'relative';
		ui.statusContainer.style.maxWidth = '';
		ui.statusContainer.style.marginTop = '7px';
		ui.statusContainer.style.marginLeft = '6px';
		ui.statusContainer.style.color = 'gray';
		
		// Connects the status bar to the editor status
		ui.editor.addListener('statusChanged', mxUtils.bind(this, function()
		{
			ui.setStatusText(ui.editor.getStatus());
		}));
	
		ui.setStatusText(ui.editor.getStatus());
		menubar.appendChild(ui.statusContainer);

		ui.buttonContainer = document.createElement('div');
		ui.buttonContainer.style.cssText = 'position:absolute;right:40px;top:12px;white-space:nowrap;';
		menubar.appendChild(ui.buttonContainer);
		
		// Container for the user element
		ui.menubarContainer = ui.buttonContainer;
		
		if (iw >= 480)
		{
			var langMenu = ui.menus.get('language');
			
			if (langMenu != null)
			{
				var elt = menuObj.addMenu('', langMenu.funct);
				elt.setAttribute('title', mxResources.get('language'));
				
				elt.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnptNi45MyA2aC0yLjk1Yy0uMzItMS4yNS0uNzgtMi40NS0xLjM4LTMuNTYgMS44NC42MyAzLjM3IDEuOTEgNC4zMyAzLjU2ek0xMiA0LjA0Yy44MyAxLjIgMS40OCAyLjUzIDEuOTEgMy45NmgtMy44MmMuNDMtMS40MyAxLjA4LTIuNzYgMS45MS0zLjk2ek00LjI2IDE0QzQuMSAxMy4zNiA0IDEyLjY5IDQgMTJzLjEtMS4zNi4yNi0yaDMuMzhjLS4wOC42Ni0uMTQgMS4zMi0uMTQgMiAwIC42OC4wNiAxLjM0LjE0IDJINC4yNnptLjgyIDJoMi45NWMuMzIgMS4yNS43OCAyLjQ1IDEuMzggMy41Ni0xLjg0LS42My0zLjM3LTEuOS00LjMzLTMuNTZ6bTIuOTUtOEg1LjA4Yy45Ni0xLjY2IDIuNDktMi45MyA0LjMzLTMuNTZDOC44MSA1LjU1IDguMzUgNi43NSA4LjAzIDh6TTEyIDE5Ljk2Yy0uODMtMS4yLTEuNDgtMi41My0xLjkxLTMuOTZoMy44MmMtLjQzIDEuNDMtMS4wOCAyLjc2LTEuOTEgMy45NnpNMTQuMzQgMTRIOS42NmMtLjA5LS42Ni0uMTYtMS4zMi0uMTYtMiAwLS42OC4wNy0xLjM1LjE2LTJoNC42OGMuMDkuNjUuMTYgMS4zMi4xNiAyIDAgLjY4LS4wNyAxLjM0LS4xNiAyem0uMjUgNS41NmMuNi0xLjExIDEuMDYtMi4zMSAxLjM4LTMuNTZoMi45NWMtLjk2IDEuNjUtMi40OSAyLjkzLTQuMzMgMy41NnpNMTYuMzYgMTRjLjA4LS42Ni4xNC0xLjMyLjE0LTIgMC0uNjgtLjA2LTEuMzQtLjE0LTJoMy4zOGMuMTYuNjQuMjYgMS4zMS4yNiAycy0uMSAxLjM2LS4yNiAyaC0zLjM4eiIvPjwvc3ZnPg==)';
	        	elt.style.backgroundPosition = 'center center';
	        	elt.style.backgroundRepeat = 'no-repeat';
	        	elt.style.backgroundSize = '24px 24px';
				elt.style.position = 'absolute';
	        	elt.style.height = '24px';
	        	elt.style.width = '24px';
				elt.style.zIndex = '1';
				elt.style.top = '11px';
				elt.style.right = '14px';
				mxUtils.setOpacity(elt, 30);
				
				menubar.appendChild(elt);
			}
		}
			
        ui.tabContainer = document.createElement('div');
        ui.tabContainer.style.cssText = 'position:absolute;left:0px;right:0px;bottom:0px;height:30px;white-space:nowrap;' +
            'border-bottom:1px solid lightgray;background-color:#ffffff;border-top:1px solid lightgray;margin-bottom:-2px;';

        var previousParent = ui.diagramContainer.parentNode;

        var wrapper = document.createElement('div');
        wrapper.style.cssText = 'position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:hidden;';
        ui.diagramContainer.style.top = '47px';
        ui.diagramContainer.style.bottom = '30px';
		
        var viewZoomMenu = ui.menus.get('viewZoom');
		
		if (viewZoomMenu != null)
		{
			this.tabContainer.style.right = '70px';
			var elt = menuObj.addMenu('100%', viewZoomMenu.funct);
			elt.setAttribute('title', mxResources.get('zoom') + ' (Alt+Mousewheel)');
			elt.style.whiteSpace = 'nowrap';
        	elt.style.backgroundImage = 'url(' + mxWindow.prototype.minimizeImage + ')';
        	elt.style.backgroundPosition = 'right 6px center';
        	elt.style.backgroundRepeat = 'no-repeat';
        	elt.style.paddingRight = '10px';
			elt.style.display = 'block';
			elt.style.position = 'absolute';
			elt.style.textDecoration = 'none';
			elt.style.textDecoration = 'none';
			elt.style.right = '0px';
			elt.style.bottom = '0px';
			elt.style.overflow = 'hidden';
			elt.style.textAlign = 'center';
			elt.style.color = '#000';
			elt.style.fontSize = '12px';
			elt.style.color = '#707070';
			elt.style.width = '59px';
			elt.style.borderTop = '1px solid lightgray';
			elt.style.borderLeft = '1px solid lightgray';
			elt.style.height = (parseInt(ui.tabContainer.style.height) - 1) + 'px';
			elt.style.lineHeight = (parseInt(ui.tabContainer.style.height) + 1) + 'px';
			wrapper.appendChild(elt);
	        
	    	// Updates the label if the scale changes
	    	var updateZoom = mxUtils.bind(this, function()
	    	{
	    		elt.innerHTML = Math.round(ui.editor.graph.view.scale * 100) + '%';
	    	});

	    	ui.editor.graph.view.addListener(mxEvent.EVENT_SCALE, updateZoom);
	    	ui.editor.addListener('resetGraphView', updateZoom);
	    	ui.editor.addListener('pageSelected', updateZoom);
	    	
	    	// Augments setGraphEnabled to update visible state
	    	var uiSetGraphEnabled = ui.setGraphEnabled;
	    	
	    	ui.setGraphEnabled = function()
	    	{
	    		uiSetGraphEnabled.apply(this, arguments);
	    		
	    		if (this.tabContainer != null)
	    		{
	    			elt.style.visibility = this.tabContainer.style.visibility;
	    		}
	    	};
		}
        
        wrapper.appendChild(ui.tabContainer);
        wrapper.appendChild(menubar);
        wrapper.appendChild(ui.diagramContainer);
        previousParent.appendChild(wrapper);
        ui.updateTabContainer();
        
        mxEvent.addListener(window, 'resize', function()
		{
            if (ui.sidebarWindow != null)
            {
                ui.sidebarWindow.window.fit();
            }
            
            if (ui.formatWindow != null)
            {
            	ui.formatWindow.window.fit();
            }

            if (ui.actions.outlineWindow != null)
            {
            	ui.outlineWindow.fit();
            }

            if (ui.actions.layersWindow != null)
            {
            	ui.outlineWindow.fit();
            }

            if (ui.actions.tagsWindow != null)
            {
            	ui.tagsWindow.window.fit();
            }

            if (ui.actions.findWindow != null)
            {
            	ui.findWindow.window.fit();
            }
		});
	};	
};

(function()
{
	var initialized = false;
	
	// ChromeApp has async local storage
	if (uiTheme == 'min' && !initialized && !mxClient.IS_CHROMEAPP)
	{
		EditorUi.initMinimalTheme();
		initialized = true;
	}
	
	var uiInitTheme = EditorUi.initTheme;
	
	// For async startup like chromeos
	EditorUi.initTheme = function()
	{
		uiInitTheme.apply(this, arguments);
		
		if (uiTheme == 'min' && !initialized)
		{
			this.initMinimalTheme();
			initialized = true;
		}
	};
})();
