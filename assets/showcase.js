(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");

  // Without JavaScript the full navigation stays visible and usable.
  if (menuButton && navigation) {
    const desktop = window.matchMedia("(min-width: 761px)");
    const menuLabel = menuButton.querySelector(".menu-label");

    const setMenuOpen = (open, restoreFocus = false) => {
      const expanded = open && !desktop.matches;
      const focusWasInNavigation = navigation.contains(document.activeElement);

      document.body.classList.toggle("nav-open", expanded);
      menuButton.setAttribute("aria-expanded", String(expanded));
      if (menuLabel) menuLabel.textContent = expanded ? "閉じる" : "メニュー";

      // Never leave keyboard focus on a link that has just become hidden.
      if (!expanded && !desktop.matches && (restoreFocus || focusWasInNavigation)) {
        menuButton.focus({ preventScroll: true });
      }
    };

    const focusDestination = (target) => {
      const hadTabindex = target.hasAttribute("tabindex");
      if (!hadTabindex) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      if (!hadTabindex) {
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
      }
    };

    menuButton.addEventListener("click", () => {
      setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link || !navigation.contains(link)) return;

      // Preserve native anchor scrolling while moving focus to the content.
      if (!desktop.matches && link.getAttribute("href").startsWith("#")) {
        const target = document.getElementById(link.hash.slice(1));
        if (target) focusDestination(target);
      }
      setMenuOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (menuButton.getAttribute("aria-expanded") !== "true") return;
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        event.preventDefault();
        setMenuOpen(false, true);
      }
    });

    desktop.addEventListener("change", () => {
      const focusWasOnButton = document.activeElement === menuButton;
      setMenuOpen(false);
      if (desktop.matches && focusWasOnButton) {
        navigation.querySelector("a")?.focus({ preventScroll: true });
      }
    });

    // Enable the collapsed layout only after its controls have been wired.
    menuButton.hidden = false;
    document.body.classList.add("nav-enhanced");
    setMenuOpen(false);
  }

  const diagram = document.querySelector(".battle-diagram");
  const diagramMode = document.querySelector("[data-diagram-mode]");
  const battleTopics = Array.from(document.querySelectorAll("details.battle-topic"));
  const modeLabels = {
    distance: "01 / 間合い",
    movement: "02 / 立体移動",
    arts: "03 / 奥義",
  };

  if (diagram && diagramMode) {
    const showTopic = (topic) => {
      const mode = topic.dataset.topic;
      if (!Object.hasOwn(modeLabels, mode)) return;
      diagram.dataset.battle = mode;
      diagramMode.textContent = modeLabels[mode];
    };

    // Native details remain independent, including when JavaScript is disabled.
    // The most recently opened explanation selects the accompanying diagram.
    battleTopics.forEach((topic) => {
      topic.addEventListener("toggle", () => {
        if (topic.open) showTopic(topic);
      });
    });

    const initialTopic = battleTopics.find((topic) => topic.open);
    if (initialTopic) showTopic(initialTopic);
  }
})();
