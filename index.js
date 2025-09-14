#!/usr/bin/env node

import chalk from "chalk";

console.log(`
${chalk.cyan.bold("====================================")}
   ${chalk.green.bold("Resume")}
${chalk.cyan.bold("====================================")}

${chalk.bold("Name:")} ${chalk.yellow("Yash Mude")}
${chalk.bold("LinkedIn:")} ${chalk.blue("https://www.linkedin.com/in/yash-mude-83b6931a2/")}
${chalk.bold("GitHub:")} ${chalk.magenta("https://github.com/YashM7")}
${chalk.bold("Portfolio:")} ${chalk.cyan("https://yashmude-portfolio.onrender.com")}

${chalk.bold.underline("Education:")}
${chalk.white("B.Sc. Computer Science, University of Illinois Chicago. May 2022")}

${chalk.bold.underline("Skills:")}
${chalk.green("Programming:")} Java, C++, React, HTML, CSS, JavaScript, Node.js
${chalk.green("Technologies:")} MySQL, MongoDB, Agile, JDBC, JUnit, Postman, REST, Git, Express.js
${chalk.green("Framework:")} SpringBoot, Bootstrap, Hibernate

${chalk.bold.underline("Work Experience:")}
${chalk.yellow("Software Engineer, Motorola Mobility, LLC")} ${chalk.gray("Chicago, IL USA")}  
${chalk.gray("July 2022 - May 2023")}
- Worked alongside Dreamscape and Verizon to configure an Edge server, HMD, and 5G neckbands for a 5G VR demo,
  resulting in a transformative impact on commercial VR gaming.
- Delivered a compelling presentation and demo of the technology to top-level executives from partners like
  Meta, Microsoft, Verizon, and Qualcomm.
- Assembled a RAID 10 virtual drive to securely back up the Edge server and loaded 6 VMs on individual GPUs.

${chalk.bold.underline("Projects:")}
${chalk.cyan("Freelancer Expense Tracker, FinSight")} ${chalk.gray("(Java SpringBoot, React+Vite, Google Gemini AI, MySQL)")}
- Built and deployed with JWT-secured APIs for authentication and dynamic charts.
- Integrated an AI assistant to provide personalized financial insights.

${chalk.cyan("Movie Website")} ${chalk.gray("(MERN Stack)")}
- Designed and deployed a movie streaming website inspired by Netflix.
- Frontend: React, CSS | Backend: Node.js

${chalk.cyan("E-Commerce Website")} ${chalk.gray("(Java SpringBoot, MySQL)")}
- Designed microservices architecture with SpringBoot.
- Frontend: HTML, JavaScript, CSS, Bootstrap

${chalk.cyan.bold("====================================")}
`);

