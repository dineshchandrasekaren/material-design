// set initaily in dark mode
document.documentElement.classList.toggle("dark");
let aside = document.querySelector("aside");
let sectionRender = [
  {
    node: document.getElementById("news-launches"),
    data: [
      {
        image:
          "https://lh3.googleusercontent.com/51moDkmVWptBFXRReuACKocS_fsOoYtfT-C78onEUKeRr7ky4l_ZsuZMK2AnE7-MPRbLzcKTAIFmNyyN7ACo0-eygmXaGeR0ItYtRcYNE8-_L8RHqkA=w960",
        title: "Material Design at Google I/O",
        desc: "See the full list of Material talks and tutorials launching at I/O 2023",
      },
      {
        image:
          "https://lh3.googleusercontent.com/aiJojq_gpPLqLhU0PZH6Dog-OjIMti_hiclF_6oqxucGuvywn_AEtu2Qrk2f4WxEhRWMjXkz8qXpTCGoj5TZ0DUCEZ5UIXnXTSIu_7ndg2dTNmQbdkCO=w960",
        title: "New: Large screen guidance",
        desc: "Get started adapting your layouts for a range of window size classes and hardware",
      },
      {
        image:
          "https://lh3.googleusercontent.com/mLGakWFjdX3zGBIhCUWqzjlj3gUXOY8hOed_ISzomlpNmjKWUiqCFyNGGAZFneVaK30v4GUpjn7lyIsI2Z7KPvMKrYkumzBr2nwbVe3BQKRkpam3sA=w960",
        title: "Figma design kit for M3",
        desc: "Jumpstart your M3 designs with the complete library of ready-made components",
      },
    ],
    heading: "News & launches",
  },
  {
    node: document.getElementById("designSystem"),
    data: [
      {
        image:
          "https://lh3.googleusercontent.com/AG8Da4Doz97XcS62XgVOYWiRwcwgZZdhJOeejfA9bhzY8K5cyhsy753fFaNgkZjcTXA7MwQnPOa9FjKaFFoOVDGVh33PutwuflvNCXkfBS7AR5GbeQ=w960",
        title: "M3 for Jetpack Compose",
        desc: "With the latest stable release, use Jetpack Compose to build a complete M3 Android app",
      },
      {
        image:
          "https://lh3.googleusercontent.com/IfqcD9hZWV1tohxFc8gyiP9kVjz0Igg1trtKkYD3qxvEziIxbnD2b8mCpmJqC015XWD14Pvwy-0vRUSJltvEa9tcY8TnWpO0zYJaR1IPjJlRrWpo3Q=w960",
        title: "New component: M3 carousel",
        desc: "An expressive new component for displaying scrollable collections of content",
      },
      {
        image:
          "https://lh3.googleusercontent.com/aLTg-FT4Ocgvjw1B_i3fOVK-rWoV3C7XCHyBkKwSbJFzIZtJjo-5atBHcSs9aZdHxiMw8-nP3lCnULJtFG_KdIVg7Gk-NV8sc1DJkeMRsTtir9pIu6IY=w960",
        title: "Back navigation & gestures",
        desc: "Explore new motion and gesture capabilities for smooth navigation across screens",
      },
      {
        image:
          "https://lh3.googleusercontent.com/QTSOFxOaVde6gu-lNjTZ_VrOh7ihpSgRc-hErsBVjQ4Te9tIj4cW4BNWXj2fy1WbDnWYNS3v6pO628xBLC-A74K7ylf0ODNz-jbNhM1OUCgTUvZSN3zP=w960",
        title: "Motion system updates",
        desc: "Get started applying motion, from ready-to-use transition patterns to updated guidance",
      },
      {
        image:
          "https://lh3.googleusercontent.com/w0mg7Iy0YoeV7ViHTp9XRzZFTbCX-ME87HPfbv_XFFZlQ-D6tjVwxsY1X_HUrFiXf-kNp8LePGcqv2Oh3OiNU6J28BYhiTf8UQKJBRDYPZejkpKE0NQ=w960",
        title: "Material Theme Builder",
        desc: "Easily migrate or get started with the M3 color system and dynamic color",
      },
      {
        image:
          "https://lh3.googleusercontent.com/560ITYkB-YZ3Hc2f0s-i9doX7kqOZ_CNnuzS7XtPolT6zfcKk7PW2TCSlD61OkSAu9eLXn1U404j5Sc4tZNZh-j4IscbCgHURVy1eC7fGtFESdOQMdhm=w960",
        title: "New color guidance for tones",
        desc: "Updates include tone-based surface colors, contrast modes, and fixed accent colors",
      },
    ],
    heading: "Design system updates",
  },
  {
    node: document.getElementById("resources"),
    data: [
      {
        title: "Material blog",
        desc: "News, tutorials, and inspiration from the Material team",
      },
      {
        title: "Figma design kit",
        desc: "Customizable styles and components to help you design with Material 3",
      },
      {
        title: "Get started",
        desc: "Guides, videos, and tools to start building with Material",
      },
      {
        title: "Develop",
        desc: "Code and developer documentation for Android, Flutter, and the Web",
      },
    ],
    heading: "Resources",
  },
];
sectionRender.forEach(({ node, data, heading }) => {
  let section = node;
  section.innerHTML = `<h2 class="section-title">${heading}</h2>`;
  let cardContainer = document.createElement("div");
  if (heading === "Resources") {
    cardContainer.className = "card-container col-2";
  } else {
    cardContainer.className = "card-container col-3";
  }

  data.forEach((cardDetail) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    ${
      cardDetail.image
        ? `<img
          src="${cardDetail.image}"
          alt="${cardDetail.title}"
          class="card-img"
        />`
        : ""
    }
  
            <div class="card-info">
              <h3>${cardDetail.title}</h3>
              <p>
                ${cardDetail.desc}
              </p>
            </div>`;
    cardContainer.appendChild(card);
  });
  section.appendChild(cardContainer.cloneNode(true));
  cardContainer.innerHTML = "";
});
handleMode = () => {
  document.documentElement.classList.toggle("light");
  document.documentElement.classList.toggle("dark");
  let mode = document.documentElement.classList["value"];
  document.getElementById("mode").innerText =
    mode === "dark" ? "light_mode" : "dark_mode";
  document.querySelector(".mode-status").innerHTML =
    mode === "dark" ? "Switch to light mode" : "Switch to dark mode";
};

handleSideBar = () => {
  if (aside.style.display === "flex") {
    aside.style.display = "none";
  } else {
    aside.style.display = "flex";
    aside.style.height = "100%";
  }
};
