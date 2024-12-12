const nav = document.querySelector("#nav");
const page = window.location.pathname.split("/").pop();

const navData = [
  {
    title: "Tarjimai Xol",
    url: "index.html",
  },
  {
    title: "Asarlari",
    url: "asarlar.html",
  },
  {
    title: "Boburnoma",
    url: "boburnoma.html",
  },
  {
    title: "Bobur Devoni",
    url: "devon.html",
  },
  {
    title: "Lug'at",
    url: "",
  },
  {
    title: "Muallif",
    url: "",
  },
];

for (const item of navData) {
  nav.innerHTML += `
    
    <div>
        <a
        href="${item.url}"
        class="relative block p-2 focus:outline-none  rounded-md   border-l-4 border-transparent hover:border-blue-500 text-center ${
          page == item.url
            ? "bg-blue-500 text-white"
            : "bg-gray-100 text-gray-600"
        }"
        >
        ${item.title}
        </a>
    </div>
    
    `;
}
