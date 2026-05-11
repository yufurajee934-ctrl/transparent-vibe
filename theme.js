(function ThemeSettings() {
    if (!Spicetify.Menu || !Spicetify.LocalStorage) {
        setTimeout(ThemeSettings, 500);
        return;
    }

    const setProp = (prop, val) => document.documentElement.style.setProperty(prop, val);

    const menu = new Spicetify.Menu.Item("Настройки темы", false, () => {
        const container = document.createElement("div");
        container.innerHTML = `
            <div style="padding: 20px; color: white;">
                <h2>Custom Background</h2>
                <input type="text" id="url-input" placeholder="Ссылка на фон..." style="width:100%; padding:8px; margin:10px 0; border-radius:5px; border:none;">
                <p>Прозрачность панелей</p>
                <input type="range" id="opacity-slider" min="0" max="1" step="0.05" value="0.4" style="width:100%;">
                <button id="apply-settings" style="margin-top:15px; width:100%; padding:10px; background:#1db954; border:none; border-radius:20px; color:white; font-weight:bold; cursor:pointer;">Apply Changes</button>
            </div>
        `;

        Spicetify.Popup.display({ title: "Настройки прозрачности", content: container });

        container.querySelector("#apply-settings").onclick = () => {
            const url = container.querySelector("#url-input").value;
            const opac = container.querySelector("#opacity-slider").value;
            if (url) setProp('--bg-image', `url(${url})`);
            setProp('--ui-opacity', opac);
        };
    });
    menu.register();
})();