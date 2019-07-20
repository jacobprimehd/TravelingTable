// "use strict";

// var fs = require("fs");
// var path = require("path");
// var Sequelize = require("sequelize");
// var basename = path.basename(module.filename);
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];
// var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter(function(file) {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(function(file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// // layout: default


// // <section class="center mw7">
// //   <article>
// //     {% for post in site.posts limit: 1 %}
// //        <h1>{{ post.title }}</h1>
// //       {{ post.content }}
// //     {% endfor %}
// //   </article>
// //   <section>
// //     <article>
// //       <ul>
// //         {% for post in paginator.posts %}
// //           <li>
// //             <a href="{{ post.url }}" title="{{post.title}}">
// //               <date datetime="{{post.date}}">
// //                 {{ post.date | date_to_long_string }}
// //               </date>
// //               {{ post.title }}
// //             </a>
// //           </li>
// //         {% endfor %}
// //       </ul>
// //       <p>...</a></p>
// //     </article>
// //   </section>
// // </section>
// // db.sequelize = sequelize;
// // db.Sequelize = Sequelize;

// // module.exports = db;
