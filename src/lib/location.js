import { feature } from 'topojson';
import { geoContains, geoCentroid, geoDistance } from 'd3';
import { location as loc } from '$stores/user';

/*
    Created by Stefan Nieke, https://niekes.com
*/
async function success(position, fn) {
	const topology = await fetch(
		'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'
	).then((response) => response.json());
	const geojson = feature(topology, topology.objects.countries);

	const { longitude, latitude } = position.coords;

	const location = geojson.features.filter((d) => geoContains(d, [longitude, latitude])).shift();

	if (location) {
		loc.set(location.properties.name);
		fn();
	}

	if (!location) {
		const closestCountry = geojson.features
			// You could improve the distance calculation so that you get a more accurate result
			.map((d) => ({ ...d, distance: geoDistance(geoCentroid(d), [longitude, latitude]) }))
			.sort((a, b) => a.distance - b.distance)
			.splice(0, 5);

		if (closestCountry.length > 0) {
			const possibleLocations = closestCountry.map((d) => d.properties.name);
			const suggestLocations = `${possibleLocations
				.slice(0, -1)
				.join(', ')} or ${possibleLocations.slice(-1)}`;

			loc.set(suggestLocations);
			fn();
		}

		if (closestCountry.length === 0) {
			error();
		}
	}
}

function error() {
	document.querySelector('#location').innerHTML = 'Sorry, I could not locate you';
}

function getLocation(fn) {
	navigator.geolocation.getCurrentPosition((position) => {
		success(position, fn);
	}, error);
}

export { getLocation };
