import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Child } from '../child';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {
  constructor() { }
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public processData(allText: string) {
  var record_num = 6;  
  var allTextLines = allText.split(/\r\n|\n/);

  // First, grab HEADERS
  var entries = allTextLines[0].split(',');
  var lines = [];

  var headings = entries.splice(0, record_num);
  while (entries.length > 0) {
    var tarr = [];
    for (var j = 0; j < record_num; j++) {
      tarr.push(headings[j] + ":" + entries.shift());
    }
    lines.push(tarr);
  }
    
    var maindatapushy = []; // Main Array with headers.

    for (var i = 1; i < allTextLines.length; i++) {
      var childdata = allTextLines[i].split(',');
      console.log(childdata);

      maindatapushy.push(childdata);
    }

    console.log(maindatapushy);
  // alert(lines);

    // Student Comparing :D
    var finaldata = [];


    for (var j = 0; j < maindatapushy.length; j++) {

      var studObj = new Child();
      for (var i = 0; i < headings.length; i++) {

        if (headings[i] == "S/N" || headings[i] == "id") {
          studObj.id = maindatapushy[j][i];
        }
        else if (headings[i] == "Name" || headings[i] == "name") {
          studObj.Name = maindatapushy[j][i];
        }
        else if (headings[i] == "NRIC" || headings[i] == "nric") {
          studObj.nric = maindatapushy[j][i];
        }
        else if (headings[i] == "FavFruit" || headings[i] == "fruit") {
          studObj.FavFruit = maindatapushy[j][i];
        }
        else if (headings[i] == "FavNumber" || headings[i] == "number") {
          studObj.FavNumber = maindatapushy[j][i];
        }
        else if (headings[i] == "FavColor" || headings[i] == "color") {
          studObj.FavColor = maindatapushy[j][i];
        }
      }

      if (studObj.nric != null) {
        finaldata.push(studObj);
      }
    }
    
    return finaldata;


}
}
