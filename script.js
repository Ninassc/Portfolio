//abrir menu e trocar ícone
const iconeMenu = document.getElementById('icone-menu')
const menu = document.getElementById('nav-menu');

const iconeAbrir = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M27.125 12.9167H3.875M27.125 7.75H3.875M27.125 18.0833H3.875M27.125 23.25H3.875"
      stroke="#D9D9D9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
</svg>`

const iconeFechar = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2" y1="-2" x2="26.4756" y2="-2" transform="matrix(0.711836 -0.702345 0.711837 0.702345 2.76233 22)" stroke="#D9D9D9" stroke-width="4" stroke-linecap="round"/>
<line x1="2" y1="-2" x2="26.4756" y2="-2" transform="matrix(0.711837 0.702345 -0.711836 0.702345 1 2)" stroke="#D9D9D9" stroke-width="4" stroke-linecap="round"/>
</svg>`

let trocar = false;
iconeMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  trocar = !trocar
  if (trocar) {
    iconeMenu.innerHTML = iconeFechar;
    iconeMenu.style.position = 'fixed';
    clicarMudar.style.position = 'fixed';
  }
  else {
    iconeMenu.innerHTML = iconeAbrir;
    clicarMudar.style.position = '';
    iconeMenu.style.position = '';
  }
})



//efeito 1 (digitar)
function typeWriter(element, text, delay = 100, callback) {
  let i = 0;
  element.textContent = "";

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
    else if (callback) {
      callback();
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", () => {
  const linha1 = document.getElementById("linha1");
  const linha2 = document.getElementById("linha2");
  const linha3 = document.getElementById("linha3");

  typeWriter(linha1, "<H1>", 120, () => {
    typeWriter(linha2, "Olá, Eu sou a Nina!", 120, () => {
      typeWriter(linha3, "</H1>", 120);
    });
  });
});



//dark-mode e trocar ícone
const iconeDark = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="CurrentColor"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`

const iconeLight = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="CurrentColor"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>'

const clicarMudar = document.getElementById('icone-fundo')
const pagina1 = document.querySelector('.pagina1')
const pagina2 = document.querySelector('.pagina2')
const pagina3 = document.querySelector('.pagina3')
const pagina5 = document.querySelector(".pagina5")
let darkMode = false

clicarMudar.addEventListener('click', () => {
  darkMode = !darkMode
  pagina1.classList.toggle("darkmode")
  pagina2.classList.toggle("darkmode")
  pagina3.classList.toggle('darkmode')
  pagina5.classList.toggle('darkmode')
  clicarMudar.innerHTML = darkMode ? iconeLight : iconeDark
  SalvarAlteracoes()
})

//salvar as alterções quando recarrega a página e abre de novo aaaaa

function SalvarAlteracoes() {
  if (darkMode == true) {
    localStorage.setItem("dark", "true")
  }
  else {
    localStorage.setItem("dark", "false")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("dark") == "true") {
    pagina1.classList.add("darkmode")
    pagina2.classList.add("darkmode")
    pagina3.classList.add('darkmode')
    pagina5.classList.add('darkmode')
    darkMode = true
  }
  else {
    pagina1.classList.remove("darkmode")
    pagina2.classList.remove("darkmode")
    pagina3.classList.remove('darkmode')
    pagina5.classList.remove('darkmode')
    darkMode = false
  }
})



//modal
const modal = document.getElementById("modal")
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const fecharModal = document.getElementById("close")

const descriptions = {
  csharp: "C# é uma linguagem de programação orientada a objetos da Microsoft, usada para aplicações desktop, web e jogos.",
  aspnet: "Asp.Net é um framework da Microsoft para criar aplicações web robustas e escaláveis.",
  unity: "Unity é uma engine para criação de jogos multiplataforma.",
  python: "Python é uma linguagem versátil, usada em ciência de dados, web, automação e muito mais.",
  django: "Django é um framework web em Python, focado em produtividade e segurança.",
  sqlserver: "SQL Server é um sistema de gerenciamento de banco de dados relacional da Microsoft.",
  mysql: "MySQL é um sistema de gerenciamento de banco de dados, amplamente utilizado em aplicações web pela sua rapidez, confiabilidade e facilidade de uso.",
  javascript: "JavaScript é a linguagem da web, usada para dar interatividade a páginas e aplicações.",
  react: "React é uma biblioteca JavaScript para construir interfaces de usuário.",
  html5: "HTML5 é a linguagem de marcação padrão da web, usada para estruturar conteúdo.",
  css3: "CSS3 é usado para estilizar páginas web, controlando layout, cores e animações.",
  git: "Git é um sistema de controle de versão distribuído, usado para gerenciar projetos de software."
};

document.querySelectorAll(".hskill").forEach(skill => {
  skill.addEventListener("click", () => {
    const skillKey = skill.getAttribute("id");
    modalTitle.textContent = skill.textContent;
    modalText.textContent = descriptions[skillKey];
    modal.style.display = "flex";
  });
  fecharModal.addEventListener("click", () => {
    modal.style.display = "none"
  })
});



// efeito 2 (subir os trem dos cards)
document.querySelectorAll(".hskill").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * 20;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

document.querySelectorAll(".skills").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * 20;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


//máscara para adicionar o @gmail.com (tem que arrumar isso aqui direito)
mascara_email = document.getElementById("email")

mascara_email.addEventListener("blur", () => {
  var inputValor = mascara_email.value.trim();

  var tamanho = inputValor.length
  if (inputValor && !inputValor.endsWith("@gmail.com")) {
    inputValor = inputValor.slice(0, tamanho) + "@gmail.com"
  }

  document.getElementById("email").value = inputValor
})
