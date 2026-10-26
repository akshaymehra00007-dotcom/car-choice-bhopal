import fs from 'node:fs';
let html=fs.readFileSync('dist/index.html','utf8');
html=html.replace(/<div class="car-photo hatchback-art">[\s\S]*?<span class="card-tag">CITY SMART<\/span>/,'<div class="car-photo"><img src="assets/hatchback.jpg" alt="Compact hatchback on a quiet street" loading="lazy"><span class="card-tag">CITY SMART</span>');
const schema={"@context":"https://schema.org","@type":"AutoDealer",name:"Car Choice Bhopal",telephone:"+919893720977",address:{"@type":"PostalAddress",streetAddress:"Plot No. 393, Narmadapuram Road, near Aashima Mall, Danish Nagar",addressLocality:"Bhopal",addressRegion:"Madhya Pradesh",postalCode:"462026",addressCountry:"IN"}};
html=html.replace('</head>',`<meta property="og:title" content="Car Choice Bhopal — Pre-owned. New possibilities."><meta property="og:description" content="Explore your next drive. Request current stock, plan your EMI and arrange a showroom visit."><meta property="og:type" content="website"><script type="application/ld+json">${JSON.stringify(schema)}</script></head>`);
fs.writeFileSync('dist/index.html',html);
