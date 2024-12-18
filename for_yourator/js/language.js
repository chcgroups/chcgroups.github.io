var typed;

const trans = {
  en: {
    // 首頁
    twelcome: "Hello, my name is <span class='name'>Sam Li</span>",
    tsintro:
      "I am a programmer with over one year of internship experience, specializing in front-end and back-end engineering, creating applications using Python, creating visual charts using PowerBI, and more",
    tab_home: "<i class='fa fa-home'></i> Home",
    tab_about: "<i class='fa fa-user'></i> About",
    // tab_services: "<i class='fa fa-list'></i> Services",
    tab_portfolio: "<i class='fa fa-briefcase'></i> Portfolio",
    tab_contact: "<i class='fa fa-comments'></i> Contact",

    // 關於我
    tabout: "About Me",
    tabouttitle: "I'm <span>Sam</span>",
    taboutintro:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque quisquam cupiditate tempora illum corporis, minima fuga eos, temporibus nobis voluptatum. Delectus quos debitis dolorum optio pariatur, consequuntur commodi incidunt.",
    taboutbirth: "Birthday : <span>26 Mar 2002</span>",
    taboutage: "Age : <span>22</span>",
    taboutweb:
      "Website : <span><a href='https://pse.is/6q4b5d' target='_blank'>click here!</a></span>",
    taboutmail: "Email : <span>lic85370@gmail.com</span>",
    taboutdegree: "Degree : <span>SCU CSIM</span>",
    taboutphone: "Phone : <span>(+886) 0987-115-592</span>",
    taboutcity: "City : <span>Taiwan, Taipei</span>",
    tabouthireme: "Hire Me!",
    taboutedu: "Education",
    taboutexp: "Experience",
    tabouttimeline1: "Bachelor of Computer Science Information Management",
    taboutdes1:
      "Participated in multiple workshops, including Android app development, exploration of the Meta metaverse, Python self-learning groups with applications in fake news verification, IoT smart applications with Arduino, SketchUp modeling, and foundational implementation of Kali Linux. Achieved Honorable Mention in the JOY 2023 Sustainable Happiness Creative Competition and participated in the 2022 Fourth Hetai Public Welfare Dreamers Corporate Competition. Developed an AI Presentation Generator as a project, served as a research assistant for the DMOJ Programming Assessment System, and worked as a teaching assistant for the courses Computer Programming and Object-Oriented Programming.",
    tabouttimeline1_1: "AI Presentation Generator",
    taboutdes1_1:
      "Developed a system integrating ChatGPT API to generate AI-driven text and corresponding thematic images, which were seamlessly populated into appropriate PowerPoint templates. The project involved fine-tuning AI-generated content and enabling users to regenerate, add, or modify content through an interactive interface. The final output was a complete PowerPoint file featuring fully designed presentation slides and speaker notes with supplementary scripts.",
    tabouttimeline2: "Research Assistant",
    taboutdes2: "Developed a DMOJ program evaluation system and authored comprehensive installation and user manuals to facilitate seamless handover and ongoing maintenance",
    tabouttimeline2_1: "Visual Analysis Charts",
    taboutdes2_1: "Managed internal self-evaluation and supervisor assessment data by creating visual analysis charts and comprehensive spreadsheets, streamlining data organization and supporting future data-driven decision-making",
    tabouttimeline2_2: "Teaching Assistant",
    taboutdes2_2: "<span>Computer Programming</span><span>Object Oriented Programming</span> <br />Assist professors in setting exam questions, clarify students' doubts, and analyze the distribution of students' grades",
    tabouttimeline2_3: "Intern of Audit",
    taboutdes2_3: "Developed audit utility programs, including verification of company database records against public Ministry of Economic Affairs data, a visual interface for searching NAS documents by keyword or category, templates for subsidiary procurement and sales reports in Power BI, and an integrated audit working paper system",
    tabouttimeline2_4: "Intern of IT",
    taboutdes2_4: "Developed and tested Microsoft PowerApps to digitize legacy paper-based forms, upgraded outdated system frameworks, created web-based mini-games and data collection tools for the Human Resources department, and led back-end development while supporting front-end tasks for the electronic invoice project on a postpartum care center's website",

    // 作品集
    tport: "Portfolio",
    tportintro: "My Last Projects:",
  },
  zh: {
    // 首頁
    twelcome: "你好，我是<span class='name'>李承翰</span>",
    tsintro:
      "我是一名程式設計師，擁有超過一年實習經驗，專注於前端和後端開發，熟悉使用 Python 開發應用程式、使用 PowerBI 創建視覺化圖表等。",
    tab_home: "<i class='fa fa-home'></i> 首頁",
    tab_about: "<i class='fa fa-user'></i> 關於",
    // tab_services: "<i class='fa fa-list'></i> 服務",
    tab_portfolio: "<i class='fa fa-briefcase'></i> 作品集",
    tab_contact: "<i class='fa fa-comments'></i> 聯絡我",

    // 關於我
    tabout: "關於我",
    tabouttitle: "我是<span>李承翰</span>",
    taboutintro: "這裡之後放自介",
    taboutbirth: "生日 : <span>2002年 3月 26日</span>",
    taboutage: "年齡 : <span>22 歲</span>",
    taboutweb:
      "網站 : <span><a href='https://pse.is/6q4b5d' target='_blank'>傳送門!</a></span>",
    taboutmail: "聯絡信箱 : <span>lic85370@gmail.com</span>",
    taboutdegree: "學位: <span>東吳大學資訊管理學系</span>",
    taboutphone: "聯絡電話 : <span>(+886) 0987-115-592</span>",
    taboutcity: "居住城市 : <span>台灣, 台北市</span>",
    tabouthireme: "聯絡我!",
    taboutedu: "學習歷程",
    taboutexp: "工作經驗",
    tabouttimeline1: "資訊管理學系學士",
    taboutdes1:
      "參與多項工作坊，包括 Android 應用程式開發、Meta 元宇宙探索、應用於假新聞驗證的 Python 自學小組、Arduino 物聯網智慧應用、SketchUp 建模，以及 Kali Linux 基礎實作。在 JOY 2023 永續幸福創意競賽中獲得佳作，並參加 2022 第四屆和泰公益圓夢企業競賽。完成 AI 簡報生成器專案，擔任 DMOJ 程式評測系統的研究助理，並擔任「計算機程式設計」及「物件導向程式設計」課程的教學助理",
    tabouttimeline1_1: "AI 簡報生成",
    taboutdes1_1:
      "開發了一套系統，整合 ChatGPT API 以生成 AI 驅動的文本及相應主題圖片，並將其填入適合的 PowerPoint 範本中。專案包括對 AI 生成內容的微調，讓使用者能透過互動介面重新生成、添加或修改內容。最終輸出為一個完整的 PowerPoint 文件，其中包含完善的簡報頁面以及附有補充腳本的演講者備註",
    tabouttimeline2: "研究助理",
    taboutdes2: "開發了 DMOJ 程式評測系統，並撰寫完整的安裝與使用手冊，以確保系統交接順利並支持後續的維護工作",
    tabouttimeline2_1: "視覺化分析圖表",
    taboutdes2_1: "管理內部自我評估與主管評核數據，透過製作視覺化分析圖表及完整的電子表格，優化數據整理流程，並支持未來以數據為導向的決策制定。",
    tabouttimeline2_2: "教學助理",
    taboutdes2_2: "<span>計算機程式設計</span><span>物件導向程式設計</span> <br />協助教授設計考題，解答學生疑問，並分析學生成績分佈。",
    tabouttimeline2_3: "稽核室實習生",
    taboutdes2_3: "開發多項稽核工具程式，包括比對公司資料庫記錄與經濟部公開數據的驗證功能、關鍵字或分類搜尋 NAS 文件的視覺化介面、Power BI 子公司採購與銷售報表模板，以及整合的審計工作底稿系統。",
    tabouttimeline2_4: "資訊處實習生",
    taboutdes2_4: "開發並測試 Microsoft PowerApps以數位化傳統紙本表單，升級過時系統框架，為人力資源部門製作基於網頁的迷你遊戲及數據收集工具，並主導月子中心系統電子發票專案的後端開發，同時支援前端相關工作。",
    
    // 作品集
    tport: "作品集",
    tportintro: "最近專案:",
  }
};

