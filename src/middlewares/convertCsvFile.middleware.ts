import fs from "fs"
import csv from "csv-parser"


async function convertCsvFile(file:string){
    return new Promise((resolve, reject) => {
        const results:any = [];
    
        fs.createReadStream(file)
          .pipe(csv())
          .on("data", (data: any) => {
            results.push(data);
          })
          .on("end", () => {
            fs.unlink(file, (error) => {
              if (error) {
                reject(error);
              } else {
                resolve(results);
              }
            });
          })
          .on("error", (error: any) => {
            reject(error);
          });
    
        return results;
      });


}

export { convertCsvFile }