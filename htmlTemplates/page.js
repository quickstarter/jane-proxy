module.exports = (body, scripts) =>(

   ` <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
          <link href="https://d3mlfyygrfdi2i.cloudfront.net/favicon.png?v=2" rel="icon" type="image/png">
          <title>NotAirBnB</title>
        </head>
        <body>
        ${body}
        ${scripts}
     </body>
   </html>`
 ) 



// // (body, scripts) => {
//  ` <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
//       <link href="https://d3mlfyygrfdi2i.cloudfront.net/favicon.png?v=2" rel="icon" type="image/png">
//       <title>NotAirBnB</title>
//     </head>
//     <body>

//     ${body}
//     ${scripts}
//     </body>
//   </html>`
// }

