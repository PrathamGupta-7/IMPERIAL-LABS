const defaultConfig = {
      background_color: "#0A0A0A",
      accent_color: "#6C3BFF",
      text_color: "#FFFFFF",
      muted_text_color: "#999999",
      surface_color: "#141414",
      font_family: "Sora",
      font_size: 16,
      hero_headline: "We Don't Manage Brands. We Scale Them.",
      hero_subtext: "Imperial Labs helps businesses generate leads, increase revenue, and dominate social media.",
      cta_text: "Book a Call",
      stat_1: "+200% Growth",
      stat_2: "50+ Leads Generated",
      stat_3: "3X ROI",
      brand_statement: "We are not a traditional agency. Imperial Labs operates like a growth lab—focused on testing, optimizing, and scaling brands for real results.",
      final_heading: "Ready to Scale Your Brand?",
      final_cta_text: "Book a Call"
    };

    function applyConfig(config) {
      const c = key => config[key] || defaultConfig[key];
      const fs = c('font_size');
      const ff = c('font_family');
      const bg = c('background_color');
      const accent = c('accent_color');
      const txt = c('text_color');
      const muted = c('muted_text_color');

      document.body.style.background = bg;
      document.body.style.color = txt;

      document.querySelectorAll('.font-sora').forEach(el => {
        el.style.fontFamily = `${ff}, Sora, sans-serif`;
      });

      const h1 = document.getElementById('hero-h1');
      if (h1) { h1.textContent = c('hero_headline'); h1.style.fontSize = `${fs * 3.2}px`; }

      const sub = document.getElementById('hero-sub');
      if (sub) { sub.textContent = c('hero_subtext'); sub.style.color = muted; sub.style.fontSize = `${fs * 1.15}px`; }

      document.querySelectorAll('.glow-btn').forEach(btn => {
        btn.style.background = accent;
        btn.style.boxShadow = `0 0 30px ${accent}80, 0 0 60px ${accent}33`;
        btn.style.fontSize = `${fs}px`;
      });

      const ctaBtn = document.getElementById('hero-cta');
      if (ctaBtn) ctaBtn.textContent = c('cta_text');

      const stats = document.querySelectorAll('.stat-value');
      const statTexts = [c('stat_1'), c('stat_2'), c('stat_3')];
      stats.forEach((el, i) => {
        el.textContent = statTexts[i];
        el.style.color = txt;
        el.style.fontSize = `${fs * 1.5}px`;
      });

      const brand = document.getElementById('brand-text');
      if (brand) { brand.textContent = c('brand_statement'); brand.style.color = muted; brand.style.fontSize = `${fs * 1.2}px`; }

      const finalH = document.getElementById('final-heading');
      if (finalH) { finalH.textContent = c('final_heading'); finalH.style.fontSize = `${fs * 2.5}px`; }

      const finalCta = document.getElementById('final-cta');
      if (finalCta) finalCta.textContent = c('final_cta_text');

      document.querySelectorAll('.divider-glow').forEach(el => {
        el.style.background = `linear-gradient(90deg, transparent, ${accent}66, transparent)`;
      });

      const orbs = document.querySelectorAll('.orb');
      orbs.forEach(o => { o.style.background = accent; });

      document.querySelectorAll('.gradient-ring').forEach(r => {
        r.style.borderColor = `${accent}26`;
      });

      document.getElementById('surface-card')?.style && (document.getElementById('surface-card').style.background = c('surface_color'));
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
            make('muted_text_color')
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
          ["hero_headline", c("hero_headline")],
          ["hero_subtext", c("hero_subtext")],
          ["cta_text", c("cta_text")],
          ["stat_1", c("stat_1")],
          ["stat_2", c("stat_2")],
          ["stat_3", c("stat_3")],
          ["brand_statement", c("brand_statement")],
          ["final_heading", c("final_heading")],
          ["final_cta_text", c("final_cta_text")]
        ]);
      }
    });
    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9ed48d8a27de4664',t:'MTc3NjM1Njc5OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();