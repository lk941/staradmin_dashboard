import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { TeachAddChildService } from '../child-model/add-child/teach-add-child.service';
import { NavService } from '../nav/nav.service';
import { Child } from '../child-model/child';
import { ExcelService } from '../child-model/excel-service/excel.service';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DialogboxComponent } from '../Dialogbox/dialogbox/dialogbox.component';
import { ChildkeyService } from '../select-child-page/childkey.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-teach-add-child',
  templateUrl: './teach-add-child.component.html',
  styleUrls: ['./teach-add-child.component.scss']
})
export class TeachAddChildComponent implements OnInit {
  newChild: Child; // New MODEL
  dbToBeProcessed: File;
  fullChild: Child[];
  boo: boolean = false;
  displayedColumns = ['Name', 'NRIC', 'Color', 'Fruit', 'Number', 'action'];
  dataSource = new MatTableDataSource<Child>();
  heck: boolean = true; // Validation Check
  userList: any;
  errormessage: String[]= [];

  private sort: MatSort;


  constructor(private kappa: TeachAddChildService, private nav: NavService, private excelService: ExcelService, private dialog: MatDialog, private ckService: ChildkeyService, private router: Router) { }

  ngOnInit() {
    // insert a service here and map to the object
    this.nav.show();
    this.newChild = new Child();
  }

  private paginator: MatPaginator;


  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Component should only be able to submit form.

  Function1() {
    // Send a Child Object to the Database
    this.kappa.insert(this.newChild);
  }

  public changeListener(files: FileList) {
    console.log(files);
    if (files && files.length > 0) {
      let file: File = files.item(0);
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        console.log(csv);
        // Split the string
        this.fullChild = this.excelService.processData(csv);

        if (this.fullChild) {
          this.boo = true;
          this.dataSource.data = this.fullChild;
        }

      }
    }
  }

  openDialog(action, obj) {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '250px',
      data: {obj, action}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      } else if (result.event == 'Cancel') {
        this.heck = false;
      } else if (result.event == 'Confirmation') {
        var seven = [];
        for (var num = 0; num < this.fullChild.length; num++) {
          this.ckService.insert(this.fullChild[num]);
          seven.push(num);
        }

        var jacker = 0;
        for (var heyo = 0; heyo < seven.length; heyo++) {
          this.fullChild.splice(seven[heyo] - jacker, 1);
          jacker++;
        }

        this.router.navigateByUrl("phome");
      }
    });
  }
  
  updateRowData(row_obj) {
    this.fullChild = this.fullChild.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.Name = row_obj.Name;
        value.nric = row_obj.nric;
        value.FavColor = row_obj.FavColor;
        value.FavFruit = row_obj.FavFruit;
        value.FavNumber = row_obj.FavNumber;
      }
      return true;
    });
  }
  deleteRowData(row_obj) {
    this.fullChild = this.fullChild.filter((value, key) => {
      return value.id != row_obj.id;
    });
    console.log(this.fullChild);
  }


  GenerateExcel() {
    var credibility: any = [{
      "S/N": '',
      "Name": '',
      "NRIC": '',  // Most Important one.
      "FavColor": '',
      "FavNum": '',
      "FavFruit": '',
    }];


    this.excelService.exportAsExcelFile(credibility, 'studListTemplate');
  }


  // For ValidateCheck, COMPLETE. 
  ValidateCheck() {
    // Read and check for any duplicates or missing fields.
    // Mark the faulty objects in the array.
    this.heck = true;
    var arrey = Array<Child>();

    for (var i=0; i < this.fullChild.length; i++) {
      

      if (this.fullChild[i].Name == '' || this.fullChild[i].Name == null) {
        //console.log("Name not Found at [" + i + "]. ");
        this.errormessage.push("Name not Found at Entry Number " + (i + 1) + ". <br/>")  ;
        this.heck = false;
      }

      if (this.fullChild[i].nric == '' || this.fullChild[i].nric == null) {
        //console.log("NRIC not Found at [" + i + "]. ");
        this.errormessage.push("NRIC not Found at Entry Number " + (i+1) + ". ");
        this.heck = false;
      }

      if (this.fullChild[i].FavColor == '' || this.fullChild[i].FavColor == null) {
        //console.log("Color not Found at [" + i + "]. ");
        this.errormessage.push("Color not Found at Entry Number " + (i+1) + ". ");
        this.heck = false;
      }

      if (this.fullChild[i].FavNumber == '' || this.fullChild[i].FavNumber == null) {
        //console.log("Number not Found at [" + i + "]. ");
        this.errormessage.push("Number not Found at Entry Number " + (i+1) + ". ");
        this.heck = false;
      }

      if (this.fullChild[i].FavFruit == '' || this.fullChild[i].FavFruit == null) {
        //console.log("Fruit not Found at [" + i + "]. ");
        this.errormessage.push("Fruit not Found at Entry Number " + (i+1) + ". ");
        this.heck = false;
      }

      if (this.heck == false) {
        arrey.push(this.fullChild[i]);
      }

      
    }

    if (arrey.length > 0) {
      // Have Dialog Box pop up "There are missing fields in your file. Please edit them."
      this.errormessage.push(arrey.length + " Students have missing fields.");
    }
    else {
      console.log("Proceeding into duplicate detection phase.");

      for (var i = 0; i < this.fullChild.length; i++) {

        for (var j = 0; j < this.fullChild.length; j++) {

          if (i != j) {
            if (this.fullChild[i].nric == this.fullChild[j].nric) {
              // Do Something here.
              arrey.push(this.fullChild[i]);
              this.heck = false;
            }

          }

        }

      }


      if (this.heck == false) {
        console.log("Something wrong.");
      } else {
        // Call a service here to grab the current User List here.
        console.log("Inside here.");

        this.userList = this.ckService.getStudent();

        console.log(this.userList);

        for (var y = 0; y < this.userList.length; y++) {

          for (var z = 0; z < this.fullChild.length; z++) {
            if (this.userList[y].nric == this.fullChild[z].nric) {
              console.log("DETECTED DUPLICATE.");
              this.heck = false;
            } else {
              console.log("No Dupe.");
            }
          }
        }
        // Insert the Children if nothing is wrong.
        this.openDialog("Confirmation", null);
      }
    }

    



    


  }

 
}