let currentLanguage = "en";

typed = new Typed(".typing", {
  strings: [
    currentLanguage === "zh" ? "全端工程師" : "Full-Stack Engineer",
    currentLanguage === "zh" ? "後端工程師" : "Back-End Engineer",
    currentLanguage === "zh" ? "前端工程師" : "Front-End Engineer",
    currentLanguage === "zh" ? "應用程式開發師" : "Application Developer",
  ],
  typeSpeed: 20,
  backSpeed: 10,
  backDelay: 1000,
  startDelay: 0,
  fadeOut: false,
  cursorChar: "🔥",
  loop: true,
});

const languageSwitcherToggle = document.querySelector(
  ".language-switcher-toggler"
);
languageSwitcherToggle.addEventListener("click", () => {
  typed.destroy();
  languageSwitcherToggle.querySelector("i").classList.toggle("fa-c");
  languageSwitcherToggle.querySelector("i").classList.toggle("fa-e");

  currentLanguage = currentLanguage === "zh" ? "en" : "zh";

  typed = new Typed(".typing", {
    strings: [
      currentLanguage === "zh" ? "全端工程師" : "Full-Stack Engineer",
      currentLanguage === "zh" ? "後端工程師" : "Back-End Engineer",
      currentLanguage === "zh" ? "前端工程師" : "Front-End Engineer",
      currentLanguage === "zh" ? "應用程式開發師" : "Application Developer",
    ],
    typeSpeed: 30,
    backSpeed: 10,
    backDelay: 500,
    startDelay: 0,
    cursorChar: "🔥",
    loop: true,
    loopCount: Infinity,
  });

  // loop
  Object.keys(trans[currentLanguage]).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      element.innerHTML = trans[currentLanguage][key];
    }
  });
});

window.addEventListener("load", () => {
  if (currentLanguage === "zh") {
    languageSwitcherToggle.querySelector("i").classList.add("fa-e");
  } else {
    languageSwitcherToggle.querySelector("i").classList.add("fa-c");
  }
});