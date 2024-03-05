<script setup>
import  NavBar  from "../components/NavBar.vue";
import Footer from "../components/Footer.vue"
import Contact from "../components/Contact.vue"
import { ref, onMounted ,onBeforeUnmount } from 'vue';

const romanianLinks = [
  { id: 'section1', label: 'Despre Noi', rus: 'О нас' , href: '#about'},
  { id: 'section2', label: 'Rezultate în cifre',rus: 'Результаты в цифрах', href: '#result'},
  { id: 'section3', label: 'Obiective',rus: 'Цели', href: '#aim'},
  { id: 'section6', label: 'Ia Legătura',rus: 'Связаться', href: '#contact'},
];
defineProps(['changeLanguage'])
const language = ref(true)

function toggleLanguage(){
  language.value = !language.value
}
</script>

<template>
  <div class="slider">
 <div class="one-slide" id="about">
          <NavBar @toggleLanguage="toggleLanguage" :links="romanianLinks"></NavBar>
        <div class="first-slide wrapper">
            <div class="first-slide-svg">
              <img src="/src/assets/background.png" alt=""></div>
            <div class="first-slide-words">
              <div class="first-slide-title" v-if="language">Despre TakeIT</div>
              <div class="first-slide-title" v-if="!language">Об <span class="green-title">TakeIT</span></div>
              <div class="first-slide-text" v-if="language">Suntem partenerul dvs. de<span class="green"> încredere</span> în tehnologie, specializat în transformarea viziunilor în soluții practice. Ne angajăm să susținem <span class="green">succesul afacerii dvs</span>. prin inovație, creativitate și expertiză tehnică de vârf.</div>
              <div class="first-slide-text" v-if="!language">Мы являемся вашим <span class="green">надежным</span>  партнером по технологиям, специализирующийся на превращении видений в практические решения.Мы стремимся поддержать <span class="green">успех вашего бизнеса</span> посредством инноваций, творчества и технического опыта TIP.</div>
            </div>
          </div>
  </div>
  <div class="one-slide">
    <div class="about-us-container wrapper">
    <div class="about-us-card">
      <div class="about-us-card-title" v-if="language">Cine suntem noi?</div>
      <div class="about-us-card-title" v-if="!language">Кто мы?</div>
      <div class="about-us-card-text" v-if="language">
        Suntem <span class="green">Take IT</span>, o companie dedicată să aducă afacerile în vârful tehnologiei. Echipa noastră pasionată, creativă și experimentată se angajează să transforme viziunile clienților în realitate în domeniul tehnologiilor. Credem că inovația este <span class="green">cheia succesului</span> într-o lume în continuă schimbare, oferind soluții tehnologice de ultimă generație adaptate la nevoile specifice ale fiecărui client. Indiferent dacă sunteți o afacere în expansiune sau o startup dornică să se facă remarcată, suntem partenerii ideali pentru a vă ghida în călătoria dumneavoastră digitală.
      </div>
      <div class="about-us-card-text" v-if="!language">
        МЫ <span class="green">Take IT</span>, Компания, посвященная тому, чтобы привести бизнес на вершину технологий.Наша страстная, творческая и опытная команда обязуется превратить видения клиентов в реальность в области технологий.Мы считаем, что инновации-это <span class = "green"> ключ к успеху </span> в постоянно меняющемся мире, предлагая современные технологические решения, адаптированные к конкретным потребностям каждого клиента.Независимо от того, являетесь ли вы расширяющимся бизнесом или нетерпеливым стартапом, который будет замечен, мы - идеальные партнеры, которые помогут вам в цифровом путешествии.
      </div>
      <div class="about-us-shape"></div>
    </div>
  </div>
  </div>
  <div class="one-slide" id="result">
    <div class="result-container wrapper">
      <div class="result-title" v-if="language">Lăsăm <span class="green">cifrele</span> să vorbească în locul nostru!</div>
      <div class="result-title" v-if="!language">Мы оставляем <span class = "green"> фигуры </span> говорить у нас на месте!</div>
      <div class="result-numbers">
        <div class="result-numbers-one">
          <div class="result-numbers-title">1000</div>
          <div class="result-numbers-description" v-if="language">Produse</div>
          <div class="result-numbers-description" v-if="!language">Продукты</div>
        </div>
        <div class="result-numbers-one">
          <div class="result-numbers-title" v-if="language">20+ ani</div>
          <div class="result-numbers-title" v-if="!language">20+ лет</div>
          <div class="result-numbers-description" v-if="language">Angajați experimentați</div>
          <div class="result-numbers-description" v-if="!language">Опытные сотрудники</div>
        </div>
        <div class="result-numbers-one">
          <div class="result-numbers-title">500</div>
          <div class="result-numbers-description" v-if="language">Clienți mulțumiți</div>
          <div class="result-numbers-description" v-if="!language">Удовлетворенные клиенты</div>
        </div>
        <div class="result-numbers-one">
          <div class="result-numbers-title">700</div>
          <div class="result-numbers-description" v-if="language">Obiecte deschise</div>
          <div class="result-numbers-description" v-if="!language">Открытые объекты</div>
        </div>
      </div>
    </div>
  </div>
  <div class="one-slide wrapper" id="aim">
    <div class="aims-conatainer">
      <div class="one-aim">
        <div class="one-aim-title" v-if="language">Obiectiv 1</div>
        <div class="one-aim-title" v-if="!language">Цель 1</div>
        <div class="one-aim-subtitle" v-if="language">Optimizarea Proceselor Interne</div>
        <div class="one-aim-subtitle" v-if="!language">Оптимизация внутренних процессов</div>
        <div class="one-aim-text" v-if="language">
          Take IT se dedică oferirii de soluții eficiente pentru optimizarea proceselor interne ale clienților săi. 
          <br>
          <br>
        Prin implementarea unor tehnologii avansate și strategii personalizate, compania contribuie la creșterea eficienței operaționale și la maximizarea performanțelor organizaționale.
        </div>
        <div class="one-aim-text" v-if="!language">
          Take IT Он посвящен предложению эффективных решений для оптимизации внутренних процессов своих клиентов. 
          <br>
          <br>
       Внедряя передовые технологии и персонализированные стратегии, компания способствует повышению операционной эффективности и максимизации организационных выступлений.
        </div>
      </div>
      <div class="one-aim">
        <div class="one-aim-title" v-if="language">Obiectiv 2</div>
        <div class="one-aim-title" v-if="!language">Цель 2</div>
        <div class="one-aim-subtitle" v-if="language">Securitate Completă</div>
        <div class="one-aim-subtitle" v-if="!language">Полная безопасность</div>
        <div class="one-aim-text" v-if="language">
          Compania acordă o atenție deosebită implementării soluțiilor complete în domeniul securității. Take IT se angajează să asigure protecția integrală a datelor și a sistemelor clienților săi. 
          <br>
          <br>
          Prin adoptarea unor măsuri de securitate cibernetică avansate, compania răspunde cerințelor tot mai crescute ale mediului digital, garantând confidențialitatea și integritatea informațiilor.
        </div>
        <div class="one-aim-text" v-if="!language">
          Компания уделяет особое внимание реализации полных решений безопасности.Примите участие в обеспечении полной защиты данных и систем его клиентов.
          <br>
          <br>
          Приняв передовые меры кибербезопасности, компания реагирует на растущую цифровую среду, гарантируя конфиденциальность и целостность информации.
        </div>
      </div>
      <div class="one-aim">
        <div class="one-aim-title" v-if="language">Obiectiv 3</div>
        <div class="one-aim-title" v-if="!language">Цель 3</div>
        <div class="one-aim-subtitle" v-if="language">Asigurarea Loialității Clienților</div>
        <div class="one-aim-subtitle" v-if="!language">Обеспечение лояльности клиентов</div>
        <div class="one-aim-text" v-if="language">
          Take IT adoptă strategii proactive pentru menținerea și consolidarea loialității clienților. Prin implementarea constantă a soluțiilor inovatoare, compania rămâne în pas cu evoluțiile pieței și adaptarea la concurența dinamică. 
          <br>
          <br>
          În același timp, se concentrează asupra identificării și satisfacerii nevoilor clienților, construind relații solide și durabile.
        </div>
        <div class="one-aim-text" v-if="!language">
          Возьмите это принять упреждающие стратегии для поддержания и укрепления лояльности клиентов.Постоянно внедряя инновационные решения, компания остается в шаге с развитием рынка и адаптируясь к динамической конкуренции.
          <br>
          <br>
          В то же время он фокусируется на выявлении и удовлетворении потребностей клиентов, налаживании надежных и устойчивых отношений.
        </div>
      </div>
    </div>
  </div>
  <Contact :language="language"/>
  <div class="banner">
          <div class="products-banner wrapper">
            <div class="banner-title" v-if="language">Descoperiți produsele partenerilor noștri.</div>
            <div class="banner-title" v-if="!language">Откройте для себя продукты наших партнеров.</div>
            <div class="banner-btn">Vizualizați Ofertele</div>
          </div>
  </div>
