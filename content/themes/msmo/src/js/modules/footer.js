// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const footer = (() => {

    const init = () => {
        const map = L.map('map').setView([47.871575, 0.323976], 15);
        const marker = L.icon({
            iconUrl: 'content/themes/msmo/assets/images/icons/marker-icon.png',
            shadowUrl: 'content/themes/msmo/assets/images/icons/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -50],
            shadowSize: [41, 41],
            shadowAnchor: [12, 41],
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([47.871575, 0.323976], { icon: marker }).addTo(map).bindPopup('Complexe sportif Serge SOUALLE').openPopup();
    };

    return {
        init,
    };
})();

export default footer;
