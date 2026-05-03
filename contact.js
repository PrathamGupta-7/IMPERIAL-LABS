const defaultConfig = {
      background_color: "#0A0A0A",
      accent_color: "#6C3BFF",
      text_color: "#FFFFFF",
      muted_text_color: "#CCCCCC",
      surface_color: "#1A1A1A",
      glow_color: "#9D7BFF",
      font_family: "Sora",
      font_size: 16,
      logo_text: "Imperial Labs",
      contact_heading: "Get In Touch",
      contact_subtext: "Ready to scale your brand? Let's talk.",
      form_title: "Send us a message",
      form_name_placeholder: "Your Name",
      form_email_placeholder: "your@email.com",
      form_message_placeholder: "Tell us about your project",
      form_button: "Book a Call",
      whatsapp_text: "Chat with us directly",
      email_text: "imperiallabs@email.com",
      final_heading: "Let's Build Your Growth Engine",
      final_button: "Book a Call"
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

      const logo = document.getElementById('navbar-logo');
      if (logo) { logo.textContent = c('logo_text'); }

      const contactHeading = document.getElementById('contact-heading');
      if (contactHeading) { contactHeading.textContent = c('contact_heading'); contactHeading.style.fontSize = `${fs * 2.5}px`; }

      const contactSubtext = document.getElementById('contact-subtext');
      if (contactSubtext) { contactSubtext.textContent = c('contact_subtext'); contactSubtext.style.color = muted; contactSubtext.style.fontSize = `${fs * 1.1}px`; }

      const formTitle = document.getElementById('form-title');
      if (formTitle) { formTitle.textContent = c('form_title'); }

      const nameInput = document.getElementById('form-name');
      if (nameInput) { nameInput.placeholder = c('form_name_placeholder'); }

      const emailInput = document.getElementById('form-email');
      if (emailInput) { emailInput.placeholder = c('form_email_placeholder'); }

      const messageInput = document.getElementById('form-message');
      if (messageInput) { messageInput.placeholder = c('form_message_placeholder'); }

      const formBtn = document.getElementById('form-btn');
      if (formBtn) { formBtn.textContent = c('form_button'); formBtn.style.fontSize = `${fs}px`; }

      const whatsappText = document.getElementById('whatsapp-text');
      if (whatsappText) { whatsappText.textContent = c('whatsapp_text'); }

      const emailText = document.getElementById('email-text');
      if (emailText) { emailText.textContent = c('email_text'); }

      const finalHeading = document.getElementById('final-heading');
      if (finalHeading) { finalHeading.textContent = c('final_heading'); finalHeading.style.fontSize = `${fs * 2.5}px`; }

      const finalBtn = document.getElementById('final-btn');
      if (finalBtn) { finalBtn.textContent = c('final_button'); finalBtn.style.fontSize = `${fs}px`; }

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

      document.querySelectorAll('.option-icon').forEach(el => {
        el.style.color = accent;
      });

      document.querySelectorAll('.section-label').forEach(el => {
        el.style.color = glow;
      });

      document.querySelectorAll('.form-input').forEach(el => {
        el.style.borderColor = `rgba(${parseInt(accent.slice(1,3), 16)}, ${parseInt(accent.slice(3,5), 16)}, ${parseInt(accent.slice(5,7), 16)}, 0.2)`;
      });

      document.querySelector('.contact-card').style.borderColor = `rgba(${parseInt(accent.slice(1,3), 16)}, ${parseInt(accent.slice(3,5), 16)}, ${parseInt(accent.slice(5,7), 16)}, 0.15)`;
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
          ["logo_text", c("logo_text")],
          ["contact_heading", c("contact_heading")],
          ["contact_subtext", c("contact_subtext")],
          ["form_title", c("form_title")],
          ["form_name_placeholder", c("form_name_placeholder")],
          ["form_email_placeholder", c("form_email_placeholder")],
          ["form_message_placeholder", c("form_message_placeholder")],
          ["form_button", c("form_button")],
          ["whatsapp_text", c("whatsapp_text")],
          ["email_text", c("email_text")],
          ["final_heading", c("final_heading")],
          ["final_button", c("final_button")]
        ]);
      }
    });

    lucide.createIcons();
    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9ed5252ec43b3ab3',t:'MTc3NjM2MzAxMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();