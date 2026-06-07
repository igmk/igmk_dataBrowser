let map = L.map('map').setView([50.8, 6.6], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

// Sub-sites folded into a parent marker's combined multi-site view; no own marker.
const hiddenSites = new Set(["cgn_bio", "jue_tower"]);
// Marker site id -> the '+'-joined site list its link should open.
const siteGroups = {
    cgn_city: "cgn_city+cgn_bio",
    jue: "jue+jue_tower",
};
fetch("https://api.herz-campaigns.de/sites")
.then(res => {
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
})
.then(sites => {

    Object.keys(sites).forEach(id => {

        if (hiddenSites.has(id)) return; // folded into a parent marker's combined view

        fetch(`https://api.herz-campaigns.de/sites/${id}`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP " + res.status);
            return res.json();
        })
        .then(site => {

            const msValue = (siteGroups[id] || id) + ",";
            const siteUrl = `https://browser.herz-campaigns.de/?ms=${encodeURIComponent(msValue)}`;

            L.marker([site.lat, site.lon])
            .addTo(map)
            .bindPopup(`<a href="${siteUrl}" target="_top">${site.siteHumanReadable}</a>`)
            .on("mouseover", function () { this.openPopup(); })
            .on("mouseout", function () {
                const popup = this.getPopup().getElement();
                popup.addEventListener("mouseleave", () => marker.closePopup()); })
            .on("click", function () { window.top.location.href = siteUrl; });

        });

    });

})
.catch(err => console.error(err));
