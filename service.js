    const defaultConfig = {
      background_color: "#0A0A0A",
      accent_color: "#6C3BFF",
      text_color: "#FFFFFF",
      muted_text_color: "#CCCCCC",
      surface_color: "#1A1A1A",
      glow_color: "#9D7BFF",
      font_family: "Sora",
      font_size: 16,
      services_heading: "Our Services",
      services_subtext: "We don't offer random services. We build content systems that drive real growth.",
      service_1_title: "Content Production",
      service_1_desc: "We create high-quality content that grabs attention, builds trust, and makes your brand stand out.",
      service_1_outcome: "Content that doesn't just look good — it performs.",
      service_2_title: "Social Media Growth",
      service_2_desc: "We grow your brand presence and turn attention into audience through proven strategies.",
      service_2_outcome: "Turn your social media into a consistent growth engine.",
      why_heading: "Why Imperial Labs?",
      final_heading: "Let's Build Your Brand",
      final_subtext: "Work with Imperial Labs and start scaling your presence.",
      final_cta: "Book a Call"
    };

    function applyConfig(config) {
      const c = key => config[key] || defaultConfig[key];
      const fs = c('font_size');
      const ff = c('font_family');
      const bg = c('background_color');
      const accent = c('accent_color');
      const txt = c('text_color');
      const muted = c('muted_text_color');
      const surface = c('surface_color');
      const glow = c('glow_color');

      document.body.style.background = bg;
      document.body.style.color = txt;

      document.querySelectorAll('.font-sora').forEach(el => {
        el.style.fontFamily = `${ff}, Sora, sans-serif`;
      });

      const heading = document.getElementById('services-heading');
      if (heading) { heading.textContent = c('services_heading'); heading.style.fontSize = `${fs * 2.5}px`; }

      const subtext = document.getElementById('services-subtext');
      if (subtext) { subtext.textContent = c('services_subtext'); subtext.style.color = muted; subtext.style.fontSize = `${fs * 1.1}px`; }

      const s1Title = document.getElementById('service-1-title');
      if (s1Title) { s1Title.textContent = c('service_1_title'); s1Title.style.fontSize = `${fs * 1.4}px`; }

      const s1Desc = document.getElementById('service-1-desc');
      if (s1Desc) { s1Desc.textContent = c('service_1_desc'); s1Desc.style.color = muted; s1Desc.style.fontSize = `${fs * 0.95}px`; }

      const s1Outcome = document.getElementById('service-1-outcome');
      if (s1Outcome) { s1Outcome.textContent = c('service_1_outcome'); s1Outcome.style.color = glow; s1Outcome.style.fontSize = `${fs * 0.95}px`; }

      const s2Title = document.getElementById('service-2-title');
      if (s2Title) { s2Title.textContent = c('service_2_title'); s2Title.style.fontSize = `${fs * 1.4}px`; }

      const s2Desc = document.getElementById('service-2-desc');
      if (s2Desc) { s2Desc.textContent = c('service_2_desc'); s2Desc.style.color = muted; s2Desc.style.fontSize = `${fs * 0.95}px`; }

      const s2Outcome = document.getElementById('service-2-outcome');
      if (s2Outcome) { s2Outcome.textContent = c('service_2_outcome'); s2Outcome.style.color = glow; s2Outcome.style.fontSize = `${fs * 0.95}px`; }

      const whyHeading = document.getElementById('why-heading');
      if (whyHeading) { whyHeading.textContent = c('why_heading'); whyHeading.style.fontSize = `${fs * 2.2}px`; }

      const finalH = document.getElementById('final-heading');
      if (finalH) { finalH.textContent = c('final_heading'); finalH.style.fontSize = `${fs * 2.5}px`; }

      const finalSub = document.getElementById('final-subtext');
      if (finalSub) { finalSub.textContent = c('final_subtext'); finalSub.style.color = muted; finalSub.style.fontSize = `${fs * 1.05}px`; }

      const finalBtn = document.getElementById('final-cta-btn');
      if (finalBtn) finalBtn.textContent = c('final_cta');

      document.querySelectorAll('.glow-btn').forEach(btn => {
        btn.style.background = accent;
        btn.style.boxShadow = `0 0 30px ${accent}80, 0 0 60px ${accent}33`;
        btn.style.fontSize = `${fs}px`;
      });

      document.querySelectorAll('.service-card').forEach(card => {
        card.style.background = surface;
        card.style.borderColor = `${accent}1a`;
      });

      document.querySelectorAll('.service-card:hover').forEach(card => {
        card.style.borderColor = `${accent}4d`;
      });

      document.querySelectorAll('.outcome-highlight').forEach(el => {
        el.style.color = glow;
        el.style.borderTopColor = `${accent}33`;
      });

      document.querySelectorAll('.feature-list li::before').forEach(el => {
        el.style.color = accent;
      });

      document.querySelectorAll('.divider-glow').forEach(el => {
        el.style.background = `linear-gradient(90deg, transparent, ${accent}66, transparent)`;
      });

      document.querySelectorAll('.orb').forEach(o => {
        o.style.background = accent;
      });
    }

    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => applyConfig(config),
      mapToCapabilities: (config) => {
        const c = key => config[key] || defaultConfig[key];
        const make = (key) => ({
          get: () => c(key),
          set: (v) => { config[key] = v; window.elementSdk.setConfig({ [key]: v }); }
        });
        return {
          recolorables: [
            make('background_color'),
            make('surface_color'),
            make('text_color'),
            make('accent_color'),
            make('muted_text_color'),
            make('glow_color')
          ],
          borderables: [],
          fontEditable: make('font_family'),
          fontSizeable: {
            get: () => c('font_size'),
            set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
          }
        };
      },
      mapToEditPanelValues: (config) => {
        const c = key => config[key] || defaultConfig[key];
        return new Map([
          ["services_heading", c("services_heading")],
          ["services_subtext", c("services_subtext")],
          ["service_1_title", c("service_1_title")],
          ["service_1_desc", c("service_1_desc")],
          ["service_1_outcome", c("service_1_outcome")],
          ["service_2_title", c("service_2_title")],
          ["service_2_desc", c("service_2_desc")],
          ["service_2_outcome", c("service_2_outcome")],
          ["why_heading", c("why_heading")],
          ["final_heading", c("final_heading")],
          ["final_subtext", c("final_subtext")],
          ["final_cta", c("final_cta")]
        ]);
      }
    });
    lucide.createIcons();
    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9ed495f614dbb895',t:'MTc3NjM1NzE0NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();