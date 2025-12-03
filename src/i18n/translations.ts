import es from "./es";

const translations = {
  en: {
    "meta.title":
      "RecipLab - AI Food Recipe Generator from Photos, Text & Clips",
    "meta.description":
      "Create recipes from photos, text prompts, or short transcriptions with AI.",
    "nav.features": "Features",
    "nav.plans": "Plans",
    "nav.getStarted": "Get Started",
    "nav.language": "Language",
    "nav.language.en": "English",
    "nav.language.es": "Español",
    "hero.tagline": "Improve your cooking with AI",
    "hero.title.line1": "Food recipes from",
    "hero.title.line2": "photos, text, or clips",
    "hero.subtitle":
      'Turn ingredients, snapshots, or social media transcriptions into <span class="font-semibold text-primary-600">step-by-step dishes</span>. Start free and upgrade to Pro for higher limits.',
    "hero.download": "Download App",
    "hero.seeFeatures": "See Features",
    "hero.trusted": "Trusted by home cooks worldwide",
    "hero.rating": "4.9/5",
    "hero.downloads": "10K+ Downloads",
    "hero.recipes": "50K+ Recipes Generated",
    "features.title": "Generate recipes your way",
    "features.subtitle":
      "Recipes from photos, text, or social transcriptions - fast, accurate, and tailored to you.",
    "features.photo.title": "From photos",
    "features.photo.body":
      "Snap ingredients or a dish and get a tailored recipe with clear steps. Our AI analyzes your photo and creates personalized cooking instructions.",
    "features.text.title": "From text prompts",
    "features.text.body":
      "Describe what you have or crave - RecipLab builds the recipe instantly. Just type your ingredients or desired dish and let AI do the rest.",
    "features.transcription.title": "From short transcriptions",
    "features.transcription.body":
      "Paste a quick video transcription to recreate the dish with precise steps. Perfect for social media cooking videos you want to try.",
    "showcase.title": "Experience RecipLab",
    "showcase.subtitle":
      "Beautifully designed interface that makes cooking a joy",
    "showcase.smart": "Smart Recognition",
    "showcase.snap": "Snap, Scan, Cook",
    "showcase.snap.body":
      "Our AI instantly recognizes ingredients from your photos and generates personalized recipes tailored to what you have on hand. No more wondering what to cook!",
    "showcase.snap.point1": "Instant ingredient recognition",
    "showcase.snap.point2": "Personalized recipe suggestions",
    "showcase.snap.point3": "Step-by-step instructions",
    "showcase.aiBadge.title": "AI",
    "showcase.aiBadge.label": "Trained",
    "showcase.infiniteBadge.title": "Infinite",
    "showcase.infiniteBadge.label": "Recipes",
    "showcase.design": "Beautiful Interface",
    "showcase.simple": "Designed for Simplicity",
    "showcase.simple.body":
      "Clean, intuitive interface that makes recipe discovery and cooking effortless. Every detail crafted for the best user experience.",
    "showcase.simple.point1": "Easy-to-follow recipe cards",
    "showcase.simple.point2": "Save your favorite recipes",
    "showcase.simple.point3": "Shopping list integration",
    "plans.title": "Plans & limits",
    "plans.subtitle":
      "Choose the plan that fits your cooking needs. All plans include recipe generation from photos, text prompts, and video transcriptions.",
    "plans.apprentice.title": "Apprentice",
    "plans.apprentice.price": "€0",
    "plans.apprentice.per": "/month",
    "plans.apprentice.note": "Perfect for getting started",
    "plans.apprentice.item1": "5 recipes from images/month",
    "plans.apprentice.item2": "10 text prompt recipes/month",
    "plans.apprentice.item3": "5 video transcriptions/month",
    "plans.apprentice.item4": "3 tags maximum",
    "plans.apprentice.item5": "1 recipe in queue at a time",
    "plans.apprentice.cta": "Get Started Free",
    "plans.popular": "MOST POPULAR",
    "plans.sousChef.title": "Sous Chef",
    "plans.sousChef.price": "€2.99",
    "plans.sousChef.per": "/month",
    "plans.sousChef.note": "For regular home cooks",
    "plans.sousChef.item1": "30 recipes from images/month",
    "plans.sousChef.item2": "50 text prompt recipes/month",
    "plans.sousChef.item3": "30 video transcriptions/month",
    "plans.sousChef.item4": "20 tags maximum",
    "plans.sousChef.item5": "2 recipes in queue at a time",
    "plans.sousChef.cta": "Upgrade to Sous Chef",
    "plans.masterChef.title": "Master Chef",
    "plans.masterChef.price": "€4.99",
    "plans.masterChef.per": "/month",
    "plans.masterChef.note": "For serious home cooks",
    "plans.masterChef.item1": "100 recipes from images/month",
    "plans.masterChef.item2": "200 text prompt recipes/month",
    "plans.masterChef.item3": "100 video transcriptions/month",
    "plans.masterChef.item4": "100 tags maximum",
    "plans.masterChef.item5": "3 recipes in queue at a time",
    "plans.masterChef.cta": "Upgrade to Master Chef",
    "plans.allInclude": "All plans include:",
    "plans.include1": "Personalized recipe outputs",
    "plans.include2": "Ingredient lists & steps",
    "plans.include3": "Cooking tips & variations",
    "plans.include4": "Nutritional information",
    "cta.title": "Cook smarter with AI",
    "cta.subtitle":
      "Download RecipLab. Start free and upgrade to Pro for higher monthly recipe generation limits.",
    "cta.downloadFor": "Download for",
    "cta.ios": "iOS",
    "cta.android": "Android",
    "cta.rating": "4.9/5 Rating",
    "cta.users": "10K+ Users",
    "cta.free": "Free to Start",
    "footer.description":
      "AI-powered recipe generation from photos, text, and video transcriptions. Cook smarter, not harder.",
    "footer.product": "Product",
    "footer.legal": "Legal",
    "footer.features": "Features",
    "footer.plans": "Plans",
    "footer.download": "Download",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact",
    "footer.copyright": "© 2025 RecipLab. All rights reserved.",
    "brand.logoAlt": "RecipLab Logo",
    "terms.title": "Terms of Service",
    "terms.lastUpdated": "Last Updated: December 3, 2025",
    "terms.content": `
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the RecipLab website, mobile application, or services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.</p>

        <h2>2. Description of Service</h2>
        <p>RecipLab provides an AI-powered recipe generation and management platform. The Service allows users to generate recipes from photos, text, and video transcripts, create grocery lists, and manage meal plans.</p>

        <h2>3. No Medical or Nutritional Advice</h2>
        <p>The content provided by RecipLab, including but not limited to nutritional information, ingredient lists, and cooking instructions, is for informational purposes only. <strong>RecipLab is not a medical or nutritional professional.</strong> You should not rely on this information as a substitute for, nor does it replace, professional medical advice, diagnosis, or treatment.</p>

        <h2>4. Disclaimer of Warranties</h2>
        <p class="uppercase font-bold">THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. RECIPLAB EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
        <p>RecipLab makes no warranty that:</p>
        <ul>
          <li>The Service will meet your requirements.</li>
          <li>The Service will be uninterrupted, timely, secure, or error-free.</li>
          <li>The results that may be obtained from the use of the Service (including generated recipes) will be accurate, safe, or reliable.</li>
          <li>The quality of any products, services, information, or other material purchased or obtained by you through the Service will meet your expectations.</li>
        </ul>

        <h2>5. Limitation of Liability</h2>
        <p class="uppercase font-bold">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, RECIPLAB AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF RECIPLAB HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM:</p>
        <ul>
          <li>The use or the inability to use the Service.</li>
          <li>Any food poisoning, allergic reaction, or other health issue resulting from the preparation or consumption of food based on recipes generated by the Service.</li>
          <li>The cost of procurement of substitute goods and services.</li>
          <li>Unauthorized access to or alteration of your transmissions or data.</li>
          <li>Statements or conduct of any third party on the Service.</li>
          <li>Any other matter relating to the Service.</li>
        </ul>
        <p><strong>You acknowledge that cooking involves inherent risks</strong>, including but not limited to the risk of burns, cuts, fire, and foodborne illness. You assume all responsibility for ensuring the safety and edibility of any food you prepare using RecipLab.</p>

        <h2>6. User Accounts and Subscriptions</h2>
        <p>To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password.</p>
        <h3>6.1 Subscriptions</h3>
        <p>Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis (such as monthly or annually). Billing is handled by our third-party payment processor, Stripe.</p>
        <h3>6.2 Cancellations and Refunds</h3>
        <p>You may cancel your Subscription at any time. Cancellation will take effect at the end of the current billing period. <strong>Except when required by law, paid Subscription fees are non-refundable.</strong></p>

        <h2>7. User Content</h2>
        <p>You retain ownership of any content you submit to the Service ("User Content"). However, by submitting User Content, you grant RecipLab a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such User Content for the purpose of operating and improving the Service.</p>

        <h2>8. Indemnification</h2>
        <p>You agree to indemnify and hold RecipLab harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Service, your violation of these Terms, or your violation of any rights of another.</p>

        <h2>9. Modifications to Service</h2>
        <p>RecipLab reserves the right at any time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that RecipLab shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.</p>

        <h2>10. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which RecipLab operates, without regard to its conflict of law provisions.</p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us.</p>
    `,
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last Updated: December 3, 2025",
    "privacy.content": `
        <h2>1. Introduction</h2>
        <p>RecipLab ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and mobile application (the "Service").</p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Data</h3>
        <p>We may collect personally identifiable information, such as:</p>
        <ul>
          <li>Name and email address (via Clerk authentication)</li>
          <li>Profile information</li>
          <li>Payment information (processed securely by Stripe; we do not store full credit card details)</li>
        </ul>

        <h3>2.2 Usage Data</h3>
        <p>We may collect information about your interactions with the Service, including:</p>
        <ul>
          <li>Recipes generated and saved</li>
          <li>Grocery lists created</li>
          <li>Device information (IP address, browser type, operating system)</li>
          <li>Log data and usage patterns</li>
        </ul>

        <h3>2.3 Content Data</h3>
        <p>We collect the photos, videos, and text you upload for recipe generation. This content is processed by our AI providers to deliver the Service.</p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain the Service</li>
          <li>Improve, personalize, and expand the Service</li>
          <li>Process transactions and manage subscriptions</li>
          <li>Communicate with you, including for customer service and updates</li>
          <li>Detect and prevent fraud</li>
          <li>Train and improve our AI models (using anonymized data)</li>
        </ul>

        <h2>4. Disclosure of Your Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> We use third-party vendors to perform services on our behalf, such as payment processing (Stripe), authentication (Clerk), and cloud hosting.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
          <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organizational security measures to protect your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

        <h2>6. Third-Party Services</h2>
        <p>The Service may contain links to third-party websites or services that are not owned or controlled by RecipLab. We are not responsible for the privacy practices of such third parties.</p>

        <h2>7. Children's Privacy</h2>
        <p>The Service is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

        <h2>8. Your Data Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your personal data.</li>
          <li>Object to or restrict processing of your data.</li>
        </ul>
        <p>To exercise these rights, please contact us.</p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us.</p>
    `,
  },
  es,
};

export default translations;
