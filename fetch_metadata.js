const urls = [
"https://academy.tabbna.sa/",
"https://foreign-match-admin.netlify.app/dashboard",
"https://framer-is.netlify.app/",
"https://jcs-photo-suite.netlify.app/",
"https://mart-mint-nft.netlify.app/",
"https://dawood-tahir.netlify.app/",
"https://moramsey-bill-check-app.netlify.app/",
"https://docusign-edward.netlify.app/home",
"https://chatbot-umair.netlify.app/",
"https://wakeelonline.netlify.app/#cities",
"https://usnrc-quiz.netlify.app/",
"https://maxbidhub.netlify.app/",
"https://samuelai.netlify.app/",
"https://topsupply.netlify.app/",
"https://chatgirlss.netlify.app/",
"https://helioo.netlify.app/",
"https://at-events.netlify.app/",
"https://boises.netlify.app/",
"https://emmanuel-app.netlify.app/",
"https://thekitchenwrap.netlify.app/",
"https://specialforces.netlify.app/",
"https://kito-fit-admin.netlify.app/",
"https://medi-qr.vercel.app/",
"https://vapepuffs.co.uk/",
"https://stonedcollective.co.uk/",
"https://rostum-edu.vercel.app/",
"https://www.astroshop.eu/",
"https://zinatghar.com/",
"https://foreign-matching-frontend.vercel.app/",
"https://avuvo-app.vercel.app/",
"https://projectcompetitionz.netlify.app/single-page.html",
"https://demo-project-test.netlify.app/",
"https://policieszone.netlify.app/",
"https://amazing-babka-4d5779.netlify.app/",
"https://slotmachinescript.com/",
"https://ribbon-and-bow.netlify.app/",
"https://admin-ribbon-bow.netlify.app/login"
];

async function fetchMeta() {
  const results = [];
  for (const url of urls) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(5000) }).catch(() => null);
      if (!res || !res.ok) {
        results.push({ url, title: url.split('//')[1].split('/')[0], description: "Web project" });
        continue;
      }
      const text = await res.text();
      const titleMatch = text.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : url.split('//')[1].split('/')[0];
      
      const descMatch = text.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) || 
                        text.match(/<meta\s+content=["'](.*?)["']\s+name=["']description["']/i);
      const description = descMatch ? descMatch[1].trim() : "A comprehensive web application providing intuitive user experience.";
      results.push({ url, title, description });
    } catch (e) {
      results.push({ url, title: url.split('//')[1].split('/')[0], description: "Web project" });
    }
  }
  console.log(JSON.stringify(results, null, 2));
}
fetchMeta();
