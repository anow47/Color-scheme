const colorSchemes = [
    {
      id: 1,
      colors: [
        { code: "#161e2f", name: "Midnight Blue" },
        { code: "#242f49", name: "Dark Blue" },
        { code: "#384358", name: "Gunmetal" },
        { code: "#ffa568", name: "Orange" },
        { code: "#b51a2b", name: "Crimson" },
        { code: "#541a2e", name: "Burgundy" }
      ]
    },
    {
      id: 2,
      colors: [
        { code: "#0c1a3f", name: "Navy Blue" },
        { code: "#c38eb4", name: "Lavender" },
        { code: "#e1cbd7", name: "Pearl" },
        { code: "#86a8cf", name: "Steel Blue" },
        { code: "#26425a", name: "Dark Slate Blue" },
        { code: "#0d1e2e", name: "Dark Blue-Grey" }
      ]
    },
    {
      id: 3,
      colors: [
        { code: "#190019", name: "" },
        { code: "#2b124c", name: "" },
        { code: "#522b5b", name: "" },
        { code: "#854f6c", name: "" },
        { code: "#dfb6b2", name: "" },
        { code: "#fbe4d8", name: "" }
      ]
    },
    {
      id: 4,
      colors: [
        { code: "#06142e", name: "" },
        { code: "#1b3358", name: "" },
        { code: "#473e66", name: "" },
        { code: "#bd83b8", name: "" },
        { code: "#f5d7db", name: "" },
        { code: "#f1916d", name: "" }
      ]
    },
    {
      id: 5,
      colors: [
        { code: "#05161a", name: "" },
        { code: "#072e33", name: "" },
        { code: "#0c7075", name: "" },
        { code: "#0f969c", name: "" },
        { code: "#6da5c0", name: "" },
        { code: "#294d61", name: "" }
      ]
    },
    {
      id: 6,
      colors: [
        { code: "#1d1a39", name: "" },
        { code: "#451952", name: "" },
        { code: "#662549", name: "" },
        { code: "#ae445a", name: "" },
        { code: "#f39f5a", name: "" },
        { code: "#e8bcb9", name: "" }
      ]
    },
  ]

const colorContainer = document.querySelector('.color-scheme')
colorSchemes.map(scheme => {
    colorContainer.innerHTML += `
        <div class="scheme">
            ${scheme.colors.map(item => {
                return `
                  <div class="color" style="background-color: ${item.code};">
                    <span>Name: ${item.name}</span>
                    <span>Code: ${item.code.toUpperCase()}</span>
                  </div>
                `
            }).join('')}
        </div>
    `
})
