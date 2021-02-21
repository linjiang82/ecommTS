export default ({ markup, css }: { markup: string; css: string }): string => {
  return `<!doctype html>
   <html lang="en">
    <head>
     <meta charset="utf-8">
     <title>MERN Kickstart</title>
    </head>
    <body>
     <div id="root">${markup}</div>
     <style id='jss-server-side'>${css}</style>
     <script type="text/javascript" src="/dist/bundle.js"> 
    </script>
    </body>
   </html>`;
};
