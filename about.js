const defaultConfig = {
      background_color: "#0A0A0A",
      accent_color: "#6C3BFF",
      text_color: "#FFFFFF",
      muted_text_color: "#CCCCCC",
      surface_color: "#1A1A1A",
      glow_color: "#9D7BFF",
      font_family: "Sora",
      font_size: 16,
      about_heading: "About Imperial Labs",
      about_subtext: "We are not a traditional agency. We operate like a growth lab.",
      who_text: "Imperial Labs is built for one purpose — to help brands grow faster and smarter.\n\nWe combine content, strategy, and systems to create real impact, not just vanity metrics.",
      approach_heading: "Our Approach",
      different_heading: "Why Imperial Labs",
      brand_statement: "We don't chase trends.\nWe build systems that create consistent growth.",
      cta_heading: "Let's Build Something Bigger",
      cta_button: "Book a Call"
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

      const heading = document.getElementById('about-heading');
      if (heading) { heading.textContent = c('about_heading'); heading.style.fontSize = `${fs * 2.5}px`; }

      const subtext = document.getElementById('about-subtext');
      if (subtext) { subtext.textContent = c('about_subtext'); subtext.style.color = muted; subtext.style.fontSize = `${fs * 1.1}px`; }

      const whoText = document.getElementById('who-text');
      if (whoText) { whoText.textContent = c('who_text'); whoText.style.color = muted; whoText.style.fontSize = `${fs * 1.05}px`; }

      const approachHead = document.getElementById('approach-heading');
      if (approachHead) { approachHead.textContent = c('approach_heading'); approachHead.style.fontSize = `${fs * 2.2}px`; }

      const diffHead = document.getElementById('different-heading');
      if (diffHead) { diffHead.textContent = c('different_heading'); diffHead.style.fontSize = `${fs * 2.2}px`; }

      const brandStmt = document.getElementById('brand-statement');
      if (brandStmt) { brandStmt.textContent = c('brand_statement'); brandStmt.style.color = glow; brandStmt.style.fontSize = `${fs * 1.3}px`; }

      const ctaH = document.getElementById('cta-heading');
      if (ctaH) { ctaH.textContent = c('cta_heading'); ctaH.style.fontSize = `${fs * 2.5}px`; }

      const ctaBtn = document.getElementById('cta-btn');
      if (ctaBtn) { ctaBtn.textContent = c('cta_button'); ctaBtn.style.fontSize = `${fs}px`; }

      document.querySelectorAll('.glow-btn').forEach(btn => {
        btn.style.background = accent;
        btn.style.boxShadow = `0 0 30px ${accent}80, 0 0 60px ${accent}33`;
      });

      document.querySelectorAll('.divider-glow').forEach(el => {
        el.style.background = `linear-gradient(90deg, transparent, ${accent}66, transparent)`;
      });

      document.querySelectorAll('.orb').forEach(o => {
        o.style.background = accent;
      });

      document.querySelectorAll('.feature-list li::before').forEach(el => {
        el.style.color = accent;
      });

      document.querySelectorAll('.section-label').forEach(el => {
        el.style.color = glow;
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
          ["about_heading", c("about_heading")],
          ["about_subtext", c("about_subtext")],
          ["who_text", c("who_text")],
          ["approach_heading", c("approach_heading")],
          ["different_heading", c("different_heading")],
          ["brand_statement", c("brand_statement")],
          ["cta_heading", c("cta_heading")],
          ["cta_button", c("cta_button")]
        ]);
      }
    });
    lucide.createIcons();
    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9ed51c3e83163de5',t:'MTc3NjM2MjY0NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();