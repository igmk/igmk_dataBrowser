let map = L.map('map').setView([50.8, 6.6], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
fetch("https://api.herz-campaigns.de/sites")
.then(res => {
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
})
.then(sites => {

    Object.keys(sites).forEach(id => {

        fetch(`https://api.herz-campaigns.de/sites/${id}`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP " + res.status);
            return res.json();
        })
        .then(site => {

            L.marker([site.lat, site.lon])
            .addTo(map)
            .bindPopup(`<a href="https://browser.herz-campaigns.de/?ms=${id}%2C">${site.siteHumanReadable}</a>`)
            .on("mouseover", function () { this.openPopup(); })
            .on("mouseout", function () {
                const popup = this.getPopup().getElement();
                popup.addEventListener("mouseleave", () => marker.closePopup()); });

        });

    });

})
.catch(err => console.error(err));