</div>
  <Footer :language="language"/>
</template>

<style scoped>
.green-title{
  color: #009D06;
}
.green{
  color: #009D06;
}
.about-us-container{
  position: relative;
  width: 100%;
  height: 100%;
}
.about-us-card {
  min-height: 439px;
  padding: 100px 50px;
  width: 100%;
  height: 100%;
  gap: 60px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #0935657e;
}

.about-us-card-title {
  color: #F8F8F8;
  text-align: center;
  font-family: "Montserrat";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.about-us-card-text {
  color: #F8F8F8;
  text-align: center;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.about-us-shape::after {
  content: "";
  position: absolute;
  width: 566px;
  height: 566px;
  flex-shrink: 0;
  border-radius: 566px;
  background: rgba(0, 157, 6, 0.15);
  filter: blur(50px);
  right: -30%;
  top: 50%;
  transform: translateY(-50%);
}
#result{
  background: #001730;
}
.result-container {
  padding: 116px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.result-title {
  color: #F8F8F8;
  font-family: "Montserrat";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.result-numbers {
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 60px;
  column-gap: 72px;
}
.result-numbers-one {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.result-numbers-title {
  color: #006004;
  font-family: "Montserrat";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.result-numbers-description {
  color: #F8F8F8;
  font-family: "Montserrat";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-wrap: no-wrap;
  width: 372px;
}
.aims-conatainer {
  display: flex;
  justify-content: space-between;
  gap: 124px;
  margin-bottom: 45px;
  padding: 0 15px;
}
.one-aim {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.one-aim-title {
  color: #F8F8F8;
font-family: "Montserrat";
font-size: 26px;
font-style: normal;
font-weight: 300;
line-height: normal;
}
.one-aim-subtitle {
  color: #F8F8F8;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.one-aim-text {
  color: rgba(248, 248, 248, 0.90);
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media screen and (max-width: 1380px) {
  .result-container{
    flex-direction: column;
    gap: 53px;
    padding: 78px 15px;
  }
  .result-title,
  .result-numbers-title{
    font-size: 28px;
  }
  .result-numbers-description{
    font-size: 20px;
    width: 231px;
  }
  .aims-conatainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 45px;
  padding: 0 15px;
}
.one-aim {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
  .one-aim:nth-child(2){
    justify-content: end;
    text-align: end;
  }
  .one-aim-title,
  .one-aim-subtitle {
  font-size: 12px;
  width: 100%;
}
.one-aim-text {
  font-size: 10px;
}
}
@media screen and (max-width: 800px) {
  .about-us-card-title{
    font-size: 16px;
  }
  .about-us-card-text{
    font-size: 12px;
  }
  .about-us-shape::after{
    width: 369px;
    height: 369px;
  }
  .result-container{
    flex-direction: column;
    gap: 53px;
    padding: 78px 10px;
  }
  .result-title,
  .result-numbers-title{
    font-size: 20px;
    text-align: center;
  }
  .result-numbers-description{
    font-size: 16px;
    width: 185px;
    text-align: center;
  }
  .result-numbers{
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
  }
}
</style>